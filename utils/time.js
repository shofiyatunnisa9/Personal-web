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

module.exports = {
  formatDateToWIB,
  getRelativeTime,
};
