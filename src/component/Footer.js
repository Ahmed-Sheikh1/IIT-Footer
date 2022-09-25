import React, { useState } from "react";
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";
import styles from "./Footer.module.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const emailSubmitHander = (event) => {
    // place your subscription of email logic over here!
    event.preventDefault();
    console.log(email);
  };

  // Apply Active Class styles when a link is active

  return (
    <footer className={styles.footer}>
      <Container fluid>
        <Row>
          <Col>
            <h1 className={styles.heading}>
              Let's Make Something <br />
              <span className={styles.h1Span}>Great Together !</span>
            </h1>
          </Col>
          <Col lg={3}>
            <Form
              as="form"
              className={`${styles.form} "text-center"`}
              onSubmit={emailSubmitHander}
            >
              <Form.Group className="text-start" controlId="email">
                <Form.Control
                  type="email"
                  placeholder="Write Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                ></Form.Control>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="gx-5">
          <Col sm={12} lg={4}>
            <Row>
              <img
                className={`${styles.img} img-fluid`}
                src="/assets/logo3.svg"
                alt="Insoure IT"
              ></img>
            </Row>
            <Row>
              <p className={`${styles.para}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                augue quam, malesuada sed commodo vitae, commodo consequat
                lectus.
              </p>
            </Row>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <h3 className={styles.serviceHeading}>Startup Solutions</h3>
            <ListGroup className={`${styles.ul}`}>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  Website Application Development
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  eCommerce Development
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  mCommerce Development
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  CMS Development
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  UI/UX Designs
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  Search Engine Optimization
                </a>
              </li>
            </ListGroup>
          </Col>
          <Col className="mt-5" sm={6} lg={4}>
            <h3 className={styles.serviceHeading}>Enterprise Solutions</h3>
            <ListGroup className={`${styles.ul}`}>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  SaaS-based Solutions
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  {`Customer Relationship Management (CRM) Solutions`}
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  {`Minimum Viable Product (MVP) Solutions`}
                </a>
              </li>
              <li className={`${styles.li}`}>
                <a className={styles.a} href="example" alt="">
                  eProcurement Solutions
                </a>
              </li>
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5 gx-5">
          <Col
            className="d-flex justify-content-center align-items-center"
            sm={4}
            lg={4}
          >
            <img
              className={styles.iconImg}
              src="/assets/email.svg"
              alt="insource-info-icon"
            ></img>
            <p className={styles.iconPara}>dummy@example.com</p>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            sm={4}
            lg={4}
          >
            <img
              className={styles.iconImg}
              src="/assets/phone.svg"
              alt="insource-info-icon"
            ></img>
            <p className={styles.iconPara}>dummy@example.com</p>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            sm={4}
            lg={4}
          >
            <img
              className={styles.iconImg}
              src="/assets/location.svg"
              alt="insource-info-icon"
            ></img>
            <p className={styles.iconPara}>dummy@M</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
