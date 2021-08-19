import React from "react";

import Card from "../Card";

function FilterDisplay(props) {
  const { products, currentPage, pages } = props.products;
  console.log(pages);
  const { handleSort } = props;
  const { page, handleNextPage, handlePrePage } = props;
  console.log(props.products);
  return (
    <div className="filter-display">
      <div className="filter__sort">
        <select
          name="sort"
          id="filter__sort-by"
          onChange={(e) => {
            handleSort(e);
          }}
        >
          <option value=""> sort by </option>
          <option value="price">Tu thap den cao</option>
          <option value="-price">Tu cao den thap</option>
          <option value="-createdAt">Moi nhat</option>
          <option value="-quantitySold">ban chay nhat</option>
        </select>
      </div>
      <div className="filter__products">
        {products !== undefined &&
          products.map((product) => {
            return <Card key={product._id} product={product}></Card>;
          })}
      </div>
      {products !== undefined && (
        <div className="pagation">
          <i onClick={handlePrePage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-left"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </i>
          <ul>
            {pages.map((item, index) => {
              return <li>{index + 1}</li>;
            })}
          </ul>
          <i onClick={handleNextPage}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-right"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </i>
        </div>
      )}
    </div>
  );
}

export default FilterDisplay;
