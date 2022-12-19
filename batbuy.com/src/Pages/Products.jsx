import React, { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import ProductContainer from "../Components/Product/ProductContainer";
import { Flex } from "@chakra-ui/react";
import { Loader } from "../Components/Loader";

const getCurrentPageUrl = (value) => {
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }

  if (!value) {
    value = 1;
  }

  return value;
};

function getUrl(url, sort, orderBy, filterBy) {
  if (sort && orderBy && filterBy) {
    url = `${url}&_sort=${sort}&_order=${orderBy}${filterBy}`;
  } else if (sort && orderBy) {
    url = `${url}&_sort=${sort}&_order=${orderBy}`;
  } else if (filterBy) {
    url = `${url}${filterBy}`;
  }

  return url;
}

const Products = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const [loader, setLoader] = useState(false);
  const [data, setData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [page, setPage] = React.useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );
  //for sorting
  const [orderBy, setOrderBy] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [limit, setLimit] = React.useState(16);

  //for filtering through categories
  const [filterBy, setFilterBy] = React.useState("");
  const [filterChange, setFilterChange] = useState({});

  React.useEffect(() => {
    setLoader(true);
    let apiUrl = getUrl(
      `https://crazy-dove-veil.cyclic.app/products?category=${category}&_page=${page}&_limit=${limit}`,
      sort,
      orderBy,
      filterBy
    );
    axios
      .get(apiUrl)
      .then((res) => {
        setData(res.data);
        setTotalCount(res.headers["x-total-count"]);
      })
      .catch((err) => console.log("err:", err))
      .finally(() => setLoader(false));
  }, [category, page, orderBy, filterBy, limit]);

  React.useEffect(() => {
    let paramsObj = { page };

    if (orderBy) {
      paramsObj.orderBy = orderBy;
    }
    if (filterBy) {
      paramsObj["filterBy"] = filterBy;
    }
    if (sort) {
      paramsObj.sortBy = sort;
    }
    if (limit) {
      paramsObj.limit = limit;
    }
    setSearchParams(paramsObj);
  }, [page, orderBy, filterBy, limit, sort]);

  console.log(data);
  console.log(totalCount);

  const handleSortAndLimit = (val) => {
    setLoader(true);

    switch (val) {
      case "pr-htl":
        {
          setSort("price");
          setOrderBy("desc");
        }
        break;

      case "pr-lth":
        {
          setSort("price");
          setOrderBy("asc");
        }
        break;

      case "rt-htl":
        {
          setSort("ratings");
          setOrderBy("desc");
        }
        break;
      case "12pp":
        {
          setLimit(12);
        }
        break;

      case "16pp":
        {
          setLimit(16);
        }
        break;

      case "20pp":
        {
          setLimit(20);
        }
        break;

      default: {
        setSort("");
        setOrderBy("");
        setLimit(12);
      }
    }
    setLoader(false);
  };

  const handleFilterChange = (val1, val2) => {
    setLoader(true);
    console.log("x", val1);
    console.log("y", val2);
    const add_filter = val1;
    const check = val2;
    let obj = { ...filterChange };
    obj[add_filter] = check;

    let filterStr = "";

    for (let key in obj) {
      if (obj[key]) {
        if (
          key === "asus" ||
          key === "dell" ||
          key === "hp" ||
          key === "microsoft" ||
          key === "ecohero" ||
          key === "samsung" ||
          key === "lg" ||
          key === "msi" ||
          key === "lenovo"
        ) {
          filterStr += `&brand=${key}`;
        }
      }
    }
    setFilterBy(filterStr);
    setFilterChange(obj);
    setLoader(false);
  };

  if (loader) return <Loader />;
  return (
    <>
      <Flex>
        <ProductContainer
          data={data}
          totalCount={totalCount}
          page={page}
          limit={limit}
          setPage={setPage}
          handleSortAndLimit={handleSortAndLimit}
          // handleLimit={handleLimit}
          handleFilterChange={handleFilterChange}
        />
      </Flex>
    </>
  );
};

export default Products;
