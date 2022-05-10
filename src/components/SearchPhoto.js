import { useState } from "react";

const SearchPhoto = (props) => {
  const [term, setTerm] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    props.setTerm(term);
  };

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={(e) => submitForm(e)} className={`col-10 col-sm-5`}>
          <div className="form-group">
            <input
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              className="form-control"
              type="text"
              placeholder="search..."
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchPhoto;
