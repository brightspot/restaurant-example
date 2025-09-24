# Restaurant Example

This repo showcases a fictional restaurant that's build using React + Typescript on the frontend, and Brightspot + GraphQL on the backend.

## Prerequisites

* Java 11
* Docker

## Installation

To configure and compile the project, start the web services, and open your browser, run:

### Mac OS

```shell
cp frontend/.env.example frontend/.env
./gradlew
docker compose up -d
open http://localhost/cms
open http://localhost:3000
```

### Windows

#### Command Prompt (cmd.exe)

```shell
copy frontend\.env.example frontend\.env
gradlew.bat
docker compose up -d
start http://localhost/cms
start http://localhost:3000
```

#### Windows PowerShell (powershell.exe)

```shell
Copy-Item frontend\.env.example frontend\.env
.\gradlew.bat
docker compose up -d
Start-Process http://localhost/cms
Start-Process http://localhost:3000
```

> **💡️ Note:** It may take a several seconds before the CMS and frontend is available. Just refresh the page until you see the login screen and the restaurant home page. The CMS runs on port 80 at `/cms` and the frontend runs on port 3000 at `/`.

## Logs

To view the Tomcat logs, run:

```shell
docker compose logs -f --tail=1000 tomcat
```


## Shutdown

To shut down the web services, run:

```shell
docker compose stop
```
