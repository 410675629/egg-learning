exports.keys = '1234567890'

// 添加 view 配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    }
};

// config/config.default.js
// 添加 news 的配置项
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};


// config/config.default.js
exports.robot = {
    ua: [
      /curl/i,
      /Baiduspider/i,
    ],
  };