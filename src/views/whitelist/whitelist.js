/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
import axios from 'axios';

import Header from "./HeaderWhitelist";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [bookData, setBookData] = useState([]);
  const [keyword, setKeyword] = useState("");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const getWhitelist = async () => {
    axios({
      method: "GET",
      // url: `https://books-api-service.herokuapp.com/api/v1/books?keyword=${keyword}`,
      url: `https://books-api-api.herokuapp.com/api/v1/books/whitelist`
    })
    .then((result) => {
      setBookData(result.data);
      return;
    })
    .catch((error) => {
      console.log(error, "ERRROR GETTING WHITELIST");
      return;
    })
  }

  useEffect(() => {
    getWhitelist()
  }, [])

  function onChangeBooksKeyword(value) {
    setKeyword(value);
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };
  return (
    <>
      <Header
        books={bookData}
      />
    </>
  );
};

export default Index;
