import React, { Component } from 'react';
import { Button, Grid, Row, Col, FormControl } from 'react-bootstrap'

export default class Form extends Component{
    render(){
        return (
            <Grid>
                <Row>
                    <h1>
                        TO-DO:
                    </h1>
                </Row>
                <Row>
                    <form onSubmit = {(evt) => this.props.handleSubmit(evt)}>
                        <FormControl
                            required
                            value = {this.props.inputValue}
                            onChange = {(evt) => this.props.handleChange(evt)}
                        />
                        <Button
                            type = "submit"
                            bsStyle='primary'
                        >
                        Add new Todo
                        </Button>
                    </form>
                </Row>
            </Grid>
        )
    }
}