const express = require('express')
const expressHandlebars = require('express-handlebars')
const handlers = require('./lib/handlers.js')
const path = require('path');

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000

// configure Handlebar's viwe engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')

// static middleware
app.use(express.static(__dirname + '/public'))

// landing page
app.use('/', handlers)

app.listen(port, () => {
    console.log(`Express started on http://localhost:${port}` +
        '; press Ctrl-C to terminate.')
})

module.exports = app