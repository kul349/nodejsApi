import express from "express";
const app=express();
const port=3000;

app.use(express.json());
let items =[
    {id:1,name:"item one"},
    {id:2,name:"item two"}
];

app.get('/items',(req, res) => {
    res.status(200).json(items);
});
app.post('/items', (req, res)=> {
    const newItem={id:items.length+1,name:req.body.name}
    items.push(newItem);
    res.status(200).json(items);
  });
  app.put('/items/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if(item) {
        item.name = req.body.name;
        res.json(items);
    }else{
        res.status(404).send("item not found");
    }
  })
app.listen(port,()=>{
    console.log(` server is listening on ${port}`);
});
