$(function() {

  describe('RSS Feeds', function() {
    allFeeds.forEach(function(item, i, allFeeds) {


      /*  TODO: a tests that loops through each feed in the allFeeds object*/
      /*and ensures it has a URL defined and that the URL is not empty.*/
      it('url defined', function() {
        expect(item.url).toBeDefined();
      });

      it('lenght of url > 0', function() {
        expect(item.url.length).not.toBe(0);
      });


      /* TODO: a tests that loops through each feed in the allFeeds object and*/
      /*ensures it has a name defined and that the name is not empty.*/
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


    /*TODO: a test ensures the menu element is*/
    /*hidden by default.*/
    it('by default menu is hidden', function() {
      expect(classBody).toBe(true);
    });

    let clicks = [];

    for (let i = 0; i < 2; i++) {
      $('.menu-icon-link').trigger('click');
      clicks[i] = $('body').hasClass('menu-hidden');
    }


    /*TODO: a test ensures the menu changes visibility when the menu icon is clicked*/
    /*and does the menu display when clicked and does it hide when clicked again.*/
    it('onclick menu will show', function() {
      expect(clicks[0]).not.toMatch(classBody);
    });

    it('onclick menu will hidden', function() {
      expect(clicks[1]).not.toMatch(clicks[0]);
    });
  });


  describe('Initial Entries', function() {
    let entry = 0;

    beforeEach(function(done) {
      loadFeed(0, function() {
        entry = $('.entry').length;
        done();
      });
    });


    /*TODO: a test ensures when the loadFeed function is called and completes its work,*/
    /*there is at least a single .entry element within the .feed container.*/
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
