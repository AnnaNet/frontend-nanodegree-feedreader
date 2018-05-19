$(function() {

  describe('RSS Feeds', function() {
    allFeeds.forEach(function(item, i, allFeeds) {


      /*  TODO: a tests check that the URLs defined and it is not empty*/
      it('url defined', function() {
        expect(item.url).toBeDefined();
      });

      it('lenght of url > 0', function() {
        expect(item.url.length).not.toBe(0);
      });


      /* TODO: a tests check that the names defined and it is not empty*/
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


    /*TODO: a test checks that the menu element is hidden by default*/
    it('by default menu is hidden', function() {
      expect(classBody).toBe(true);
    });

    let clicks = [];

    for (let i = 0; i < 2; i++) {
      $('.menu-icon-link').trigger('click');
      clicks[i] = $('body').hasClass('menu-hidden');
    }


    /*TODO: a tests checks that the menu changes visibility at click*/
    it('onclick menu will show', function() {
      expect(clicks[0]).not.toMatch(classBody);
    });

    it('onclick menu will hidden', function() {
      expect(clicks[1]).not.toMatch(clicks[0]);
    });
  });


  describe('Initial Entries', function() {
    let entry = 0;
    let parentNameEntry = 0;

    beforeEach(function(done) {
      loadFeed(0, function() {
        entry = $('.entry').length;
        parentNameEntry = $($('.entry').parent().parent()).prop('className');

        done();
      });
    });


    /*TODO: a test checks that "feed" include "entry"*/
    it('entry belongs feed', function() {
      expect(parentNameEntry).toBe('feed');
    });


    /*TODO: a test checks that "entry" is not empty*/
    it('container.entry is not empty', function() {
      expect(entry).not.toBe(0);
    });

  });


  describe('New Feed Selection', function() {
    let firstCall = 0;
    let secondCall = 0;

    beforeEach(function(done) {
      loadFeed(0, function() {
        firstCall = $('.feed').html;
        console.log (firstCall);

        done();
      });

      loadFeed(1, function() {
        secondCall = $('.feed').html;
        console.log (secondCall);

        done();
      });
    });


    /*TODO: a test that ensures when a new feed is loaded the loadFeed*/
    /*function that the content actually changes.*/
    it('feeds changes', function() {
      expect(firstCall === secondCall).toBe(false);
    });
  });
}());
