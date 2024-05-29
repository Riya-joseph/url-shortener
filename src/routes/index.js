var Router = require('express');
var UrlShortenerService = require('../service/urlShortenerService');

const router = Router();

router.get('/', async (req, res) => {
    const urls = await new UrlShortenerService().getAllUrls();
    res.render('index', { shortUrls: urls })
});

router.post('/short', async (req, res) => {
    await new UrlShortenerService().createShortUrl(req.body?.fullUrl);
    res.redirect('/');
});

router.get('/:shortId', async (req, res) => {
    const originalUrl = await new UrlShortenerService().getOriginalUrl(req.params.shortId);
    if (!originalUrl) return res.sendStatus(404);
    await new UrlShortenerService().incrementClicks(req.params.shortId);
    res.redirect(originalUrl);
});

module.exports = router;