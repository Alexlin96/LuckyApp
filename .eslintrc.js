module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", 'plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    "vue/html-self-closing": ["error", {
      "html": {
          "void": "never",
          "normal": "any",
          "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }], // 自闭合标签
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off", // 只有开发环境可以使用console
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off", // 只有开发环境可以使用debugger
    "vue/singleline-html-element-content-newline": "off", //单行html元素内容在新的一行
    "vue/multiline-html-element-content-newline":"off", // 多行html元素内容在新的一行
    "vue/name-property-casing": ["error", "PascalCase"],  // 对Vue组件中的name属性强制使用特定大小写 PascalCase首字母大写
    "vue/no-v-html": "off", // 禁用v-html
    "vue/attribute-hyphenation": ["never", { // 强制属性断字
      "ignore": []
    }],
    'accessor-pairs': 2, // 应同时设置setter和getter
    'arrow-spacing': [2, { // 箭头间距
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'], // 块间距
    'brace-style': [2, '1tbs', { 
      'allowSingleLine': true // 大括号样式允许单行
    }],
    'camelcase': [0, {
      'properties': 'always' //为属性强制执行驼峰命名
    }],
    'comma-dangle': [2, 'never'], // 逗号不使用悬挂
    'comma-spacing': [2, { // 逗号间距
      'before': false,
      'after': true
    }],
    'comma-style': [2, 'last'], // 默认与数组元素，对象属性或变量声明在同一行之后和同一行需要逗号
    'constructor-super': 2, //在constructor函数中，如果classes是继承其他class，那么请使用super。否者不使用super
    'curly': [2, 'multi-line'], // 在if-else语句中，如果if或else语句后面是多行，那么必须加大括号。如果是单行就应该省略大括号。
    'dot-location': [2, 'property'], // "property"，成员表达式中的点应与属性部分位于同一行 , "object"，成员表达式中的点应该与对象部分位于同一行。
    'eol-last': 2, // 强制文件以换行符结束（LF）
    'eqeqeq': ["error", "always", {"null": "ignore"}], // 强制使用全等
    'generator-star-spacing': [2, { // 生成器中'*'两侧都要有间距
      'before': true,
      'after': true
    }],
    'handle-callback-err': [2, '^(err|error)$'], // 规定callback 如果有err参数，只能写出err 或者 error 
    'indent': [2, 2, { // 缩进风格
      'SwitchCase': 1
    }],
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'jsx-quotes': [2, 'prefer-single'], // 对所有不包含单引号的JSX属性值强制使用单引号
    'key-spacing': [2, { // 强制在对象字面量属性中的键和值之间保持一致的间距
      'beforeColon': false,
      'afterColon': true
    }],
    'keyword-spacing': [2, { // // 关键字如if/function等的间距
      'before': true,
      'after': true
    }],
    'new-cap': [2, { // 允许在没有new操作符的情况下调用大写启动的函数;（默认）要求new使用大写启动函数调用所有操作符
      'newIsCap': true,
      'capIsNew': false
    }],
    'new-parens': 2, // JavaScript通过new关键字调用函数时允许省略括号 在使用构造函数时候，函数调用的圆括号不能够省略
    'no-array-constructor': 2, // 不允许使用Array构造函数。除非要指定生成数组的长度
    'no-class-assign': 2, // 禁止给类赋值
    'no-cond-assign': 2, // 禁止在条件表达式中使用赋值语句
    'no-const-assign': 2, // 不能修改使用const关键字声明的变量
    'no-control-regex': 0, // 不允许正则表达式中的控制字符
    'no-delete-var': 2, // 不允许在变量上使用delete操作符
    'no-dupe-args': 2, // 不允许在函数声明或表达式中使用重复的参数名称
    'no-dupe-class-members': 2, // 不允许在类成员中使用重复的参数名称
    'no-dupe-keys': 2, // 不允许在对象文字中使用重复键
    'no-duplicate-case': 2, // 不允许在switch语句的case子句中使用重复的测试表达式
    'no-empty-character-class': 2, // 不允许在正则表达式中使用空字符类
    'no-empty-pattern': 2, // 不允许空块语句
    'no-eval': 2, // 不允许使用eval
    'no-ex-assign': 2, // 不允许在catch子句中重新分配例外
    'no-extend-native': 2, // 不允许直接修改内建对象的原型
    'no-extra-boolean-cast': 2, // 禁止不必要的布尔转换
    'no-extra-parens': [2, 'functions'], // 仅在函数表达式附近禁止不必要的括号
    "no-fallthrough": 1,//禁止switch穿透
    'no-floating-decimal': 2, //消除浮点小数点，并在数值有小数点但在其之前或之后缺少数字时发出警告
    'no-func-assign': 2, // 允许重新分配function声明
    'no-implied-eval': 2, // 消除隐含eval()
    'no-inner-declarations': [2, 'functions'], // 不允许function嵌套块中的声明 if里面 不允许对函数进行声明
    'no-invalid-regexp': 2, //不允许RegExp构造函数中的无效正则表达式字符串
    'no-irregular-whitespace': 2, //捕获无效的空格
    'no-iterator': 2, //消除阴影变量声明
    'no-label-var': 2, //禁止创建与范围内的变量共享名称的标签
    'no-labels': [2, { // 消除 JavaScript 中使用带标签的语句 无限循环的问题
      'allowLoop': false,
      'allowSwitch': false
    }],
    'no-lone-blocks': 2, //消除脚本顶层或其他块中不必要的和可能混淆的块
    'no-mixed-spaces-and-tabs': 2, // 不允许使用混合空格和制表符进行缩进
    'no-multi-spaces': 2, // 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格
    'no-multi-str': 2, // 防止使用多行字符串
    'no-multiple-empty-lines': [2, { // 最多一个空行
      'max': 1
    }],
    "vue/max-attributes-per-line": [2, { // 强制每行的最大属性数
      "singleline": 10, // 当开始标记在一行中时，每行的最大属性数
      "multiline": { // 当开始标记位于多行中时，每行的最大属性数
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'no-native-reassign': 2, // 不允许修改只读全局变量
    'no-new-object': 2, // 不允许使用Object构造函数
    'no-new-require': 2, // 消除new require表达的使用
    'no-new-symbol': 2, // 防止Symbol与new 同时使用的意外错误
    'no-new-wrappers': 2, // 杜绝使用String，Number以及Boolean与new操作
    'no-obj-calls': 2, // 不允许调用Math，JSON和Reflect对象作为功能
    'no-octal': 2, // 不允许使用八进制文字
    'no-octal-escape': 2, // 不允许字符串文字中的八进制转义序列
    'no-path-concat': 2, // 防止 Node.js 中的目录路径字符串连接无效 （dirname 和 filename进行字符串连接）
    'no-proto': 2, // 不能使用__proto__来获取原型 (弃用__proto__)
    'no-redeclare': 2, // 消除在同一范围内具有多个声明的变量
    'no-regex-spaces': 2, // 在正则表达式文字中不允许有多个空格
    'no-return-assign': [2, 'except-parens'], // 消除return陈述中的任务，除非用括号括起来
    'no-self-assign': 2, // 消除自我分配(自己给自己赋值)
    'no-self-compare': 2, // 禁止比较变量与自身
    'no-sequences': 2, // 禁止使用逗号运算符
    'no-shadow-restricted-names': 2, // 禁止对NaN、Infinity、undefined、eval、arguments这种词进行定义 var undefined
    'no-sparse-arrays': 2, // 不允许稀疏数组文字 [ "red",, "blue" ];
    'no-this-before-super': 2, // class在呼call前标记this/super关键字super()
    'no-throw-literal': 2, // 不允许抛出不可能是Error对象的文字和其他表达式
    'no-trailing-spaces': 2, // 不允许在行尾添加尾随空白
    'no-undef': 2, // 任何对未声明的变量的引用都会导致错误
    'no-undef-init': 2, // 消除初始化为undefined的变量声明
    'no-unexpected-multiline': 2, // 不允许混淆多行表达式
    'no-unmodified-loop-condition': 2, // 查找循环条件内的引用，然后检查这些引用的变量是否在循环中被修改
    'no-unneeded-ternary': [2, { // 不允许将条件表达式作为默认的分配模式
      'defaultAssignment': false
    }],
    'no-unreachable': 2, // 不允许可达代码return，throw，continue，和break语句后面还有语句。
    'no-unsafe-finally': 2, // 不允许return，throw，break，和continue里面的语句finally块
    'no-unused-vars': [2, { // 消除未使用的变量，函数和函数的参数
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2, // 标记使用情况，Function.prototype.call()并且Function.prototype.apply()可以用正常的函数调用来替代
    'no-useless-computed-key': 2, // 禁止不必要地使用计算属性键
    'no-useless-constructor': 2, // 在不改变类的工作方式的情况下安全地移除的类构造函数
    'no-useless-escape': 0, // 禁用不必要的转义字符
    'no-whitespace-before-property': 2, // 如果对象的属性位于同一行上，不允许围绕点或在开头括号之前留出空白
    'no-with': 2, //禁用with
    'one-var': [2, {
      'initialized': 'never'
    }],
    'operator-linebreak': [2, 'after', { // 实施一致的换行
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    'padded-blocks': [2, 'never'], // 在块内强制执行一致的空行填充
    'quotes': [2, 'single', { // avoidEscape: true 允许字符串使用单引号或双引号，只要字符串包含必须以其他方式转义的引号 ;allowTemplateLiterals: true 允许字符串使用反引号
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'], // 不使用分号
    'semi-spacing': [2, { // 强制分号间隔情况
      'before': false,
      'after': true
    }],
    'space-before-blocks': [2, 'always'], // 块必须至少有一个先前的空间
    'space-before-function-paren': [2, 'never'], // 在function名后面不允许任何空格
    'space-in-parens': [2, 'never'], // 禁止或要求（或）左边的一个或多个空格
    'space-infix-ops': 2, // 强制二元运算符左右各有一个空格
    'space-unary-ops': [2, {  
      'words': true, //  words: true  如：new，delete，typeof，void，yield 左右必须有空格
      'nonwords': false //  nonwords: false  一元运算符，如：-，+，--，++，!，!!左右不能有空格
    }],
    'spaced-comment': [2, 'always', { // 注释开始后，此规则将强制间距的一致性//或/*
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    'template-curly-spacing': [2, 'never'], // 不允许大括号内的空格
    'use-isnan': 2, //禁止比较时使用NaN，只能用isNaN()
    'valid-typeof': 2, //必须使用合法的typeof的值
    'wrap-iife': [2, 'any'], //立即执行函数表达式的小括号风格
    'yield-star-spacing': [2, 'both'], // 强制执行*周围 yield*表达式的间距，两侧都必须有空格
    'yoda': [2, 'never'],// 要求或禁止 “Yoda” 条件
    'prefer-const': 2, // 使用let关键字声明的变量，但在初始分配后从未重新分配变量，应改为const声明
    'object-curly-spacing': [2, 'always', { // 不允许以对象元素开始和/或以对象元素结尾的对象的大括号内的间距
      objectsInObjects: false
    }],
    'array-bracket-spacing': [2, 'never'] // 不允许数组括号内的空格
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};