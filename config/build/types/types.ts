export type BuildPaths = {
  entry: string;
  html: string;
  output: string;
};

export type BuildMode = "development" | "none" | "production";

export type EnvVariables = {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
};

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
};
