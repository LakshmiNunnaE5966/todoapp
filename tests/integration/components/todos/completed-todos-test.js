import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('todos/completed-todos', 'Integration | Component | todos/completed todos', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{todos/completed-todos}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#todos/completed-todos}}
      template block text
    {{/todos/completed-todos}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
