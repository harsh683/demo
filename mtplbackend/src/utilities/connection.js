
const pgp = require('pg-promise')()

const cn = {
    user: 'postgres',
    host: 'localhost',
    database: 'mtplDB',
    password: '12345678',
    port: 5432,
}
const db = pgp(cn)



module.exports=db

