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

	getDateAndTime();
}
// onclick event for baners
function bannerClick() {
	//window.location.replace("https://www.codefactory.wien");
	window.open("https://www.codefactory.wien");

}
function getDateAndTime(){

	var currentDate = new Date();
	var day = currentDate.getDay();	
	var dd = String(currentDate.getMonth() + 1).padStart(2, '0'); 
	var mm= String(currentDate.getDate()).padStart(2, '0');
	var yyyy = currentDate.getFullYear();
	
	var weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	var today = weekday[currentDate.getDay()] + ', '+ mm + '.' + dd + '.' + yyyy;
	
	document.getElementById("dateAndDay").innerHTML = today;
	
}
function toArticlePage(){
	window.open("article.html");
}

