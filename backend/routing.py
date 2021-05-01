from types import resolve_bases
from flask import Blueprint
from flask import jsonify
from flask import request
from flask.wrappers import Response
from flask_cors import CORS, cross_origin

from controller.monitor import Monitor

route_bp = Blueprint("blueprint", __name__)
CORS(route_bp, support_credentials=True)

monitor_controller = Monitor()

err_tmp = {"error": "Some field missing"}


@cross_origin()
@route_bp.route("/", methods=["GET", "POST"])
def welcome():
    return "Hello world"


@cross_origin()
@route_bp.route("/<string:name>/")
def hello(name):
    return "Hello " + name


@cross_origin()
@route_bp.route("/person/")
def json():
    return jsonify({"name": "Jimit", "address": "India"})


@cross_origin(origin='*')
@route_bp.route("/status", methods=["GET", "POST", "PUT", "DELETE"])
def website_status():
    if request.method == "GET":
        response = monitor_controller.get_lists()
        return response
    elif request.method == "POST":
        if request.json["website_name"] == "" or request.json["website_url"] == "":
            return jsonify(err_tmp), 400
        response = monitor_controller.add_website(request.json)
        return response
    elif request.method == "PUT":
        if request.json["id"] == "" or request.json["website_name"] == "" or request.json["website_url"] == "":
            return jsonify(err_tmp), 400
        id = request.json["id"]
        response = monitor_controller.update_website(id, request.json)
        return response
    elif request.method == "DELETE":
        if request.json["id"] == "":
            return jsonify(err_tmp), 400
        id = request.json["id"]
        response = monitor_controller.remove_websit(id)
        return response
    else:
        return "ERROR"
