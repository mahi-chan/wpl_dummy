import express from "express"
import mysql from "mysql"
import cors from "cors"
const app = express()

const db = mysql.createConnection({  
    host:"localhost",
    user:"root",
    password:"love",
    database:"test"
})

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.json("hello this is the backend")
})

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.put('/', (req,res)=>{
    const q = "update `books` set `title`= (?), `desc`=(?), `cover`=(?) where `id`= (?) ";
    const id = req.body.id;
    const title = req.body.title;
    const desc = req.body.desc;
    const cover = req.body.cover;

    db.query(q, [id, title, desc, cover], (err, data)=>{
        if (err) return res.json("Error!");
        return res.json(data);
    })
})


app.listen(8800, ()=>{
    console.log("Connected to backend!1")
})