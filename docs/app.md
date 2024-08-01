# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódios de 
podcasts separados por categoria  

### Domínio
Podcasts feitos em vídeo

### Features(funcionalidades)
- Listar os episódios podcasts em sessões de categorias
  - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast


## Como

#### Feature

Listar os episódios podcasts em sessões de categorias.

### Como vou implementar: 
GET: retorna lista de episódios


response:
``` js
[
    {
    podcastName: "Flow",
    episode: "CBUM - Flow #319",
    videoId: "U6ITqH7hunU",
    cover: "https://i.ytimg.com/vi/U6ITqH7hunU/maxresdefault.jpg",
    categories: ["saúde", "mental"],
    link: "https://www.youtube.com/watch?v=U6ITqH7hunU"
},
   {
    podcastName: "Kobasolo",
    episode: "Eito",
    videoId: "mya4D9p_XD8",
        cover: "https://i.ytimg.com/vi/mya4D9p_XD8/maxresdefault.jpg",
    categories: ["música", "jpop"],
    link: "https://www.youtube.com/watch?v=mya4D9p_XD8"

},
]
```

GET: retorna lista de episódios baseado em um parametro enviado pelo cliente do nome do podcast
