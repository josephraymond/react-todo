var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var newTodo = this.refs.todo.value;

    if (newTodo.length > 0) {
      this.refs.todo.value = '';
      this.props.onAddTodo(newTodo);
      this.refs.todo.focus();
    } else {
      this.refs.todo.focus();
    }
  },

  render: function () {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit} ref="form">
          <input type="text" placeholder="Add a todo item" ref="todo" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
