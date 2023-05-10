import React from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  return (
    <div className="container mt-5">
      <div className="m-auto" style={{ width: "max-content" }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Insert a search text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-info" type="button" id="button-addon2">
            Search
          </button>
        </div>
        <div class="input-group mb-3">
          <select class="form-select" id="inputGroupSelect02">
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label class="input-group-text" for="inputGroupSelect02">
            Options
          </label>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </div>
  );
};

export default AllBooks;
