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
            "code": 200,
            "status": "ok"
        }]

    def __search_monitor_list(self, id):
        index = 0
        while index < len(self.monitor_list):
            if self.monitor_list[index]["id"] == id:
                return index
            index += 1
        return -1

    def __fetch_web_code(self, url):
        try:
            response = requests.get(url)
            response.raise_for_status()
        except HTTPError as http_err:
            print(f'HTTP error occurred: {http_err}')
            return 500
        except Exception as err:
            print(f'Other error occurred: {err}')
            return 500
        else:
            code = response.status_code
            return code

    def __check_speed(self, url):
        speed = "slow"
        if requests.get(url, timeout=0.25):
            speed = "ok"
        return speed

    def __update_monitor_status(self):
        index = 0
        while index < len(self.monitor_list):
            url = self.monitor_list[index]["website_url"]
            code = self.__fetch_web_code(url)
            self.monitor_list[index]["code"] = code
            if code != 200:
                self.monitor_list[index]["status"] = "error"
            else:
                self.monitor_list[index]["status"] = self.__check_speed(url)
            index += 1
        return 1

    def get_lists(self):
        self.__update_monitor_status()
        return jsonify(self.monitor_list)

    def add_website(self, data):
        print(data)
        id = self.monitor_list[len(self.monitor_list)-1]["id"] + 1
        data["code"] = self.__fetch_web_code(data["website_url"])
        data["id"] = id
        if data["code"] != 200:
            data["status"] = "error"
        else:
            data["status"] = self.__check_speed(data["website_url"])
        self.monitor_list.append(data)
        return jsonify(self.monitor_list)

    def update_website(self, id, data):
        index = self.__search_monitor_list(id)
        if index == -1:
            return jsonify({"error": "Element is not exist"}), 404
        data["code"] = self.__fetch_web_code(data["website_url"])
        if data["code"] != 200:
            data["status"] = "error"
        else:
            data["status"] = self.__check_speed(data["website_url"])
        self.monitor_list[index] = data
        return jsonify(self.monitor_list)

    def remove_websit(self, id):
        index = self.__search_monitor_list(id)
        if index == -1:
            return jsonify({"error": "Element is not exist"}), 404
        i = 0
        temp_list = []
        while i < len(self.monitor_list):
            if i != index:
                temp_list.append(self.monitor_list[i])
            i += 1
        self.monitor_list = temp_list
        return jsonify(self.monitor_list)
