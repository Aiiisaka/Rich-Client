import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | listeProduit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:liste-list-product');
    assert.ok(route);
  });
});
