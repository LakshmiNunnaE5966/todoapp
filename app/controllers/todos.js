import Ember from 'ember';
// import todo from '../models/todo';

export default Ember.Controller.extend({
  queryParams: ['completed'],
  completed: null,
  filteredTodos: Ember.computed('completed', 'model', function() {
    var completed = this.get('completed');
    var todos = this.get('model');
  
    if (completed === "true") {
      return todos.filterBy('completed', true);
    } else if (completed === "false") {
      return todos.filterBy('completed', false);
    } else {
      return todos;
    }
  }),

  actions: {
    addTodo() {
      if (this.get('description')) {
        var task = this.get('store').createRecord("todo", {

          title: this.get('description'),
          completed: false

        });
        this.set('description', '');
        task.save();
      }
    },
    

  }
});