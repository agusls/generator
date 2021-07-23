var maxLength = 200;

$("textarea").attr('maxlength', maxLength);
$('#info').text( '0/' + maxLength);

$('textarea').keyup(function() {
	var currLength = $(this).val().length;
	var textlen = maxLength - currLength;
	$('#info').text(currLength + '/' + maxLength);
});

function eraseText() {
    document.getElementById("english-text").value = "";
    document.getElementById("english-text").focus();
    document.getElementById("btnClear").style.display = "none";
    $('#info').text( '0/' + maxLength);
}


$(document).ready(function() {
    
    $("#english-text").on('keypress', function() {        
        if($("#english-text").length > 0) {
          document.getElementById("btnClear").style.display = "block";
        }        
    })

    var xSize = document.querySelector('#xSize');
    var vSize = document.querySelector('#vSize');
    var off = xSize.offsetWidth / (parseInt(xSize.max) - parseInt(xSize.min));
    var px =  ((xSize.valueAsNumber - parseInt(xSize.min)) * off) - (vSize.offsetParent.offsetWidth / 2);

    vSize.parentElement.style.left = px + 'px';
    vSize.parentElement.style.top = xSize.offsetHeight + 'px';
    vSize.innerHTML = xSize.value + ' width x ' + xSize.value + ' height';

    xSize.oninput =function(){
        let px = ((xSize.valueAsNumber - parseInt(xSize.min)) * off) - (vSize.offsetWidth / 2);
        vSize.innerHTML = xSize.value + ' width x ' + xSize.value + ' height';
        vSize.parentElement.style.left = px + 'px';
    };

    $("#generate-qr").click(function(e) {

        $('#gen-qr').attr('data-text','loading image QR ...');

        var xSize = document.querySelector('#xSize');
        var dataqr = $("textarea[name='inputText']").val();
        
        console.log(dataqr);
        console.log( encodeURIComponent(dataqr));

        var url = "https://chart.googleapis.com/chart?"; 
        url += "chs=" +  xSize.value + "x" + xSize.value;
        url += "&cht=qr";
        url += "&choe=UTF-8";
        url += "&chl=" + encodeURIComponent(dataqr);

        console.log(url);

        var resultQR = document.querySelector("#resultQR");
        resultQR.style.textAlign = "center";
        resultQR.className = "";
        resultQR.innerHTML = '<img src="' + url + '"/>';

        $('#gen-qr').attr('data-text','Generate QR')

    })
});