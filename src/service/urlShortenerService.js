var Url = require('../models/url');

class UrlShortenerService {

    async getAllUrls() {
        const urls = await Url.find({});
        return urls;
    }

    async createShortUrl(url) {
        const record = new Url({ originalUrl: url });
        await record.save();
    }

    async getOriginalUrl(shortCode) {
        const record = await Url.findOne({ shortUrl: shortCode });
        return record?.originalUrl;
    }

    async incrementClicks(shortCode) {
        return Url.findOneAndUpdate(
            { shortUrl: shortCode },
            { $inc: { clicks: 1 } },
            { new: true }
        );
    }
}

module.exports = UrlShortenerService;