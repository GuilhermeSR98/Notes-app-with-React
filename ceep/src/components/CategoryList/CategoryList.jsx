import React, { Component } from "react";
import "./style.css";

class CategoryList extends Component {
  constructor() {
    super();
    this.state = { category: [] };
    this.newCategory = this.newCategory.bind(this);
  }

  componentDidMount() {
    this.props.category.register(this.newCategory);
  }
  componentWillUnmount() {
    this.props.category.unregister(this.newCategory);
  }
  newCategory(category) {
    this.setState({ ...this.state, category });
  }

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
          {this.state.category.map((category, index) => {
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
