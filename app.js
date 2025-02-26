const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;


const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));  // Parses application/x-www-form-urlencoded data
app.use(express.json()); 

app.engine('ejs', ejsMate); // Use ejs-mate as the rendering engine
app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.static(path.join(__dirname,"/public")));
// Middleware for handling form data
app.use(methodOverride('_method'))

app.get('/wish', (req, res) => {
    res.render('index'); 
});

app.get('/wishpage', (req, res) => {
    res.render('wish'); // Make sure you have surprise.ejs inside the "views" folder
});


app.get('/lastpage', (req, res) => {
    res.render('para'); // Make sure you have surprise.ejs inside the "views" folder
});

app.get('/gallery', (req, res) => {
    res.render('gallery'); // Make sure you have surprise.ejs inside the "views" folder
});
app.get('/pic', (req, res) => {
    res.render('pic'); // No need to add .ejs
});






// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// ✅ Export app for Vercel
module.exports = app;