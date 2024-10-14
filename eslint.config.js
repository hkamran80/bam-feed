// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import hkamranConfig from "@hkamran/eslint-config";
import globals from "globals";

export default tseslint.config(
    {
        ignores: ["node_modules/", "dist/", "**/.gitignore", "**/*.md"],
        files: ["**/*.ts"],
    },
    eslint.configs.recommended,
    // @ts-expect-error TypeScript throws a missing `Symbol.iterator` error but it works regardless
    ...hkamranConfig,
    ...tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            globals: { ...globals.node },
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        rules: {
            "no-console": "off",
            "no-await-in-loop": "off",
            "no-use-before-define": "off",
        },
    },
);
