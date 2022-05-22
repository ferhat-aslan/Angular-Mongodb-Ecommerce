const express =require("express");
const bodyParser = require("body-parser");
const Post = require('./models/post');

const app=express();

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://feslan:feslan123@cluster0.t3qtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(()=>{
  console.log("Connected to database!");
}).catch(()=>{
  console.log("Connecting failed");
});





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");

  next();
})

app.post("/products",(req,res,next)=>{
  const post = new Post({
    title:req.body.title,
    price:req.body.price
  });
  post.save();
  console.log(post);
  res.status(201);
  next();
})

app.get('/products',(req,res,next)=>{
  const products= [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
      ]
    },
    {
      id: 2,
      title: "iPhone X",
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/2/thumbnail.jpg",
      images: [
        "https://dummyjson.com/image/i/products/2/1.jpg",
        "https://dummyjson.com/image/i/products/2/2.jpg",
        "https://dummyjson.com/image/i/products/2/3.jpg",
        "https://dummyjson.com/image/i/products/2/thumbnail.jpg"
      ]
    }
  ]
//res.status(200).json(products);
Post.find().then(doc=>{
console.log(doc);
res.status(200).json(doc);
})
});



module.exports=app;
