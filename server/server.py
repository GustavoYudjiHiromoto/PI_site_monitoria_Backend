from flask import Flask, jsonify, redirect, render_template, request, url_for
from flask_cors import CORS
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from pymongo import DESCENDING 

#app instance
app = Flask(__name__)
app.config["SECRET KEY"]= "teste"
app.config["MONGO_URI"] = "mongodb+srv://natsugustavo:3hHsJjMbTLfsO7XI@cluster0.qt1hqto.mongodb.net/teste"
CORS(app)

def to_json(obj):
    if isinstance(obj, ObjectId):
        return str(obj)  # Convert ObjectId to string
    raise TypeError(repr(obj) + " is not JSON serializable")

#api/home
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello World!",
        'people': ['eu','vc','zubumafu']
    })

@app.route("/")
def home():
    return jsonify({
        'message': "foi teoricamente",
    })

@app.route("/admin")
def admin():
    return redirect("http://localhost:3000/admin")

#setup mongodb
mongondb_client = PyMongo(app)
db = mongondb_client.db

@app.route("/cadastro_aluno/<nome>/<email>/<pontuacao>")
def cadastro_aluno(nome,email,pontuacao):
    db.teste.insert_one({
        "nome":nome,
        "email":email,
        "pontuacao":9
    })
    return redirect(url_for("admin"))

@app.route("/cadastro_professor/<nome>/<email>")
def cadastro_professor(nome,email):
    db.teste.insert_one({
        "nome":nome,
        "email":email
    })
    return redirect(url_for("admin"))

@app.route("/cadastro_monitor/<nome>/<email>/<horaIniSegPresencial>/<horaFimSegPresencial>/<horaIniSegOnline>/<horaFimSegOnline>/<horaIniTerPresencial>/<horaFimTerPresencial>/<horaIniTerOnline>/<horaFimTerOnline>/<horaIniQuaPresencial>/<horaFimQuaPresencial>/<horaIniQuaOnline>/<horaFimQuaOnline>/<horaIniQuiPresencial>/<horaFimQuiPresencial>/<horaIniQuiOnline>/<horaFimQuiOnline>/<horaIniSexPresencial>/<horaFimSexPresencial>/<horaIniSexOnline>/<horaFimSexOnline>")
def cadastro_monitor(nome,email,horaIniSegPresencial,horaFimSegPresencial,horaIniSegOnline,horaFimSegOnline,horaIniTerPresencial,horaFimTerPresencial,horaIniTerOnline,horaFimTerOnline,horaIniQuaPresencial,horaFimQuaPresencial,horaIniQuaOnline,horaFimQuaOnline,horaIniQuiPresencial,horaFimQuiPresencial,horaIniQuiOnline,horaFimQuiOnline,horaIniSexPresencial,horaFimSexPresencial,horaIniSexOnline,horaFimSexOnline):
    db.teste.insert_one({
        "nome":nome,
        "email":email,
        "horaIniSegPresencial":horaIniSegPresencial, 
        "horaFimSegPresencial":horaFimSegPresencial,
        "horaIniSegOnline":horaIniSegOnline,
        "horaFimSegOnline":horaFimSegOnline,
        "horaIniTerPresencial":horaIniTerPresencial,
        "horaFimTerPresencial":horaFimTerPresencial,
        "horaIniTerOnline":horaIniTerOnline,
        "horaFimTerOnline":horaFimTerOnline,
        "horaIniQuaPresencial":horaIniQuaPresencial,
        "horaFimQuaPresencial":horaFimQuaPresencial,
        "horaIniQuaOnline":horaIniQuaOnline,
        "horaFimQuaOnline":horaFimQuaOnline,
        "horaIniQuiPresencial":horaIniQuiPresencial,
        "horaFimQuiPresencial":horaFimQuiPresencial,
        "horaIniQuiOnline":horaIniQuiOnline,
        "horaFimQuiOnline":horaFimQuiOnline,
        "horaIniSexPresencial":horaIniSexPresencial,
        "horaFimSexPresencial":horaFimSexPresencial,
        "horaIniSexOnline":horaIniSexOnline,
        "horaFimSexOnline":horaFimSexOnline,
    })
    return redirect("/")

@app.route("/cadastro_disciplinas/<codDisciplina>/<nomeDisciplina>")
def cadastro_disciplinas(codDisciplina,nomeDisciplina):
    db.teste.insert_one({
        "codDisciplina":codDisciplina,
        "nomeDisciplina":nomeDisciplina
    })
    return redirect(url_for("admin"))

@app.route("/cadastro_exercicio/<disciplina>/<tituloExercicio>/<descricaoExercicio>")
def cadastro_exercicio(disciplina,tituloExercicio,descricaoExercicio):
    db.teste.insert_one({
        "disciplina":disciplina,
        "tituloExercicio":tituloExercicio,
        "descricaoExercicio":descricaoExercicio
    })
    return redirect(url_for("admin"))

@app.route("/add_algos")
def add_algos():
    data_to_insert = [
        {"name": "doc1"},
        {"name": "doc2"},
        {"name": "doc3"}
        # Adicione mais documentos conforme necessário
    ]
    db.teste.insert_many(data_to_insert)
    return redirect("/")

@app.route("/consultar_rank")
def consultar_rank():
     # Consulta todos os documentos na coleção "teste"
    results = list(db.teste.find().sort("pontuacao", DESCENDING).limit(10))  # Convert the Cursor object to a list
    json_string = json.dumps(results, default=str)  # Serialize the list to JSON
    # Converte os resultados para uma lista e os retorna como um array
    return (json_string)

@app.route("/consultar_horario")
def consultar_horario():
     # Consulta todos os documentos na coleção "teste"
    results = list(db.teste.find())  # Convert the Cursor object to a list
    json_string = json.dumps(results, default=str)  # Serialize the list to JSON
    # Converte os resultados para uma lista e os retorna como um array
    return (json_string)

@app.route("/delete_algo/<name>")
def delete_algo(name):
    # Converte o id para ObjectId se necessário
    # Se estiver usando Flask-PyMongo, a conversão pode não ser necessária
    # Consulte a documentação Flask-PyMongo para mais detalhes
    # https://flask-pymongo.readthedocs.io/en/latest/
    db.teste.delete_one({"name": name})
    print("foi")
    return redirect("/")

@app.route("/update_algo/<name>", methods=['POST'])
def update_algo(name):
    # Converte o id para ObjectId se necessário
    # Se estiver usando Flask-PyMongo, a conversão pode não ser necessária
    # Consulte a documentação Flask-PyMongo para mais detalhes
    # https://flask-pymongo.readthedocs.io/en/latest/

    # Obtém os dados atualizados do corpo da solicitação
    updated_data = request.get_json()

    # Atualiza o documento com o id fornecido
    db.teste.update_one({"name": name}, {"$set": updated_data})
    print("foi")
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True, port=8080) 