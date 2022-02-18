import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/home-main.png' or... Remove this comment to see the full error message
import homeLogo from "../../Assets/home-main.png";
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Particle' was resolved to '/Users/niraj... Remove this comment to see the full error message
import Particle from "../Particle";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Home2' was resolved to '/Users/nirajpate... Remove this comment to see the full error message
import Home2 from "./Home2";
// @ts-expect-error ts-migrate(6142) FIXME: Module './Type' was resolved to '/Users/nirajpatel... Remove this comment to see the full error message
import Type from "./Type";

function Home() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <section>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container fluid className="home-section" id="home">
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Particle />
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Container className="home-content">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Row>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col md={7} className="home-header">
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <h1 style={{ paddingBottom: 15 }} className="heading">
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                Hello! <span className="wave">👋🏻</span>
              </h1>

              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <h1 className="heading-name">
                My name is
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <strong className="main-name"> Niraj Patel</strong>
              </h1>

              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <div style={{ padding: 50, textAlign: "left" }}>
                // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Type />
              </div>
            </Col>

            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Col md={5} style={{ paddingBottom: 20 }}>
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Home2 />
    </section>
  );
}

export default Home;
