import { module, test } from 'qunit';
import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Controller | add-post', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:add-post');
    assert.ok(controller);
  });
});
