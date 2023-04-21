from flask import Blueprint, jsonify
import os
import random
import base64
import io

app1=Blueprint('shuffle',__name__)
@app1.route('/shuffle')
def get():
    print("hello")
    images=random.sample(os.listdir("../GPR_dataset"), 73) + random.sample(os.listdir("../Flicker_dataset/flickr30k_images"), 183)
    # images.sort(key=lambda x:int(x.split('_')[0]))
    # images=images[:1000]
    random.shuffle(images)
    image_blobs=[]
    for image in images:
        # Read the image file as bytes
        try:
            with open("../GPR_dataset/"+image, 'rb') as f:
                image_bytes = f.read()
        except:
            with open("../Flicker_dataset/flickr30k_images/"+image, 'rb') as f:
                image_bytes = f.read()
        
        # Convert the image bytes to a base64-encoded string
        image_base64 = base64.b64encode(image_bytes).decode('utf-8')
        
        # Convert the base64-encoded string to a blob
        # image_blob = io.StringIO(image_base64)
        # print(image_blob)
        
        # Add the blob to the list
        image_blobs.append(str(image_base64))
    # print(image_blobs)

    # response=jsonify({'images': images[:104]})
    response=jsonify({"images":image_blobs})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
