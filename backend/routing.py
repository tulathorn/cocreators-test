from flask import Blueprint
from flask import jsonify
from flask import request
from flask.wrappers import Response

from controller.monitor import Monitor

route_bp = Blueprint("/", __name__)

monitor_controller = Monitor()


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
        response = monitor_controller.get_lists()
        return response
    elif request.method == "POST":
        return "POST"
    elif request.method == "PUT":
        return "PUT"
    elif request.method == "DELETE":
        return "DELETE"
    else:
        return "ERROR"
