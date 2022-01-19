## Fulive客户端

###
项目运行需要美颜使用证书，具体引入方法请看src/fuSdk/main.ts文件内的`authpack.json`

### 安装
1. 安装node.js（如果因node版本不一致导致安装失败建议使用node`v14.17.1`版本）
2. 先在shell运行`export CNAMA_GPU=true`(32位需要额外运行`export CNAMA_TARGET_ARCH=ia32`)再运行`npm install`安装所需资源

### 以开发模式运行
`npm run start`

### 打包生成exe执行程序
`npm run package`

软件使用方法请参考帮助文档

