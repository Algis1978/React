const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express()
const port = 3003

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "zverincius",
    password: "root"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(cors());

app.use(express.urlencoded({
    extended: true
    }))
app.use(express.json());

//Routingas - nustatomas kelias narsykles uzklausai
app.get('/', (req, res) => {
  res.send('<h1>Hello World! Yeahhhh! Boom Boom</h1>')
})
//req - is stringo padarytas objektas, ateinantis is narsykles
// res - atsakymas narsyklei
// labas dvitaskis nurodo parametra (id)
app.get('/labas:id', (req, res) => {
  res.send(`<h1>UHU-HUB-UH-U<br> ${req.params.id}</h1>`)
})
app.get('/labas', (req, res) => {
    res.send(`<h1>UHU-HUB-UH-U</h1>`)
  })

app.get('/JSONtest', (req, res) => {
    res.send(JSON.stringify({JSONtest: 'Viskas OK'}))
  })

app.get('/zveris', (req, res) => {
  const sqlUzklausa = `select * from zveris`
  con.query(sqlUzklausa, (err, results) =>{
  if (err) {console.log("Klaida");throw err}
  else {res.send(results)} 
  })})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})