// Get the modal
var modal = document.getElementById("countryModal");

// Get the button that opens the modal
var btn = document.getElementById("country");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function() {
	
    getPhoneNumber();

    function getPhoneNumber() {
        
        let loader = `<div id="spinner"></div>`;
        tResult.innerHTML = loader;    

        var twoLettersCode = $("#input-two-letters-code").val();

        let formData = new FormData();
        formData.append('twoLettersCode', twoLettersCode);

        fetch("https://randommer.io/Phone",
            {
                body: formData,
                method: "post"
            }).then(data => data.text())
            .then((text) => {
                
                const phone = JSON.parse(text);

                tResult.className = "";
                tResult.innerHTML = '<span class="resultText">' + phone[0] + '</span>';

                console.log('request succeeded with JSON response', text);

            }).catch(function (error) {
                tResult.className = "";
                tResult.innerHTML = error;

                console.log('request failed', error)
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

        modal.style.display = "none";
    });


    $("#generate").click(function(e) {
        getPhoneNumber();
    });

    


});