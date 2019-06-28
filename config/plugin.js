
const path = require('path');
exports.ua = {
    enable: true,
    package: 'egg-ua',
    path: path.join(__dirname, '../lib/plugin/egg-ua'),
};


exports.nunjucks = {
    enable: true,
    package: 'egg-view-nunjucks'
};