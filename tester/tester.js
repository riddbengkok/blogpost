var casper =require('casper').create({
	clientScript: ['jquery.min.js']
})

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x require('casper').selectXPath;