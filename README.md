# CEP
![Github Actions](https://github.com/naturesprophet/cep-api/actions/workflows/ci.yml/badge.svg)
[![Test Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)](https://github.com/naturesprophet/cep-api)

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