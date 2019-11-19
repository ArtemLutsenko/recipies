import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const Search = ({ handleChange, handleSubmit, search }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
          <h1 className="text-slanted text-capitalize">
            search recipes with{""}{" "}
            <strong className="text-orange">Food2Fork</strong>
          </h1>
          <form className="mt-4">
            <label htmlFor="search" className="text-capitalize">
              types recipes separated by comma
            </label>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                name="search"
                placeholder="chiken, onion, carrots"
                value={search}
                onChange={handleChange}
              />
              <div className="input-group-append">
                <button
                  type="submit"
                  className="input-group-text bg-primary text-white"
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
