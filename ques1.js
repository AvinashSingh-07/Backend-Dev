import express from "express";

const app = express();
const PORT = 3000;

// Sample data
const books = [
  { id: 1, title: "Book A", author: "indra", year: 2020 },
  { id: 2, title: "Book B", author: "madhav", year: 2021 },
  { id: 3, title: "Book C", author: "bhole", year: 2021 }
];

// GET all books with filtering
app.get("/books", (req, res) => {

  const { author, year } = req.query;  // get query parameters

  let filteredBooks = books;

  // filter by author
  if (author) {
    filteredBooks = filteredBooks.filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );
  }

  // filter by year
  if (year) {
    filteredBooks = filteredBooks.filter(
      book => book.year == year
    );
  }

  res.json(filteredBooks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});