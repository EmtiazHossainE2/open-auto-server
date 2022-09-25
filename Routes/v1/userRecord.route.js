const router = require('express').Router()
const {newRecord,getUserRecord} = require('../../Controllers/v1/userRecord.controller.js')

router.route('/')
.get(getUserRecord)
.post(newRecord)

module.exports = router