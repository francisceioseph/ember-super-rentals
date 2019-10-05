import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | rental-property-type', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders correctly for standalone rental', async function (assert) {
    this.set('inputValue', 'Estate');

    await render(hbs`{{rental-property-type inputValue}}`);

    assert.equal(this.element.textContent.trim(), 'Standalone');
  });

  test('it renders correcly for a community rental', async (assert) => {
    this.set('inputValue', 'Apartment');
    await render(hbs`{{rental-property-type inputValue}}`);
    assert.equal(this.element.textContent.trim(), 'Community');
  });
});
