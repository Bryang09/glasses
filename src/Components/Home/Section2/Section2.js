import React, { Component } from "react";

import "./Section2.css";

class Section2 extends Component {
  state = {
    list: [
      { id: 0, class: "men", text: "Shop Mens Fashion" },
      { id: 1, class: "women", text: "Shop Womens Fashion" },
      { id: 2, class: "kids", text: "Shop Kids Fashion" }
    ]
  };
  render() {
    const listing = this.state.list.map(li => {
      return (
        <div className={li.class} key={li.id}>
          <div className="subCover">
            <div className="subText">
              <h4>{li.text}</h4>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Section2">
        <div className="sub2">{listing}</div>
        <hr />
      </div>
    );
  }
}

export default Section2;
