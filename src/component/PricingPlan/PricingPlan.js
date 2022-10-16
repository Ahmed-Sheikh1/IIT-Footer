import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PricingPlan.module.css";

const PricingPlan = () => {
  // Single Component For better reusability

  // Arrays used for easy customization

  const Reviews = [
    {
      name: "person 1",
      note: "p1 Great Work!",
      imageUrl: "/assets/people1.svg",
      message: `P1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      name: "person 2",
      note: "p2 Great Work!",
      imageUrl: "/assets/people2.svg",
      message: `P2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      name: "person 3",
      note: "p3 Great Work!",
      imageUrl: "/assets/people3.svg",
      message: `P3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
    {
      name: "person 4",
      note: "p4 Great Work!",
      imageUrl: "/assets/people4.svg",
      message: `P4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
    },
  ];

  const FaqParagraphs = [
    {
      question: "The Way We Work",
      answer: "p1 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem",
    },
    {
      question: "How to generate revenue from SEO services?",
      answer: "p2 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem",
    },
    {
      question: "What are the company management policies?",
      answer: "p3 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem",
    },
    {
      question: "Which qualifications and experience?",
      answer: "p4 Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lore Lorem",
    },
  ];

  const [showReview1, setShowReview1] = useState(true);
  const [showReview2, setShowReview2] = useState(false);
  const [showReview3, setShowReview3] = useState(false);
  const [showReview4, setShowReview4] = useState(false);

  const [showPara1, setShowPara1] = useState(false);
  const [showPara2, setShowPara2] = useState(false);
  const [showPara3, setShowPara3] = useState(false);
  const [showPara4, setShowPara4] = useState(false);

  const review1Handler = () => {
    setShowReview1(true);
    setShowReview2(false);
    setShowReview3(false);
    setShowReview4(false);
  };
  const review2Handler = () => {
    setShowReview2(!showReview2);
    setShowReview1(false);
    setShowReview3(false);
    setShowReview4(false);
  };
  const review3Handler = () => {
    setShowReview3(!showReview3);
    setShowReview1(false);
    setShowReview2(false);
    setShowReview4(false);
  };
  const review4Handler = () => {
    setShowReview4(!showReview4);
    setShowReview1(false);
    setShowReview2(false);
    setShowReview3(false);
  };

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
              {showReview1 ? (
                <p className={`${styles.para} mt-4`}>{Reviews[0].message}</p>
              ) : showReview2 ? (
                <p className={`${styles.para} mt-4`}>{Reviews[1].message}</p>
              ) : showReview3 ? (
                <p className={`${styles.para} mt-4`}>{Reviews[2].message}</p>
              ) : (
                <p className={`${styles.para} mt-4`}>{Reviews[3].message}</p>
              )}
              <Row className={`${styles.idvReview} mt-4`}>
                <Col className={styles.column}>
                  {showReview1 ? (
                    <img
                      style={{width:'90px', height: '90px'}}
                      alt="Reviews"
                      className="img-fluid"
                      src={Reviews[0].imageUrl}
                    />
                  ) : showReview2 ? (
                    <img
                      style={{width:'90px', height: '90px'}}
                      alt="Reviews"
                      className="img-fluid"
                      src={Reviews[1].imageUrl}
                    />
                  ) : showReview3 ? (
                    <img
                      style={{width:'90px', height: '90px'}}
                      alt="Reviews"
                      className="img-fluid"
                      src={Reviews[2].imageUrl}
                    />
                  ) : (
                    <img
                      style={{width:'90px', height: '90px'}}
                      alt="Reviews"
                      className="img-fluid"
                      src={Reviews[3].imageUrl}
                    />
                  )}
                  <div className={styles.idvHeadingsContainer}>
                    {showReview1 ? (
                      <h3>
                        <span>{Reviews[0].name}</span>
                      </h3>
                    ) : showReview2 ? (
                      <h3>
                        <span>{Reviews[1].name}</span>
                      </h3>
                    ) : showReview3 ? (
                      <h3>
                        <span>{Reviews[2].name}</span>
                      </h3>
                    ) : (
                      <h3>
                        <span>{Reviews[3].name}</span>
                      </h3>
                    )}

                    {showReview1 ? (
                      <h3>{Reviews[0].note}</h3>
                    ) : showReview2 ? (
                      <h3>{Reviews[1].note}</h3>
                    ) : showReview3 ? (
                      <h3>{Reviews[2].note}</h3>
                    ) : (
                      <h3>{Reviews[3].note}</h3>
                    )}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col className={styles.reviewsBoxContainer} lg={6}>
              <div className={styles.reviewsBoxInnerContainer}>
                <Col className={styles.leftStyledCol}>
                  <div className="pe-5">
                    <div
                      onClick={review1Handler}
                      className={
                        showReview1 ? styles.styledBoxActive : styles.styledBox
                      }
                    >
                      <img
                        alt="Reviews Insource IT"
                        className={`${styles.styledBoxImg} img-fluid`}
                        src="/assets/people1.svg"
                      />
                    </div>
                    <div className="pt-5 ">
                      <div
                        onClick={review2Handler}
                        className={
                          showReview2
                            ? styles.styledBoxActive
                            : styles.styledBox
                        }
                      >
                        <img
                          alt="Reviews Insource IT"
                          className={`${styles.styledBoxImg} img-fluid`}
                          src="/assets/people2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className={styles.rightStyledCol}>
                  <div
                    onClick={review3Handler}
                    className={
                      showReview3 ? styles.styledBoxActive : styles.styledBox
                    }
                  >
                    <img
                      alt="Reviews Insource IT"
                      className={`${styles.styledBoxImg} img-fluid`}
                      src="/assets/people3.svg"
                    />
                  </div>
                  <div className="pt-5">
                    <div
                      onClick={review4Handler}
                      className={
                        showReview4 ? styles.styledBoxActive : styles.styledBox
                      }
                    >
                      <img
                        alt="Reviews Insource IT"
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
                <img
                  alt="Frequently Asked Questions, Insource IT"
                  className="img-fluid"
                  src="/assets/faqImg.svg"
                />
              </Col>
              <Col
                className="d-flex align-items-center justify-content-end"
                lg={6}
              >
                <div className={styles.faqRootContainer}>
                  <div onClick={icon1Handler} className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara1 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>{FaqParagraphs[0].question}</h1>
                      <img
                        alt="FAQs"
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara1
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara1 && <p>{FaqParagraphs[0].answer}</p>}</div>
                  </div>

                  <div onClick={icon2Handler} className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara2 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>{FaqParagraphs[1].question}</h1>
                      <img
                        alt="FAQs"
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara2
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara2 && <p>{FaqParagraphs[1].answer}</p>}</div>
                  </div>

                  <div onClick={icon3Handler} className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara3 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>{FaqParagraphs[2].question}</h1>
                      <img
                        alt="FAQs"
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara3
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara3 && <p>{FaqParagraphs[2].answer}</p>}</div>
                  </div>

                  <div onClick={icon4Handler} className={styles.rootFaqSec}>
                    <div
                      className={
                        showPara4 ? styles.faqSecActive : styles.faqSec
                      }
                    >
                      <h1>{FaqParagraphs[3].question}</h1>
                      <img
                        alt="FAQs"
                        style={{ width: "11px" }}
                        className="img-fluid"
                        src={
                          showPara4
                            ? `/assets/negIcon.svg`
                            : `/assets/posIcon.svg`
                        }
                      />
                    </div>
                    <div>{showPara4 && <p>{FaqParagraphs[3].answer}</p>}</div>
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
