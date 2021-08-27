export default class Category {
  constructor() {
    this.category = [];
    this.enrolled = [];
  }
  register(func) {
    this.enrolled.push(func);
  }
  notify() {
    this.enrolled.forEach((func) => {
      func(this.category);
    });
  }
  addCategory(newCategory) {
    this.category.push(newCategory);
    this.notify();
  }
}
