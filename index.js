const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const Course = require('./models/courses')

const PORT = 3000;
const app = express();

const db = 'mongodb+srv://antonafonin:thisismongodbpassword123@cluster0.7m5hh7d.mongodb.net/school_program?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => console.log('Connected to DB'))
    .catch((error) => console.log(error))

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('styles'));
// app.use(express.static(__dirname + '/static'));

app.use((req, res, next) => {
    console.log('path '+ req.path)
    next();
})

const createPath = (page) => path.resolve(__dirname, 'views', page + '.ejs')

app.get('/', (req, res) => {
    const courses = [
        { name: 'Math', grade: '6', code: 'rersdfsd123'},
        { name: 'English', grade: '6', code: 'rersdfsd123'},
        { name: 'Ukrainian', grade: '6', code: 'rersdfsd123'},
        { name: 'Geography', grade: '7', code: 'rersdfsd123'},
        { name: 'Geography', grade: '7', code: 'rersdfsd123'},
        { name: 'Geography', grade: '7', code: 'rersdfsd123'},
        { name: 'Geography', grade: '7', code: 'rersdfsd123'}
    ]
    res.render(createPath('index'), { courses });
})

app.get('/create-course', (req, res) => {
    res.render(createPath('create-course'));
})

// app.use(express.static(path.resolve(__dirname, 'static')));

app.listen(PORT, () => {
    console.log("Server has started at localhost:" + PORT)
});

app.post('/checkAndSave', (req, res) => {
    const { name, grade, code } = req.body;
    const course = new Course({ name, grade, code });
    course
        .save()
        .then((result) => res.redirect('index.html'))
        .catch((err) => console.log(err))
    // 
})


