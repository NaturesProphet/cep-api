# CEP
[![GitHub Actions](https://github.com/naturesprophet/cep-api/workflows/CI/badge.svg)](https://github.com/naturesprophet/cep-api/actions)

[![Test Coverage](https://img.shields.io/badge/coverage-90%25-brightgreen)](https://github.com/naturesprophet/cep-api)

[![Coverage Status](https://coveralls.io/repos/github/naturesprophet/cep-api/badge.svg?branch=main)](https://coveralls.io/github/naturesprophet/cep-api?branch=main)

API simples com um endpoint GET para consulta de CEP.

## Executar direto no Docker:

```
sudo docker run -p 3000:3000 --name cep -d docker.io/mateusgarcia/cep-api:main
```

Para ver a documentação do Swagger, acesse o endereço no seu navegador
http://localhost:3000/api

## Testes unitários:

```
npm run test
```

## Testes e2e

```
npm run test:e2e
```

## CObertura de testes

```
npm run test:cov
```