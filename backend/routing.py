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
