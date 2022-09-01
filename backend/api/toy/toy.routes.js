const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getToys, getToyById, addToy, updateToy, removeToy } = require('./toy.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', log, getToys)
router.get('/:id', getToyById)
// router.post('/', addToy)
// router.put('/:id', updateToy)
// router.delete('/:id', removeToy)
router.post('/', requireAuth, addToy)
router.put('/:id', requireAuth, updateToy)
router.delete('/:id', requireAuth, removeToy)

module.exports = router
