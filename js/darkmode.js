function toggle_darkmode() {
  document.getElementById("darkmode-toggler").classList.toggle("fa-sun");
  console.log("Button clicked");
  if (
    document.getElementById("darkmode-toggler").classList.contains("fa-sun")
  ) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
