# Boiler plate for React with TypeScript

# 👶🏻 Boiler plate 설명

React 프로젝트를 TypeScript 환경에서 진행할 때 CRA를 통해서 보통 진행을 했었다.
하지만 내부 설정을 변경하려고 할 때 eject 명령어를 사용해야 했고, 내부의 설정이 복잡했다.
그래서 이번기회에 boiler plate를 한번 만들어보기로 했다.
참고한 자료는 아래 두 글이다.

- [React + Typescript + Webpack + Babel + ESLint + Prettier + Husky + Emotion](https://wnsah052.tistory.com/186)
- [리액트 보일러플레이트 만들기 (feat. Webpack, TypeScript, ESLint, Prettier, Storybook)](https://datalater.github.io/posts/react-boilerplate/)

사용한 라이브러리는 아래와 같다.

| 라이브러리  | 버전     |
| ----------- | -------- |
| react       | ^18.2.0  |
| react-dom   | ^18.2.0  |
| typescript  | ^4.9.4   |
| webpack     | ^5.75.0  |
| @babel/core | ^7.20.12 |
| eslint      | ^8.32.0  |
| prettier    | ^2.8.3   |

# 📖 설치 및 실행

## 설치

```powershell
yarn install
```

## 실행

- `yarn start`: 개발모드로 dev server 실행
- `yarn start:build`: 빌드 이후 serve 실행
- `yarn build`: 빌드 실행

```powershell
yarn start
yarn start:build
yarn build
```

# ⚙️ config 내용

## tsconfig.json

```json
{
  "compilerOptions": {
    /* 기본 옵션 */
    "target": "ES5" /* 사용할 특정 ECMAScript 버전 설정 */,
    "module": "ESNext" /* 모듈을 위한 코드 생성 설정 */,
    "lib": ["DOM", "ESNext"] /* 컴파일에 포함될 라이브러리 파일 목록 */,
    "jsx": "react-jsx" /* JSX 코드 생성 설정 */,
    "noEmit": true /* 결과 파일 내보낼지 여부 */,
    "isolatedModules": true /* 각 파일을 분리된 모듈로 트랜스파일 */,
    /* 타입 확인 옵션 */
    "strict": true /* 모든 엄격한 타입-체킹 옵션 활성화 여부. */,
    /* 모듈 해석 옵션 */
    "moduleResolution": "node" /* 모듈 해석 방법 설정 */,
    "esModuleInterop": true /* 모든 imports에 대한 namespace 생성을 통해 CommonJS와 ES Modules 간의 상호 운용성이 생기게할 지 여부 */,
    /* 추가 옵션 */
    "skipLibCheck": true /* 정의 파일의 타입 확인을 건너 뛸 지 여부 */,
    "forceConsistentCasingInFileNames": true /* 같은 파일에 대한 일관되지 않은 참조를 허용하지 않을 지 여부 */,
    "resolveJsonModule": true /* '.json' 확장자를 사용하여 모듈을 가져올 수 있는지 여부 */
  },
  "include": ["src/**/*"]
}
```

## .babelrc

- @babel/preset-env: Babel 플러그인과 polyfill을 자동 관리해주는 패키지
- @babel/preset-react: react 문법 변환 패키지
- @babel/preset-typescript: typescript 문법 변환 패키지
- @babel/runtime: Babel의 모듈식 runtime helper 패키지
- @babel/plugin-transform-runtime: Babel의 helper code 재사용 패키지

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

- babel-loader: webpack과 Babel을 이용해서 transpile하는 패키지
- webpack-bundle-analyzer: webpack 결과물의 크기를 시각화하는 패키지
- html-webpack-plugin: webpack 번들 HTML 파일을 동적으로 생성하는 패키지
- @svgr/webpack: svg파일을 리액트 컴포넌트처럼 사용할 수 있도록 하는 패키지
- @pmmmwh/react-refresh-webpack-plugin: React 컴포넌트를 위한 fast refresh 플러그인

## .eslintrc.js

```jsx
module.exports = {
  parser: '@typescript-eslint/parser' /* 코드 분석 파싱 툴로 TypeScript 설정 */,
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
    'plugin:@typescript-eslint/recommended' /* TypeScript에 맞는 룰 */,
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended' /* 실시간으로 JSX 요소에 대한 접근성 규칙 확인 */,
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'off' /* 사용하지 않는 변수, 함수, 매개변수 */,
    'react/prop-types': 'off' /* component props 타입 지정 */,
    'react/jsx-uses-react': 'off' /* import React 관련 처리 */,
    'react/react-in-jsx-scope': 'off' /* import React 관련 처리 */,
    '@typescript-eslint/explicit-module-boundary-types':
      'off' /* 함수 및 클래스의 명시적 반환 타입 설정 */,
    '@typescript-eslint/no-unused-vars': ['error'] /* TypeScript 버전의 no-unused-vars */,
    '@typescript-eslint/no-var-requires': 'off' /* require 사용시 import 사용 */,
  },
};
```

## .prettierrc.js

```jsx
module.exports = { singleQuote: true, trailingComma: 'all', printWidth: 100 };
```
