import { module, test } from 'qunit';
import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Route | posts', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:posts');
    assert.ok(route);
  });
});
