const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  // 개발모드, development or production
  mode: "development",

  // entry를 기준으로 연관된 모든 파일들을 번들링
  entry: ["babel-polyfill", "./src/index"],

  // 번들링 될 파일 확장자 등록
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@comp": path.resolve(__dirname, "src/component"),
      "@recoil": path.resolve(__dirname, "src/modules/recoil")
    },
    extensions: [".js", ".jsx", ".ts", '.tsx']
  },

  // 바벨과 같은 로더 등록
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: ['/node_modules/']
      },
      {
          test:/\.tsx?$/,
          use: ['ts-loader'],
          exclude: ['/node_modules/']
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: 'file-loader'
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader","postcss-loader","sass-loader"],
      },
    ]
  },

  // 빌드 설정
  output: {
    path: path.resolve(__dirname, "build"), // 빌드되는 파일들이 만들어지는 위치, __dirname: 현재 디렉토리
    filename: "[name].bundle.js", // 번들파일 이름
    publicPath: '/' // ouput 위치 지정
  },

  // webpack 서버 설정
  devServer: {
    static: path.join(__dirname, "build"), // 이 경로에 있는 파일이 변경될 때 다시 컴파일
    // port, // 서버 포트 지정
    proxy: {
      "/api/**": { // api로 시작하는 경로일 경우
        target: "http://localhost:8080/", // 요청 url 앞에 target을 붙여주기
        pathRewrite: {"^/api": "/"}, // api에 해당하는 url 제거
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      // index.html에 output에서 만들어진 bundle.js를 적용하여, build에 새로운 html 파일 생성
      template: `./public/index.html`
    })
  ]
};