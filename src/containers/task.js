import React, { Component } from 'react'
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap'

export default class Task extends Component{
    render(){
        return (
            <Grid>
                <Row>
                    <Col lg={4} style={{textDecoration: this.props.todo.done ? 'line-through' : 'none'}}>
                        {this.props.todo.value}
                    </Col>
                    <Col lg={4}>
                        <Button
                            onClick={() => this.props.handleClick(this.props.index)}
                            disabled={this.props.todo.done}
                            bsStyle='success'
                        >
                        Completed
                        </Button>
                    </Col>
                    <Col lg={4}>
                        <Button
                            onClick={() => this.props.handleDelete(this.props.index)}
                            bsStyle='danger'
                        >
                        X
                        </Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}