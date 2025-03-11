import resolve from "@rollup/plugin-node-resolve";

import typescript from "@rollup/plugin-typescript";

import commonjs from "@rollup/plugin-commonjs";

import dts from "rollup-plugin-dts";

import postcss from "rollup-plugin-postcss";

import packagelson from " /package.json" assert { type: "json" };

export default [
    {
        //entrypoint for the library
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "es",
                sourcemap: true,
            }
        ]
    }
]