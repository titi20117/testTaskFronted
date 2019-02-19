let http = require('http')
let express = require('express')
let app = express()
let server = http.Server(app)
let bodyParser = require('body-parser')
let photos = require('./models/photos_db.json')

app.set('view engine', 'ejs');

app.use('/assets', express.static('public'))
app.use('/views', express.static('views'))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('pages/index', {photos: photos})
})

server.listen(8080)