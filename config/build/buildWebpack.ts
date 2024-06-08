import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode === "development";

  const config = {
    entry: options.paths.entry,

    output: {
      path: options.paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },

    mode: options.mode,

    plugins: buildPlugins(options),

    resolve: buildResolvers(options),

    module: {
      rules: buildLoaders(options),
    },

    devServer: isDev ? buildDevServer(options) : undefined,

    devtool: isDev && "inline-source-map",
  };

  return config;
}
