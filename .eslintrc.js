module.exports = {
  root: true /* 代表当前文件所在目录为根目录，并在当前目录开启检测 */,
  env: {
    node: true /* 设置启动环境为node.js环境 */
  },
  extends: [
    /* eslint的扩展项 @vue/standard是当时选的标准规则 */
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    /* eslint解析器 */ parser: '@babel/eslint-parser'
  },
  rules: {
    /* eslint代码检查规则 */
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0 /* eslint和prettier冲突解决 函数和括号之间不需要加空格 */
  }
}
