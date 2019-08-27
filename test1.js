let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let db=[];

app.use(express.static('images'))
app.use(express.static('files'))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
    extended:false
}));

app.get('/',function (req,res) {
    res.render('index.html');
});

app.get('/newtask',function (req,res) {
    res.render('newtask.html');
});

app.post('/addnewtask',function (req,res) {
    db.push(req.body);
    res.redirect("/listtasks");
});

app.get('/listtasks',function (req,res) {
    res.render('listtasks.html', {tasksdb: db});
})

app.listen(8080);