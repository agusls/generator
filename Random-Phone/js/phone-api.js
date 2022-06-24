
$(document).ready(function() {
	
    getPhoneNumber();

    function getPhoneNumber() {
        
        let loader = `<div id="spinner"></div>`;
        tResult.innerHTML = loader;    

        var twoLettersCode = $("#input-two-letters-code").val();

        // let formData = new FormData();
        // formData.append('twoLettersCode', twoLettersCode);
	
	    $.ajax({
            type: 'GET',
            url: "http://generator.skom.id/phone.php?CountryCode="+ twoLettersCode +"&i=1",
            headers: {
                'Content-Type':'application/json'
            }
            //OR
            //beforeSend: function(xhr) {
            //  xhr.setRequestHeader("My-First-Header", "first value");
            //  xhr.setRequestHeader("My-Second-Header", "second value");
            //}
        }).done(function(data) {
            // alert(data);
            tResult.className = "";
                 tResult.innerHTML = '<span class="resultText">' + data + '</span>';
        });
	    
    }

    $("li").click(function(e) {
        var twoLettersCode = $(this).data("two-letters-code");
        //var countryImage = $(this).closest('img').attr('src');

        var $a = $(e.currentTarget); // get a tag
        var $img = $a.find('img'); // find img in a tag        
        var selectedItemSrc = $img.attr('src'); // src from img
        var $cd = $a.find('div[class="divCode"]'); // find img in a tag
        var selectedItemCode = $cd.text(); // text from a

        $("#countryImage").attr('src', selectedItemSrc);
        $("#countryText").text( twoLettersCode + ' ' + selectedItemCode );
        $("#input-two-letters-code").val(twoLettersCode);

        console.log(twoLettersCode);
        console.log(selectedItemSrc);
        console.log(selectedItemCode);

        $.modal.close();
    });


    $("#generate").click(function(e) {
        getPhoneNumber();
    });

    


});
