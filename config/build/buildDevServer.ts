import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/types";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true,

    // Поскольку роутинг осуществляется за счет JavaScript, девсерверу нужно объяснить
    // как использовать historyApi. После этого роутинг будет работать, но только в девсервере
    historyApiFallback: true,
  };
}
