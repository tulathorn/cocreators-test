from flask import jsonify
import requests
from requests.exceptions import HTTPError


class Monitor:
    def __init__(self) -> None:
        self.data = []
        self.monitor_list = [{
            "id": 1,
            "website_name": "example",
            "website_url": "http://example.com",
            "status": 200
        }]

    def __search_monitor_list(self, id):
        index = 0
        while index < len(self.monitor_list):
            if self.monitor_list[index]["id"] == id:
                return index
            index += 1
        return -1

    def __fetch_web_status(self, url):
        try:
            response = requests.get(url)
            response.raise_for_status()
        except HTTPError as http_err:
            print(f'HTTP error occurred: {http_err}')
        except Exception as err:
            print(f'Other error occurred: {err}')
        else:
            code = response.status_code
            return code

    def __update_monitor_status(self):
        index = 0
        while index < len(self.monitor_list):
            url = self.monitor_list[index]["website_url"]
            code = self.__fetch_web_status(url)
            self.monitor_list[index]["status"] = code
            index += 1
        return 1

    def get_lists(self):
        self.__update_monitor_status()
        return jsonify(self.monitor_list)

    def add_website(self, data):
        print(data)
        id = self.monitor_list[len(self.monitor_list)-1]["id"] + 1
        data["status"] = self.__fetch_web_status(data["website_url"])
        data["id"] = id
        self.monitor_list.append(data)
        return jsonify(self.monitor_list)

    def update_website(self, id, data):
        index = self.__search_monitor_list(id)
        if index == -1:
            return "Error"
        data["status"] = self.__fetch_web_status(data["website_url"])
        self.monitor_list[index] = data
        return jsonify(self.monitor_list)

    def remove_websit(self, id):
        index = self.__search_monitor_list(id)
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
