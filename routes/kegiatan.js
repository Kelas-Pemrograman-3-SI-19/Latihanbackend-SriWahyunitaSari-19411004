const router = require('express').Router()
const kegiatancontroller = require('../controller/kegiatan')

router.post('/insert', (req, res) => {
    kegiatancontroller.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = router