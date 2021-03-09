import React from "react"
import MenuItem from "../MenuItem"
export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.menuName} Menu</h1>
        <MenuItem {...this.props.menuItems[0]}></MenuItem>
        <MenuItem {...this.props.menuItems[1]}></MenuItem>
        <MenuItem {...this.props.menuItems[2]}></MenuItem>
        <h1>Dessert Menu</h1>
        <MenuItem {...this.props.menuItems[3]}></MenuItem>
        <MenuItem {...this.props.menuItems[4]}></MenuItem>
        <MenuItem {...this.props.menuItems[5]}></MenuItem>
        <MenuItem {...this.props.menuItems[6]}></MenuItem>
      </div>
    )
  }
}