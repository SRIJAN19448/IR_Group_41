from flask import Blueprint, request as req, jsonify, send_file
from featureExtraction import *
from matplotlib import pyplot as plt
import base64

app2=Blueprint('uploadSearch',__name__)
@app2.route('/uploadSearch')
def get():
    path=req.args.get('path')
    images=combined_similarity("uploaded_images/"+path, tag, lbp, shape, hog, resnet, model, [0.2455, 0.1418, 0.1129, 0.1547, 0.1984])
    images=images[1:105]

    image_blobs=[]
    for image in images:
        # Read the image file as bytes
        with open("../GPR_dataset/"+image, 'rb') as f:
            image_bytes = f.read()
        
        # Convert the image bytes to a base64-encoded string
        image_base64 = base64.b64encode(image_bytes).decode('utf-8')
        
        # Convert the base64-encoded string to a blob
        # image_blob = io.StringIO(image_base64)
        # print(image_blob)
        
        # Add the blob to the list
        image_blobs.append(str(image_base64))

    # response=jsonify({'images': images[1:105]})
    response=jsonify({'images': image_blobs})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response