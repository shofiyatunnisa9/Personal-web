const { Sequelize, QueryTypes, where } = require("sequelize");
const config = require("../config/config.json");
const { Blog } = require("../models");
const sequelize = new Sequelize(config.development);

async function renderBlog(req, res) {
  const blogs = await Blog.findAll({
    order: [["createdAt", "DESC"]],
  });

  console.log("hasil fetch data dari controller v2", blogs);

  res.render("blog-list", { blogs: blogs });
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
    res.render("blog_detail", { blog: blogYangDipilih });
  }
}
async function renderBlogCreate(req, res) {
  //render ke blog create
  res.render("blog-create");
}
async function createBlog(req, res) {
  const { title, content } = req.body;
  console.log("Judulnya adalah ", title);
  console.log("content ", content);

  let dummyImage = "https://picsum.photos/200/250";

  const newBlog = {
    title, //ini asma saja dengan menulisakan title : totle
    content,
    image: dummyImage,
  };
  const resultSubmit = await Blog.create(newBlog);
  console.log();
  res.redirect("/blog"); // URL, bukan nama file
}

async function renderBlogEdit(req, res) {
  const id = req.params.id;
  const blogYangDipilih = await Blog.findOne({
    where: { id: id },
  });
  if (blogYangDipilih === null) {
    res.render("page-404");
  } else {
    console.log("v2 blog detail :", blogYangDipilih);
    res.render("blog-edit", { blog: blogYangDipilih });
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

module.exports = {
  renderBlog,
  renderBlogCreate,
  renderBlogDetail,
  deleteBlog,
  createBlog,
  renderBlogEdit,
  updateBlog,
};
