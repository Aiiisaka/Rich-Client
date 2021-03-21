import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-product/addProduit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-product/add-list-product');
    assert.ok(route);
  });
});
