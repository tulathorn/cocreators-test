Create a small RESTful website status monitoring application as best you can.

Minimal features required from the backend:

- API built with a light Python framework, such as FastAPI, Falcon, Bottle, Flask, Tornado, or similar, not e.g. Django
- No database - store current state only in a single file, in the same folder as the main entrypoint. Use a human readable simple format such as JSON or YAML
- Support both HTTP / HTTPS addresses to monitor
- RESTful API for creating, and deleting entries in the configuration
- An API endpoint to get the current status of all the websites being monitored
- One service and one entrypoint script, no relying on databases, cron, or external services e.g. Celery

Status of the website should be determined with a HTTP(S) request. If the request fails (timeout, DNS error, returns a non-2xx HTTP status code, etc.) the status should be "error". If the request is slow (>250ms), the status should be "slow". Otherwise the status should be "ok".

Minimal features required for the frontend:

- Use React
- Dashboard with list of current sites monitored and their statuses, using custom components
- Delete a site
- Add a site

Suggestions for optional features:

- Validation
- Fully asynchronous operation
- Background polling of website status once per minute, and the API to return the latest status recorded instead of triggering new HTTP requests
- Pushing updates to state to the frontend
- Good state management
- Flow typings / TypeScript
- Good looking style
- Sufficient level of automated tests for frontend and backend
- Travis-CI integration to automatically run tests
- Dockerfile to build a minimal runtime environment based on e.g. Alpine linux
- API documentation in OpenAPI or similar format
- Ensuring accessibility, good Lighthouse test results, etc.

Primary focus should be on:

- Strict following of the requirements given - but you can of course ask if you have questions or propose improvements if you think of any
- Overall code quality and project structure with teamwork in mind (nothing needs to be perfect, just something others can work on without a lot of trouble)
- Good user experience, and general looks of the frontend (simple can still look good)

The whole thing should be published in GitHub, with the necessary steps to build, run and test the application (incl. e.g. requirements.txt -file, npm commands to run, and the address to open in the browser).
