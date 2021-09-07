import { Col, Grid, Row } from "@/ui-utils";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <>
      <Col className={styles["container"]}>
        <Row className={styles["head"]}>
          <Col>
            <h1>Mehran Zahiroddini</h1>
            <h3>Front-End Web Developer</h3>
            <p>
              Hands-on self-taught Web developer with more than 1 year of
              commercial experience writing stable, and efficient web
              applications using the latest technologies and best practices.
              Comprehensive knowledge of front-end web development using React,
              Next.js, Redux, HTML5, and CSS3.
            </p>
            <Row>
              <button>View Portfoilio</button>
              <button>View Resume</button>
            </Row>
          </Col>
          <img src="/photo.jpg" alt="Mehran-Zahiroddini" />
        </Row>
        <hr />
        <Col className={styles["about"]}>
          <Row className={styles["bar"]} align="center">
            <div></div>
            <h3>What I do</h3>
          </Row>
          <p>
            I Design performant and compatible web applications using React and
            React based frameworks namely Next.js.
            <br />
            below you can see an overview of the tools that I use.
          </p>
          <Grid column={4} className={styles["skills"]}>
            <Col>
              <h4>TypeScript</h4>
              <p>Functional, object oriented and test driven development.</p>
            </Col>
            <Col>
              <h4>Vanilla JavaScript</h4>
              <p>
                Functional, object oriented and test driven development.
                Es5/6/7/8/9.
              </p>
            </Col>
            <Col>
              <h4>React, Redux</h4>
              <p>
                Best practices, design patterns and performance optimizations.
              </p>
            </Col>
            <Col>
              <h4>Next.js, Gatsby.js, Umi.js</h4>
              <p>
                Best practices, design patterns and performance optimizations.
              </p>
            </Col>
            <Col>
              <h4>CSS3, HTML5</h4>
              <p>
                Best practices, responsive design and preproccessors such as
                sass and less.
              </p>
            </Col>
            <Col>
              <h4>Cypress, Jest</h4>
              <p>Best practices, design patterns.</p>
            </Col>
            <Col>
              <h4>Miscellaneous</h4>
              <p>
                Ant Design, bootstrap, styled components, npm, yarn, webpack,
                babel, puppeteer, graphql, restapi, websocket, pwa, web workers,
                scrum, jira, figma, zeplin
              </p>
            </Col>
          </Grid>
        </Col>
      </Col>
    </>
  );
};
export default Home;
