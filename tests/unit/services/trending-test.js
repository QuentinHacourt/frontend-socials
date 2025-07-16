import { module, test } from 'qunit';
import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Service | trending', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:trending');
    assert.ok(service);
  });
});
