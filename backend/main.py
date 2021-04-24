from flask import Flask

from routing import route_bp

app = Flask(__name__)
app.register_blueprint(route_bp, url_prefix='/api')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4400, debug=True)
