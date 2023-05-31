# wxyweb

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### less-loader 插件作用把less文件编译为css文件

### fileDownload 下载函数
fileDownload(url, name) 传递文件url和文件name即可

### 问题记录
1.解决页面刷新404问题
location / {
  root ...
  index ...
  try_files $uri $uri/ /index.html;  // 解决页面刷新404问题
}

2.网站ico图标
网站图标需上传透明背景图片,否则会有色块


