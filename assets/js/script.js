const books = document.querySelectorAll(".book");

books.forEach((book) => {
    book.addEventListener("click", () => {
        book.classList.toggle("opened");
    });
});
