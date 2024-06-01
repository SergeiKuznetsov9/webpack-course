const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = (env) => ({
  //  точка входа в приложение. Может быть несколько. Тогда и бандлов
  //  будет несколько
  entry: path.resolve(__dirname, "src", "index.js"),

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
});
