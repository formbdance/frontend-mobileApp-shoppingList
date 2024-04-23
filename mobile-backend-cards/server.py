from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS, cross_origin
import json
from bson import json_util
from bson.objectid import ObjectId
from pymongo import MongoClient
from werkzeug.utils import secure_filename
import os

UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
# Инициализация приложения
app = Flask(__name__)
cors = CORS(app)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# Подключение базы данных
client = MongoClient('mongodb://localhost:27017/')  # Адрес БД
db = client['cardbar']  # название БД
ordersdb = db['cards']  # название коллекции БД


@app.route('/')
def index() -> str:
    return "good connection!"

# получение и сохранение данных продукта в БД
@app.route('/cards', methods=['POST']) 
def add_card(): 
    try:
        # получение данных с запроса
        data = request
        # сохраняем в монго
        ordersdb.insert_one(data.form.to_dict()) 
        return 'Карта добавлена', 201
    except Exception as e:
        print(e)
        return jsonify({'error': 'Произошла ошибка'}, 500)
    

# получение данных из БД
@app.route('/cards', methods=['GET'])
def get_cards():
    try:
        products = ordersdb.find({})
        print('done')
        return json.loads(json_util.dumps(products)), 200  # преобразование mongo bson в json
    except Exception as e:
        print(e)
        return 'Ошибка получения каарты', 500
    
# удаление карты <id>
@app.route('/cards/<id>', methods=['DELETE'])
def delete_card(id):
    try:
        filter = {'_id': ObjectId(id)}
        folder = 'static/images'
        ordersdb.delete_one(filter)
        return 'Карта удалена', 204
    except:
        return 'Ошибка удаления карты', 500
    
if __name__ == '__main__':
    app.run(host="192.168.0.2", port=5000, debug=True)