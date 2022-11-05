import React, { useState } from "react";
import { Container, Col } from "react-bootstrap";
import styles from "./PricingPlans.module.css";

const PricingPlans = () => {
  const [toggleIdTarget, setToggleIdTarget] = useState(null);
  const [data, setData] = useState([
    {
      price: 29,
      points: ["This is P1", "This is P2", "This is P3"],
    },
    {
      price: 49,
      points: ["This is P1", "This is P2", "This is P3"],
    },
    {
      price: 99,
      points: ["This is P1", "This is P2", "This is P3"],
    },
  ]);

  const ToggleState = (data) => {
    setToggleIdTarget(data);
    console.log(data);
  };
  // const changeData = (data) => {
  //   setData(data);
  //   console.log(data);
  // };
  return (
    <div className={styles.root}>
      <div className={styles.innerContainer}>
        <Container>
          {/* Place dashed text here <-- */}
          <h1 className={`${styles.heading} pb-2`}>
            Choose Plan That Suits<br></br> For Your Business
          </h1>
          <div className="mt-5">
            <Col className={styles.barCol}>
              <h3
                onClick={() => {
                  ToggleState("one");
                }}
                className={
                  toggleIdTarget === "one" ? styles.h3Active : styles.h3
                }
              >
                Website Application
              </h3>

              <h3
                onClick={() => {
                  ToggleState("two");
                }}
                className={
                  toggleIdTarget === "two" ? styles.h3Active : styles.h3
                }
              >
                Mobile Application
              </h3>

              <h3
                onClick={() => {
                  ToggleState("three");
                }}
                className={
                  toggleIdTarget === "three" ? styles.h3Active : styles.h3
                }
              >
                Ecommerce
              </h3>

              <h3
                onClick={() => {
                  ToggleState("four");
                }}
                className={
                  toggleIdTarget === "four" ? styles.h3Active : styles.h3
                }
              >
                Mcommerce
              </h3>

              <h3
                onClick={() => {
                  ToggleState("five");
                }}
                className={
                  toggleIdTarget === "five" ? styles.h3Active : styles.h3
                }
              >
                CMS
              </h3>

              <h3
                onClick={() => {
                  ToggleState("six");
                }}
                className={
                  toggleIdTarget === "six" ? styles.h3Active : styles.h3
                }
              >
                Search Engine Optimization
              </h3>

              <h3
                onClick={() => {
                  ToggleState("seven");
                }}
                className={
                  toggleIdTarget === "seven" ? styles.h3Active : styles.h3
                }
              >
                UI UX Design
              </h3>

              <h3
                onClick={() => {
                  ToggleState("eight");
                }}
                className={
                  toggleIdTarget === "eight" ? styles.h3Active : styles.h3
                }
              >
                SaaS-Based Solutions
              </h3>

              <h3
                onClick={() => {
                  ToggleState("nine");
                }}
                className={
                  toggleIdTarget === "nine" ? styles.h3Active : styles.h3
                }
              >
                CRM Solutions
              </h3>

              <h3
                onClick={() => {
                  ToggleState("ten");
                
                }}
                className={
                  toggleIdTarget === "ten" ? styles.h3Active : styles.h3
                }
              >
                MVP Solutions
              </h3>

              <h3
                onClick={() => {
                  ToggleState("eleven");
                 
                }}
                className={
                  toggleIdTarget === "eleven" ? styles.h3Active : styles.h3
                }
              >
                Eprocurement Solutions
              </h3>
            </Col>
          </div>
          <div className={styles.columnsContainer}>
            <Col lg={4} className={`${styles.column} ${styles.col1}`}>
              <div className={styles.innerColumn}>
                <img
                  alt=""
                  className={`${styles.img} img-fluid`}
                  src="/assets/dollarSign.svg"
                />
                <div className="d-flex flex-row align-items-start justify-content-start mt-4">
                  <img
                    alt=""
                    className={styles.dollarImg}
                    src="/assets/dollar.svg"
                  />
                  <h1>
                    {data[0].price}
                    <span>/Month</span>
                  </h1>
                </div>
                <h3>Classic Plan</h3>
                <div className={styles.scrollableCard}>
                  <ul>
                    {data[0].points.map((point) => (
                      <li>
                        <img alt="" src="/assets/rightArrow.svg" />
                        <h4>{point}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="tel:+21 334341 22">
                  <button>PURCHASE NOW</button>
                </a>
              </div>
            </Col>
            <Col lg={4} className={`${styles.column} ${styles.col2}`}>
              <div className={styles.innerColumnActive}>
                <img
                  alt=""
                  className={`${styles.img} img-fluid`}
                  src="/assets/star.svg"
                />
                <div className="d-flex flex-row align-items-start justify-content-start mt-4">
                  <svg
                    className={styles.dollarImg}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="currentcolor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.724 15.288C4.668 15.288 3.648 15.168 2.664 14.928C1.68 14.688 0.87 14.376 0.234 13.992L1.602 10.896C2.202 11.244 2.868 11.526 3.6 11.742C4.344 11.946 5.064 12.048 5.76 12.048C6.168 12.048 6.486 12.024 6.714 11.976C6.954 11.916 7.128 11.838 7.236 11.742C7.344 11.634 7.398 11.508 7.398 11.364C7.398 11.136 7.272 10.956 7.02 10.824C6.768 10.692 6.432 10.584 6.012 10.5C5.604 10.404 5.154 10.308 4.662 10.212C4.17 10.104 3.672 9.966 3.168 9.798C2.676 9.63 2.22 9.408 1.8 9.132C1.392 8.856 1.062 8.496 0.81 8.052C0.558 7.596 0.432 7.032 0.432 6.36C0.432 5.58 0.648 4.872 1.08 4.236C1.524 3.588 2.178 3.072 3.042 2.688C3.918 2.304 5.004 2.112 6.3 2.112C7.152 2.112 7.992 2.202 8.82 2.382C9.648 2.562 10.392 2.838 11.052 3.21L9.774 6.288C9.15 5.976 8.544 5.742 7.956 5.586C7.38 5.43 6.816 5.352 6.264 5.352C5.856 5.352 5.532 5.388 5.292 5.46C5.052 5.532 4.878 5.628 4.77 5.748C4.674 5.868 4.626 6 4.626 6.144C4.626 6.36 4.752 6.534 5.004 6.666C5.256 6.786 5.586 6.888 5.994 6.972C6.414 7.056 6.87 7.146 7.362 7.242C7.866 7.338 8.364 7.47 8.856 7.638C9.348 7.806 9.798 8.028 10.206 8.304C10.626 8.58 10.962 8.94 11.214 9.384C11.466 9.828 11.592 10.38 11.592 11.04C11.592 11.808 11.37 12.516 10.926 13.164C10.494 13.8 9.846 14.316 8.982 14.712C8.118 15.096 7.032 15.288 5.724 15.288ZM4.86 17.16V14.82H7.398V17.16H4.86ZM4.86 2.58V0.239999H7.398V2.58H4.86Z"
                      fill="white"
                    />
                  </svg>
                  <h1>
                    {data[1].price}
                    <span>/Month</span>
                  </h1>
                </div>
                <h3>Advanced Plan</h3>
                <div className={styles.scrollableCardActive}>
                  <ul>
                    {data[1].points.map((point) => (
                      <li>
                        <img alt="" src="/assets/rightArrowPurple.svg" />
                        <h4>{point}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="tel: +21 334341 22">
                  <button>PURCHASE NOW</button>
                </a>
              </div>
            </Col>
            <Col lg={4} className={`${styles.column} ${styles.col3}`}>
              <div className={styles.innerColumn}>
                <svg
                  className={`${styles.svg} img-fluid`}
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_34_815)">
                    <path
                      d="M19.3037 10.8608L14.8369 24.6206L26.9892 10.8608H19.3037Z"
                      fill="white"
                    />
                    <path
                      d="M9.3877 10.8608L13.5004 23.5298L17.6131 10.8608H9.3877Z"
                      fill="white"
                    />
                    <path
                      d="M7.69632 10.8608H0.0108643L12.1631 24.6206L7.69632 10.8608Z"
                      fill="white"
                    />
                    <path
                      d="M14.46 2.37939L18.4042 8.42117L20.3655 2.37939H14.46Z"
                      fill="white"
                    />
                    <path
                      d="M21.822 3.104L19.8262 9.25209H27.0003L21.822 3.104Z"
                      fill="white"
                    />
                    <path
                      d="M6.63379 2.37939L8.59514 8.42117L12.5393 2.37939H6.63379Z"
                      fill="white"
                    />
                    <path
                      d="M13.5 3.85059L9.97388 9.25201H17.0262L13.5 3.85059Z"
                      fill="white"
                    />
                    <path
                      d="M5.17825 3.104L0 9.25209H7.17409L5.17825 3.104Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_34_815">
                      <rect width="27" height="27" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div className="d-flex flex-row align-items-start justify-content-start mt-4">
                  <img
                    alt=""
                    className={styles.dollarImg}
                    src="/assets/dollar.svg"
                  />
                  <h1>
                    {data[2].price}
                    <span>/Month</span>
                  </h1>
                </div>
                <h3>Premium Plan</h3>
                <div className={styles.scrollableCard}>
                  <ul>
                    {data[0].points.map((point) => (
                      <li>
                        <img alt="" src="/assets/rightArrow.svg" />
                        <h4>{point}</h4>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="tel: +21 334341 22">
                  <button>PURCHASE NOW</button>
                </a>
              </div>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PricingPlans;
