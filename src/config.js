export default {
    dblink: process.env.DBLINK || 'mongodb://localhost:27017/database_name',
    secret: process.env.SECRET || 'thesuppersecret'
}