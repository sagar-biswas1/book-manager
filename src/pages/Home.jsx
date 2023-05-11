import React from "react";
import Banner from "../components/Banner";
import AllBooks from "../components/allBooks/AllBooks";
const Home = () => {
  return (
    <div>
      <Banner />
      <AllBooks />
      <iframe
        title="PDF Viewer"
        src={
          "https://drive.google.com/file/d/1R40YJ2YIFo6wrU0Rk5lWMMGLz9_qQww3/preview"
        }
        width="100%"
        height="600px"
      />
    </div>
  );
};

export default Home;
