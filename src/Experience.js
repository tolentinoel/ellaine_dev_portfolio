import React from 'react';
import './styles/Experience.css';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

class Experience extends React.Component{


  render() {
    return (
      <div className="expDiv">
        <h1 className="expHeader">Experience</h1>

        <div id="expInfo">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row id="expRows">
            <Col sm={3.5} id="companyPills">
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Microsoft Leap<Card.Subtitle className="mb-2 text-light">Redmond,WA-Remote | Feb 2022 – June 2022</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Freelance<Card.Subtitle className="mb-2 text-light">Remote, US | April 2021 – Present</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Hilton <Card.Subtitle className="mb-2 text-light">San Jose,CA | Oct 2016 – March 2020</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Beverly Heritage <Card.Subtitle className="mb-2 text-light">Milpitas,CA | May 2015 - May 2016</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">DoubleTree by Hilton<Card.Subtitle className="mb-2 text-light">Fremont,CA | Feb 2014 - May 2016</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Freelance Construction<Card.Subtitle className="mb-2 text-light">Bay Area,CA | Sep 2013 - Jan 2014</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="seventh">GrandSpace Furniture & Interiors <Card.Subtitle className="mb-2 text-light">Quezon City, Philippines | April 2012 - 2013</Card.Subtitle></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col lg="auto" id="expInfoText">
              <Tab.Content id="tab-content">

              <Tab.Pane eventKey="first">
                  <h4 className="expInfoHeader">Software Engineer Apprentice</h4>
                  <ListGroup variant="flush">
                    <ul class="expList">
                      <li> Applied engineering principles to solve complex problems through sound and creative engineering.</li>
                      <li> Learned new technical procedures quickly and integrated them into the work processes. </li>
                      <li> Collaborated but also worked independently to solve problems and created technological solutions using
internal/industry best practices.</li>
                      <li> Demonstrated time management skill and completed software projects in a cooperative team environment.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h4 className="expInfoHeader">Web Developer</h4>
                  <ListGroup variant="flush">
                    <ul class="expList">
                      <li> Collaborated with the client to develop the overall look and design of a website</li>
                      <li> Built and redesigned pages using HTML, CSS, JavaScript (ES6), React.js framework, Bootstrap.</li>
                      <li> Produced, maintained and modified websites and its user interface.</li>
                      <li> Created interfaces that support various platforms, devices and screen resolution.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h4 className="expInfoHeader">Front Desk Agent</h4>
                  <ListGroup variant="flush" >
                    <ul class="expList">
                      <li>Performed detailed operational procedures that cater to a high-volume diverse user group.</li>
                      <li>Proficient in operating systems and brand loyalty programs.</li>
                      <li>Contributed to company revenue by upselling additional facilities and services.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h4 className="expInfoHeader">Front Office Supervisor</h4>
                  <ListGroup variant="flush" >
                    <ul class="expList">
                      <li>Balanced hotel occupancy and contributes to company revenue by upselling.</li>
                      <li>Served as manager on duty during the shift and implemented standard operating procedures.</li>
                      <li>Provided hands-on training & customer relationship management coaching to new associates.</li>
                      <li>Monitored employee productivity, provided constructive feedback and coaching.</li>
                      <li>Awarded as Team member for the month of December 2015</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h4 className="expInfoHeader">Guest Service Agent</h4>
                  <ListGroup variant="flush" >
                    <ul class="expList">
                      <li>Maintained property occupancy of 100% with 315 rooms and performed standard operating procedures. </li>
                      <li>Handled general office duties and delivered customer service to a high-volume diverse user group or event.</li>
                      <li>Awarded as Front Office Service Superstar in 2014</li>
                      <li>Awarded as November 2014's Team Member of the Month</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="sixth">
                  <h4 className="expInfoHeader">Construction Intern</h4>
                  <ListGroup variant="flush" >
                    <ul class="expList">
                      <li>Collaborated with general contractors and client to resolve design conflicts.</li>
                      <li>Provided detailed proposals to clients including but not limited to contracts, working, drawings, & color schemes.</li>
                      <li>Handled paperwork, payments and consultation between contractors, clients & suppliers.</li>
                      <li>Utilized various types of tools and machinery in carpentry, masonry, and painting.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="seventh">
                  <h4 className="expInfoHeader">Interior Designer</h4>
                  <ListGroup variant="flush" >
                    <ul class="expList">
                      <li>Prepared sketches, proposals, quotations, and contracts for the clients.</li>
                      <li>Managed project planning, design execution, and revisions between contractors, clients & suppliers.</li>
                      <li>Oversee the progress of project work and update the project plans to reflect actual performance.</li>
                      <li>Delivered highly detailed swatch board & 2D/3D CAD working drawings.</li>
                    </ul>
                  </ListGroup>

                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>

        </div>

      </div>
    )
  }
}
export default Experience;