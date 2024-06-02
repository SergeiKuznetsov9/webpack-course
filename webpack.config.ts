import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = "development" | "none" | "production";

type EnvVariables = {
  mode: Mode;
  port: number;
};

// для добавления стилей необходимо установить не только css лоудер, но и style лоудер

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";
  const isProd = env.mode === "production";

  const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "index.tsx"),

    output: {
      path: path.resolve(__dirname, "build"),

      filename: "[name].[contenthash].js",
      clean: true,
    },

    mode: env.mode ?? "development",

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      isDev && new webpack.ProgressPlugin(),
      isProd &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ].filter(Boolean),

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },

    module: {
      rules: [
        // При добавлении MiniCssExtractPlugin, им нужно заменить style-loader
        {
          test: /\.css$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          // Здесь порядок имеет значение
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader",
          ],
        },

        // Теперь вебпак умеет правильно работать и с scss И css. Однако при сборке, css стили внедряются
        // непосредственно в js файлы. ЧТобы сборщик создавал отдельные файлы стилей, не обхоимо установить
        // MiniCssExtractPlugin
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },

    devServer: isDev
      ? {
          port: env.port ?? 3000,
          open: true,
        }
      : undefined,
    devtool: isDev && "inline-source-map",
  };
  return config;
};
