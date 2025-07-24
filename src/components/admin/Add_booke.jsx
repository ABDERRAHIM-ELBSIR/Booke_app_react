import React, { useState } from 'react';
import '../../css/admin/Add_book.css';

const Add_booke = () => {
  const [step, setStep] = useState(1);
  const [book, setBook] = useState({
    creator:'',
    title: '',
    photo: '',
    prix: '',
  });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book added:", book);
    alert("Book added successfully!");
    setBook({ title: '', category: '', pages: '', author: '' });
    setStep(1);
  };

  return (
    <div className="form-container">
      <h2>Add New Book 📚</h2>
      <div className="progress-bar">
        <div className={step >= 1 ? "active-step" : ""}>1</div>
        <div className={step >= 2 ? "active-step" : ""}>2</div>
        <div className={step >= 3 ? "active-step" : ""}>3</div>
        <div className={step === 4 ? "active-step" : ""}>4</div>
      </div>
      <form className="book-form" onSubmit={step === 4 ? handleSubmit : handleNext}>
        {step === 1 && (
          <>
            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={book.title}
              onChange={handleChange}
              required
            />
            <button onClick={handleNext}>Next</button>
          </>
        )}
        {step === 2 && (
          <>
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={book.category}
              onChange={handleChange}
              required
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </>
        )}
        {step === 3 && (
          <>
            <input
              type="number"
              name="pages"
              placeholder="Number of Pages"
              value={book.pages}
              onChange={handleChange}
              required
            />
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
          </>
        )}
        {step === 4 && (
          <>
            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={book.author}
              onChange={handleChange}
              required
            />
            <button onClick={handleBack}>Back</button>
            <button type="submit">Add Book</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Add_booke;