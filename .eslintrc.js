module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
  globals: {
    JSX: true,
  },
};
