if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("theme--dark");
} else {
  document.body.classList.remove("theme--dark");
}
