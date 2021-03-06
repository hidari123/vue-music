# vue-music

## 组件分类
    1. 智能组件（数据获取，数据过滤...）
    2. 木偶组件（渲染视图）

    https://github.com/hai-27/vue-store

## 接口文档
```
网易音乐参考地址：https://binaryify.github.io/NeteaseCloudMusicApi/#/
1.推荐歌单：http://iwenwiki.com:3000/recommend/resource
2.推荐歌曲：http://iwenwiki.com:3000/personalized/newsong
3.歌单歌曲详情：http://iwenwiki.com:3000/playlist/detail?id=2829779628
4.获取音乐 url：http://iwenwiki.com:3000/song/url?id=1298038069
5.歌单 ( 网友精选碟 ):http://iwenwiki.com:3000/top/playlist?limit=2&order=new
order参考值：hot new
6.电台分类：http://iwenwiki.com:3000/dj/recommend/type?type=2
7.歌词：http://iwenwiki.com:3000/lyric?id=1462342189
8.搜索：http://iwenwiki.com:3000/search?keywords=%E5%B1%B1%E4%B8%98
```

###  vscode eslint 配置
```json
{
    // vscode默认启用了根据文件类型自动设置tabsize的选项
    "editor.detectIndentation": false,
    // 重新设定tabsize
    "editor.tabSize": 4,
    // #值设置为true时，每次保存的时候自动格式化；值设置为false时，代码格式化请按shift+alt+F
    "editor.formatOnSave": false,
    // #每次保存的时候将代码按eslint格式进行修复
    "eslint.autoFixOnSave": true,
    // 添加 vue 支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    //  #让prettier使用eslint的代码格式进行校验
    "prettier.eslintIntegration": true,
    //  #去掉代码结尾的分号
    "prettier.semi": false,
    //  #使用带引号替代双引号
    "prettier.singleQuote": true,
    "prettier.tabWidth": 4,
    //  #让函数(名)和后面的括号之间加个空格
    "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
    // #这个按用户自身习惯选择
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // #让vue中的js按"prettier"格式进行格式化
    "vetur.format.defaultFormatter.js": "prettier",
    "vetur.format.defaultFormatterOptions": {
        "js-beautify-html": {
            // #vue组件中html代码格式化样式
            "wrap_attributes": "force-aligned", //也可以设置为“auto”，效果会不一样
            "wrap_line_length": 200,
            "end_with_newline": false,
            "semi": false,
            "singleQuote": true
        },
        "prettier": {
            "semi": false,
            "singleQuote": true
        }
    },
    "[jsonc]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    // 格式化stylus, 需安装Manta's Stylus Supremacy插件
    "stylusSupremacy.insertColons": false, // 是否插入冒号
    "stylusSupremacy.insertSemicolons": false, // 是否插入分号
    "stylusSupremacy.insertBraces": false, // 是否插入大括号
    "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
    "stylusSupremacy.insertNewLineAroundBlocks": false,
    "prettier.useTabs": true,
    "files.autoSave": "off",
    "explorer.confirmDelete": false,
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "diffEditor.ignoreTrimWhitespace": false // 两个选择器中是否换行
}
```