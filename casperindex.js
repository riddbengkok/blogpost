var casper = require('casper').create({
	 clientScripts: ["jquery.min.js"]
});

casper.userAgent("Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.72 Safari/537.36");

var x = require('casper').selectXPath;

var urltoscrape= 'http://www.edyutomo.com/internet-dan-komputer/cara-mudah-download-video-dari-youtube';

var domaintoscrape= 'http://www.edyutomo.com/'; //dapetin gambar

var classcontent='.art-article'; //class content yang mau di scraping

var judul ='cara gampang download video youtube'; 

var xpathblog ='//*[@id="blogger-dashboard"]/div[3]/div[2]/div[1]/div[2]/div[3]/div/div/div[2]/div/div[1]/div[4]/a[1]';//blog yang maa yang mau di post , klik kanan link new posting ,copy xpath

var email = 'alfatsocial@gmail.com';

var Pass = '';


casper.start(urltoscrape);
casper.then(function(){
	var juduls = casper.evaluate(function(){
		return $('h1').text();
	})

	//judull
	// var judul = judul.replace(/^\s+|\t+|\s+$|\s+(?=\s)/g, "");

	var contentposting = casper.evaluate(function(){
		var h2e = $('h2').text();
		var conte = $(classcontent).html(); 
		// var a = '<img src="/images/stories/sakit2.jpg" border="0" title="cara mudah download video dari youtube">';
		conte = conte.replace(/src="\//g,domaintoscrape);
		
		return conte;
	})

	var pp = document.querySelectorAll('p');
// this.echo("get text"+pp );

// casper.capture('ourimages.png');



casper.start('http://localhost/oskasp/');
casper.viewport(1200,720);
casper.then(function (){
	this.echo("masuk spun"); 
 
	// casper.capture('ourimage.png');
});

casper.then(function(){
	// casper.capture('ourimage.png');

	casper.sendKeys(x('//*[@id="textbro"]'), contentposting)

	casper.then(function(){
	casper.click(x('//*[@id="submitbro"]'));

	this.echo("submit text to spun"); 


});
});

// casper.then(function(){
// 	casper.click(x('//*[@id="submitbro"]'));

// });

casper.then( function() {
	var hasil = casper.evaluate(function(){
		return $("#result").val();
	});
	casper.capture('ourimage2.png');

	
	// casper.start("http://google.com");
	// casper.then(function(){
	// // casper.capture('ourimagease.png',{top:0,left:0,width:1200,height:720});
		this.echo("dapat hasil spun"+hasil) ;
	// })

casper.start('http://blogger.com/');
casper.viewport(1200,720);
casper.then(function (){
	this.echo("memulai blogger"); 
 
	// casper.capture('ourimage.png');
});

casper.then(function(){
	this.echo("memulai login"); 

	casper.sendKeys(x('//*[@id="Email"]'),'alfatsocial@gmail.com')


});

casper.then(function(){
	casper.click(x('//*[@id="next"]'));

});

casper.wait(1000 , function() {
	casper.sendKeys(x('//*[@id="Passwd"]') ,'');
})

casper.then(function(){
	casper.click(x('//*[@id="signIn"]'));
	this.echo("login sukses"); 

});
casper.wait(10000, function(){//pilih blog yang maau di postiong

	casper.click(x(xpathblog));

	this.echo("memilih blog"); 

	
})
// casper.wait(5000 ,function(){
// 	casper.click(x('//*[@id="blogger-dashboard"]/div[3]/div[2]/div[1]/div[2]/div[3]/div/div/div[2]/div/div[1]/div[4]/a[1]'));
// 	this.echo("psotingan baru"); 

// })	
casper.wait(15000 ,function(){
	casper.then(function(){
	casper.click(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[4]/div/div[1]/div/span/span/button[2]'));
	casper.sendKeys(x('//*[@id="postingHtmlBox"]') , hasil );

	casper.sendKeys(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[1]/input') , judul );
	// this.echo("memasukan judul"); 
	// casper.capture('judul.png');
	casper.capture('content.png');
	

	// casper.then(function(){




	casper.click(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[1]/span/button[1]'));

		this.echo("memasukan content"); 
		
		// casper.capture('ourimages.png');
	// })
		// casper.capture('after30000.png');

})
	// casper.click(x('//*[@id="blogger-app"]/div[3]/div[4]/div/div/div[2]/div[1]/div[1]/a'));
	// 	casper.capture('postinganbaru.png');


})

// casper.wait(5000 ,function(){

// 	casper.click(x('//*[@id="gb"]/div[1]/div[3]/div/div/div/div/a[2]/img'));
// 		casper.capture('setelahpostbaru.png');

	
// })

// casper.wait(30000,function(){ //judul postingan 

//permaasalahana disiniiiiiiiiiiiiiiiiiiiiiiiiiiiii 
// casper.then(function(){

// 	casper.sendKeys(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[1]/input') , judul );
// 	this.echo("memasukan judul"); 

// 	casper.click(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[4]/div/div[1]/div/span/span/button[2]'));

	// casper.then(function(){

	// casper.sendKeys(x('//*[@id="postingHtmlBox"]') , hasil );

	// casper.click(x('//*[@id="blogger-app"]/div[3]/div[3]/div/div/div/form/div[1]/span/button[1]'));

		// this.echo("memasukan content"); 
		
		// casper.capture('ourimages.png');
	// })
		// casper.capture('after30000.png');

// })



});
// casper.then( function() {
// 	casper.capture('ourimages.png');

// })
});

	// return casper.getElementAttribute('input[type="hidden"][name="result"]','value');

// casper.then(function(){
	

// })
// casper.start('http://google.com');
// casper.sendKeys(x('//*[@id="lst-ib"]'),)

// casper.wait(3000, function(){
	// casper.capture('ourimage.png');
// })
	
casper.then(function(){
	casper.exit();
})


casper.run();
