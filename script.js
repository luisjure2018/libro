let currentPage = 1;

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < document.querySelectorAll('.page').length) {
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(-180deg)';
        currentPage++;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        document.getElementById(`page${currentPage}`).style.transform = 'rotateY(0deg)';
    }
});
