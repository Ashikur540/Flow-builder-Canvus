import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: false, // Don't use tsconfig's declarationDir
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: './dist' // Explicitly set where to put declaration files
        }
      }
    }),
    postcss({
      extensions: ['.css', '.scss'],
      extract: 'index.css',
      minimize: true,
      modules: true,
    }),
    json(),
    terser(),
  ],
  external: ['react', 'react-dom', 'antd', 'reactflow', 'react-quill', 'react-router-dom']
};