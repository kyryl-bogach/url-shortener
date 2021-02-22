const Link = require('../models/link-model')

getLinks = async (req, res) => {
    const links = await Link.find({});
    return res.status(200).json(links)
}

createLink = async (req, res) => {
    const body = req.body
    if ( ! body?.key || ! body?.value) {
        return res.sendStatus(400)
    }

    const existingLinkKey = await Link.findOne({ key: body.key })
    if (existingLinkKey) {
        return res.sendStatus(409)
    }

    const link = new Link(body)
    await link.save()

    return res.sendStatus(201)
}


getLink = async (req, res) => {
    const link = await Link.findOne({ key: req.params.key });

    if ( ! link) {
        return res.sendStatus(404)
    }

    if (req.headers['accept'] === 'application/json') {
        return res.status(200).json(link)
    }

    return res.redirect(link.value)
}

updateLink = async (req, res) => {
    const body = req.body

    if ( ! body?.value) {
        return res.sendStatus(400)
    }

    const updatedLink = await Link.findOneAndUpdate({ key: req.params.key }, { value: body.value })
    if (! updatedLink) {
        return res.sendStatus(404)
    }

    return res.sendStatus(200)
}

deleteLink = async (req, res) => {
    const deletedLink = await Link.findOneAndDelete({ key: req.params.key });
    if ( ! deletedLink) {
        return res.sendStatus(404)
    }

    return res.sendStatus(204);
}

module.exports = {
    getLinks,
    createLink,
    getLink,
    updateLink,
    deleteLink
}
