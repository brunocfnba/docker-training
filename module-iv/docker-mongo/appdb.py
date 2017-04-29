import os
from flask import Flask, jsonify, request, json, render_template, send_from_directory
from flask_cors import CORS, cross_origin
from flask_api import status
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb', 27017)
db = client.testdb
collection = db.products

@app.route('/myservice/list', methods=['GET'])
def list_products():
    CORS(app)

    products = []

    for product in collection.find():
        print product
        products.append(product["product"])    

    return json.dumps(products), status.HTTP_200_OK


@app.route('/myservice/add/<product_name>', methods=['GET'])
def add_products(product_name):
    CORS(app)

    product = {"product": product_name}

    new_prod_id = collection.insert_one(product).inserted_id

    if new_prod_id:
        return jsonify(product_id =str(new_prod_id)), status.HTTP_200_OK
    else:
        return jsonify(status='error'), status.HTTP_400_BAD_REQUEST



port = 8080

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
