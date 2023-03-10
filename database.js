const {
    createPool
}=require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"test",
    connectionLimit:10

})
pool.query(`select *from childrens`,(err,res)=>{
    console.log(res)
})


