FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /app    
COPY ./src/src.csproj ./
RUN dotnet restore
    
# Copy everything else and build
COPY ./src ./
RUN dotnet publish -c Release -o out
    
# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app
RUN apt update && apt install curl -y
COPY --from=build-env /app/out .
ENTRYPOINT ["dotnet", "src.dll"]