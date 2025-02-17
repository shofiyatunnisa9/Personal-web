const { Sequelize, QueryTypes } = require("sequelize");
const config = require("../config/config.json");
const sequelize = new Sequelize(config.development);

let blogs = [
  {
    title: "Pasar Coding Indonesia",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente eaque nobis saepe impedit veritatis dolorum esse nostrum suscipit velit doloremque asperiores iure neque sunt ipsum, modi laudantium, nemo perspiciatis ducimus dolore illum veniam beatae. Dolores distinctio facere officiis magnam?",

    image: "/img/bg.png",
    author: "Shofiyatunnisa",
    postedAt: new Date(
      "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
    ),
  },
  {
    title: "Blog Judul ke 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente eaque nobis saepe impedit veritatis dolorum esse nostrum suscipit velit doloremque asperiores iure neque sunt ipsum, modi laudantium, nemo perspiciatis ducimus dolore illum veniam beatae. ",
    image: "/img/bg.png",
    author: "Sho",
    postedAt: new Date(
      "Fri July 28 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
    ),
  },
];
async function renderBlog(req, res) {
  const blogs = await sequelize.query(
    `SELECT * FROM "Blogs" ORDER BY "createdAt" DESC`, //raw query
    {
      type: QueryTypes.SELECT,
    }
  );
  console.log(blogs);

  res.render("blog-list", { blogs: blogs });
}
async function renderBlogDetail(req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;
  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  console.log("hasil query", blogYangDipilih[0]);

  res.render("blog_detail", { blog: blogYangDipilih[0] });
}
function contact(req, res) {
  res.render("contact");
}

async function createBlog(req, res) {
  const { title, content } = req.body; //title dan content adalah properti milik req.body
  console.log("judulnya adalah", title);
  console.log("contentnya :", content);

  let image = "https://picsum.photos/200/250";
  let query = `INSERT INTO "Blogs" (title, content, image)
  VALUES ('${title}', '${content}', '${image}')`;

  const newBlog = await sequelize.query(query, {
    type: QueryTypes.INSERT,
  });

  // blogs.push(newBlog);

  res.redirect("/blog");
}

function createBlogPage(req, res) {
  res.render("blog-create");
}

function testimonials(req, res) {
  res.render("testimonials");
}

function home(req, res) {
  res.render("index");
}
async function renderBlogEdit(req, res) {
  const id = req.params.id;
  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;
  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });
  console.log("hasil query", blogYangDipilih[0]);

  res.render("blog-edit", { blog: blogYangDipilih[0] });
}
async function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judulnya baru", title);
  console.log("content baru :", content);

  const query = `UPDATE "Blogs" SET title='${title}', content = '${content}' WHERE id = ${id}`;

  const updateResult = await sequelize.query(query, {
    type: QueryTypes.UPDATE,
  });
  console.log("result uptade : ", updateResult);

  // let image = "https://picsum.photos/200/250";

  // let updateBlog = {
  //   title: title,
  //   content: content,
  //   image: image,
  //   author: "sho",
  //   postedAt: new Date(),
  // };
  // blogs[id] = updateBlog;

  res.redirect("/blog");
}

async function deleteBlog(req, res) {
  const id = req.params.id;

  const query = `DELETE FROM "Blogs" WHERE id = ${id}`;

  const deleteResult = await sequelize.query(query, {
    type: QueryTypes.DELETE,
  });
  console.log("result query delete:", deleteResult);

  //blogs.splice(id, 1); //array manipulation ==> perubahan data pada array

  res.redirect("/blog");
}

module.exports = {
  createBlog,
  renderBlogDetail,
  contact,
  createBlogPage,
  testimonials,
  home,
  deleteBlog,
  updateBlog,
  renderBlogEdit,
};
