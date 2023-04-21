from flask import Blueprint, request as req, jsonify
from featureExtraction import *
from PIL import Image
from matplotlib import pyplot as plt

app4=Blueprint('upload',__name__)
@app4.route('/upload', methods=['POST'])
def process_image():
    file = req.files['image']
    name = req.form['image_name']
    image = Image.open(file.stream)
    
    # # process the image data here
    image_array = np.array(image)
    plt.imsave('uploaded_images/'+name, image_array)

    response_data = jsonify({'success': True})
    response_data.headers.add("Access-Control-Allow-Origin", "*")
    return response_data