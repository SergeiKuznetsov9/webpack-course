import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(options: BuildOptions) {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";
  const { analyzer } = options;

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: options.paths.html,
    }),
    // при необходимости использования в коде значений переменных окружения, можно использовать
    // этот плагин. Для этого в него нужно прокинуть объект с переменными, которые мы хотим использовать.
    // Значения переменных необходимо обернуть в JSON.stringify
    // Теперь мы можем использовать их в компонентах.
    // Если что то будет ренедриться приопределенном значении переменной, то сборщик выкенет из бандла код
    // в том случае, если при текущем значении переменной, код ренедерится не должен. Это называется tree-shaking
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
