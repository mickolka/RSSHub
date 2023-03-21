const buildData = require('@/utils/common-config');

module.exports = async (ctx) => {
    const link = `https://joe-list.de/en/recent-posts/`;
    ctx.state.data = await buildData({
        link,
        url: link,
        title: `%title%`,
        params: {
            title: 'JOE-List',
        },
        item: {
            item: '.entry-list li',
            title: `$('a').text() + ' - %title%'`,
            link: `$('a').attr('href')`,
            pubDate: `new Date($('.short-meta .entry-date').attr('datetime')).toUTCString()`,
            guid: `new Date($('.short-meta .entry-date').attr('datetime')).getTime()`,
        },
    });
};