import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  const options = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Programming",
    "Science fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Business",
    "Memoir",
    "Poetry",
    "Children's books",
    "Travel",
    "Religion and spirituality",
    "Science",
    "Art and design",
  ];
  const [searchText, setSearchText] = useState("");
  const [selectedSearchValue, setSelectedSearchValue] = useState("");
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(
      `http://localhost:4000/all-books?bookName=${searchText}&&categoryName=${selectedSearchValue}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBooks(data);
      });
  }, [selectedSearchValue, searchText]);

  const handlerSearch = () => {
    console.log(searchText, searchText);
  };

  const handleChangeOfSelectedValue = (event) => {
    console.log(event.target.value);
    setSelectedSearchValue(event.target.value);
  };

  return (
    <div className="container mt-5">
      <div className="m-auto" style={{ width: "max-content" }}>
        <div className="input-group mb-3">
          <input
            onBlur={(e) => setSearchText(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Insert a search text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
            onClick={handlerSearch}
          >
            Search
          </button>
        </div>
        <div className="input-group mb-3">
          <select
            className="form-select"
            id="inputGroupSelect02"
            value={selectedSearchValue}
            onChange={handleChangeOfSelectedValue}
          >
            <option value=""></option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <label className="input-group-text" for="inputGroupSelect02">
            Options
          </label>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allBooks.map((book) => (
          <BookCard book={book} />
        ))}

        {/* <BookCard />
        <BookCard />
        <BookCard /> */}
      </div>
    </div>
  );
};

export default AllBooks;
