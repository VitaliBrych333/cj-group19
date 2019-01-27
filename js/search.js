document.querySelector(".search_form").addEventListener("search", search)
function search() {
  const text = document.querySelector(".search_form input");
  console.log(text.value);
}