
use("db-patissier");
db.dropDatabase();
db.createCollection("cake");

use("db-patissier");
db.cake.insertOne(
    {
        _id: ObjectId('111111111111'),
        nome:"Red velvet",
        preco:200,
        peso: 3,
        ingredientes:[
            {
            nome:"ovo",
            quantidade:4
           },
            {
            nome:"farinha de trigo",
            quantidade:1
           },
            {
            nome:"frutas vermelhas",
            quantidade:20
           }
        ]
    }
)
db.cake.insertOne(
    {
        _id: ObjectId('222222222222'),
        nome:"brownie",
        preco:100,
        peso: 1,
        ingredientes:[
            {
            nome:"barra de chocolate",
            quantidade:2
           },
            {
            nome:"ovo",
            quantidade:5
           },
            {
            nome:"oleo",
            quantidade:20
           }
        ]
    }
)
db.cake.insertOne(
    {
        _id: ObjectId('333333333333'),
        nome:"Purple dream",
        preco:1000,
        peso:150,
        ingredientes:[
            {
            nome:"corante roxo",
            quantidade:1
           },
            {
            nome:"glitter",
            quantidade:1
           },
            {
            nome:"blueberry",
            quantidade:20
           }
        ]
    }
)
db.cake.insertOne(
    {
        _id: ObjectId('444444444444'),
        nome:"bolo de banana",
        preco:70,
        peso: 1,
        ingredientes:[
            {
            nome:"banana",
            quantidade:4
           },
            {
            nome:"farinha",
            quantidade:1
           },
            {
            nome:"fermento",
            quantidade:20
           }
        ]
    }
)


//3
use("db-patissier");
db.cake.deleteMany({_id: ObjectId('111111111111')});

//4
use("db-patissier");
db.cake.find({},{nome:true,preco:true});

//5
use("db-patissier");
db.cake.find({"preco": {$lte: 70}},{nome:true,preco:true});

//6
use("db-patissier");
db.cake.updateOne(
        {_id: ObjectId("00000004823d2bdb5c5ed29d")},
        {
            $set:{nome:"code cake", preco:2},
            $push:{ingredientes:{nome:"ovo", quantidade:5}}
        }
        );

//7
use("db-patissier");
db.cake.updateOne({_id: ObjectId("00000002823d2bdb5c5ed29b"), "ingredientes.nome":"leite condensado"}, {
    $set:{
        "ingredientes.$.nome":"ovo",
        "ingredientes.$.quantidade":"3"
    }
});


//"cake.nome":"banana", "cake.quantidade":4

// use("teretreino");
// db.treino.find({_id:ObjectId("64f741c66a2e76ceb9abcb70")})

// use("teretreino");
// db.treino.updateOne({_id:ObjectId("64f741c66a2e76ceb9abcb70")}, {$set:{diaSemana:"Sexta",
// nome:"Peito e Biceps A"}})

// use("teretreino");
// db.treino.updateOne(
//     {_id:ObjectId("64f741c66a2e76ceb9abcb70"),"exercicios.nome":"Rosca Scott"}, 
//     {
//         $set:{
//             "exercicios.$.nome":"Rosca Scott",
//             "exercicios.$.serie":"5",
//             "exercicios.$.repeticoes":"12"
// }})