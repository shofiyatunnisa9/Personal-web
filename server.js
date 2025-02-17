const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override");

const { contact, testimonials, home } = require("./controllers/controller-v1");
const {
  renderBlog,
  renderBlogDetail,
  deleteBlog,
  renderBlogCreate,
  createBlog,
  renderBlogEdit,
  updateBlog,
} = require("./controllers/controller-v2");
const { formatDateToWIB, getRelativeTime } = require("./utils/time");

const port = 3000;

// const { log } = require("console");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(methodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

//HALAMAN HOME
app.get("/", home);

//CONTACT ME
app.get("/contact", contact);

// BLOG LIST
app.get("/blog", renderBlog);

//CREATE BLOG PAGE
app.post("/blog-create", createBlog);

//SUBMIT NEW BLOG
app.get("/blog-create", renderBlogCreate);

//Edit Blog
app.get("/blog-edit/:id", renderBlogEdit);

// SUBMIT/SAVE UPDATE BLOG
app.patch("/blog-update/:id", updateBlog);

// DELETE EXISTING BLOG
app.delete("/blog/:id", deleteBlog);

// BLOG DETAIL
app.get("/blog/:id", renderBlogDetail);

//TESTIMONIAL
app.get("/testimonials", testimonials);

//404
app.get("*", (req, res) => {
  res.render("page-404");
});
app.listen(port, () => {
  console.log(`My personal web and listening on post ${port}`);
});
