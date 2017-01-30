var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.todo.value;

    if (newTodo.length > 0) {
      this.refs.todo.value = '';
      dispatch(actions.addTodo(newTodo));
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

export default connect()(AddTodo);
