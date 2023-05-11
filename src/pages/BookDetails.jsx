import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(`http://localhost:4000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, []);
  console.log(details);
  return (
    <div class="card">
      <div class="card-header">{details.bookName}</div>
      <div class="card-body">
        <h5 class="card-title">{details.authorName}</h5>
        <p class="card-text">{details.metaTextDescription}</p>
        <a href="#" class="btn btn-primary">
          BookMark
        </a>
      </div>
      <iframe
        title="PDF Viewer"
        src={details.bookPdfUrl}
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default BookDetails;
