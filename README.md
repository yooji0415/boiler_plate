# Boiler plate for React with TypeScript

# ๐ถ๐ปย Boiler plate ์ค๋ช

React ํ๋ก์ ํธ๋ฅผ TypeScript ํ๊ฒฝ์์ ์งํํ  ๋ CRA๋ฅผ ํตํด์ ๋ณดํต ์งํ์ ํ์๋ค.
ํ์ง๋ง ๋ด๋ถ ์ค์ ์ ๋ณ๊ฒฝํ๋ ค๊ณ  ํ  ๋ eject ๋ช๋ น์ด๋ฅผ ์ฌ์ฉํด์ผ ํ๊ณ , ๋ด๋ถ์ ์ค์ ์ด ๋ณต์กํ๋ค.
๊ทธ๋์ ์ด๋ฒ๊ธฐํ์ boiler plate๋ฅผ ํ๋ฒ ๋ง๋ค์ด๋ณด๊ธฐ๋ก ํ๋ค.
์ฐธ๊ณ ํ ์๋ฃ๋ ์๋ ๋ ๊ธ์ด๋ค.

- [React + Typescript + Webpack + Babel + ESLint + Prettier + Husky + Emotion](https://wnsah052.tistory.com/186)
- [๋ฆฌ์กํธ ๋ณด์ผ๋ฌํ๋ ์ดํธ ๋ง๋ค๊ธฐ (feat. Webpack, TypeScript, ESLint, Prettier, Storybook)](https://datalater.github.io/posts/react-boilerplate/)

์ฌ์ฉํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์๋์ ๊ฐ๋ค.

| ๋ผ์ด๋ธ๋ฌ๋ฆฌ  | ๋ฒ์      |
| ----------- | -------- |
| react       | ^18.2.0  |
| react-dom   | ^18.2.0  |
| typescript  | ^4.9.4   |
| webpack     | ^5.75.0  |
| @babel/core | ^7.20.12 |
| eslint      | ^8.32.0  |
| prettier    | ^2.8.3   |

# ๐ย ์ค์น ๋ฐ ์คํ

## ์ค์น

```powershell
yarn install
```

## ์คํ

- `yarn start`: ๊ฐ๋ฐ๋ชจ๋๋ก dev server ์คํ
- `yarn start:build`: ๋น๋ ์ดํ serve ์คํ
- `yarn build`: ๋น๋ ์คํ

```powershell
yarn start
yarn start:build
yarn build
```

# โ๏ธย config ๋ด์ฉ

## tsconfig.json

```json
{
  "compilerOptions": {
    /* ๊ธฐ๋ณธ ์ต์ */
    "target": "ES5" /* ์ฌ์ฉํ  ํน์  ECMAScript ๋ฒ์  ์ค์  */,
    "module": "ESNext" /* ๋ชจ๋์ ์ํ ์ฝ๋ ์์ฑ ์ค์  */,
    "lib": ["DOM", "ESNext"] /* ์ปดํ์ผ์ ํฌํจ๋  ๋ผ์ด๋ธ๋ฌ๋ฆฌ ํ์ผ ๋ชฉ๋ก */,
    "jsx": "react-jsx" /* JSX ์ฝ๋ ์์ฑ ์ค์  */,
    "noEmit": true /* ๊ฒฐ๊ณผ ํ์ผ ๋ด๋ณด๋ผ์ง ์ฌ๋ถ */,
    "isolatedModules": true /* ๊ฐ ํ์ผ์ ๋ถ๋ฆฌ๋ ๋ชจ๋๋ก ํธ๋์คํ์ผ */,
    /* ํ์ ํ์ธ ์ต์ */
    "strict": true /* ๋ชจ๋  ์๊ฒฉํ ํ์-์ฒดํน ์ต์ ํ์ฑํ ์ฌ๋ถ. */,
    /* ๋ชจ๋ ํด์ ์ต์ */
    "moduleResolution": "node" /* ๋ชจ๋ ํด์ ๋ฐฉ๋ฒ ์ค์  */,
    "esModuleInterop": true /* ๋ชจ๋  imports์ ๋ํ namespace ์์ฑ์ ํตํด CommonJS์ ES Modules ๊ฐ์ ์ํธ ์ด์ฉ์ฑ์ด ์๊ธฐ๊ฒํ  ์ง ์ฌ๋ถ */,
    /* ์ถ๊ฐ ์ต์ */
    "skipLibCheck": true /* ์ ์ ํ์ผ์ ํ์ ํ์ธ์ ๊ฑด๋ ๋ธ ์ง ์ฌ๋ถ */,
    "forceConsistentCasingInFileNames": true /* ๊ฐ์ ํ์ผ์ ๋ํ ์ผ๊ด๋์ง ์์ ์ฐธ์กฐ๋ฅผ ํ์ฉํ์ง ์์ ์ง ์ฌ๋ถ */,
    "resolveJsonModule": true /* '.json' ํ์ฅ์๋ฅผ ์ฌ์ฉํ์ฌ ๋ชจ๋์ ๊ฐ์ ธ์ฌ ์ ์๋์ง ์ฌ๋ถ */
  },
  "include": ["src/**/*"]
}
```

## .babelrc

- @babel/preset-env: Babel ํ๋ฌ๊ทธ์ธ๊ณผ polyfill์ ์๋ ๊ด๋ฆฌํด์ฃผ๋ ํจํค์ง
- @babel/preset-react: react ๋ฌธ๋ฒ ๋ณํ ํจํค์ง
- @babel/preset-typescript: typescript ๋ฌธ๋ฒ ๋ณํ ํจํค์ง
- @babel/runtime: Babel์ ๋ชจ๋์ runtime helper ํจํค์ง
- @babel/plugin-transform-runtime: Babel์ helper code ์ฌ์ฌ์ฉ ํจํค์ง

```json
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
}
```

## webpack

- babel-loader: webpack๊ณผ Babel์ ์ด์ฉํด์ transpileํ๋ ํจํค์ง
- webpack-bundle-analyzer: webpack ๊ฒฐ๊ณผ๋ฌผ์ ํฌ๊ธฐ๋ฅผ ์๊ฐํํ๋ ํจํค์ง
- html-webpack-plugin: webpack ๋ฒ๋ค HTML ํ์ผ์ ๋์ ์ผ๋ก ์์ฑํ๋ ํจํค์ง
- @svgr/webpack: svgํ์ผ์ ๋ฆฌ์กํธ ์ปดํฌ๋ํธ์ฒ๋ผ ์ฌ์ฉํ  ์ ์๋๋ก ํ๋ ํจํค์ง
- @pmmmwh/react-refresh-webpack-plugin: React ์ปดํฌ๋ํธ๋ฅผ ์ํ fast refresh ํ๋ฌ๊ทธ์ธ

## .eslintrc.js

```jsx
module.exports = {
  parser: '@typescript-eslint/parser' /* ์ฝ๋ ๋ถ์ ํ์ฑ ํด๋ก TypeScript ์ค์  */,
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended' /* React */,
    'plugin:react-hooks/recommended' /* React Hook */,
    'plugin:@typescript-eslint/recommended' /* TypeScript์ ๋ง๋ ๋ฃฐ */,
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended' /* ์ค์๊ฐ์ผ๋ก JSX ์์์ ๋ํ ์ ๊ทผ์ฑ ๊ท์น ํ์ธ */,
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off' /* ์ฌ์ฉํ์ง ์๋ ๋ณ์, ํจ์, ๋งค๊ฐ๋ณ์ */,
    'react/prop-types': 'off' /* component props ํ์ ์ง์  */,
    'react/jsx-uses-react': 'off' /* import React ๊ด๋ จ ์ฒ๋ฆฌ */,
    'react/react-in-jsx-scope': 'off' /* import React ๊ด๋ จ ์ฒ๋ฆฌ */,
    '@typescript-eslint/explicit-module-boundary-types':
      'off' /* ํจ์ ๋ฐ ํด๋์ค์ ๋ช์์  ๋ฐํ ํ์ ์ค์  */,
    '@typescript-eslint/no-unused-vars': ['error'] /* TypeScript ๋ฒ์ ์ no-unused-vars */,
    '@typescript-eslint/no-var-requires': 'off' /* require ์ฌ์ฉ์ import ์ฌ์ฉ */,
  },
};
```

## .prettierrc.js

```jsx
module.exports = { singleQuote: true, trailingComma: 'all', printWidth: 100 };
```
