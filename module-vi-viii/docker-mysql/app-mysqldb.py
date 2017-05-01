import os
from flask import Flask, jsonify, request, json, render_template, send_from_directory
from flask_cors import CORS, cross_origin
from flask_api import status
import MySQLdb

app = Flask(__name__)
db = MySQLdb.connect("mysql","root","password","testdb" )
cursor = db.cursor()

@app.route('/myservice/list', methods=['GET'])
def list_products():
    CORS(app)

    products = []
    
    cursor.execute("select name from products")
    
    results = cursor.fetchall()
    for row in results:
        product = row[0]
        products.append(product)

    return json.dumps(products), status.HTTP_200_OK


@app.route('/myservice/add/<product_name>', methods=['GET'])
def add_products(product_name):
    CORS(app)

    product = product_name

    try:
        
        cursor.execute("insert into products values ('" + product + "')")
        db.commit()
        return jsonify(status='success'), status.HTTP_200_OK
    
    except:
        db.rollback()
        return jsonify(status='error'), status.HTTP_400_BAD_REQUEST



port = 8082

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
