export type BuildPaths = {
  src: string;
  entry: string;
  html: string;
  output: string;
  public: string;
};

export type BuildMode = "development" | "none" | "production";
export type PlatformType = "desktop" | "mobile";

export type EnvVariables = {
  mode: BuildMode;
  port: number;
  analyzer: boolean;
  platform: PlatformType;
};

export type BuildOptions = {
  port: number;
  paths: BuildPaths;
  mode: BuildMode;
  analyzer: boolean;
  platform: PlatformType;
};
