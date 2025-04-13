import { defineConfig } from 'eslint/config'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'

export default defineConfig([
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'components/ui/**'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
      'react/tsx-max-props-per-line': [1, { when: 'multiline', maximum: 2 }],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'always',
          beforeSelfClosing: 'always',
        },
      ],
      'react/jsx-closing-bracket-location': [
        'error',
        {
          nonEmpty: 'after-props',
          selfClosing: 'after-props',
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
])
