// set size for header on resize and onload page and also hide logo from 
// when the browser width is less than 690
function pageSetting() {
	var fullScreenHeaderHeight = 170;
	var fullScreenFooterHeight = 200;
	var myMaxWidth = 1247;
	var BodyWidth = document.getElementById("body").offsetWidth;
	//console.log(BodyWidth);
	//alert(BodyWidth);
	var newHeaderHeight = (fullScreenHeaderHeight*BodyWidth)/myMaxWidth;
	//var newFooterHeight = (fullScreenFooterHeight*BodyWidth)/myMaxWidth;
	//alert(newHeaderAndFootrHeight);
	document.getElementById("Header").style.height = newHeaderHeight+"px";
	//document.getElementById("Footer").style.height = newFooterHeight+"px";

	
	if (BodyWidth < 690)	
		document.getElementById("divLogoRight").style.display = "none";		
	else
		document.getElementById("divLogoRight").style.display = "block";
}
// onclick event for baners
function bannerClick() {
	//window.location.replace("https://www.codefactory.wien");
	window.open("https://www.codefactory.wien");

}
function getDateAndTime(){
	
}
function toArticlePage(){
	window.open("article.html");
}

