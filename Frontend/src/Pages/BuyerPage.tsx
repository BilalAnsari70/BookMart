import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample book data with image URLs
const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 25,
    image: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andy Hunt",
    price: 30,
    image: "https://m.media-amazon.com/images/I/41as+WafrFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    price: 20,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
  },
   {
    id: 4,
    title: "The Art of War",
    author: "Sun Tzu",
    price: 15,
    image: "https://m.media-amazon.com/images/I/71V3AvU5fYL._AC_UF1000,1000_QL80_.jpg",
  },
];

const BuyerPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [authorFilter, setAuthorFilter] = useState("All");
  const [sortOption, setSortOption] = useState("title-asc");

  const navigate = useNavigate();

  // Get unique authors for dropdown filter
  const authors = ["All", ...Array.from(new Set(books.map((b) => b.author)))];

  // Filter by search & author
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase());
    const matchesAuthor = authorFilter === "All" || book.author === authorFilter;
    return matchesSearch && matchesAuthor;
  });

  // Sort filtered books
  const sortedBooks = [...filteredBooks].sort((a, b) => {
    switch (sortOption) {
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", color: "white" }}>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/5382332-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Home Button (Top Left) */}
      <button
        onClick={() => navigate("/")}
        style={{
          position: "static",
          top: "20px",
          left: "940px",
          padding: "10px 20px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid white",
          borderRadius: "20px",
          color: "white",
          cursor: "pointer",
          backdropFilter: "blur(5px)",
          fontSize: "16px",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
      >
        Home
      </button>

      {/* Wishlist Button (Top Right) */}
<button
  onClick={() => navigate("/wishlist")}
  style={{
    position: "absolute",
    top: "20px",
    right: "30px",
    padding: "10px 20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    border: "1px solid white",
    borderRadius: "20px",
    color: "white",
    cursor: "pointer",
    backdropFilter: "blur(5px)",
    fontSize: "16px",
    transition: "all 0.3s ease",
    zIndex: 10,
  }}
  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.3)")}
  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)")}
>
  Wishlist
</button>


      {/* Centered Quote and Controls */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(0, 94, 255, 0.2)",
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          padding: "50px",
          borderRadius: "16px",
          maxWidth: "700px",
          width: "90%",
          textAlign: "center",
          boxShadow: "0 4px 20px rgb(92, 4, 102)",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "26px",
            fontWeight: "300",
            fontStyle: "italic",
            marginBottom: "24px",
            fontFamily: "Sans-serif",
            color: "white",
          }}
        >
          "There are worse crimes than burning books. One of them is not reading them." -Ray Bradbury
        </h1>

        <input
          type="text"
          placeholder="Search books..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "8px",
            width: "100%",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Author Filter */}
          <select
            value={authorFilter}
            onChange={(e) => setAuthorFilter(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              minWidth: "150px",
              cursor: "pointer",
            }}
          >
            {authors.map((author) => (
              <option key={author} value={author}>
                {author}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "16px",
              minWidth: "180px",
              cursor: "pointer",
            }}
          >
            <option value="title-asc">Sort by Title (A-Z)</option>
            <option value="title-desc">Sort by Title (Z-A)</option>
            <option value="price-asc">Sort by Price (Low to High)</option>
            <option value="price-desc">Sort by Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Book Grid */}
      <div
        style={{
          marginTop: "70vh",
          padding: "0 20px 40px",
          maxWidth: "1000px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {sortedBooks.map((book) => (
          <div
            key={book.id}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "16px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{ width: "140px", height: "200px", objectFit: "cover", borderRadius: "6px", marginBottom: "15px" }}
            />
            <h2 style={{ fontSize: "20px", fontWeight: "600", textAlign: "center" }}>{book.title}</h2>
            <p style={{ fontStyle: "italic", margin: "5px 0" }}>by {book.author}</p>
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>${book.price}</p>
            <button
              style={{
                marginTop: "12px",
                backgroundColor: "#ff1493",
                color: "#fff",
                padding: "8px 16px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerPage;


