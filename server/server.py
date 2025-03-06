from flask import Flask, jsonify
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app) 

@app.route('/run-script', methods=['GET'])
def run_script():
    try:
        result = subprocess.run(['python', 'pattern.py'], capture_output=True, text=True)
        return jsonify({'output': result.stdout})
    except Exception as e:
        return jsonify({'output': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
