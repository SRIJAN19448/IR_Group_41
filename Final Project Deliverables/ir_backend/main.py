from flask import Flask
# from flask_restful import Resource, Api, reqparse
import pandas as pd
import ast
from shuffle import app1
from uploadSearch import app2
from textSearch import app3
from upload import app4
app = Flask(__name__)

app.register_blueprint(app1)
app.register_blueprint(app2)
app.register_blueprint(app3)
app.register_blueprint(app4)

# if __name__ == '__main__':
app.run(debug=True)  # run our Flask app