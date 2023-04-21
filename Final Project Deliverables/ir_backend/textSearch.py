from flask import Blueprint, request as req, jsonify
import os
import random
from CLIP import *
import base64

app3=Blueprint('textSearch',__name__)
@app3.route('/textSearch')
def get():
    phrase=req.args.get('phrase')
    images=find_matches_(model, 
            image_embeddings,
            query=phrase,
            image_filenames=valid_df['image'].values,
            n=104)
    
    image_blobs=[]
    for image in images:
        # Read the image file as bytes
        with open("..\\Flicker_dataset\\flickr30k_images\\"+image, 'rb') as f:
            image_bytes = f.read()
        
        # Convert the image bytes to a base64-encoded string
        image_base64 = base64.b64encode(image_bytes).decode('utf-8')
        
        # Convert the base64-encoded string to a blob
        # image_blob = io.StringIO(image_base64)
        # print(image_blob)
        
        # Add the blob to the list
        image_blobs.append(str(image_base64))

    response=jsonify({'images': image_blobs})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
