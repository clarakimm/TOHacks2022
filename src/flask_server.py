from flask import Flask
app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index():
    return "hi"
    if request.method == 'POST':
        # Fetch Form data
        json_data = request.json
        # print(json_data)
        img_data = json_data['image']
        
    if request.method == 'GET':
        return mood_json

if __name__ == '__main__':
    app.run(debug=True)