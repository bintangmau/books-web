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

// reactstrap components
import { 
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import StarRatings from 'react-star-ratings';
import axios from 'axios';

const addToWhitelist = (book) => {
  axios({
    method: "POST",
    url: `https://books-api-api.herokuapp.com/api/v1/books/whitelist`,
    data: book
  })
  .then((res) => {
    alert('Book added to whitelist');
  })
  .catch((err) => {
    alert('failed add Book to whitelist');
  })
}

const BooksRender = (books) => {
  if(!books.length) return (
    <Col lg="6" xl="3">
      <Card className="card-stats mb-4 mb-xl-0">
        <CardBody>
          <Row>
            <div className="col">
              <CardTitle
                tag="h5"
                className="text-uppercase font-weight-bold mb-0"
              >
                No Data
              </CardTitle>
              <span className="p mb-0">
                -
              </span>
            </div>
            <Col className="col-auto">
              {/* <img src={val.thumbnail} /> */}
            </Col>
          </Row>
          <p className="mt-3 mb-0 text-muted text-sm">
            {/* <span className="text-success mr-2">
              <i className="fa fa-arrow-up" /> 3.48%
            </span>{" "} */}
            <StarRatings
              rating={4}
              starRatedColor="black"
              starEmptyColor="black"
              // changeRating={this.changeRating}
              numberOfStars={0}
              name='rating'
              starDimension="20px"
            />
            <br></br>
            <br></br>
            <span className="text-uppercase font-weight-bold mb-0">
              Author:  -
            </span>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
  return books.map((val, idx) => {
    return (
      <Col lg="12" xl="12">
        <Card className="card-stats mb-4 mb-xl-3">
          <CardBody>
            <Row>
              <div className="col">
                <CardTitle
                  tag="h5"
                  className="text-uppercase font-weight-bold mb-0"
                >
                  {val.title}
                </CardTitle>
                <span className="p mb-0">
                  {val.description ? val.description : "no description"}
                  {/* {val.description} */}
                </span>
              </div>
              <Col className="col-auto">
                <img src={val.thumbnail} />
              </Col>
            </Row>
            <p className="mt-3 mb-0 text-muted text-sm">
              {/* <span className="text-success mr-2">
                <i className="fa fa-arrow-up" /> 3.48%
              </span>{" "} */}
              <StarRatings
                rating={4}
                starRatedColor="yellow"
                starEmptyColor="black"
                // changeRating={this.changeRating}
                numberOfStars={val.rating}
                name='rating'
                starDimension="20px"
              />
              <br></br>
              <br></br>
              <span className="text-uppercase font-weight-bold mb-0">
                Author:  {val.authors}
              </span>
              <br></br>
              <Button
                color="primary"
                size="sm"
                className="mt-2"
                onClick={() => addToWhitelist(val)}
              >
                Add to whitelist
              </Button>
            </p>
          </CardBody>
        </Card>
      </Col>
    )
  })
}

const Header = ({ books }) => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-1 pt-md-5">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              {BooksRender(books)}
              {/* <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          BOOK TITLE
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          350,897
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          New users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Sales
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">924</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Performance
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> */}
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
