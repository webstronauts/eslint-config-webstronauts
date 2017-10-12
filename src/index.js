export default {
  parser: require.resolve('babel-eslint'),
  extends: 'airbnb',
  rules: {
    'array-bracket-spacing': [ 'error', 'always', { objectsInArrays: false }],
    'arrow-parens': [ 'error', 'as-needed' ],
    'comma-dangle': [ 'error', {
      arrays: 'only-multiline', objects: 'only-multiline', imports: 'never', exports: 'never', functions: 'ignore'
    }],
    'react/jsx-filename-extension': [ 'error', {
      extensions: [ '.js', '.jsx' ]
    }],
    'react/prop-types': 'off'
  }
};
