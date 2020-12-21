# Pomodoro

Help user to manage their plans by
- calculating concentration times
- making To Do list

## URL
[pomodoro](https://skyni25.github.io/Pomodoro/)

## Features
- Stopwatch
- Username persistance
- To Do List
- Random Background Image
- Weather new with geolocation

## Getting started

이 프로젝트는 vanila javascript로 짜여졌으므로 별도의 라이브러리나 프레임워크는 필요하지 않습니다.

### Prerequisites

작업을 위해 각자만의 Code Editor Tool을 설치합니다.

```
Visual Studio Code (권장)
```

### Installing

배포할 때 webpack을 사용해서 합니다. 그러므로 아래와 같은 단계를 거칩니다.

먼저 아래 명령어를 입력하여 package.json 파일을 생성합니다
```
npm init
```

그리고 webpack 패키지를 아래 명령어를 입력해 설치합니다.
```
npm install -D webpack webpack-cli
```

css 파일과 image들 파일 또한 번들링해서 배포할 것이므로 아래 명령어를 통해 필요한 패키지들을 설치합니다.

```
npm install -D style-loader css-loader file-loader
```

배포할 파일을 저장할 public 폴더도 생성해줍니다.<br>

```
|- package.json
|- node_modules
|- public
...
```

webpack.config.js 파일에 설정은 아래와 같은 형식으로 합니다.

```
    entry: {
        index: "./js/index.js",
        ...
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name]_bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader : 'style-loader' },
                    { loader : 'css-loader' }
                ],
            },
            ...
```

위와 같이 html 파일이 여러개 인 경우를 위해 entry 속성을 지정하고 output을 설정합니다.

## Deployment

실 서버에 배포하는 방법은 아래 블로그 글을 참고하시면 좋습니다.<br>
[마스크 재고 서비스 배포 과정](https://ktpark1651.tistory.com/248)

## Authors

* **Skyni25** - *whole process*

## License

This project is licensed under the MIT License
