from flask import Flask, request, jsonify
from joblib import load
import numpy as np
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  
model = load('pipeline')
@app.route('/', methods=['POST'])
def predict():
    try:
        # Get data from the request
        data = []
        if request.is_json:
            data = request.get_json() 
            data = list(data.values())
            
        data = [data]
        def convert_to_int_or_str(x):
            try:
                return int(x)
            except ValueError:
                return x
        converted = [[convert_to_int_or_str(element) for element in row] for row in data]
        print(converted)
        prediction = model.predict(converted)

        # # # Return the prediction as JSON response
        
        a = prediction.tolist()
        
        return jsonify(prediction = a), 200
    except Exception as e:
        # Return error message if prediction fails
        return jsonify({'error':    str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True)