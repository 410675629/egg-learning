module.exports = app => {
    const {router, controller} = app;
    router.get('/', controller.home.index);
    router.get('/news', controller.news.list);
    router.get('/user/:id', controller.user.info);
    router.resources('posts', '/api/posts', controller.posts);
};