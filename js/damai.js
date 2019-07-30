$('img').on('click',function(){
window.open('list_page.html');
})


$('li img').mouseenter(function(){
	$(this).css("opacity",1)
}).mouseleave(function(){
	$(this).css("opacity",0.5)
})
