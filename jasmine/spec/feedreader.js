/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

  /* This is our first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  /* This is our first test - it tests to make sure that the
   * allFeeds variable has been defined and that it is not
   * empty. Experiment with this before you get started on
   * the rest of this project. What happens when you change
   * allFeeds in app.js to be an empty array and refresh the
   * page?
   */
$(function() {
  describe('RSS Feeds', function() {
    allFeeds.forEach(function(item, i, allFeeds) {
      it('are defined', function() {
        expect(item).toBeDefined();
      });

      it('lenght > 0', function() {
        expect(item.length).not.toBe(0);
      });
    });
  });
  /* TODO: Write a test that loops through each feed
   * in the allFeeds object and ensures it has a URL defined
   * and that the URL is not empty.
   */

  /* TODO: Write a test that loops through each feed
   * in the allFeeds object and ensures it has a name defined
   * and that the name is not empty.
   */


  describe('The menu', function() {
    let classBody = $('body').hasClass('menu-hidden');

    it('by default menu is hidden', function() {
      expect(classBody).toBe(true);
    });

    let clicks = [];

    for (let i = 0; i < 2; i++) {
      $('.menu-icon-link').trigger('click');
      clicks[i] = $('body').hasClass('menu-hidden');
    }

    it('onclick menu will show', function() {
      expect(clicks[0]).not.toMatch(classBody);
    });

    it('onclick menu will hidden', function() {
      expect(clicks[1]).not.toMatch(clicks[0]);
    });

  });
  /* TODO: Write a new test suite named "The menu" */

  /* TODO: Write a test that ensures the menu element is
   * hidden by default. You'll have to analyze the HTML and
   * the CSS to determine how we're performing the
   * hiding/showing of the menu element.
   */

  /* TODO: Write a test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * should have two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */

  /* TODO: Write a new test suite named "Initial Entries" */
  describe('Initial Entries', function() {

    beforeEach(function(done) {

      loadFeed(0, function() {
        done();
      });
    });

    let entry = $('.entry');
    //  console.log(entry);

    let feed = $('.feed');
    //  console.log(feed);

    it('container.entry is not empty', function() {
      expect(entry).toBeDefined();
    });

    it('container.feed is not empty', function() {
      expect(feed).toBeDefined();
    });
  });

  /* TODO: Write a test that ensures when the loadFeed
   * function is called and completes its work, there is at least
   * a single .entry element within the .feed container.
   * Remember, loadFeed() is asynchronous so this test will require
   * the use of Jasmine's beforeEach and asynchronous done() function.
   */

  /* TODO: Write a new test suite named "New Feed Selection" */
  /*describe('New Feed Selection', function() {*/
  /*  beforeEach(function(done) {*/

  //loadFeed(0, function() {
  //done();
  //});
  //});

  //let firstCall = $(.feed).html;

  //beforeEach(function(done) {

  //loadFeed(0, function() {
  //done();
  //});
  //});

  //let secondCall = $(.feed).html;

  /*});*/
  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
