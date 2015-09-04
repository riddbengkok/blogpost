var casper = require('casper').create({
	 clientScripts: ["jquery.min.js"]
});

casper.start('http://google.com')
casper.then(function(){
	casper.capture('google.png');
	})
casper.thenOpen('http://yahoo.com');
casper.then(function(){
	casper.capture('yahoo.jpg');
	});
casper.thenOpen('http://youtube.com');
	casper.capture('yotup.png');
casper.back();
casper.run(function() {
    console.log(this.getCurrentUrl()); // 'http://foo.bar/2'
});
