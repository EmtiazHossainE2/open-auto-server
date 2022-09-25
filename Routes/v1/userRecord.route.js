const router = require('express').Router()
const {newRecord} = require('../../Controllers/v1/userRecord.controller.js')

router.route('/').post(newRecord)

module.exports = router