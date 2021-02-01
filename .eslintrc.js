// https://eslint.org/docs/user-guide/configuring

module.exports = {  
    extends: [  
        'plugin:vue/recommended'  
    ],  
    rules: {  
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "vue/max-attributes-per-line": "off",
        "no-alert": 0,  
        "no-multi-spaces": "error", // 禁止多个空格   
        /* "semi": [2, "always"] ,// 自动补充分号   */
       "quotes": ["error", "single"] // 使用单引号  
    }  
}
