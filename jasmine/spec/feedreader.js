$(function() {

  describe('RSS Feeds', function() {


    /*TODO: a test checks that allFeeds defined and is not empty*/
    it('allFeeds defined and is not empty', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    allFeeds.forEach(function(item) {


      /*TODO: a tests check that the URLs was defined and it is not empty*/
      it('url defined', function() {
        expect(item.url).toBeDefined();
      });

      it('lenght of url > 0', function() {
        expect(item.url.length).not.toBe(0);
      });


      /*TODO: a tests check that the names defined and it is not empty*/
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


    /*TODO: a tests check that the menu changes visibility at click*/
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


    /*TODO: a test checks that "entry" belongs "feed"*/
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
        firstCall = $('.feed').html();

        loadFeed(1, function() {
          secondCall = $('.feed').html();

          done();
        });
      });
    });


    /*TODO: a test checks that feeds actually changed*/
    it('feeds changes', function() {
      expect(firstCall === secondCall).toBe(false);
    });
  });
}());
