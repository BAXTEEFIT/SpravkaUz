const languagesBtns = document.querySelector('.header-content-languages')
const languages = document.querySelectorAll('.header-content-languages__language')

languagesBtns.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      languages.forEach(function (language) {
        language.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });


// Tabs

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
