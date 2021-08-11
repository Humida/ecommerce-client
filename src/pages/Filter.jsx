import React from "react";
import { useEffect, useState } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import FilterBar from "../components/filter/FilterBar";
import FilterDisplay from "../components/filter/FilterDisplay";
import "../style/filter.css";

import productApi from "../api/product.api";

function Filter(props) {
  console.log(window.location.origin);
  const getProduct = productApi.getProduct;
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const [sort, setSort] = useState("");
  console.log(page);
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

  const [checkedClassify, setCheckedClassify] = useState([
    {
      classify: "trouser",
      query: "classify=trouser",
      checked: false,
    },
    {
      classify: "shirt",
      query: "classify=shirt",
      checked: false,
    },
  ]);

  const [checkedType, setCheckedType] = useState([
    {
      type: "ao dai",
      query: "type=ao-dai",
      checked: false,
    },
    {
      type: "ao ngan",
      query: "type=ao-ngan",
      checked: false,
    },
  ]);

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
      priceRange: "500-800",
      query: "price[gt]=500&price[lt]=800",
      checked: false,
    },
    {
      priceRange: "800-1000",
      query: "price[gt]=800&price[lt]=1000",
      checked: false,
    },
    {
      priceRange: "1000-1500",
      query: "price[gt]=1000&price[lt]=1500",
      checked: false,
    },
    {
      priceRange: "1500-2000",
      query: "price[gt]=1500&price[lt]=2000",
      checked: false,
    },
  ]);

  useEffect(() => {
    let queryClassify = checkedClassify.reduce((query, current) => {
      if (current.checked === true) return current.query + " " + query;
      return "" + query;
    }, "");
    let queryType = checkedType.reduce((query, current) => {
      if (current.checked === true) return current.query + " " + query;
      return "" + query;
    }, "");

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
      queryType +
      queryClassify +
      querySize +
      queryColor +
      queryPriceRange +
      sort;
    query = query.split(" ");
    if (!sort) query.length = query.length - 1;
    query = query.join("&");
    setQuery(query);
  }, [
    checkedType,
    checkedClassify,
    checkedSize,
    checkedColor,
    checkedPriceRange,
    sort,
  ]);

  function handleClassify(index) {
    let indexUpdate = index;

    let updateChecked = checkedClassify.map((item, index) => {
      if (index === indexUpdate) {
        item.checked = !item.checked;
      }
      return item;
    });

    console.log(updateChecked);
    setCheckedClassify(updateChecked);
  }

  function handleType(index) {
    let indexUpdate = index;

    let updateChecked = checkedType.map((item, index) => {
      if (index === indexUpdate) {
        item.checked = !item.checked;
      }
      return item;
    });

    console.log(updateChecked);
    setCheckedType(updateChecked);
  }

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
    let updatePage = page - 1 >= 0 ? page - 1 : 0;

    setPage(updatePage);
  }

  return (
    <div id="filter">
      <Header />

      <div className="filter__container">
        <div className="filter__container-body">
          <FilterBar
            query={query}
            setQuery={setQuery}
            checkedColor={checkedColor}
            handleCheckedColor={handleCheckedColor}
            checkedClassify={checkedClassify}
            handleClassify={handleClassify}
            checkedSize={checkedSize}
            handleCheckedSize={handleCheckedSize}
            checkedType={checkedType}
            handleType={handleType}
            checkedPriceRange={checkedPriceRange}
            handleCheckedPriceRange={handleCheckedPriceRange}
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
