db.produtos.updateMany({},
{
    $push: {
      vendasPorDia: {
        $each: [0, 0, 0, 0, 0, 0, 0], 
      },
    },
},
{
  upsert: true,
});

db.produtos.updateOne({
  nome: "Big Mac",
},
{
  $inc: {
    "vendasPorDia.4": 60,
  }, 
});

db.produtos.updateMany({
  tags: [
    "bovino",
    "pão",
],
},
{
  $inc: {
    "vendasPorDia.7": 120,
  }, 
});

db.produtos.find({},
{
  nome: 1, vendasPorDia: 1, _id: 0,
});
