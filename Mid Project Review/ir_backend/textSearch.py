from flask import Blueprint, request as req
import os
import random
# from CLIP import *

app3=Blueprint('textSearch',__name__)
@app3.route('/textSearch')
def get():
    phrase=req.args.get('phrase')
    # find_matches_()
    return {'phrase': phrase}, 200
