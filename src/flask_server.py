from flask import Flask, request
from flask_cors import CORS, cross_origin
from review_analysis import getData

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@cross_origin()

@app.route('/', methods=["GET", "POST"])
def index():
    # if request.method == 'POST':
    #     # Fetch Form data
    #     json_data = request.json
    #     # print(json_data)
    #     img_data = json_data['image']
    # what device in the form
    # positive neg nutrual
    # sentiment = 0
    keyword="iphone12"
    # links = get_video_links(keyword)
    data = getData(keyword)
        # data = {"sentiment": 2, "headlines": ['text', 'text']}


        
    if request.method == 'GET':
        return {"data": "aahiiii"}
if __name__ == '__main__':
    app.run(debug=True)