$(document).ready(function() {
	// выставляем умолчание (reset)
	$('div.librosh-openup > a').attr('href', 'javascript:void(0);');
	
$('div.librosh-openup').hover(
	function(){
		var timer = $(this).data('timer');
		if(timer) clearTimeout(timer);
	  $('div.librosh-openup > a').click(function(){
		$('div.librosh-openup').addClass('active');
	  })
    },function(){
		var lll = $('div.librosh-openup');
		lll.data('timer', setTimeout(function(){ lll.removeClass('active'); }, 700));
});
	
});
function lrsOff(t) {
	setTimeout(function() {
		$(this).removeClass('active');
	}, 1000);
	return;
}
function fun() {
	return;
}




// выпадалка с задержкой закрытия
/* .librosh-openup > div{display:none}.librosh-openup.active > div{display:block} */
