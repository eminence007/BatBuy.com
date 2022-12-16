import React from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import ProductContainer from "../Components/Product/ProductContainer";
import ProductSidebar from "../Components/Product/ProductSidebar";
import { Flex } from "@chakra-ui/react";

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

  const [header, setHeader] = React.useState("");

  //for sorting
  const [orderBy, setOrderBy] = React.useState("");

  //for limit products per page
  const limit = 16;
  const sort = "price";

  //for filtering through categories
  const [filterBy, setFilterBy] = React.useState("");

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
  }, [page, orderBy, filterBy, header]);

  React.useEffect(() => {
    let paramsObj = { page };

    if (orderBy) {
      paramsObj.orderBy = orderBy;
    }
    if (filterBy) {
      paramsObj.filterBy = filterBy;
    }
    setSearchParams(paramsObj);
  }, [page, orderBy, filterBy]);

  console.log(data);
  console.log(totalCount);

  return (
    <>
      <Flex>
        <ProductSidebar />
        <ProductContainer data={data} />
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
