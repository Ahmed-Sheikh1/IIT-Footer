import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.root}>
      <div className={styles.innerContainer}>
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={6}>
              {/* place dashed text here */}
              <h1 className={`${styles.heading} text-start`}>
                We Are <span>Experts</span> At
              </h1>
              <p className={`${styles.para} mt-4`}>
                We are seasoned professionals and leaders in the field who lead
                our diversified, large, and brilliant teams. We help brands
                achieve the peak of commercial success and enable, enrich, and
                equip them. Our experts have abilities to roll the dice with one
                hand. We aim to bring innovation.
              </p>
            </Col>
            <Col className={styles.column} lg={6}>
              <img
                alt="Services Insource IT"
                className={`${styles.img} img-fluid`}
                src="/assets/Mask group.svg"
              />
            </Col>
          </Row>
          <div className="mt-5">
            <Row>
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg1.svg"
                  />
                </div>
                <h3>Website Application Development</h3>
                <p>
                  We provide specialised solutions targeted at our client's
                  business objectives by following a professional approach. The
                  whole spectrum of services is offered by Insource IT, a
                  full-cycle website-building firm that offers end-to-end
                  solutions. Utilise our extensive experience in website
                  building to carve out your niche on the internet.
                </p>
              </Col>
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg2.svg"
                  />
                </div>
                <h3>Mobile Application Development</h3>
                <p>
                  Insource IT helps maximizing the potential of mobile
                  applications. Being a mobile application development firm, we
                  bring the most innovative ideas to life by producing
                  user-friendly, adaptable, and custom mobile applications that
                  expand to meet your company's demands and are an excellent
                  replacement for corporate and customer-facing settings.
                </p>
              </Col>
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg3.svg"
                  />
                </div>
                <h3>E-Commerce Development</h3>
                <p>
                  Now, it's time to boost your online business and facilitate
                  your interaction with e-commerce features. Each step is a
                  chatbot to open carts or deal with complex coding on the
                  backend. We are with our team of experts to facilitate you at
                  each stage of creating an online store or marketplace. Our
                  experts provide the perfect, custom eCommerce solutions,
                  wordpress WoCommerce solutions, OpenCart Development, Magento
                  eCommerce Development, and Shopify eCommerce setup.
                </p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg4.svg"
                  />
                </div>
                <h3>M-Commerce Development</h3>
                <p>
                  Insource IT is a leading global provider of mobile commerce
                  application development services. Our app developers work to
                  create the most distinctive, well-presented, scalable,
                  cross-platform and user-friendly mobile applications. With the
                  help of a talented group of committed mobile commerce app
                  developers. Our company's only objective is to offer upscale
                  m-Commerce solutions for large or start-up businesses.
                </p>
              </Col>
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg5.svg"
                  />
                </div>
                <h3>CMS Development</h3>
                <p>
                  We offer Custom CMS development services that are secure,
                  scalable, and success-oriented. Our CMS development services
                  best suit eCommerce firms, start-ups, and mid-sized
                  organisations.
                </p>
              </Col>
              <Col lg={4} className={styles.boxContainer}>
                <div className={styles.boxImgContainer}>
                  <img
                    alt="Services Insource IT"
                    className="img-fluid"
                    src="/assets/boxImg6.svg"
                  />
                </div>
                <h3>Search Engine Optimization</h3>
                <p>
                  Worried about why all your marketing techniques and strategies
                  are not showing results? Looking for growth of your website?
                  Want to generate traffic? So here now, you are at the right
                  place. Our SEO services unlock your brand's ultimate
                  potential. Our SEO experts will develop a strategy for your
                  website using their expertise to rank your website.
                </p>
              </Col>
              <div className="d-flex align-items-center justify-content-center">
                <Col lg={4} className={styles.boxContainer}>
                  <div className={styles.boxImgContainer}>
                    <img
                      alt="Services Insource IT"
                      className="img-fluid"
                      src="/assets/boxImg7.svg"
                    />
                  </div>
                  <h3>UI/UX Designs</h3>
                  <p>
                    Utilize our extensive UI/UX design knowledge to enhance
                    your demonstration, aesthetic appeal and user
                    experience. We actively employ the most remarkable design
                    techniques to give our clients a chance to deliver their
                    services in a user-friendly, aesthetically pleasing
                    environment that increases end users' engagement levels.
                  </p>
                </Col>
              </div>
            </Row>
          </div>

          <div className="mt-5">
            <Row className=" gx-5">
              {/* place dashed text here */}
              <h1
                className={`${styles.heading} ${styles.enColPadding} text-start`}
              >
                WE SHAPE THE <span>PERFECT</span> SOLUTIONS
              </h1>

              <Col className={styles.enCol} lg={6}>
                <h2>01</h2>
                <h3>SaaS-based Solutions</h3>
                <p className={`${styles.para} mt-3`}>
                  Our team of experts' presence is to help our clients better
                  understand why SaaS products will assist your company's
                  transition away from on-premises software. Get up to speed
                  with our complete, specialised SAAS solution to accomplish
                  your company objectives more effectively. Our professionals
                  have access to a full range of business tools for enterprise
                  resource planning (ERP), planning and budgeting, project
                  portfolio management (PPM), talent management, financial
                  reporting, human capital management (HCM), and numerous other
                  services.
                </p>
              </Col>
              <Col className={styles.enCol} lg={6}>
                <h2>02</h2>
                <h3>Customer Relationship Management (CRM) Solutions</h3>
                <p className={`${styles.para} mt-3`}>
                  The first step in choosing a customer relationship management
                  (CRM) system is to evaluate your needs and objectives because
                  the finest CRM software is the one that is appropriate for
                  you. Your company needs a robust CRM solution to stay
                  competitive and provide top-notch customer experiences. Your
                  company doesn't need to be significant to gain from this.
                  Every company requires a CRM system that intelligently links
                  all pertinent data and presents it to salespeople, marketers,
                  field service personnel, and customer care representatives. CRM
                  Banking Catalyst expands the potential for intelligent,
                  customised service using Microsoft Dynamics 365 Customer
                  Insights.
                </p>
              </Col>
            </Row>
            <Row className="gx-5 mt-4">
              <Col className={styles.enCol} lg={6}>
                <h2>03</h2>
                <h3>eProcurement Solutions</h3>
                <p className={`${styles.para} mt-3`}>
                  Based on cutting-edge technology for quick deployment,
                  straightforward service and maintenance, and lower overall
                  ownership costs. End-to-end buying, procurement strategy,
                  supplier relationships, and expenditure tracking are all
                  available through the system, which procurement professionals
                  can access locally and remotely. The procurement, supplier,
                  and buying management provided by Insource IT E-Procurement
                  Software can improve your company's financial performance.
                </p>
              </Col>
              <Col className={styles.enCol} lg={6}>
                <h2>
                  <span>04</span>
                </h2>
                <h3>Enterprise Resource Planning (ERP) Solutions</h3>
                <p className={`${styles.para} mt-3`}>
                  We are seasoned professionals and leaders in the field who
                  lead our diversified, large, and brilliant teams. We help
                  brands achieve the peak of commercial success and enable,
                  enrich, and equip them. Our experts have abilities to roll the
                  dice with one hand. We aim to bring innovation.
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Services;
