import React from 'react';
import './styles/Experience.css';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

class Experience extends React.Component{


  render() {
    return (
      <div className="expDiv">
        <h1 className="expHeader">Experience</h1>

        <div id="expInfo">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={4}>
              <Nav variant="tabs" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Hilton</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Beverly Heritage</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">DoubleTree by Hilton</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Freelance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">GrandSpace Furniture & Interiors</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
           
            <Col sm={8}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <h4>Front Desk Agent</h4>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <h4>Front Office Supervisor</h4>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <h4>Guest Service Agent</h4>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
                  <h4>Construction Intern</h4>
                </Tab.Pane>

                <Tab.Pane eventKey="fifth">
                  <h4>Interior Designer</h4>
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