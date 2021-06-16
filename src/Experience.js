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
                  <Nav.Link eventKey="first">Hilton <Card.Subtitle className="mb-2 text-light">San Jose,CA | Oct 2016 – March 2020</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Beverly Heritage <Card.Subtitle className="mb-2 text-light">Milpitas,CA | May 2015 - May 2016</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">DoubleTree by Hilton<Card.Subtitle className="mb-2 text-light">Fremont,CA | Feb 2014 - May 2016</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Freelance Construction<Card.Subtitle className="mb-2 text-light">Bay Area,CA | Sep 2014 - 2014</Card.Subtitle></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">GrandSpace Furniture & Interiors <Card.Subtitle className="mb-2 text-light">Quezon City, Philippines | April 2012 - 2013</Card.Subtitle></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col lg="auto" id="expInfoText">
              <Tab.Content id="tab-content">
                <Tab.Pane eventKey="first">
                  <h4 className="expInfoHeader">Front Desk Agent</h4>
                  <ListGroup variant="flush" >
                    <ul>
                      <li>Performs detailed operational procedures that cater to a high-volume diverse user group.</li>
                      <li>Proficient in operating systems and brand loyalty programs.</li>
                      <li>Contributes to company revenue by upselling additional facilities and services.</li>
                      <li>Provides accurate, descriptive company information to clients including the hours of operation, facility features, tourist destinations, and all services or amenities available.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h4 className="expInfoHeader">Front Office Supervisor</h4>
                  <ListGroup variant="flush" >
                    <ul>
                      <li>Balances hotel occupancy and contributes to company revenue by upselling.</li>
                      <li>Serves as manager on duty during the shift and implements standard operating procedures.</li>
                      <li>Provides hands-on training & customer relationship management coaching to new associates.</li>
                      <li>Monitors employee productivity, provides constructive feedback and coaching.</li>
                      <li>Awarded as Employee of the Month in December 2015</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h4 className="expInfoHeader">Guest Service Agent</h4>
                  <ListGroup variant="flush" >
                    <ul>
                      <li>Satisfies and delights customers by fulfilling client needs or requests.</li>
                      <li>Maintains property occupancy of 100% with 315 rooms and performs standard operating procedures. </li>
                      <li>Handles general office duties and delivers customer service to a high-volume diverse user group or event.</li>
                      <li>Awarded as Front Office Service Superstar in 2014</li>
                      <li>Awarded as November 2014's Team Member of the Month</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h4 className="expInfoHeader">Construction Intern</h4>
                  <ListGroup variant="flush">
                    <ul>
                      <li>Provided detailed proposals to clients including but not limited to contracts, working, drawings, & color schemes.</li>
                      <li>Handled paperwork, payments and consultation between contractors, clients & suppliers.</li>
                      <li>Proficient in operating tools and machinery in carpentry, masonry, and painting.</li>
                    </ul>
                  </ListGroup>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h4 className="expInfoHeader">Interior Designer</h4>
                  <ListGroup variant="flush" >
                    <ul>
                      <li>Prepares sketches, proposals, quotations, and contracts for the clients.</li>
                      <li>Manages project planning, design execution, and revisions between contractors, clients & suppliers.</li>
                      <li>Oversees the progress of project work and updates the project plans to reflect actual performance.</li>
                      <li>Delivers highly detailed swatch board & 2D/3D CAD working drawings.</li>
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