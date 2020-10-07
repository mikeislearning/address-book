module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'eslint-comments/no-unlimited-disable': 'off',
    'no-underscore-dangle': 'off',
    'react/prefer-stateless-function': 'off',
    'no-undef': 2,
    'import/imports-first': 'off',
    'no-use-before-define': ['error', { variables: false }],
  },
};
