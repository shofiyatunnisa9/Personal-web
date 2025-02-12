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
function renderBlog(req, res) {
  //   console.log(blogs);
  res.render("blog-list", { blogs: blogs });
}
function renderBlogDetail(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  res.render("blog_detail", { blog: blogYangDipilih });
}
function contact(req, res) {
  res.render("contact");
}

function createBlog(req, res) {
  const { title, content } = req.body; //title dan content adalah properti milik req.body
  console.log("judulnya adalah", title);
  console.log("contentnya :", content);

  let image = "https://picsum.photos/200/150";

  let newBlog = {
    title: title,
    content: content,
    image: image,
    author: "sho",
    postedAt: new Date(),
  };
  blogs.push(newBlog);

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
function renderBlogEdit(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  res.render("blog-edit", { blog: blogYangDipilih, index: id });
}
function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judulnya baru", title);
  console.log("content baru :", content);

  let image = "https://picsum.photos/200/150";

  let updateBlog = {
    title: title,
    content: content,
    image: image,
    author: "sho",
    postedAt: new Date(),
  };
  blogs[id] = updateBlog;
  res.redirect("/blog");
}

function deleteBlog(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  console.log(blogYangDipilih);

  blogs.splice(id, 1); //array manipulation ==> perubahan data pada array
  res.redirect("/blog");
}

module.exports = {
  renderBlog,
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
