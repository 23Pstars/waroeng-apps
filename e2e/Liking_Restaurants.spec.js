const assert = require('assert');

Feature('Liking Restaurants');

Scenario('showing empty liked restaurants', ({ I }) => {
  // favorite page
  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  I.see('No favorite restaurant.', '.post-item__empty');
});

Scenario('liking one restaurant', async ({ I }) => {
  // pick one restaurant
  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  const firstResto = locate('.post-item__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  // like it
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // check it
  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  const likedRestoTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  // pick one restaurant
  I.amOnPage('/');
  I.seeElement('.post-item__title a');
  I.click(locate('.post-item__title a').first());

  // like it
  I.seeElement('[aria-label="like this"]');
  I.click('#likeButton');

  // check it
  I.amOnPage('/#/favorite');
  I.seeElement('#posts');

  // pick it again
  I.click(locate('.post-item__title a').first());

  // unlike it
  I.seeElement('[aria-label="unlike this"]');
  I.click('#likeButton');

  // ensure empty
  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  I.see('No favorite restaurant.', '.post-item__empty');
});