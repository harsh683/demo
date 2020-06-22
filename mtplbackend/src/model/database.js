const db = require ('../utilities/connection')
const pgp = require('pg-promise')()

const operations = {}

const provinces = [
    {
        "pname": "Blagoevgrad"
    },
    {
        "pname": "Burgas"
    },
    {
        "pname": "Dobrich"
    },
    {
        "pname": "Gabrovo"
    },
    {
        "pname": "Haskovo"
    },
    {
        "pname": "Kardzhali"
    },
    {
        "pname": "Kyustendil"
    },
    {
        "pname": "Lovech"
    },
    {
        "pname": "Montana"
    },
    {
        "pname": "Pazardzhik"
    },
    {
        "pname": "Pernik"
    },
    {
        "pname": "Pleven"
    },
    {
        "pname": "Plovdiv"
    },
    {
        "pname": "Razgrad"
    },
    {
        "pname": "Ruse"
    },
    {
        "pname": "Shumen"
    },
    {
        "pname": "Silistra"
    },
    {
        "pname": "Sliven"
    },
    {
        "pname": "Smolyan"
    },
    {
        "pname": "Sofia-grad"
    },
    {
        "pname": "Sofia (province)"
    },
    {
        "pname": "Stara Zagora"
    },
    {
        "pname": "Targovishte"
    },
    {
        "pname": "Varna"
    },
    {
        "pname": "Veliko Tarnovo"
    },
    {
        "pname": "Vidin"
    },
    {
        "pname": "Vratsa"
    },
    {
        "pname": "Yambol"
    }
]

const cs = new pgp.helpers.ColumnSet(['pname'],{table:'provinces'})
const query = () => pgp.helpers.insert(provinces,cs);

operations.createTables = () =>{
    return db.any('CREATE TABLE provinces (pname text)')
    .then(data => {
        return ('table provinces created successfully')
    })
    .catch(error => {
        console.log(error);
    });
}

operations.populateTable = () =>{
    return db.any(query).then(data=>{
        console.log("columns updated")
        return ('provinces table created and updated')
    }).catch(error=>{
        console.log(error)
    })
}

operations.getProvincesList = () =>{
    return db.any('select array (select pname from provinces)').then(data=>{
        return data
    }).catch(error=>{
        console.log(error)
    })
}

module.exports = operations;
