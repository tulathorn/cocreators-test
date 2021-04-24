from flask import jsonify


class Monitor:
    def __init__(self) -> None:
        self.data = []
        self.monitor_list = [{
            "id": 1,
            "website_name": "web1",
            "website_url": "example.com",
            "status": 200
        }]

    def get_lists(self):
        return jsonify(self.monitor_list)

    def add_website(self, data):
        self.monitor_list.append(data)
        return jsonify(self.monitor_list)

    def update_website(self, id, data):
        return "Coming soon"

    def remove_websit(self, id):
        return "Comming soon"
