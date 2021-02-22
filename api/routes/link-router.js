const express = require('express')

const LinkCtrl = require('../controllers/link-controller')

const router = express.Router()

router.get('/', LinkCtrl.getLinks)
router.post('/', LinkCtrl.createLink)
router.get('/:key', LinkCtrl.getLink)
router.put('/:key', LinkCtrl.updateLink)
router.delete('/:key', LinkCtrl.deleteLink)


module.exports = router
