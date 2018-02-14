import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col, Table } from 'react-bootstrap'

const List = (props) => {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>{props.listClimate.city}</th>
                                    <th>Temperature</th>
                                    <th>Variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>date</td>
                                    <td>tempC</td>
                                    <td>varianceC</td>
                                </tr>
                            </tbody>

                        </Table>
                    </Col>
                    <Col xs={6} md={4}>
                        sidebar
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        listClimate: state.ListClimate
    }
}

export default connect(mapStateToProps, null)(List)