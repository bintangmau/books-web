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
import { useState } from "react";
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

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [bookData, setBookData] = useState([]);
  const [keyword, setKeyword] = useState("");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const getBooksByKeyword = async (keyword) => {
    axios({
      method: "GET",
      // url: `https://books-api-service.herokuapp.com/api/v1/books?keyword=${keyword}`,
      url: `https://books-api-api.herokuapp.com/api/v1/books?keyword=${keyword}`
    })
    .then((result) => {
      setBookData(result.data.data);
      return;
    })
    .catch((error) => {
      console.log(error, "ERRROR GETTING BOOKS");
      return;
    })
  }

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
      <Container className="header bg-gradient-info pt-1 pt-md-5" fluid>
        <Row>
          <Col>
            <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <FormGroup className="mb-0">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-search" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Search Books" type="text" onChange={(e) => onChangeBooksKeyword(e.target.value)} />
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Button
              color="primary"
              // href="#pablo"
              onClick={() => getBooksByKeyword(keyword)}
              size="md"
              className="ml-2"
            >
              Search
            </Button>
          </Col>
        </Row>
      </Container>
      <Header
        books={bookData}
      />
    </>
  );
};

export default Index;
