const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const methodOverride = require("method-override");
const flash = require("express-flash");
const session = require("express-session");

const { contact, testimonials } = require("./controllers/controller-v1");
const {
  renderHome,
  renderLogin,
  renderRegister,
  renderContact,
  renderTestimonials,
  renderError,
  authLogin,
  authRegister,
  authLogout,
  renderBlog,
  renderBlogDetail,
  deleteBlog,
  renderBlogCreate,
  createBlog,
  renderBlogEdit,
  updateBlog,
} = require("./controllers/controller-v2");
const { formatDateToWIB, getRelativeTime } = require("./utils/time");
const upload = require("./middleware/upload-file");
const chechUser = require("./middleware/auth");

const port = 3000;

// const { log } = require("console");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

//modul apa saja yang kita gunakan didalam express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets")); //agar bisa mengakses assets
app.use("/uploads", express.static(path.join(__dirname, "./uploads"))); //agar bisa mengakses assets
app.use(methodOverride("_method"));
app.use(flash());
app.use(
  session({
    name: "my-session",
    secret: "akjhgt09876",
    resave: false,
    saveUninitialized: true,
  })
);

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

//HALAMAN HOME
app.get("/", renderHome);
app.get("/login", renderLogin);
app.get("/register", renderRegister);

app.get("/logout", authLogout);
app.post("/login", authLogin);

app.post("/register", authRegister);

//CONTACT ME
app.post("/contact", renderContact);

// BLOG LIST
app.get("/blog", renderBlog);

//CREATE BLOG PAGE
app.post("/blog-create", chechUser, upload.single("image"), createBlog);

//SUBMIT NEW BLOG
app.get("/blog-create", chechUser, renderBlogCreate);

//Edit Blog
app.get("/blog-edit/:id", renderBlogEdit);

// SUBMIT/SAVE UPDATE BLOG
app.patch("/blog-update/:id", updateBlog);

// DELETE EXISTING BLOG
app.delete("/blog/:id", deleteBlog);

// BLOG DETAIL
app.get("/blog/:id", renderBlogDetail);

//TESTIMONIAL
app.get("/testimonials", renderTestimonials);

//404
app.get("*", (req, res) => {
  res.render("page-404");
});
app.listen(port, () => {
  console.log(`My personal web and listening on post ${port}`);
});
