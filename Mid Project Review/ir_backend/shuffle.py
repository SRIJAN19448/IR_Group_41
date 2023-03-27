from flask import Blueprint, jsonify
import os
import random

app1=Blueprint('shuffle',__name__)
@app1.route('/shuffle')
def get():
    print("hello")
    images=os.listdir("../GPR_dataset")
    images.sort(key=lambda x:int(x.split('_')[0]))
    images=images[:1000]
    random.shuffle(images)
    response=jsonify({'images': images})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
