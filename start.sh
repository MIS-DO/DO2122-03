#development
export NODE_ENV=development
export PORT=8080
export DBPORT=27018
docker-compose -p acmeexplorer-devel up -d


#production
export NODE_ENV=production
export PORT=80
export DBPORT=27015
docker-compose -p acmeexplorer-prod up -d
