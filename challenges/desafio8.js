const collection = db.produtos;

collection.updateOne(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } },
);

collection.find({}, { _id: 0, nome: 1, ingredientes: 1 });
