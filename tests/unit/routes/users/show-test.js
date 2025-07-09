import { module, test } from 'qunit';
import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Route | users/show', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:users/show');
    assert.ok(route);
  });
});
