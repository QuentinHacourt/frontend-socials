import { module, test } from 'qunit';
import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Controller | birthday', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:birthday');
    assert.ok(controller);
  });
});
