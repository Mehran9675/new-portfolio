import { Col, Row } from "@/ui-utils";
import styles from "./styles.module.scss";
const Side = () => {
  return (
    <Col className={styles["container"]}>
      <h1>Mehran Zahiroddini</h1>
      <Col className={styles["info"]}>
        <img src="/photo.jpg" />
        <p>
          My name is Mehran and I am a front-end developer with more than 2
          years of experience.
        </p>
        <Row justify="space-around">
          <span>linkedin</span>
          <span>github</span>
          <span>stackoverflow</span>
        </Row>
      </Col>
      <Col className={styles["links"]}>
        <Row>
          <span>About</span>
        </Row>
        <Row>
          <span>Portfolio</span>
        </Row>
        <Row>
          <span>Resume</span>
        </Row>
        <Row>
          <span>Contact</span>
        </Row>
        <button>Hire me</button>
      </Col>
    </Col>
  );
};

export default Side;
