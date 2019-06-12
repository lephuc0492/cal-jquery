function press(button)
{
	//document.querySelectorAll("input")[0].value += button.innerHTML;
	$("input#header1").val($("input#header1").val() + button.innerHTML);

}
function backspace()
{
	//document.querySelectorAll("input")[0].value = document.querySelectorAll("input")[0].value.slice(0,(document.querySelectorAll("input")[0].value.length -1));
	$("#header1").val($("#header1").val().slice(0, ($("#header1").val().length - 1)));
}
function clearr()
{
	//document.querySelectorAll("input")[0].value = "";
	//	document.querySelectorAll("input")[1].value = "";		
	$("#header1").val("")
}
function bang()
{
	var x = $("#header1").val()
	x = x.replace(/x/gi,'*')
	x = x.replace(/:/gi,'/')
	x = x.replace(/%/gi, '/100')
$("#header2").val(eval(x));

}
function nhan()
{
//document.querySelectorAll("input")[0].value += "*"
$("#header1").val($("#header1").val()+"x")
}
function chia()
{
//document.querySelectorAll("input")[0].value += "/"
$("#header1").val($("#header1").val()+":")
}
function tru()
{
//document.querySelectorAll("input")[0].value += "-"
$("#header1").val($("#header1").val()+"-")
}
function phantram()
{
//document.querySelectorAll("input")[0].value += "/100"
$("#header1").val($("#header1").val()+"%")
}
function binhphuong()
{
	//document.querySelectorAll("input")[0].value = document.querySelectorAll("input")[0].value + "*" + document.querySelectorAll("input")[0].value; 
	$("#header1").val(eval($("#header1").val()*$("#header1").val()));
}
function giaithua()
{
var x = document.querySelectorAll("input")[0].value.slice(document.querySelectorAll("input")[0].value.length - 1);
var z = 1;
	for(let i = 2; i <= x; i++)
	{
		z = z + "*" + i; 

	}
	var y = document.querySelectorAll("input")[0].value.slice(0,(document.querySelectorAll("input")[0].value.length -1))
			document.querySelectorAll("input")[0].value = y+z;
}
function canbac2()
{
	var x = document.querySelectorAll("input")[0].value;
	document.querySelectorAll("input")[0].value = Math.sqrt(x);

}
function theme()
{
	if ($("select").val() == "theme2") 
	{
	$("button").css('color','red')
	$("button").css('background','black')
	$("*").css('background','black')
	$("input").css('color','#629a6b')
	}
	else
	{	
	$("button").css('color','')
	$("button").css('background','')
	$("*").css('background','')
	$("input").css('color','')
	}

}