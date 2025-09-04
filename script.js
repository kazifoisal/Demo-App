
const startCountAnimation = (e) => {
  let start = 0;
  let end = parseInt(e.dataset.num);
  let duration = 2000;

  let count = setInterval(() => {
    start++;
    e.textContent = start + "%";
    if (start >= end) {
      clearInterval(count);
    }
  }, duration / end);
};

const handleIntersection = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCountAnimation(entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const options = {
  root: null,
  threshold: 0.5
};

const observer = new IntersectionObserver(handleIntersection, options);

const numElements = document.querySelectorAll(".num");

numElements.forEach(element => {
  observer.observe(element);
});





const openModalBtn = document.querySelector(".open-modal");
const modalWrapperElemnt = document.querySelector(".modal-wrapper");
const modalContentElemnt = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-modal");


openModalBtn.classList.add("open-modal");

modalWrapperElemnt.classList.add("modal-wrapper");

modalContentElemnt.classList.add("modal-content");


openModalBtn.addEventListener("click", () => {
  modalWrapperElemnt.style.display = "block"
})

closeModalBtn.addEventListener("click", () => {
  modalWrapperElemnt.style.display = "none"
})

const cards = document.querySelectorAll(".card")

cards.forEach(card => {
  card.addEventListener("click", () => {

  card.classList.toggle("is-flipped")

    console.log(card)
  })
})






document.querySelectorAll(".faq-header").forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        item.classList.toggle("active");
      });
    });


  const btn = document.getElementById('toggleBtn');
  const moreRows = document.querySelectorAll('.more');

  btn.addEventListener('click', () =>{
    moreRows.forEach(r => r.classList.toggle('hidden'));
    btn.textContent = btn.textContent === "See More" ? "See Less" : "See More";
  });


