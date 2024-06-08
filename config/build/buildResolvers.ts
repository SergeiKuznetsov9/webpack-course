import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";

export function buildResolvers(
  options: BuildOptions
): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // для возможности использовать относительный импорт
    alias: {
      // определяем символ, который будет соответствовать корню
      "@": options.paths.src,
    },
  };
}
