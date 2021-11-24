const express = require('express');
const bodyparser = require('body-parser');
let items = [
  "work",
  "make game"
];
const app = express();

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({entended: true}));
app.use(express.static("public"));
app.get("/", function(req, res) {

  let today = new Date();

let options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day = today.toLocaleDateString("en-US" , options);


  res.render("index.ejs", {
    kindofday: day,
    newlistitems: items
  });
});

// app.post("/", function(req, res){
//   const post = {
//     title: req.body.postTitle,
//     content: req.body.postBody
//   };

//   posts.push(post);

//   res.redirect("/");

// });
app.get('/contact', function(req, res) {
  res.render('contact');
});
// app.post("/", function(req, res){
//   const post = {
//     title: req.body.postTitle,
//     content: req.body.postBody
//   };

//   posts.push(post);

//   res.redirect("");

// });

app.listen(80, function() {
  console.log("server is up");
});
<!DOCTYPE html>
<html lang="en">
<head>
  <%- include('../partials/head'); %>
</head>
<body class="container">

<header>
  <%- include('../partials/header'); %>
</header>

<main>
  <div class="jumbotron">
    <h1>This is great</h1>
    <p>Welcome to templating using EJS</p>
  </div>
</main>

<footer>
  <%- include('../partials/footer'); %>
</footer>

</body>
</html>



<link rel="stylesheet"
href="../public/css/styles.css">