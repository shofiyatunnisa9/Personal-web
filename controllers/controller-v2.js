const { Sequelize, QueryTypes, where } = require("sequelize");
const bcrypt = require("bcrypt");
const config = require("../config/config.json");
const { Blog, User } = require("../models");
const sequelize = new Sequelize(config.development);

const saltRounds = 10;

async function renderHome(req, res) {
  const user = req.session.user;
  res.render("index", { user: user });
}
async function renderContact(req, res) {
  const user = req.session.user;
  res.render("contact", { user: user });
}
async function renderTestimonials(req, res) {
  const user = req.session.user;
  res.render("testimonials", { user: user });
}
async function renderLogin(req, res) {
  const user = req.session.user;
  if (user) {
    req.flash("warning", "User tidak ditemukan");
    res.redirect("/");
  } else {
    res.render("auth-login", { user: user });
  }
}
async function renderRegister(req, res) {
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("auth-register", { user: user });
  }
}

async function authLogin(req, res) {
  const { email, password } = req.body;
  // console.log(`yang mau login : ${email}  ${password}`);

  //check kalau usernya ada atau tidak
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
  if (!user) {
    req.flash("error", "User tidak ditemukan");
    return res.redirect("/login");
  }
  //check kalau passwordnya salah

  const isValidated = await bcrypt.compare(password, user.password); //return sebuah booleh apakah true atau false
  if (!isValidated) {
    req.flash("error", "Password missmatch");
    return res.redirect("/login");
  }
  let loggedInUser = user.toJSON(); //convert dari object sequelize ke object biasa

  delete loggedInUser.password;
  console.log("user setelah passwordnya di delete", loggedInUser);

  req.session.user = loggedInUser;
  req.flash("success", `Selamat datang, ${loggedInUser.name}`);
  res.redirect("/");
}

async function authRegister(req, res) {
  const { name, email, password, confirmPassword } = req.body; //object destructuring

  if (password != confirmPassword) {
    req.flash("error", "Password dan Confirm password tidak sesuai");
    return res.render("/register");
  }
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (user) {
    req.flash("error", "Email sudah terpakai");
    return res.redirect("/register");
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const newUser = {
    name: name,
    email: email,
    password: hashedPassword,
  };

  console.log("user baru :", newUser);

  const userInsert = await User.create(newUser);

  req.flash("success", "Berhasil register silahkan login");
  res.redirect("/login");
}

async function renderBlog(req, res) {
  const user = req.session.user;
  //kalau usernya ada atau kalau

  const blogs = await Blog.findAll({
    include: {
      model: User,
      as: "user",
      attributes: { exclude: ["password"] },
    },
    order: [["createdAt", "DESC"]],
  });

  console.log("hasil fetch data dari controller v2", blogs);

  if (user) {
    res.render("blog-list", { blogs: blogs, user: user });
  } else {
    res.render("blog-list", { blogs: blogs });
  }
}
async function renderBlogDetail(req, res) {
  const id = req.params.id;

  const blogYangDipilih = await Blog.findOne({
    where: { id: id },
  });

  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 blog detail :", blogYangDipilih);
    res.render("blog_detail", { blog: blogYangDipilih, user: user });
  }
}

async function authLogout(req, res) {
  //hapus user dari session
  req.session.user = null;
  res.redirect("/login");
}
async function renderBlogCreate(req, res) {
  //render ke blog create

  // const user = req.session.user;
  // if (user) {
  res.render("blog-create");
  // } else {
  //   res.redirect("/login");
  // }
}
async function createBlog(req, res) {
  const user = req.session.user;

  if (!user) {
    req.flash("error", "Please login");
    return res.redirect("/login");
  }
  const { title, content } = req.body;

  let dummyImage = "https://picsum.photos/200/250";

  const image = req.file.path;
  const newBlog = {
    title, //ini asma saja dengan menulisakan title : totle
    content,
    authorId: user.id,
    image: image,
  };
  const resultSubmit = await Blog.create(newBlog);
  console.log();
  res.redirect("/blog"); // URL, bukan nama file
}

async function renderBlogEdit(req, res) {
  const user = req.session.user;

  const id = req.params.id;
  const blogYangDipilih = await Blog.findOne({
    where: { id: id },
  });
  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 blog detail :", blogYangDipilih);
    res.render("blog-edit", { blog: blogYangDipilih, user: user });
  }
}

async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("Judulnya adalah ", title);
  console.log("content ", content);

  const updateResult = await Blog.update(
    {
      //form edit
      title,
      content,
      updatedAt: sequelize.fn("NOW"),
    },
    {
      //where clause atau filter yang mau di dedit
      where: {
        id,
      },
    }
  );
  console.log("result update :", updateResult);

  res.redirect("/blog");
}
async function deleteBlog(req, res) {
  const id = req.params.id;
  const deleteResult = await Blog.destroy({
    where: {
      id: id,
    },
  });
  console.log("result query delete :", deleteResult);

  res.redirect("/blog");
}
async function renderError(req, res) {
  const user = req.session.user;
  res.render("page-404", { user: user });
}

module.exports = {
  renderHome,
  renderLogin,
  renderRegister,
  renderContact,
  renderTestimonials,
  authLogin,
  authRegister,
  authLogout,
  renderBlog,
  renderBlogCreate,
  renderBlogDetail,
  deleteBlog,
  createBlog,
  renderBlogEdit,
  updateBlog,
  renderError,
};
