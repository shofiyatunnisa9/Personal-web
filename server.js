const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "hbs");

app.use(express.static("assets"));

//HALAMAN HOME
app.get("/", (req, res) => {
  // res.send("Hello Express ! ini halaman Home");
  res.render("index");
});

//CONTACT ME
app.get("/contact", (req, res) => {
  res.render("contact");
});

// BLOG
app.get("/blog", (req, res) => {
  res.render("blog");
});

// BLOG DETAIL
app.get("/blog/:id", (req, res) => {
  res.render("blog_detail");
});

//TESTIMONIAL
app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

// //REQUEST PARAMS
// app.get("/about/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(`Hello ini halaman tentang saya ${id}`);
// });

// //REQUEST QUERY

// app.get("/blog", (req, res) => {
//   //   const title = req.query.title;
//   //   const author = req.query.author;
//   //   const year = req.query.year;
//   const { title, author, year } = req.query;

//   res.send(`ini halaman blog ${title} dengan author ${author} tahun ${year}`);
// });

app.listen(port, () => {
  console.log(`My personal web and listening on post ${port}`);
});
// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello everyone  mymy!");
// });
// app.listen(port, () => {
//   console.log(`My personal web app listening on part ${port}`);
// });
