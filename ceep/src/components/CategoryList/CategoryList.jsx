import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  handleEnterEvent(e) {
    if (e.key == "Enter") {
      let valueCategory = e.target.value;
      this.props.addCategory(valueCategory);
    }
  }
  render() {
    return (
      <section className="category-list">
        <ul className="category-list_list">
          {this.props.category.map((category, index) => {
            return (
              <li className="category-list_item" key={index}>
                {category}
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          className="category-list_input"
          placeholder="Add Category"
          onKeyUp={this.handleEnterEvent.bind(this)}
        />
      </section>
    );
  }
}
export default CategoryList;
