# CEP

[![Github Actions](https://github.com/naturesprophet/cep-api/actions/workflows/ci.yml/badge.svg)](https://github.com/NaturesProphet/cep-api/actions)
[![codecov](https://codecov.io/gh/naturesProphet/cep-api/branch/main/graph/badge.svg?token=ed178c89-b7f7-4f3b-8234-5329287b3bb2)](https://codecov.io/gh/naturesProphet/cep-api)

API simples com um endpoint GET para consulta de CEP.

## Executar direto no Docker

```sh
sudo docker run -p 3000:3000 --name cep -d docker.io/mateusgarcia/cep-api:main
```

Para ver a documentação do Swagger, acesse o endereço no seu navegador
<http://localhost:3000/api>

## Testes unitários

```sh
npm run test
```

## Testes e2e

```sh
npm run test:e2e
```

## CObertura de testes

```sh
npm run test:cov
```
