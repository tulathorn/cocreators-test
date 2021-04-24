from flask import Blueprint
from flask import jsonify
from flask import request

route_bp = Blueprint("/", __name__)


@route_bp.route("/", methods=["GET", "POST"])
def welcome():
    return "Hello world"


@route_bp.route("/<string:name>/")
def hello(name):
    return "Hello " + name


@route_bp.route("/person/")
def json():
    return jsonify({"name": "Jimit", "address": "India"})


@route_bp.route("/status", methods=["GET", "POST", "PUT", "DELETE"])
def website_status():
    if request.method == "GET":
        return "GET Web status"
    elif request.method == "POST":
        return "POST"
    elif request.method == "PUT":
        return "PUT"
    elif request.method == "DELETE":
        return "DELETE"
    else:
        return "ERROR"
