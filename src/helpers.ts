// eslint-disable-next-line import/no-unassigned-import
import "dotenv/config";
import { LogOutput } from "./types";

// Environment Variables
export const getEnvironmentVariable = <T = string>(
    name: string,
    defaultValue: T = "" as T,
): T => (name in process.env ? (process.env[name] as T) : defaultValue);

export const isProduction = () =>
    getEnvironmentVariable("NODE_ENV") === "production";

export const getLogOutputs = (): LogOutput[] =>
    getEnvironmentVariable("LOG_OUTPUTS", "").split(",") as LogOutput[];
