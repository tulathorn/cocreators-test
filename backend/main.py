from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def welcome():
    return "Hello world"


@app.route("/<string:name>/")
def hello(name):
    return "Hello " + name


@app.route("/person/")
def json():
    return jsonify({"name": "Jimit", "address": "India"})


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4400, debug=True)
