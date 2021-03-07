const sql = require('mssql')
var config = {
    user: 'sa16op',
    password: '6119945SA!^op',
    server: '4p02recipeserver.database.windows.net', 
    database: '4p02RecipeDatabase' 
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}