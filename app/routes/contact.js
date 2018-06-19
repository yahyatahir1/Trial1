import Route from '@ember/routing/route';

export default Route.extend({
  model()
  {
    return {
      contact: this.get('store').peekAll('contact')
    };
  }
});
