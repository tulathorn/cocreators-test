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
        index = 0
        while index < len(self.monitor_list):
            if self.monitor_list[index]["id"] == id:
                return index
            index += 1
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
        index = self.search_monitor_list(id)
        if index == -1:
            return "Error"
        self.monitor_list[index] = data
        return jsonify(self.monitor_list)

    def remove_websit(self, id):
        index = self.search_monitor_list(id)
        if index == -1:
            return "Error"
        i = 0
        temp_list = []
        while i < len(self.monitor_list):
            if i != index:
                temp_list.append(self.monitor_list[i])
            i += 1
        self.monitor_list = temp_list
        return jsonify(self.monitor_list)
