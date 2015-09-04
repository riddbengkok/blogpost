var casper = require('casper').create({
	clientScripts:['jquery.min.js']
});

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");
var x = require('casper').selectXPath;

casper.start('http://www.lornajane.net/posts/2012/unpacking-and-editing-a-chrome-extension');
casper.viewport(1200,720);
casper.then(function(){
	var judul = casper.evaluate(function(){
		return $('h1').text();
	})
	var content = casper.evaluate(function(){
		var h2e = $('h2').text();
		conte = h2e + $('p').text() 
		return conte;
	})
	// varsomeText = judul.replace(/(\r\n|\n|\r)/gm,"");
	var repl = judul.replace(/^\s+|\t+|\s+$|\s+(?=\s)/g, "");
	console.log(repl);

});
casper.then(function(){
	casper.exit();
})
casper.run();