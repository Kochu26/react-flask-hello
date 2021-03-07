"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/inicio', methods=['POST', 'GET'])
def inicio():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200

@api.route('/registrarse', methods=['POST', 'GET'])
def registrarse():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200

@api.route('/iniciar_sesion', methods=['POST', 'GET'])
def iniciar_sesion():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200

@api.route('/mi_cuenta', methods=['POST', 'GET'])
def mi_cuenta():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200

@api.route('/contactos', methods=['POST', 'GET'])
def contactos():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200

@api.route('/nosotros', methods=['POST', 'GET'])
def nosotros():

    response_body = {
        "message": "hola",
        "name": "alguien"
    }

    return jsonify(response_body), 200