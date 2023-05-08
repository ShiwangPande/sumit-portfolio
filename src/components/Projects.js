import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import proj1 from "../assets/img/project1.png";
import proj2 from "../assets/img/project2.png";
import proj3 from "../assets/img/project3.png";
import proj4 from "../assets/img/project4.png";
import proj5 from "../assets/img/project5.png";
import proj6 from "../assets/img/project6.png";
import proj7 from "../assets/img/project7.png";
import proj8 from "../assets/img/project8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Drug Formulation Project",
      description: "Develop a new formulation for a commonly used drug using various excipients and study the effect of different formulation parameters on drug release and stability.",
      imgUrl: proj1,
    },
    {
      title: "Analytical Method Development Project",
      description: "Develop a new analytical method for the quantitative analysis of a drug in its formulation or biological fluid. ",
      imgUrl: proj2,
    },
    {
      title: "Pharmaceutical Microbiology Project",
      description: "Study the microbial contamination of pharmaceutical products and develop effective methods to prevent contamination and ensure product safety.",
      imgUrl: proj3,
    },

  ];
  const projects2 = [
    {
      title: "Pharmacology Project",
      description: "Conduct experiments to study the pharmacological properties of a drug, including its mechanism of action, pharmacokinetics, and pharmacodynamics.",
      imgUrl: proj4,
    },
    {
      title: "Clinical Trials Project",
      description: " Design and conduct a clinical trial to evaluate the safety and efficacy of a new drug in human subjects.",
      imgUrl: proj5,
    },
    {
      title: "Regulatory Affairs Project",
      description: "Study the regulatory requirements for drug approval and develop a regulatory submission package for a new drug product.",
      imgUrl: proj6,
    },
  ];
  const projects3 = [
    {
      title: "Quality Control Project ",
      description: " Develop and validate a new method for the quality control testing of a pharmaceutical product, ensuring that it meets the required specifications and standards.",
      imgUrl: proj7,
    },
    {
      title: "Pharmacovigilance Project",
      description: "Monitor adverse drug reactions, identify potential safety concerns, and develop strategies for mitigating risks associated with drug use.",
      imgUrl: proj8,
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>There are a wide range of potential projects within the field of pharmacy, including those focused on drug development, clinical research, and pharmaceutical manufacturing. Here are a few Porjects I have done:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">1st Yr</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2nd Yr</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">3rd Yr</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects2.map((projects2, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projects2}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>    </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projects3.map((projects3, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...projects3}
                                />
                              )
                            })
                          }
                        </Row>  </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}