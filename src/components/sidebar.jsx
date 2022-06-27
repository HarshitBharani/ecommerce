import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <h3>SORT</h3>
      <div className="sort-container">
        <label>
          <input type="radio" name="sort" value="HIGH_TO_LOW" checked />
          Price - High to Low
        </label>
      </div>
      <div className="input-container">
        <label>
          <input type="radio" name="sort" value="LOW_TO_HIGH" />
          Price - Low to High
        </label>
      </div>
    </div>
  );
}
