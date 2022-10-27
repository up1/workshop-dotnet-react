# Workshop for CI/CD
* Frontend with ReactJS
* Backend with .NET 6


## Backend with [.NET 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
```
$dotnet run --project src/src.csproj

info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7177
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5070
info: Microsoft.Hosting.Lifetime[0]
      Application started. Press Ctrl+C to shut down.
```

Access to APIs
* API Document with Swagger :: https://localhost:7177/swagger/index.html
* Call API :: https://localhost:7177/WeatherForecast

### Running .NET 6 with [Docker](https://hub.docker.com/_/microsoft-dotnet-sdk/)
```
$docker-compose build backend
$docker-compose up -d backend
$docker-compose ps

NAME                          COMMAND             SERVICE             STATUS              PORTS
demo-dotnet-react-backend-1   "dotnet src.dll"    backend             running
```

Access to APIs
* Call API :: http://localhost:9999/WeatherForecast

## Frontent with [ReactJS](https://reactjs.org/)
* [NodeJS](https://nodejs.org/en/)
```
$cd frontend
$npm install
$npm run dev
```

Access with url = http://localhost:5173/

### Build with production
```
$npm run build
```

Deploy files and folders `./dist` to web server such as [NGINX](https://hub.docker.com/_/nginx)

### Running ReactJS with Docker
```
$docker-compose build frontend
$docker-compose up -d frontend
$docker-compose ps

NAME                          COMMAND             SERVICE             STATUS              PORTS
demo-dotnet-react-backend-1   "dotnet src.dll"    backend             running
```

Access with url = http://localhost:8888