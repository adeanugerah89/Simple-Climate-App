import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Store from './store'
import { searchClimate } from './actions/listAction'
import List from './components/List'
import { Jumbotron, Button, Grid, Row, Col, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currValue: ""
    }
  }

  handleChange(value) {
    this.setState({
      currValue: value
    })
  }

  render() {
    return (
      <Provider store={Store}>
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
                          <FormControl componentClass="select" onChange={(e) => this.handleChange(e.target.value)}>
                            <option value="Jakarta">Jakarta</option>
                            <option value="Tokyo">Tokyo</option>
                            <option value="London">London</option>
                          </FormControl>
                        </FormGroup>
                        <Button type="submit" onClick={() => Store.dispatch(searchClimate(this.state.currValue))}>
                          <Link to='/list'>Submit</Link>
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
