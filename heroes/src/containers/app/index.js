import React from 'react';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import { Grid, Row, Col, Panel, Nav, NavItem } from 'react-bootstrap';

//import Home from '../home'
import Heroes from '../Heroes';
import EditHero from '../EditHero';
import Dashboard from '../Dashboard';

const App = () => (
  <Grid>
    <Row className="content">
      <Col xs={12} sm={3} className="sidebar">

        <Panel className="panel-primary" header={<h3>Tour of Heroes</h3>}>
          <Nav activeKey={1} className="nav-sidebar">
            <LinkContainer to="/dashboard">
              <NavItem eventKey={1}>Dashboard</NavItem>
            </LinkContainer>
            <LinkContainer to="/heroes">
              <NavItem eventKey={2}>Heroes</NavItem>
            </LinkContainer>
          </Nav><br />
        </Panel>
      </Col>
      <Col className="main" xs={12} sm={9} smOffset={3} xsOffset={0} >
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/heroes" component={Heroes} />
        <Route path="/heroes/edit" component={EditHero} />
      </Col>
    </Row>
  </Grid>
)

/*
xs = extra small screens (mobile phones)
sm = small screens (tablets)
md = medium screens (some desktops)
lg = large screens (remaining desktops)
 */

export default App;
