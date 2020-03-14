import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";

export default class Gift extends Component {
  constructor() {
    super();
    this.state = {
      present: "",
      person: ""
    };
  }

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    console.log("Submitting");
  };

  render() {
    return (
      <Card className="mb-5">
        <Card.Body>
          <Form>
            <Form.Group>
              <Form.Label>Person</Form.Label>
              <Form.Control
                name="person"
                value={this.state.person}
                className="input-person"
                onChange={this.inputChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gift</Form.Label>
              <Form.Control
                name="present"
                value={this.state.present}
                className="input-present"
                onChange={this.inputChange}
              />
            </Form.Group>
            <Form.Group className="float-right">
              <Button className="btn-submit mr-1" onClick={this.submitHandler}>
                Submit
              </Button>
              <Button
                className="btn-remove "
                onClick={() => this.props.removeGiftHandler(this.props.gift.id)}
              >
                Remove
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
