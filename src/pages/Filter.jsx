import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import FilterBar from "../components/filter/FilterBar";
import FilterDisplay from "../components/filter/FilterDisplay";
import "../style/filter.css";

// icons
import { AiOutlineFilter } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import productApi from "../api/product.api";

function Filter(props) {
  let defaultQuery = props.query;
  const getProduct = productApi.getProduct;
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(defaultQuery);
  const [sort, setSort] = useState("");
  const [isActiveBar, setIsActiveBar] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const products = await getProduct(query, page, 9);
        products.data.pages = Array(products.data.pages).fill(0);
        setProducts(products.data);
      } catch (err) {
        throw err;
      }
    })();
  }, [query, page]);

  const [checkedSize, setCheckedSize] = useState([
    {
      size: 29,
      query: "size=29",
      checked: false,
    },
    {
      size: 30,
      query: "size=30",
      checked: false,
    },
    {
      size: 31,
      query: "size=31",
      checked: false,
    },
    {
      size: 32,
      query: "size=32",
      checked: false,
    },
    {
      size: 33,
      query: "size=33",
      checked: false,
    },
    {
      size: 34,
      query: "size=34",
      checked: false,
    },
  ]);

  const [checkedColor, setCheckedColor] = useState([
    {
      color: "blue",
      query: "color=blue",
      checked: false,
    },
    {
      color: "red",
      query: "color=red",
      checked: false,
    },
    {
      color: "yellow",
      query: "color=yellow",
      checked: false,
    },
    {
      color: "green",
      query: "green=32",
      checked: false,
    },
    {
      color: "white",
      query: "color=white",
      checked: false,
    },
  ]);

  const [checkedPriceRange, setCheckedPriceRange] = useState([
    {
      priceRange: "500000-800000",
      query: "price[gt]=500000&price[lt]=800000",
      checked: false,
    },
    {
      priceRange: "800000-1000000",
      query: "price[gt]=800000&price[lt]=1000000",
      checked: false,
    },
    {
      priceRange: "1000000-1500000",
      query: "price[gt]=1000000&price[lt]=1500000",
      checked: false,
    },
    {
      priceRange: "1500000-2000000",
      query: "price[gt]=1500000&price[lt]=2000000",
      checked: false,
    },
  ]);

  useEffect(() => {
    let querySize = checkedSize.reduce((query, current) => {
      if (current.checked === true) return current.query + " " + query;
      return "" + query;
    }, "");

    let queryColor = checkedColor.reduce((query, current) => {
      if (current.checked === true) return current.query + " " + query;
      return "" + query;
    }, "");

    let queryPriceRange = checkedPriceRange.reduce((query, current) => {
      if (current.checked === true) return current.query + " " + query;
      return "" + query;
    }, "");

    let query =
      defaultQuery + " " + querySize + queryColor + queryPriceRange + sort;
    query = query.split(" ");
    if (!sort) query.length = query.length - 1;
    query = query.join("&");
    setQuery(query);
  }, [checkedSize, checkedColor, checkedPriceRange, sort]);
  function handleCheckedSize(index) {
    let indexUpdate = index;

    let updateChecked = checkedSize.map((item, index) => {
      if (index === indexUpdate) {
        item.checked = !item.checked;
      }
      return item;
    });

    console.log(updateChecked);
    setCheckedSize(updateChecked);
  }

  function handleCheckedColor(index) {
    let indexUpdate = index;

    let updateChecked = checkedColor.map((item, index) => {
      if (index === indexUpdate) {
        item.checked = !item.checked;
      }
      return item;
    });

    console.log(updateChecked);
    setCheckedColor(updateChecked);
  }

  function handleCheckedPriceRange(index) {
    let indexUpdate = index;

    let updateChecked = checkedPriceRange.map((item, index) => {
      if (index === indexUpdate) {
        item.checked = !item.checked;
      }
      return item;
    });

    console.log(updateChecked);
    setCheckedPriceRange(updateChecked);
  }

  function handleSort(e) {
    setSort(`sort=${e.target.value}`);
  }

  function handleNextPage() {
    let updatePage =
      page + 1 < products.pages.length ? page + 1 : products.pages.length;

    setPage(updatePage);
  }

  function handlePrePage() {
    let updatePage = page - 1 >= 1 ? page - 1 : 1;

    setPage(updatePage);
  }

  function handleActiveBar() {
    setIsActiveBar(!isActiveBar);
  }

  return (
    <div id="filter">
      <Header />

      <div className="filter__container">
        <div className="filter__container-body">
          {!isActiveBar && (
            <div className="filter__icon-open" onClick={handleActiveBar}>
              <AiOutlineFilter style={{ "font-size": "2.8rem" }} />
            </div>
          )}
          {isActiveBar && (
            <div className="filter__icon-close" onClick={handleActiveBar}>
              <AiOutlineClose />
            </div>
          )}
          <FilterBar
            query={query}
            setQuery={setQuery}
            checkedColor={checkedColor}
            handleCheckedColor={handleCheckedColor}
            checkedSize={checkedSize}
            handleCheckedSize={handleCheckedSize}
            checkedPriceRange={checkedPriceRange}
            handleCheckedPriceRange={handleCheckedPriceRange}
            isActiveBar={isActiveBar}
          />
          <FilterDisplay
            products={products}
            handleSort={handleSort}
            handleNextPage={handleNextPage}
            handlePrePage={handlePrePage}
            page={page}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Filter;
