from flask import Flask, request, redirect
from flask_cors import CORS, cross_origin
from review_analysis import getData
from pymongo import MongoClient

app = Flask(__name__)

connection_stirng = "mongodb://localhost:27017"
client = MongoClient(connection_stirng)
db = client.get_database("tohacks")

collection = db.get_collection("tohacks")

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@cross_origin()

@app.route('/', methods=["GET", "POST"])
def index():
    if request.method == 'POST':
        keyword = request.form["search"]
        print(keyword)
        data = getData(keyword)
        collection.update_one({},{"$set":{'search': keyword, "sentiment": data['sentiment'], 'headlines': data['headlines']}})
        # collection.update_one({},{"$set": {}})
        return redirect('http://localhost:3000/result')

    # keyword="iphone12"
    # links = get_video_links(keyword)
    # data = getData(keyword)
        # data = {"sentiment": 2, "headlines": ['text', 'text']}
   
    if request.method == 'GET':
        return {"data": "aahiiii"}

@app.route('/search')
def search():
    data = collection.find_one()
    search = data['search']
    sentiment = data['sentiment']
    headlines = data['headlines']
    return {"search": search, "sentiment": sentiment, "headlines": headlines}


if __name__ == '__main__':
    app.run(debug=True)