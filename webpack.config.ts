import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = "development" | "none" | "production";

type EnvVariables = {
  mode: Mode;
  port: number;
};

export default (env: EnvVariables) => {
  const isDev = env.mode === "development";

  const config: webpack.Configuration = {
    entry: path.resolve(__dirname, "src", "index.ts"),

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
    ].filter(Boolean),

    resolve: {
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
