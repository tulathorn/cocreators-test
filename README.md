# Cocreators demo challanges

This is the repository for demostrate my coding. It contains two part, Frontend and Backend. The current version support only minimum requirement but I will provide what should be improve in the future.

## Table of content

- Requirement summary
- Startup the server
- Future improvment

---

## Requirment summary

The requirment of this system will devided base on each part, as present belows:

### Frontend Requirment

- Use React
- Dashboard with list of current sites monitored and their statuses, using custom components
- Delete a site
- Add a site

> Additonal: Frontend can modify each status

### Backend Requirment

- API built with a light Python framework, such as FastAPI, Falcon, Bottle, Flask, Tornado, or similar, not e.g. Django
- No database - store current state only in a single file, in the same folder as the main entrypoint. Use a human readable simple format such as JSON or YAML
- Support both HTTP / HTTPS addresses to monitor
- RESTful API for creating, and deleting entries in the configuration
- An API endpoint to get the current status of all the websites being monitored
- One service and one entrypoint script, no relying on databases, cron, or external services e.g. Celery

> Additonal: API have modify function

## Startup the server

First you need to have Docker install. Once you have Docker in your machine, run ` docker-compose up --build` and every should work fine.

### Startup without docker

To start the project without docker, you require to have:

- NodeJS
- Python3

### Startup the backend

1. Open terminal and navigate to `/backend`.
2. Run command `pip install -r requirements.txt`
3. Then, starting the server by `python3 main.py`

#### Startup the frontend

1. Start the backend first.
2. Open the terminal and navigate to `/frontend`.
3. Run `npm install`.
4. Start the fronend by `npm run start`.

## Future development

1. Changing the way to get data from backend to use socket. This will reduct the load of backend.
2. Adding unit-test in both backend and frontend.
3. Makeing a deployment pipeline.
