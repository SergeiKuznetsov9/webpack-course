import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

type Mode = "development" | "none" | "production";

type EnvVariables = {
  mode: Mode;
};

export default (env: EnvVariables): webpack.Configuration => ({
  //  если вместо js файлов добавить ts, сборка упадет. Вебпак - не знает, что за файлы с
  //   расширением ts. Как собственно и с другим расширением. Ему необходимо объяснить это
  // Рассказать как правильно загружать данные файлы. Это делают лоудеры.
  // Порядок указания лоудеров имеет важное значение. Так, например css обрабатывается одним лоудером,
  // а scss другим, который превращает scss в css. Поэтому прежде чем будет осуществлена работ css
  // лоудера, необходимо, чтобы была завершена работа scss лоудера
  entry: path.resolve(__dirname, "src", "index.ts"),

  //  куда и как будет производиться сборка
  output: {
    path: path.resolve(__dirname, "build"),

    // использование квадратных скобок позволяет использовать строковые шаблоны
    // для нэйминга бандлов. contenthash нужен, чтобы название файлов менялос в
    // случае если в них были внесены изменения
    filename: "[name].[contenthash].js",
    clean: true,
  },

  //   режим сборки - в режиме прода, код минимфицируется и т.д.
  //   чтобы не хардклдить, добавим env переменную. Их можно добавить разными
  //   способами. Пойдем самым простым и добавим ее при запуске скрипта в package.json
  //   Чтобы использовать переменные окружения, нужно использовать функцию, которая
  //   вернет конфиг.

  mode: env.mode ?? "development",

  //   тут содержаться все плагины
  plugins: [
    // если не указать template, то вебпак создаст HTML и укажет в скрипте путь к бандлу.
    // Однако созданный нами HTML c div не учтется
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],

  resolve: {
    // благодаря этому при импортах не нужно дописывать расширения файлов
    extensions: [".tsx", ".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
});
