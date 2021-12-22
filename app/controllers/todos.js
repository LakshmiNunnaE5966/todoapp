import Ember from 'ember';
import todo from '../models/todo';

export default Ember.Controller.extend({
    actions : {
        addTodo(){
          if(this.get('description')){
            var task=this.get('store').createRecord("todo",{
                
              title:this.get('description'),
              completed:false
              
            });
            this.set('description', '');
            task.save();
          }
        }
      }
});