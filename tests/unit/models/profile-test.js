import { module, test } from 'qunit';

import { setupTest } from 'frontend-socials/tests/helpers';

module('Unit | Model | profile', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('profile', {});
    assert.ok(model);
  });
});
