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
