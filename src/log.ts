import { exit } from "process";
import { pino, transport } from "pino";
import { PrettyOptions } from "pino-pretty";
import { getLogOutputs, isProduction } from "./helpers";
import { LogOutput } from "./types";

const level = !isProduction() ? "trace" : "info";

const configs: Record<LogOutput, pino.TransportTargetOptions<PrettyOptions>> = {
    console: { target: "pino-pretty", level, options: { colorize: true } },
    file: {
        target: "pino/file",
        level,
        options: { destination: "../notifier.log", mkdir: true },
    },
};

const compileTransportTargets = (): pino.TransportTargetOptions[] => {
    const logOutputs = getLogOutputs();
    const targets = [];

    for (const output in logOutputs) {
        targets.push(configs[logOutputs[output]]);
    }

    return targets;
};

const transports = transport<PrettyOptions>({
    targets: compileTransportTargets(),
});

export const logger = pino({ level }, transports);

process.on("uncaughtException", (error) => {
    logger.fatal(error);
    exit(1);
});

process.on("unhandledRejection", (error) => {
    logger.fatal(error);
    exit(1);
});
