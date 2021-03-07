const router = require('express').Router()
const db = require('../db')
const { sql, poolPromise } = require('../db')

router.get('/', async (req, res) => {
  try {
    const pool = await poolPromise
    const result = await pool.request()
        .query('select * from [user] where user_id > 3 ')   


    res.json(result.recordset)
  } catch (err) {
    res.status(500)
    res.send(err.message)
  }
})


module.exports = router