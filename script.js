const searchInput = document.getElementById('search');
const movieCards = document.querySelectorAll('.movie-card');

searchInput.addEventListener('keyup', () => {
  const searchValue = searchInput.value.toLowerCase();

  movieCards.forEach(card => {
    const title = card.querySelector('h2').innerText.toLowerCase();

    if (title.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});