var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( 'Words : 0, Characters : 0');

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var countWords = $(this).val().split(' ').length;
	$('#info').text( 'Words : ' + countWords + ', Characters : ' + currLength );
});

function eraseText() {
    document.getElementById("english-text").value = "";
    $('#info').text( 'Words : 0, Characters : 0');
	document.getElementById("tResult").value = "";
    document.getElementById("english-text").focus();
    document.getElementById("btnClear").style.display = "none";
}


$(document).ready(function() {

    $("#english-text").on('keypress', function() {        
        if($("#english-text").length > 0) {
          document.getElementById("btnClear").style.display = "block";
        }        
    })
	
	$("#btnRepeat").click(function(e) {
	 
	 var inputText = $("#english-text").val();	 
     var period = $("#period:checked").length > 0;
	 var space = $("#space:checked").length > 0;
	 var newline = $("#newline:checked").length > 0;
	 var repeat = $("#repeat").val();
	 
	 var speriod = (period ==1) ? ".":""; 
	 var sspace = (space ==1) ? " ":""; 
	 var snewline = (newline ==1) ? "\n":""; 
	 
	 var i= 0;
	 var rsText = '';
	 for( i=0; i < repeat; i++ ) {
		 rsText += inputText + speriod + sspace + snewline;
	 }
	 console.log(rsText);
	 $("#tResult").val(rsText);
	 
	 });
	 
	 $("#btnCopy").click(function(){
			$("#tResult").select();
			document.execCommand('copy');
		});
	 
	$("#btnWA").click(function(){
			var tResult = $("#tResult").val();
			if(tResult.length > 0) window.open('https://api.whatsapp.com/send?text=' + tResult);
		});
		
});