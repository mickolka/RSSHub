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
            title: `$('.entry-list li a').text() + ' - %title%'`,
            link: `$('.entry-list li a').attr('href')`,
            pubDate: `new Date($('.entry-list li .short-meta .entry-date').attr('datetime')).toUTCString()`,
            guid: `new Date($('.entry-list li .short-meta .entry-date').attr('datetime')).getTime()`,
        },
    });
};