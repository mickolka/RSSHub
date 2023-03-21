module.exports = function (router) {
    router.get('/recent-posts', require('./recentPosts'));
};