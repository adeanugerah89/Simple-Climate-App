import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { Grid, Row, Col, Table } from 'react-bootstrap'

const List = () => {
    return (
        <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Jakarta</th>
                                    <th>Temperature</th>
                                    <th>Variance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>;
                    </Col>
                    <Col xs={6} md={4}>
                        <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default List