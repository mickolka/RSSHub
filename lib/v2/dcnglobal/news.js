const got = require('got');
const cheerio = require('cheerio');

const url = 'https://dcnglobal.net/news';
const functionName = 'window.__NUXT__';

module.exports = async (ctx) => {
    const response = await got({
        method: 'get',
        url,
    });
    const $ = cheerio.load(response.body);
    $('script').each((i, el) => {
    const scriptContent = $(el).html();
    if (scriptContent.startsWith(functionName)) {
        const NUXT = eval(scriptContent.slice(16));
        const data = NUXT.data[0].page.sections[0].content.data.news;
        ctx.state.data = {
            title: `DCN Global`,
            link: url,
            description: `DCN Global`,
            item: data.map((item) => ({
                title: item.title,
                description: item.description,
                pubDate: item.updated_at,
                link: `https://dcnglobal.net/posts/news/${item.slug}`
            })),
        };
        return false;
    }
    });
};
