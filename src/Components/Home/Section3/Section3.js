import React, { Component } from "react";

import "./Section3.css";

class Section3 extends Component {
  state = {
    pictures: [
      {
        id: 0,
        src:
          "https://images.pexels.com/photos/975668/pexels-photo-975668.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 1,
        src:
          "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 2,
        src:
          "https://images.pexels.com/photos/864938/pexels-photo-864938.png?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      {
        id: 3,
        src:
          "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        id: 4,
        src:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 5,
        src:
          "https://images.pexels.com/photos/1191118/pexels-photo-1191118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      },
      {
        id: 6,
        src:
          "https://images.pexels.com/photos/25758/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 7,
        src:
          "https://images.pexels.com/photos/12703/pexels-photo-12703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        id: 8,
        src:
          "https://images.pexels.com/photos/775091/pexels-photo-775091.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  };
  render() {
    const picture = this.state.pictures.map(pic => {
      return (
        <div
          className="box"
          style={{
            background: `url('${pic.src}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}
          key={pic.id}
        />
      );
    });

    return (
      <div className="Section3">
        <h2>Here's What our Awesome Customers are Wearing</h2>
        <div className="boxes">{picture}</div>
      </div>
    );
  }
}

export default Section3;
