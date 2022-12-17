import React, { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import ProductContainer from "../Components/Product/ProductContainer";
import ProductSidebar from "../Components/Product/ProductSidebar";
import { Flex } from "@chakra-ui/react";
import Footer from "../Components/HomePage/Footer";

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
    url = `${url}&_sort=${sort}&_order=${orderBy}&category=${filterBy}`;
  } else if (sort && orderBy) {
    url = `${url}&_sort=${sort}&_order=${orderBy}`;
  } else if (filterBy) {
    url = `${url}&category=${filterBy}`;
  }

  return url;
}

const Products = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { category } = useParams();
  const [data, setData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [page, setPage] = React.useState(
    getCurrentPageUrl(searchParams.get("page")) || 1
  );
  //for sorting
  const [orderBy, setOrderBy] = React.useState("");
  const [sort, setSort] = React.useState("");
  const [limit, setLimit] = React.useState(8);
  //for limit products per page
  // const sort = "price";
  //for filtering through categories
  const [filterBy, setFilterBy] = React.useState("");

  //   const getTotalCount = () => {
  //     axios.get(`http://localhost:8080/products/${category}`)
  //         .then(res => {
  //             setTotalCount(res.data.length)
  //         })
  //         .catch(err => console.log(err))
  // }

  React.useEffect(() => {
    let apiUrl = getUrl(
      `http://localhost:8080/products?category=${category}&_page=${page}&_limit=${limit}`,
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
      .catch((err) => console.log("err:", err));
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

  const handleSort = (val) => {
    // setLoading(true);

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

      default: {
        setSort("");
        setOrderBy("");
      }
    }
  };

  const handleLimit = (val) => {
    switch (val) {
      case "8pp":
        {
          setLimit(8);
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
        setLimit(8);
      }
    }
  };

  return (
    <>
      <Flex>
        <ProductSidebar />
        <ProductContainer
          data={data}
          totalCount={totalCount}
          page={page}
          limit={limit}
          setPage={setPage}
          handleSort={handleSort}
          handleLimit={handleLimit}
        />
      </Flex>
    </>
  );
};

export default Products;

//Select Sort

{
  /* <Stack w="xs" display="flex" direction="row" alignItems="center" spacing={3}>
<label>Sort By:</label>
  <Select width="60%"  icon={<MdArrowDropDown />} placeholder="Customer Ratings">
  <option value='option1'>Price Low to High</option>
  <option value='option2'>Price High to Low</option>
  <option value='option3'>Ratings Low to High</option>
  <option value='option3'>Rating High to Low</option>
  </Select>
</Stack> */
}
