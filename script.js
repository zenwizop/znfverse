document.querySelectorAll('.profile').forEach((profile, name) => {
  profile.addEventListener('click', () => {
    alert(`Get Ready!`);
  });
});

document.querySelectorAll('.row').forEach((row) => {
  row.addEventListener('wheel', (e) => {
    e.preventDefault(); // Prevent vertical scrolling
    row.scrollLeft += e.deltaY * 1.5; // Adjust scrolling speed
  });
});
