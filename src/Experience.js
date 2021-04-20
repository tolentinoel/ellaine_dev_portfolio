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


        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
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
            <Col sm={6}>
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
        {/* <div className="tablist" id="company">
          <button id="tab-0" role="tab" tabindex="0" aria-selected="true" aria-controls="panel-0"><span>Upstatement</span></button>

        </div>

        <div id="expInfo">
          <div id="panel-0" role="tabpanel" tabindex="0" aria-labelledby="tab-0" aria-hidden="false">
            <h3><span>Engineer</span><span class="company"> @ <a href="https://www.upstatement.com/" class="inline-link" rel="noreferrer" target="_blank">Upstatement</a></span></h3><p class="range">May 2018 - Present</p>
            <div>
              <ul>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
                <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
              </ul>
            </div>
          </div>
          <p>Front Desk Associate</p>
        </div> */}



      </div>
    )
  }
}
export default Experience;