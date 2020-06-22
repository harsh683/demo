const db=require('../model/database');
let service={}

service.setupDb = ()=>{
    return db.createTables().then((data)=>{
        return db.populateTable().then(data=>{
            return data
        }).catch(error=>{
            console.log(error)
        })
    }).catch(error=>{
        console.log(error)
    })
}

service.getProvincesList = () =>{
    return db.getProvincesList().then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}


module.exports=service;