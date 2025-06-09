import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  price: number;
}

const SellerPage: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleAddBook = () => {
    if (!title || !price) return;

    const newBook: Book = {
      id: books.length + 1,
      title,
      price: parseFloat(price),
    };
    setBooks([...books, newBook]);
    setTitle("");
    setPrice("");
  };

  const handleDelete = (id: number) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={styles.page}>
      <img src="/Tenerife.mp4" alt="background" style={styles.background} />

      <button style={styles.homeButton} onClick={() => navigate("/")}>
        Home
      </button>

      <div style={styles.container}>
        <h1 style={styles.header}> Sell books with Bookmart!</h1>

        <section style={styles.section}>
          <h2 style={styles.subheader}>Add a New Book</h2>
          <div style={styles.inputRow}>
            <input
              type="text"
              placeholder="Book Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
            />
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
            />
            <button onClick={handleAddBook} style={styles.addButton}>
              Add Book
            </button>
          </div>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subheader}>Your Books</h2>
          {books.length === 0 ? (
            <p style={styles.noBooks}>No books listed yet.</p>
          ) : (
            <ul style={styles.bookList}>
              {books.map((book) => (
                <li key={book.id} style={styles.bookItem}>
                  <div>
                    <strong style={{ color: "#2F4F4F" }}>{book.title}</strong>

                    <div style={{ color: "#2F4F4F" }}>${book.price.toFixed(2)}</div>
                  </div>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(book.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  background: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    zIndex: -1,
  },

 homeButton: {
    position: "absolute",
    top: "20px",
    right: "30px",
    backgroundColor: "rgb(255, 0, 157)",
    border: "1px solid #ccc",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s",
    zIndex: 1,
  },
  container: {
    width: "90%",
    maxWidth: "700px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 7, 0.22)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgb(255, 242, 0)",
    color: "#fff",
    zIndex: 1,
  },
header: {
  fontSize: "40px",
  fontWeight: "300",
  fontFamily: "initial",
  color: "#000000",
  textAlign: "center",
  marginBottom: "30px",
   // Better contrast on blurred background
},

  section: {
    marginBottom: "30px",
  },
  subheader: {
    fontSize: "17px",
    fontFamily: "sans-serif",
    
    marginBottom: "16px",
  },
  inputRow: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#FF1493",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  bookList: {
    listStyle: "none",
    padding: 0,
    marginTop: "10px",
  },
  bookItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  noBooks: {
    color: "#666",
    fontStyle: "italic",
  },
};

export default SellerPage;
