let pics = document.querySelectorAll('.gallery-img')

const modal = document.querySelector('.modal')
const picContainer = document.querySelector('.modal-img-container')

const close = document.querySelector('.close')
const next = document.querySelector('.btn-next')
const prev = document.querySelector('.btn-prev')

let picIndex = 0

pics.forEach(pic => {
  pic.onclick = function () {
    modal.style.display = 'block'
    picIndex = pic.id - 1
    showSlides(picIndex)
  };
})

function showSlides(index) {
  picContainer.innerHTML = `<img class="modal-img" src="${pics[index].src}" alt="${pics[index].alt}"/>`;
}

next.onclick = () => {
  picIndex += 1
  if (picIndex > pics.length - 1) picIndex = 0
  showSlides(picIndex);
}

prev.onclick = () => {
  picIndex -= 1
  if (picIndex < 0) picIndex = pics.length - 1
  showSlides(picIndex);
}

close.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}