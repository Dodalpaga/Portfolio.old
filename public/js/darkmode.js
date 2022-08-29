function toggle_darkmode() {
  document.getElementById("darkmode-toggler").classList.toggle("fa-sun");
  document.getElementById("darkmode-toggler").classList.toggle("fa-moon");
  console.log("Button clicked");
  if (
    document.getElementById("darkmode-toggler").classList.contains("fa-moon")
  ) {
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
  }
}
