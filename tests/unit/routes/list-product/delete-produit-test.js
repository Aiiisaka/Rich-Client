import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-product/deleteProduit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-product/delete-list-product');
    assert.ok(route);
  });
});
