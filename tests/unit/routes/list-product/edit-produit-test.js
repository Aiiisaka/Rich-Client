import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list-product/editProduit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list-product/edit-list-product');
    assert.ok(route);
  });
});
