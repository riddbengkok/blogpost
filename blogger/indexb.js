var casper = require('casper').create({
	 clientScripts: ["jquery.min.js"]
});

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

casper.start('http://blogger.com/');
casper.viewport(1200,720);
casper.then(function (){
	this.echo(this.getTitle()); 
 
	// casper.capture('ourimage.png');
});

casper.then(function(){
	casper.sendKeys(x('//*[@id="Email"]'),'alfatsocial@gmail.com')


});

casper.then(function(){
	casper.click(x('//*[@id="next"]'));

});

casper.wait(1000 , function() {
	casper.sendKeys(x('//*[@id="Passwd"]') ,'alfat1618');
})

casper.then(function(){
	casper.click(x('//*[@id="signIn"]'));

});
casper.wait(2000, function(){//pilih blog yang maau di postiong
	casper.click(x('//*[@id="blogger-dashboard"]/div[3]/div[2]/div[1]/div[2]/div[3]/div/div/div[2]/div/div[3]/div[1]/h3/a'));


	
})
casper.then(function(){
	casper.click(x('//*[@id="blogger-app"]/div[3]/div[4]/div/div/div[2]/div[1]/div[1]/a'));

})	
casper.wait(3000 ,function(){
	casper.click(x('//*[@id="blogger-app"]/div[3]/div[4]/div/div/div[2]/div[1]/div[1]/a'));

})

casper.then(function(){
	casper.click(x('//*[@id="gb"]/div[1]/div[3]/div/div/div/div/a[2]/img'));

	
})

casper.wait(20000,function(){ //judul postingan 

	casper.sendKeys(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[1]/input') ,'ini judul postingan ');
	casper.click(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[4]/div/div[1]/div/span/span/button[2]'));
	casper.sendKeys(x('//*[@id="postingHtmlBox"]') ,'ini isi postingan ');
	casper.evaluate(function(){
		$('#postingComposeBox').html('asssssssssssssssssssssssssssssssssssssssssssssssssssssssssss');
	});

});
casper.wait(2000, function() {
casper.capture('ourimages.png');

})
casper.then(function(){
	casper.exit();
})

casper.run();