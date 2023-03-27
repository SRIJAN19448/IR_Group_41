from tensorflow.keras.utils import load_img
from tensorflow.keras.utils import img_to_array
from tensorflow.keras.applications.resnet50 import preprocess_input
from tensorflow.keras.applications.resnet50 import decode_predictions
from tensorflow.keras.applications.resnet50 import ResNet50
import pandas as pd
import os
from tqdm.notebook import tqdm
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import pickle
import cv2
import numpy as np
from skimage.feature import local_binary_pattern, hog as hg
from math import copysign, log10

base='../GPR_Dataset'
images=os.listdir(base)
images.sort(key=lambda a: int(a.split("_")[0]))
"""# Loading Features From Database"""

lbp=pickle.load(open('features/Lbp.pkl',"rb"))
shape=pickle.load(open('features/Shape.pkl', "rb"))
hog=pickle.load(open('features/Hog.pkl', "rb"))
resnet=pickle.load(open('features/Resnet.pkl', "rb"))
tag=pickle.load(open('features/Tag.pkl', "rb"))

# load the model
model = ResNet50()

def show(images):
  for image in images:
    img = mpimg.imread(base+image)
    imgplot = plt.imshow(img)
    plt.show()

"""# Tag Features"""

def helper(lst):
  return list(map(helper2,lst))

def helper2(tuple):
  return tuple[1].replace("_", " ")

def tagging(image, model):
  # load an image from file
  # print(image)
  image = load_img(image, target_size=(224, 224))
  # convert the image pixels to a numpy array
  image = img_to_array(image)
  # reshape data for the model
  image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
  # prepare the image for the VGG model
  image = preprocess_input(image)
  # predict the probability across all output classes
  yhat = model.predict(image, verbose=False)
  # convert the probabilities to class labels
  label = decode_predictions(yhat, top=10)[0]
  label=list(map(helper2,label))
  return label

def tag_similarity(image, data, model):
  x=tagging(image, model)
  temp=[]
  for i in range(data.shape[0]):
    setx=set(x)
    sety=set(data['features'][i])
    num=setx.intersection(sety)
    sim=len(num)/10
    temp.append((data['image'][i],sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp[:10]

"""# LBP Features"""

# Load the 3D image as a numpy array
def LBP(image):
    image=cv2.imread(image, 0)
    # Set LBP parameters
    radius = 1
    n_points = 8 * radius
    # Calculate LBP code for the entire 3D image
    lbp_image = local_binary_pattern(image, n_points, radius)
    # Flatten the 3D LBP image into a 1D array
    lbp_array = lbp_image.ravel()
    # Divide the binary array into 128 equal-sized bins to form the 128-bit LBP histogram
    bin_size = int(len(lbp_array) / 128)
    lbp_histogram = np.zeros((128,))
    for i in range(128):
        start = i * bin_size
        end = (i+1) * bin_size
        lbp_histogram[i] = np.sum(lbp_array[start:end] == 1)
    # Normalize the histogram to unit length
    lbp_histogram = lbp_histogram / np.linalg.norm(lbp_histogram)
    return lbp_histogram

def lbp_similarity(image, data):
  x=LBP(image)
  temp=[]
  for i in range(data.shape[0]):
    sim=1/(1+np.linalg.norm(x-data['features'][i]))
    temp.append((data['image'][i],sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp[:10]

"""# Shape features"""

def hu_moments(image):
    image=cv2.imread(image, 0)
    feature = cv2.HuMoments(cv2.moments(image)).flatten()
    for i in range(0,7):
      feature[i] = -1* copysign(1.0, feature[i]) * log10(abs(feature[i]))
    return feature

def shape_similarity(image, data):
  x=hu_moments(image)
  temp=[]
  for i in range(data.shape[0]):
    sim=1/(1+np.linalg.norm(x-np.array(data['features'][i])))
    temp.append((data['image'][i],sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp[:10]

"""# Hog Features"""

def HOG(path):
  img = cv2.imread(path)
  #resizing the input image
  img = cv2.resize(img, (128,128))
  img=cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
  fd, hog_image = hg(img, orientations=9, pixels_per_cell=(8, 8), cells_per_block=(2, 2), channel_axis=-1, visualize = True)
  return fd

def hog_similarity(image, data):
  x=HOG(image)
  temp=[]
  for i in range(data.shape[0]):
    sim=1/(1+np.linalg.norm(x-np.array(data['features'][i])))
    temp.append((data['image'][i],sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp[:10]

"""# ML Features"""

def ml_features(image, model):
  # load an image from file
  # print(image)
  image = load_img(image, target_size=(224, 224))
  # convert the image pixels to a numpy array
  image = img_to_array(image)
  # reshape data for the model
  image = image.reshape((1, image.shape[0], image.shape[1], image.shape[2]))
  # prepare the image for the VGG model
  image = preprocess_input(image)
  # predict the probability across all output classes
  yhat = model.predict(image, verbose=False)
  return yhat.reshape(-1)

def ml_similarity(image, data, model):
  x=ml_features(image, model)
  temp=[]
  for i in range(data.shape[0]):
    sim=1/(1+np.linalg.norm(x-data['features'][i]))
    temp.append((data['image'][i],sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp[:10]

"""# Combined Similarity"""

def combined_similarity(image, tag_data, lbp_data, shape_data, hog_data, resnet_data, model, wt):
  tag = tagging(image, model)
  lbp = LBP(image)
  shape = hu_moments(image)
  hog = HOG(image)
  resnet = ml_features(image, model)
  temp=[]
  for i in range(tag_data.shape[0]):
    setx=set(tag)
    sety=set(tag_data['features'][i])
    num=setx.intersection(sety)
    tag_sim=len(num)/10
    lbp_sim=1/(1+np.linalg.norm(lbp-lbp_data['features'][i]))
    shape_sim=1/(1+np.linalg.norm(shape-np.array(shape_data['features'][i])))
    hog_sim=1/(1+np.linalg.norm(hog-np.array(hog_data['features'][i])))
    resnet_sim=1/(1+np.linalg.norm(resnet-np.array(resnet_data['features'][i])))
    final_sim=(wt[0]*tag_sim + wt[1]*lbp_sim + wt[2]*shape_sim + wt[3]*hog_sim + wt[4]*resnet_sim)/(wt[0] + wt[1] + wt[2] + wt[3] + wt[4])
    temp.append((lbp_data['image'][i],final_sim))
  temp.sort(key = lambda a: a[1])
  temp=temp[::-1]
  temp=list(map(lambda x: x[0], temp))
  return temp




