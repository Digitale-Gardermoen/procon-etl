# procon-etl

Procon Extract, Transform and Load is a simple service designed to sync user data to procons API.

## As a service

The "service" is designed like a Microsoft scheduled task, where a cron job will run the functions to provide the API with data.

With simple "console.log" and "console.error" for logging, this service will run very well with [PM2](https://pm2.keymetrics.io/).

## Documentation

Documentation isn't hosted anywhere, but can be generated with JSDoc. Below is a way to do this:

Clone the repository to your computer, currently only has a working guide for Windows.

```powershell
# Run these commands to install, npm is required.
npm i jsdoc -g
npm i serve -g

# Run these commands to generate the doc and host it locally.
# You must be in the repository's directory.
jsdoc -c doc.json -r
serve out/

#   ┌───────────────────────────────────────────────┐
#   │                                               │
#   │   Serving!                                    │
#   │                                               │
#   │   - Local:            http://localhost:5000   │
#   │   - On Your Network:  http://10.0.0.5:5000    │
#   │                                               │
#   │   Copied local address to clipboard!          │
#   │                                               │
#   └───────────────────────────────────────────────┘
# This should be returned, either click on the links or paste the URL into your browser.
```

## Configuration

There is currently no setup for this, but here is a .env template. Place it in the root directory of the repository.

```
COMAPNYID = 
LANGUAGEID = 
LANGUAGEID = 
CSVFILEPATH = 
CSVHEADERS = 

APIURL = 
APIPORT = 
PROCONROUTE = 

CRONSCHEDULE = 

LDAP_URL =
LDAP_BASEDN =
LDAP_USERNAME =
LDAP_PASSWORD =
LDAP_QUERY_OPTS_BASEDN =
LDAP_QUERY_FILTER = 
ADUSERPROPERTIES = 
```
