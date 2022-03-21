window.onscroll = function () {
  let progressHeight =
    (window.pageYOffset / (document.body.scrollHeight - window.innerHeight)) *
    100;
  let currentHeight = progressHeight + "%";
  document.getElementById("progressbar").style.height = currentHeight;
};
