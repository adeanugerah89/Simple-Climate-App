import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import List from './components/List'
import { Jumbotron, Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currValue: ""
    }
  }

  render() {
    return (
      <Provider>
        <Router>
          <div>
            <div className="container">
              <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                  This is a simple Climate web app..
                </p>
                <Grid>
                  <Row className="show-grid">
                    <Col md={8} xsOffset={2}>
                      <form>
                        <FormGroup>
                          <ControlLabel>check the weather climate in your city</ControlLabel>
                          <FormControl componentClass="select" placeholder="select">
                            <option value="select">select</option>
                            <option value="other">...</option>
                          </FormControl>
                        </FormGroup>
                        <Button type="submit">
                          Submit
                        </Button>
                      </form>
                    </Col>
                  </Row>
                </Grid>
              </Jumbotron>
              <Route exact path="/list" component={List} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
