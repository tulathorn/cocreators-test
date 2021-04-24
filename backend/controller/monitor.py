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

    def search_monitor_list(self, id):
        for index, element in self.monitor_list:
            if element[id] == id:
                return index
        return -1

    def get_lists(self):
        return jsonify(self.monitor_list)

    def add_website(self, data):
        print(data)
        id = len(self.monitor_list) + 1
        data['id'] = id
        self.monitor_list.append(data)
        return jsonify(self.monitor_list)

    def update_website(self, id, data):
        for index, element in self.monitor_list:
            if element[id] == id:
                self.monitor_list[index] = data
        # Need to return list
        return "Coming soon"

    def remove_websit(self, id):
        return "Comming soon"
