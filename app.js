const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/create', (req, res) => {
    res.render('create')
})

const notes = ['Some awesome title', 'Some awesome title']

app.get('/notes', (req, res) => {
    res.render('notes', { notes: notes })
})

app.get('/notes/detail', (req, res) => {
    res.render('detail')
})

app.listen(8000, err => {
    if (err) console.log(err)

    console.log('Server is running on port 8000...')
})
