module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 0 /* 关闭组件多单词规则 */,
    'vue/valid-template-root': 0 /* 关闭组件必须有节点规则 */,
    'space-before-function-paren': 'off' /* 关闭方法名后增加空格规则 */
  }
}
