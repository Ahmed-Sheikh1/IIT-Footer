import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PricingPlan.module.css";

const PricingPlan = () => {
  // Single Component For better reusability

  const [name, setName] = useState("John William");
  const [review, setReview] = useState("The Review");

  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showPara4, setShowPara4] = useState(false);

  const icon1Handler = () => {
    setShowPara1(!showPara1);
  };
  const icon2Handler = () => {
    setShowPara2(!showPara2);
  };
  const icon3Handler = () => {
    setShowPara3(!showPara3);
  };
  const icon4Handler = () => {
    setShowPara4(!showPara4);
  };

  const FaqParagraphs = [
    { text: "p1 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem" },
    { text: "p2 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem" },
    { text: "p3 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem" },
    { text: "p4 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem" },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.innerContainer}>
        <Container>
          <Row className="gx-5 pb-5">
            <Col lg={6}>
              {/* -> place dashed text here  */}
              <h1 className={styles.heading}>
                What <span>People</span> Say
              </h1>
              <p className={`${styles.para} mt-4`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Row className={`${styles.idvReview} mt-4`}>
                <Col className={styles.column}>
                  <img className="img-fluid" src="/assets/people1.svg" />
                  <div className={styles.idvHeadingsContainer}>
                    <h3>
                      <span>{name}</span>
                    </h3>
                    <h3>{review}</h3>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className={styles.reviewsBoxContainer} lg={6}>
              <div className={styles.reviewsBoxInnerContainer}>
                <Col className={styles.leftStyledCol}>
                  <div className="pe-5">
                    <div className={`${styles.styledBoxActive}`}>
                      <img
                        className={`${styles.styledBoxImg} img-fluid`}
                        src="/assets/people1.svg"
                      />
                    </div>
                    <div className="pt-5 ">
                      <div className={styles.styledBox}>
                        <img
                          className={`${styles.styledBoxImg} img-fluid`}
                          src="/assets/people2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className={styles.rightStyledCol}>
                  <div className={styles.styledBox}>
                    <img
                      className={`${styles.styledBoxImg} img-fluid`}
                      src="/assets/people3.svg"
                    />
                  </div>
                  <div className="pt-5">
                    <div className={styles.styledBox}>
                      <img
                        className={`${styles.styledBoxImg} img-fluid`}
                        src="/assets/people4.svg"
                      />
                    </div>
                  </div>
                </Col>
              </div>
            </Col>
          </Row>
          <Row className="mt-5 gx-5 d-flex justify-content-center align-items-center">
            {/* -> place dashed text here  */}
            <h1 className={`${styles.heading} text-center`}>
              <span>Frequently</span> Asked Questions
            </h1>
            <div className="mt-5 row">
              <Col className={styles.faqImgContainer} lg={6}>
                <img className="img-fluid" src="/assets/faqImg.svg" />
              </Col>
              <Col
                className="d-flex align-items-center justify-content-end"
                lg={6}
              >
                <div className={styles.faqRootContainer}>
                  <div className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara1 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>The Way We Work</h1>
                      <img
                        onClick={icon1Handler}
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara1
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara1 && <p>{FaqParagraphs[0].text}</p>}</div>
                  </div>

                  <div className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara2 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>How to generate revenue from SEO services?</h1>
                      <img
                        onClick={icon2Handler}
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara2
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara2 && <p>{FaqParagraphs[1].text}</p>}</div>
                  </div>

                  <div className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara3 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>What are the company management policies?</h1>
                      <img
                        onClick={icon3Handler}
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara3
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara3 && <p>{FaqParagraphs[2].text}</p>}</div>
                  </div>

                  <div className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara4 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>Which qualifications and experience?</h1>
                      <img
                        onClick={icon4Handler}
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara4
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara4 && <p>{FaqParagraphs[3].text}</p>}</div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PricingPlan;
