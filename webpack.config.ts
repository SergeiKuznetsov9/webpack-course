import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { EnvVariables } from "./config/build/types/types";

export default (env: EnvVariables) =>
  buildWebpack({
    port: env.port ?? 3000,
    paths: {
      src: path.resolve(__dirname, "src"),
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
    },
    mode: env.mode ?? "development",
    analyzer: env.analyzer,
  });
