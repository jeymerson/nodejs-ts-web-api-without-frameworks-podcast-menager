# Podcast Manager

## Descrição
O Podcast Manager é um aplicativo inspirado no estilo Netflix, onde é possível centralizar diferentes episódios de podcasts separados por categoria. O objetivo é facilitar o acesso e a organização de episódios de podcasts em formato de vídeo.

## Features (Funcionalidades)
- Listar os episódios de podcasts em sessões de categorias:
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

### Listar os episódios de podcasts em sessões de categorias

#### Endpoint
- **GET** `/list`

#### Descrição
Retorna uma lista de episódios de podcasts organizados por categorias.

#### Exemplo de Resposta
```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "U6ITqH7hunU",
    "cover": "https://i.ytimg.com/vi/U6ITqH7hunU/maxresdefault.jpg",
    "categories": ["saúde", "mental"],
    "link": "https://www.youtube.com/watch?v=U6ITqH7hunU"
  },
  {
    "podcastName": "Kobasolo",
    "episode": "Eito",
    "videoId": "mya4D9p_XD8",
    "cover": "https://i.ytimg.com/vi/mya4D9p_XD8/maxresdefault.jpg",
    "categories": ["música", "jpop"],
    "link": "https://www.youtube.com/watch?v=mya4D9p_XD8"
  }
]
```

### Filtrar episódios por nome de podcast

#### Endpoint
- **GET** `/episode?podcastName={nome}`

#### Descrição
Retorna uma lista de episódios de podcast com base no nome do podcast fornecido.

## Tecnologias Utilizadas

- [**TypeScript**](https://www.typescriptlang.org/): Linguagem de programação utilizada para o desenvolvimento do projeto.
- [**Node.js**](https://nodejs.org/): Ambiente de execução JavaScript que permite executar código JavaScript do lado do servidor.
- [**@types/node**](https://www.npmjs.com/package/@types/node): Pacote de definições de tipos para Node.js para auxiliar no desenvolvimento com TypeScript.
- [**tsup**](https://tsup.egoist.dev/): Ferramenta de construção e empacotamento para projetos TypeScript.
- [**tsx**](https://github.com/esbuild-kit/tsx): Compilador TypeScript que suporta a construção de projetos.

## Como Utilizar

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Inicie o servidor executando `start:dev`.
4. Acesse os endpoints fornecidos para listar os episódios de podcasts ou filtrá-los por nome de podcast.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).


Este README fornece uma visão geral clara do projeto, suas funcionalidades, como implementá-las, e exemplos de resposta, bem como instruções sobre como utilizar e contribuir para o projeto.