import Ember from 'ember';

export default Ember.Controller.extend({
    actions : {
        addTodo(){
          if(this.get('description')){
            var task=this.get('store').createRecord("todo",{
                
              title:this.get('description'),
              completed:false
              
            });
            task.save();
          }
        }
      }
});