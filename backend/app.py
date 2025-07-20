from flask import Flask
from flask_cors import CORS
from routes.osint_routes import osint_routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(osint_routes, url_prefix="/api")

if __name__ == '__main__':
    app.run(debug=True, port=5000)
