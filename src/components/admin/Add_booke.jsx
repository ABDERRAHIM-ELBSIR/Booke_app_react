import React, { useState } from 'react';
import '../../css/admin/Add_book.css';

const Add_booke = () => {
  const [book, setBook] = useState({
    title: '',
    category: '',
    pages: '',
    author: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    alert("Book added successfully!");
    setBook({ title: '', category: '', pages: '', author: '' });
  };

  return (
    <div className="form-container">
      <h2>Add New Book 📚</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={book.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={book.category}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pages"
          placeholder="Number of Pages"
          value={book.pages}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={book.author}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Add_booke;
