import os
from flask import Flask
# from flask_cors import CORS

from routing import route_bp

PORT = os.getenv('PORT') or 4400
MODE = os.getenv('FLASK_DEBUG') or False

app = Flask(__name__)
# CORS(app, resources=r'/*')
app.config['CORS_HEADERS'] = 'Content-Type'
app.register_blueprint(route_bp, url_prefix='/api')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=MODE)
