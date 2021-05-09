
const path = require("path");
function get_abs_path(base) {
    const curr = path.resolve(__dirname);
    const dir = path.parse(curr).dir
    const output_path = path.resolve(dir, base)
    return(output_path)
}

/*
npm install @rollup/plugin-node-resolve --save-dev
npm install @rollup/plugin-commonjs --save-dev
npm install @rollup/plugin-json --save-dev
*/




import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';


export default {
  input: get_abs_path("index.js"),
  output: {
    file: "nvary-cjs.js",
    format: 'cjs',
  },
  plugins: [nodeResolve(), commonjs(),json()]
};
