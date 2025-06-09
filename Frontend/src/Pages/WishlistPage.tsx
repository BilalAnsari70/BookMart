import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Book {
  id: number;
  title: string;
  price: number;
}

const allBooks: Book[] = [
  { id: 1, title: "Atomic Habits", price: 250 },
  { id: 2, title: "The Psychology of Money", price: 300 },
  { id: 3, title: "Rich Dad Poor Dad", price: 280 },
  { id: 4, title: "Deep Work", price: 350 },
];

const WishlistPage: React.FC = () => {
  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const filteredBooks = allBooks.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToWishlist = (book: Book) => {
    if (!wishlist.find((b) => b.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  };

  const handleRemove = (id: number) => {
    setWishlist(wishlist.filter((book) => book.id !== id));
  };

  return (
    <div style={styles.page}>
      <img src="/Tenerife.mp4" alt="background" style={styles.background} />

      <button style={styles.homeButton} onClick={() => navigate("/")}>
        Home
      </button>

      <div style={styles.container}>
        <h1 style={styles.header}> Wishlist</h1>

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />

        <ul style={styles.searchResults}>
          {filteredBooks.map((book) => (
            <li key={book.id} style={styles.bookItem}>
              <div>
                <strong style={{ color: "#2F4F4F" }}>{book.title}</strong>
                <div style={{ color: "#2F4F4F" }}>${book.price.toFixed(2)}</div>
              </div>
              <button
                style={styles.addButton}
                onClick={() => handleAddToWishlist(book)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>

        <h2 style={styles.subheader}>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p style={styles.empty}>Your wishlist is empty.</p>
        ) : (
          <ul style={styles.bookList}>
            {wishlist.map((book) => (
              <li key={book.id} style={styles.bookItem}>
                <div>
                  <strong style={{ color: "#2F4F4F" }}>{book.title}</strong>
                  <div style={{ color: "#2F4F4F" }}>${book.price.toFixed(2)}</div>
                </div>
                <button
                  style={styles.deleteButton}
                  onClick={() => handleRemove(book.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    height: "100vh",
    width: "100vw",
    position: "relative",
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  background: {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: -1,
  },
  homeButton: {
    position: "absolute",
    top: 20,
    right: 30,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    border: "1px solid #ddd",
    padding: "8px 16px",
    borderRadius: "20px",
    fontWeight: "bold",
    cursor: "pointer",
    zIndex: 2,
  },
  container: {
    width: "90%",
    maxWidth: "700px",
    padding: "30px",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
    color: "#fff",
    zIndex: 1,
  },
  header: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#fff",
  },
  subheader: {
    fontSize: "20px",
    margin: "30px 0 10px",
    color: "#fff",
  },
  searchInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  searchResults: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  bookList: {
    listStyle: "none",
    padding: 0,
  },
  bookItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "8px",
    marginBottom: "10px",
  },
  addButton: {
    padding: "6px 12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  empty: {
    color: "#eee",
    fontStyle: "italic",
    textAlign: "center",
  },
};

export default WishlistPage;
