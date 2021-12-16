import DS from 'ember-data';
export default DS.JSONAPIAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com',
    namespace: 'api/v1'
});
