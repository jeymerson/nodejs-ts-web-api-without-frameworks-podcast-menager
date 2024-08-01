# Podcast Manager

## Description
Podcast Manager is an application inspired by Netflix's style, allowing you to centralize different podcast episodes separated by category. The aim is to facilitate access and organization of podcast episodes in video format, providing an intuitive and enjoyable browsing experience.

## Features
- **List podcast episodes in category sessions**:
  - [health, fitness, mindset, humor]
- **Filter episodes by podcast name**

## How

### List podcast episodes in category sessions

#### Endpoint
- **GET** `/list`

#### Description
Returns a list of podcast episodes organized by categories.

#### Example Response
```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "U6ITqH7hunU",
    "cover": "https://i.ytimg.com/vi/U6ITqH7hunU/maxresdefault.jpg",
    "categories": ["health", "mindset"],
    "link": "https://www.youtube.com/watch?v=U6ITqH7hunU"
  },
  {
    "podcastName": "Kobasolo",
    "episode": "Eito",
    "videoId": "mya4D9p_XD8",
    "cover": "https://i.ytimg.com/vi/mya4D9p_XD8/maxresdefault.jpg",
    "categories": ["music", "jpop"],
    "link": "https://www.youtube.com/watch?v=mya4D9p_XD8"
  }
]
```

### Filter episodes by podcast name

#### Endpoint
- **GET** `/episode?podcastName={name}`

#### Description
Returns a list of podcast episodes based on the provided podcast name.

## Technologies Used

- [**TypeScript**](https://www.typescriptlang.org/): Programming language used for the development of the project.
- [**Node.js**](https://nodejs.org/): JavaScript runtime environment that allows running JavaScript code on the server side.
- [**@types/node**](https://www.npmjs.com/package/@types/node): Type definitions package for Node.js to assist in TypeScript development.
- [**tsup**](https://tsup.egoist.dev/): Build and bundling tool for TypeScript projects.
- [**tsx**](https://github.com/esbuild-kit/tsx): TypeScript compiler that supports project building.

## How to Use

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server by running `npm run start:dev`.
4. Access the provided endpoints to list podcast episodes or filter them by podcast name.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


This README provides a clear overview of the project, its features, implementation details, and instructions on how to use and contribute to the project.