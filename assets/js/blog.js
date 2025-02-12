let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;
  let image = document.getElementById("image");

  let imagefileName = URL.createObjectURL(image.files[0]);

  let newBlog = {
    title: title,
    content: content,
    image: imagefileName,
    autor: "Sho",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

  console.log(blogs);

  renderBlog();
}

function renderBlog() {
  let blog_listElement = document.getElementById("blog_list");

  blog_listElement.innerHTML = firstBlogContent();

  for (let index = 0; index < blogs.length; index++) {
    console.log(blogs[index]);

    blog_listElement.innerHTML += `
        <article class="blog_item">
        <div class="blog_item_img"></div>
        <img src=${blogs[index].image} alt="">
           
        <div class="blog_item_text">
            <div class="blog_item_button">
                <button class="blog_edit_button">Edit Blog</button>
                <button class="blog_post_button">Post Blog</button>
            </div>
            <a href="blog_detail.html" style="text-decoration: none">
            <h1 class="blog_item_title">
                ${blogs[index].title}</h1>

            </a>
            <p>${formatDateToWIB(blogs[index].postedAt)} |${
      blogs[index].autor
    } </p>
            <p>${blogs[index].content}</p>
            <p class="blog_item_relative_time">${getRelativeTime(
              blogs[index].postedAt
            )}</p>

        </div>
    </article>
        `;
  }
}

function firstBlogContent() {
  return `
        <article class="blog_item">
        <div class="blog_item_img"></div>
        <img src="/img/bg.png" alt="">
        
        <div class="blog_item_text">
            <div class="blog_item_button">
                <button class="blog_edit_button">Edit Blog</button>
                <button class="blog_post_button">Post Blog</button>
            </div>
            <a href="blog_detail.html" style="text-decoration: none">
            <h1 class="blog_item_title">
                Pasar Coding di Indonesia</h1>

            </a>
            <p>30 Jan 2025 11:25 WIB | Shofiyatunnisa </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sapiente eaque nobis saepe impedit veritatis dolorum esse nostrum suscipit velit doloremque asperiores iure neque sunt ipsum, modi laudantium, nemo perspiciatis ducimus dolore illum veniam beatae. Dolores distinctio facere officiis magnam?</p>
            <p class="blog_item_relative_time">${getRelativeTime(
              new Date(
                "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
              )
            )}</p>

        </div>
    </article>
    `;
}

function formatDateToWIB() {
  let date = new Date();

  // 31 Jan 2025 11:25
  let monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];

  let day = date.getDate().toString().padStart(2, "0");
  let month = monthList[date.getMonth()];
  let year = date.getFullYear();

  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");

  let formattedDate = `${day} ${month} ${year} ${hours}: ${minutes} WIB`;

  return formattedDate;
}

function getRelativeTime(postTime) {
  let now = new Date();
  console.log("Waktu Sekarang :", now);
  console.log("Waktu User Post :", postTime);

  let diffTime = now - postTime;
  console.log("selisih waktu :", diffTime);

  let diffinSec = Math.floor((now - postTime) / 1000);
  console.log("selisih detik", diffinSec);

  if (diffinSec < 60) {
    return `${diffinSec} Second ago`;
  }

  let diffinMin = Math.floor(diffinSec / 60);

  if (diffinMin < 60) {
    return `${diffinMin} Minutes ago`;
  }

  let diffinHours = Math.floor(diffinMin / 60);

  if (diffinHours < 24) {
    return `${diffinHours} Hours ago`;
  }

  let diffinDay = Math.floor(diffinHours / 24);

  if (diffinDay < 30) {
    return `${diffinDay} Days ago`;
  }

  let diffinMon = Math.floor(diffinDay / 30);

  return `${diffinMon} month${diffinMon === 1 ? "" : "s"} ago`;
}
