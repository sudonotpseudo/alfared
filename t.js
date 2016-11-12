function main(){
	$("<input type='button' value='1' id='btn_a'/>").appendTo("body");
	$("<input type='button' value='2' id='btn_a'/>").appendTo("body");
	$("#btn_a").click(function(){alert(this.value);});
}

$(document).ready(function(){
	main();
});
