import React from 'react'
import { connect } from 'react-redux'

import { Grid, Row, Col, Table } from 'react-bootstrap'

const List = (props) => {

    if (props.listClimate.length !== 0) {
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
                                    {props.listClimate.list.map((data, idx) => {
                                        return <tr key={idx}>
                                            <td>{data.day}</td>
                                            <td>{data.temperature}</td>
                                            <td>{data.variance}</td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>Average</th>
                                        <td>{props.listClimate.avgTemp}</td>
                                        <td>{props.listClimate.avgVar}</td>
                                    </tr>
                                </tfoot>
                            </Table>
                        </Col>
                        <Col xs={6} md={4}>
                            sidebar
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    } else {
        return (<div></div>)
    }
}

const mapStateToProps = (state) => {
    return {
        listClimate: state.ListClimate
    }
}

export default connect(mapStateToProps, null)(List)