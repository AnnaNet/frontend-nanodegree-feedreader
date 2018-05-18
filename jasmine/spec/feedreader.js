$(function() {

  describe('RSS Feeds', function() {
    allFeeds.forEach(function(item, i, allFeeds) {
console.log (item.name + '  ' + item.url);

  /*  TODO: a tests that loops through each feed in the allFeeds object
and ensures it has a URL defined and that the URL is not empty.*/


      it('url defined', function() {
        expect(item.url).toBeDefined();
      });

      it('lenght of url > 0', function() {
        expect(item.url.length).not.toBe(0);
      });

  /* TODO: a tests that loops through each feed in the allFeeds object and
ensures it has a name defined and that the name is not empty.*/
      it('name defined', function() {
        expect(item.name).toBeDefined();
      });

      it('lenght of name > 0', function() {
        expect(item.name.length).not.toBe(0);
      });

    });
  });


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
    let feed = $('.feed');

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
  describe('New Feed Selection', function() {
    beforeEach(function(done) {
      loadFeed(0, function() {
        done();
      });
    });

    let firstCall = $('.feed');

    beforeEach(function(done) {
      loadFeed(1, function() {
        done();
      });
    });

    let secondCall = $('.feed');

    it('feeds changes', function() {
      expect(firstCall !== secondCall).toBe(true);
    });
  });
  /* TODO: Write a test that ensures when a new feed is loaded
   * by the loadFeed function that the content actually changes.
   * Remember, loadFeed() is asynchronous.
   */
}());
