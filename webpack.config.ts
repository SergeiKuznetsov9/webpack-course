import path from "path";
import { buildWebpack } from "./config/build/buildWebpack";
import { EnvVariables } from "./config/build/types/types";

// для добавления стилей необходимо установить не только css лоудер, но и style лоудер

// path.resolve(__dirname, "src", "index.tsx"),
//
//

export default (env: EnvVariables) =>
  buildWebpack({
    port: env.port ?? 3000,
    paths: {
      entry: path.resolve(__dirname, "src", "index.tsx"),
      html: path.resolve(__dirname, "public", "index.html"),
      output: path.resolve(__dirname, "build"),
    },
    mode: env.mode ?? "development",
  });
