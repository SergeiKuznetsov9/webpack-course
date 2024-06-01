const path = require("path");

module.exports = {
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
  mode: "development",
};
