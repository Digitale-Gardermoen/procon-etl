# procon-etl

Procon Extract, Transform and Load is a simple service designed to sync user data to procons API.

## As a service

The "service" is designed like a Microsoft scheduled task, where a cron job will run the functions to provide the API with data.

With simple "console.log" and "console.error" for logging, this service will run very well with [PM2](https://pm2.keymetrics.io/).
