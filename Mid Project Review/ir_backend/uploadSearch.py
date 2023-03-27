from flask import Blueprint, request as req, jsonify
import os
from featureExtraction import *

app2=Blueprint('uploadSearch',__name__)
@app2.route('/uploadSearch')
def get():
    path=req.args.get('path')
    images=combined_similarity("../GPR_dataset/"+path, tag, lbp, shape, hog, resnet, model, [0.2455, 0.1418, 0.1129, 0.1547, 0.1984])
    response=jsonify({'images': images[1:]})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
