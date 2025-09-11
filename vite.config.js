import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import obfuscatorPlugin from 'vite-plugin-javascript-obfuscator'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    obfuscatorPlugin({
      apply: 'build',
      include: ['src/**/*.js', 'src/**/*.jsx'],
      options: {
        simplify: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        debugProtection: true,
        stringArray: true,
        stringArrayShuffle: true,
        stringArrayEncoding: ['rc4'],
        stringArrayRotate: true,
        selfDefending: true,
        renameGlobals: true,
        identifiersPrefix: '_vc',
        identifierNamesGenerator: 'hexadecimal',
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 1,
      },
    }),
  ],
})
