import React from "react"

export default class MenuItem extends React.Component {
  render() {
    return (
      <div class="menu-item" id="{this.props.itemId}"><p>${this.props.itemPrice}
      <h2>{this.props.itemName}</h2>
      <p>{this.props.itemDescription}</p>
      <p><button>Add to Cart</button></p></p></div>
      );
  }
}