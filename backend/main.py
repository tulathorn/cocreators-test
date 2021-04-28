from flask import Flask
from flask_cors import CORS

from routing import route_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(route_bp, url_prefix='/api')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4400, debug=True)
