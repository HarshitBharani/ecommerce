import { useState } from "react";
import { useData } from "../context/DataProvider";
import "./sidebar.css";
export default function Sidebar() {
  const { dispatch, sortBy, filter, includeOutOfStock } = useData();
  const [sidebarDisplay, setSidebarDisplay] = useState("");
  function addSort(e) {
    dispatch({
      type: "ADD_SORT",
      payload: e.target.value,
    });
  }
  function addFilter(e) {
    dispatch({
      type: "ADD_FILTER",
      payload: e.target.value,
    });
  }
  function addincludeOutOfStock(e) {
    dispatch({
      type: "TOGGLE_OUT_OF_STOCK",
    });
  }
  return (
    <>
      <div
        className="toggle-sidebar"
        onClick={() => {
          setSidebarDisplay("sidebar-display");
        }}
      >
        Filters
      </div>
      <div className={`sidebar ${sidebarDisplay}`}>
        <button
          className="sidebar-close"
          onClick={() => {
            setSidebarDisplay("");
          }}
        >
          X
        </button>
        <h3>SORT</h3>
        <div className="sort-container">
          <label>
            <input
              type="radio"
              name="sort"
              value="HIGH_TO_LOW"
              onClick={addSort}
              checked={sortBy === "HIGH_TO_LOW"}
            />
            Price - High to Low
          </label>
        </div>
        <div className="sort-container">
          <label>
            <input
              type="radio"
              name="sort"
              value="LOW_TO_HIGH"
              onClick={addSort}
              defaultChecked={sortBy === "LOW_TO_HIGH"}
            />
            Price - Low to High
          </label>
        </div>
        <hr />
        <h3>Filter</h3>
        <div className="filter-container">
          <label>
            <input
              type="radio"
              name="filter"
              value="JBL"
              onClick={addFilter}
              checked={filter === "JBL"}
            />
            JBL
          </label>
        </div>
        <div className="filter-container">
          <label>
            <input
              type="radio"
              name="filter"
              value="boat"
              onClick={addFilter}
              checked={filter === "boat"}
            />
            Boat
          </label>
        </div>{" "}
        <div className="filter-container">
          <label>
            <input
              type="radio"
              name="filter"
              value="realme"
              onClick={addFilter}
              checked={filter === "realme"}
            />
            Realme
          </label>
        </div>
        <div className="filter-container">
          <label>
            <input
              type="radio"
              name="filter"
              value="redmi"
              onClick={addFilter}
              checked={filter === "redmi"}
            />
            Redmi
          </label>
        </div>
        <hr />
        <label className="checkbox">
          <input
            type="checkbox"
            name="include-out-of-stock"
            onClick={addincludeOutOfStock}
            checked={includeOutOfStock === true}
          />
          Include-out-of-stock
        </label>
      </div>
    </>
  );
}
