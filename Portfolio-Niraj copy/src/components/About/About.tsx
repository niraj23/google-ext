import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Github' was resolved to '/Users/nirajpat... Remove this comment to see the full error message
import Github from "./Github";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Techstack' was resolved to '/Users/niraj... Remove this comment to see the full error message
import Techstack from "./Techstack";
// @ts-expect-error ts-migrate(6142) FIXME: Module './AboutCard' was resolved to '/Users/niraj... Remove this comment to see the full error message
import Aboutcard from "./AboutCard";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/niraj.jpeg' or it... Remove this comment to see the full error message
import niraj from "../../Assets/niraj.jpeg";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Toolstack' was resolved to '/Users/niraj... Remove this comment to see the full error message
import Toolstack from "./Toolstack";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Particle' was resolved to '/Users/niraj... Remove this comment to see the full error message
import Particle from "../Particle";


function About() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container fluid className="about-section">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              Who <strong className="blue">Am</strong> I
            </h1>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Aboutcard />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <img src={niraj} alt="about" className="img-fluid borderR" style={{ border: "solid 2.2px #1e4ee9"}}/>
          </Col>
        </Row>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className="project-heading">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          Professional <strong className="blue">Skillset </strong>
        </h1>

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Techstack />

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className="project-heading">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <strong className="blue">Tools</strong> I use
        </h1>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Toolstack />

        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Github />
      </Container>
    </Container>
  );
}

export default About;
