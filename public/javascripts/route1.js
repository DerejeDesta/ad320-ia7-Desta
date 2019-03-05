var div1 = document.getElementById('div1');

div1.addEventListener('click', function() {
if(this.style.background == 'red'){

this.style.background = 'blue';

}else{
this.style.background= 'red';	
}
});


/*$(".div1").click(function () {
   $(this).toggleClass("green");
});*/
