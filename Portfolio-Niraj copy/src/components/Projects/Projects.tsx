import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// @ts-expect-error ts-migrate(6142) FIXME: Module './ProjectCards' was resolved to '/Users/ni... Remove this comment to see the full error message
import ProjectCard from "./ProjectCards";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/flatiron... Remove this comment to see the full error message
import flh from "../../Assets/Projects/flatiron-hub.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/moralis.... Remove this comment to see the full error message
import mor from "../../Assets/Projects/moralis.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/spotify.... Remove this comment to see the full error message
import spot from "../../Assets/Projects/spotify.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/nhl.png'... Remove this comment to see the full error message
import nhl from "../../Assets/Projects/nhl.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/expense.... Remove this comment to see the full error message
import exp from "../../Assets/Projects/expense.png";
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../Assets/Projects/covid.pn... Remove this comment to see the full error message
import covid from "../../Assets/Projects/covid.png";

function Projects() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Container fluid className="project-section">
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Container>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <h1 className="project-heading">
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          My <strong className="blue"> Personal Projects </strong>
        </h1>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title="Expense Tracker"
              description="A Ruby on Rails app with a React Frontend that allows users to keep track of expenses. Also integrated Crypto Currency widget with Alan AI and a custom script for users to find prices of any Crypto, along with other custom scripts Users are authenticated and able to access the app"
              link="https://expense-915b1.web.app/"
              link2="https://github.com/niraj23/Expense-App"
            />
          </Col>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={mor}
              isBlog={false}
              title="Moralis Chat"
              description="Metaverse is a 'shared virtual environment that people access via the Internet'. The technology creates a set of virtual spaces where people can immerse themselves through holograms/avatars to make it feel like they are in the same physical space. However we've build a chat app using react-js next-js taiwand-css and moralis. Moralis provides us the backend support for storing and retrieving data from blockchain."
              link="https://futuristic-chat.vercel.app/"
              link2="https://github.com/niraj23/Moralis-Chat"
            />
          </Col>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={flh}
              isBlog={false}
              title="Flatiron Hub"
              description="React application for Flatiron students to use. Uses React with Hooks with and Context for state management. The application has 4 main components. The Chat uses ChatEngine as a rest API to create a chat room. 
              The Games and Learn components, both use external or self hosted APIs. The VideoChat component using PeerJs a WebRTC wrapper to create a peer to peer connection between two users."
              link="https://flatironhub.org/"
              link2="https://github.com/niraj23/FlatIron-Hub"
            />
          </Col>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={spot}
              isBlog={false}
              title="Christmas Spotify"
              description="This is an app based on my love for music and Christmas. Utilizing Spotifys API, you can search for any song or artist and play the song or add it to a custom playlist. There are also premade custom Global Top 50 songs(updated everytime Spotify updates their playlist), and a Christmas Playlist. The technology stack for this app included HTML, CSS, JavaScript, Rails, Recct and Spotify API."
              link="https://christmas-spotify.web.app/"
              link2="https://github.com/niraj23/Christmas-Spotify"
            />
          </Col>

          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={nhl}
              isBlog={false}
              title="NHL Fantasy App"
              description="My First App. A Javascript with BootStrap App built to showcase NHL Teams and their perspective players. Using an NHL API this App allows you to add your favorite players from each team to a favorites list to build your fantasy team. Double Clicking a Player Card will flip it and reveal their stats updated through the NHL API. Favorites persist and you can visit the favorites to check on your team. Players for each team are also categorized and marked by their position."
              link="https://hockey-nu.vercel.app/"
              link2="https://github.com/niraj23/NHL-Fantasy-App"
            />
          </Col>
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Col md={4} className="project-card">
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="Covid Tracker"
              description="A simple Covid Tracker that allows the user to select a country and view the total cases and deaths, including globally. Built with Vue3 and TailwindCSS"
              link="https://covid-tracker-bea5d.web.app/"
              link2="https://github.com/niraj23/Covid-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
