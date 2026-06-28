import { defineConfig } from 'vite-plus';

export default defineConfig({
  run: {
    tasks: {
      build: {
        command: 'vp build',
      },
      greet: {
        command: 'node greet.mjs',
        input: ['greet.mjs', 'data.txt'],
        output: ['out.txt'],
      },
    },
  },
});
