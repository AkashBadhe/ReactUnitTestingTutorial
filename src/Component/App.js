import React, { Component } from "react";
import { Button, Container, Form, Navbar } from "react-bootstrap";
import Gift from "./Gift";
import { maxNumber } from '../helper/index';
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
  }

  addGift = () => {
    let { gifts } = this.state;
    let giftIds = gifts.map(gift => gift.id);
    let maxId = maxNumber(giftIds);
    gifts.push({ id: maxId + 1 });
    this.setState({
      gifts
    });
  };

  removeGiftHandler = id => {
    let gifts = this.state.gifts.filter(g => g.id !== id);
    this.setState({
      gifts
    });
  };

  render() {
    const { gifts } = this.state;
    return (
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Navbar.Brand href="#">Gift List.</Navbar.Brand>
        </Navbar>
        <ul className="gift-list clearfix mt-5">
          {gifts.map(gift => {
            return (
              <Gift
                key={gift.id}
                gift={gift}
                removeGiftHandler={this.removeGiftHandler}
              />
            );
          })}
        </ul>
        <Form.Group className="clearfix float-right">
          <Button className="add-gift btn btn-secondary" onClick={this.addGift}>
            Add Gift
          </Button>
        </Form.Group>
      </Container>
    );
  }
}
