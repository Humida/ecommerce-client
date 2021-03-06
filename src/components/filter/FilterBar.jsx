import React from "react";
import { useState, useEffect } from "react";
import classNames from "classnames";

function FilterBar(props) {
  const { checkedColor, checkedSize, checkedPriceRange, isActiveBar } = props;
  const { handleCheckedColor, handleCheckedSize, handleCheckedPriceRange } =
    props;
  return (
    <div
      className={classNames(
        "filter-bar",
        { none: isActiveBar },
        { block: isActiveBar }
      )}
    >
      <div className="filter-bar__title">
        <h2>Filter</h2>
        <i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-filter"
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
            <path d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5" />
          </svg>
        </i>
      </div>
      <div className="filter__color">
        <h3>Color</h3>
        <ul>
          {checkedColor.map((item, index) => {
            return (
              <li>
                <input
                  type="checkbox"
                  value={item.color}
                  name={item.color}
                  onChange={() => {
                    handleCheckedColor(index);
                  }}
                  checked={item.checked}
                />
                <label htmlFor={item.color}>{item.color}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter__size">
        <h3>Size</h3>
        <ul>
          {checkedSize.map((item, index) => {
            return (
              <li>
                <input
                  type="checkbox"
                  name={item.size}
                  value={item.size}
                  onChange={() => {
                    handleCheckedSize(index);
                  }}
                  checked={item.checked}
                />
                <label htmlFor={item.size}>{item.size}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="filter__price">
        <h3>Price</h3>
        <ul>
          {checkedPriceRange.map((item, index) => {
            return (
              <li>
                <input
                  type="checkbox"
                  nam={item.priceRange}
                  value={item.priceRange}
                  onChange={() => {
                    handleCheckedPriceRange(index);
                  }}
                />
                <label htmlFor={item.priceRange}>{item.priceRange}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterBar;
