// SET UP AJAX
$(document).ready(function(){
	// ajax setup
	$.ajaxSetup({
		url: '../../includes/ajax_viewcount.php',
		type: 'POST',
		cache: 'false'
	});
    
// START OF VIEW EVENT LISTENER 
    $(window).load(function() {
        var query = window.location.search;
        function getQuery(name){
            if(name=(new RegExp('[?&amp;]'+encodeURIComponent(name)+'=([^&amp;]*)')).exec(location.search))
            return decodeURIComponent(name[1]);}
        var gamedataid = getQuery("gameDataId");
        console.log("DOM fully loaded and parsed. gamedataid = ", gamedataid);
        $.ajax({data: {'gamedataid' : gamedataid, 'action' : 'view'}});
        console.log("AJAX command sent");
    });
// END OF VIEW EVENT LISTENER   
    
   
});