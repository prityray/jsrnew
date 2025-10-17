import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <section className="logoarea">
        <Container>
          <Row>
            <Col md={3}>
             <img src='https://gpa.ac.in/assets/images/jhlogo.png'img/>
            </Col>

            <Col md={9}>
              <h1>Government Polytechnic Adityapur</h1>
              <h4>
                Department of Higher & Technical Education, Government of
                Jharkhand
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>Image</Col>
          </Row>
        </Container>
      </section>

      <section className="principalarea">
        <Container>
          <Row>
            <Col>
            <img src="https://gpa.ac.in/assets/images/left-arrow.png" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col md={3}>
            <img src="https://gpa.ac.in/assets/dr_sanjeev_kumar.jpg" className="pimage" />
              
            </Col>
            <Col md={9}>
              <p>containt of peragraph</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>Image Arow2</Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>
            <div className="box">
              <img src="https://gpa.ac.in/assets/images/cs.webp"/>
              <h5>Test Data</h5>
            </div>
            </Col>
            <Col>
            <div className="box">
              <img src="https://gpa.ac.in/assets/images/cs.webp"/>
              <h5>Test Data</h5>
            </div>
            </Col>
            <Col>
            <div className="box">
              <img src="https://gpa.ac.in/assets/images/cs.webp"/>
              <h5>Test Data</h5>
            </div>
            </Col>
            <Col>
            <div className="box">
              <img src="https://gpa.ac.in/assets/images/cs.webp"/>
              <h5>Test Data</h5>
            </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col> University of Technology Official Website</Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>Image Arow3</Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>Image6</Col>
            <Col>Image7</Col>
            <Col>Image8</Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>Image of Alumini</Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>List1</Col>
            <Col>List2</Col>
            <Col>List3</Col>
            <Col>List4</Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
