// https://www.w3resource.com/javascript-exercises/javascript-string-exercise-27.php

function ascii_to_hexa(str)
{
	var arr1 = [];
	for (var n = 0, l = str.length; n < l; n ++) 
     {
		var hex = Number(str.charCodeAt(n)).toString(16);
		arr1.push(hex);
	 }
	return arr1.join('');
}

// https://gist.github.com/xenozauros/f6e185c8de2a04cdfecf

function hexToHSL(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  r = parseInt(result[1], 16);
	  g = parseInt(result[2], 16);
	  b = parseInt(result[3], 16);
	  r /= 255, g /= 255, b /= 255;
	  var max = Math.max(r, g, b), min = Math.min(r, g, b);
	  var h, s, l = (max + min) / 2;
	  if(max == min){
		h = s = 0; // achromatic
	  }else{
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max){
		  case r: h = (g - b) / d + (g < b ? 6 : 0); break;
		  case g: h = (b - r) / d + 2; break;
		  case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	  }
	var HSL = new Object();
	HSL['h']=h;
	HSL['s']=s;
	HSL['l']=l;
	return HSL;
  }