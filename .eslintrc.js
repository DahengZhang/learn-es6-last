module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  /**
   * "off" 或 0      关闭规则
   * "warn" 或 1     开启规则，使用警告级别的错误，不会导致程序退出
   * "error" 或 2    开启规则，使用错误级别的错误，程序会退出
   * "*"             有此标注项会修复
   */
  "rules": {
    "strict": "error", //使用严格模式
    "indent": ["warn", 2, { "SwitchCase": 1 }], // 缩进风格为 3 *
    "linebreak-style": ["warn", "unix"], // 换行风格使用Unix *
    "quotes": ["error", "single"], // 引号使用单引号 *
    "semi": ["warn", "never"], // 语句分号结尾 *
    "no-console": "off", // 禁止使用console
    "no-eq-null": "error", // 禁止对null使用==或!=运算符
    "no-extra-parens": "warn", // 禁止非必要的括号 *
    "no-lone-blocks": "warn", // 禁止不必要的嵌套块
    "no-multiple-empty-lines": ["warn", { "max": 2 }], // 空行最多不能超过2行 *
    "no-new": "off", // 允许在使用new构造一个实例后不赋值
    "no-spaced-func": "error", // 函数调用时 函数名与()之间不能有空格 *
    "no-trailing-spaces": "warn", // 一行结束后面不要有空格 *
    "no-undef-init": "warn", // 变量初始化时不能直接给它赋值为undefined
    "no-var": "warn", // 禁用var，用let和const代替 默认关闭，必要时开启
    "eqeqeq": "warn", // 必须使用全等
    "newline-after-var": "warn", // 变量声明后是否需要空一行 *
    "spaced-comment": "warn", //注释风格要有空格 *
  },
  "globals": {
    "module": false
  },
  "plugins": []
};
