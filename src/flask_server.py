from flask import Flask, request
app = Flask(__name__)

@app.route('/', methods=["GET", "POST"])
def index():
    # if request.method == 'POST':
    #     # Fetch Form data
    #     json_data = request.json
    #     # print(json_data)
    #     img_data = json_data['image']
        
    if request.method == 'GET':
        return "hello world"
if __name__ == '__main__':
    app.run(debug=True)