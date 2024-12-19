var ctx = document.getElementById("myChart").getContext("2d");
var earning = document.getElementById("earning").getContext("2d");
var myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Youtube", "Shopee"],
    datasets: [
      {
        label: "Traffic Source",
        data: [1100, 1500, 2205],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          4500, 4106, 7005, 6754, 5154, 4554, 7815, 3152, 12204, 4457, 8740,
          11000,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
