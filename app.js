const express = require('express')// loads the express package
const app = express() // create the express server
const port = 3001 // define the express port

app.use(express.static('public'))

//index page route
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(`${__dirname}/views/index.html`)
})

// About page route
app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

// Works page route
app.get('/works', (req, res) => {
    res.sendFile(`${__dirname}/views/works.html`)
})

// Gallery page route
app.get('/gallery', (req, res) => {
    res.sendFile(`${__dirname}/views/gallery.html`)
})
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})