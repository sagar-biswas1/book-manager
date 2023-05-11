import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/all-books`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // setAllBooks(data);
      });
  };

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">author</th>
            <th scope="col">categoryName</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr>
              <th scope="row">{book.bookName}</th>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button onClick={() => handleDelete(book._id)}>delete</button>
                <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                  update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
