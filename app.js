const btn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // first remove the class of active from all the button "tab-btn active"
    btn.forEach(function (btn) {
      btn.classList.remove("active");

      // add the class of active to the button clicked
      e.target.classList.add("active");
    });
    // hide all articles
    articles.forEach(function (article) {
      // remove the active class
      article.classList.remove("active");
    });
    // add the active class to the relevant one
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
