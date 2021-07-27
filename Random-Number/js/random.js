$(document).ready(function() {    

    function getRandom() {
        
        var d = new Date();
        var month = d.getMonth();
        var year = d.getFullYear();
        var day = d.getDate();

        var time = ('0' + d.getHours()).slice(-2) + ":" +  ('0' + d.getMinutes()).slice(-2) + ":" +  ('0' + d.getSeconds()).slice(-2);

        today = day + "/" + month + "/" + year + ' ' + time;
        
        var tResult = document.querySelector("#tResult");

        let loader = `<div id="spinner"></div>`;
        tResult.innerHTML = loader;        

        iMin = $("#true-random-integer-generator-min").val();
        iMax = $("#true-random-integer-generator-max").val();

        console.log("Min: " + iMin);
        console.log("Max: " + iMax);

        let params = {
            "num": "1",
            "min": iMin,
            "max": iMax,
            "col": 1,
            "base": 10,
            "format": "plain",
            "rnd": "new"
        };

        let query = Object.keys(params)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                    .join('&');

        let url = 'https://www.random.org/integers/?' + query;
          
        fetch(url)
        .then(data => data.text())
        .then((text) => {
            
            tResult.className = "";
            tResult.innerHTML = '<span class="resultText">' + text + '</span>';
            tResult.innerHTML += '<span class="resultInfo">Min: ' + iMin + ', Max: ' + iMax + '</br>' + today + '</span>';

            console.log('request succeeded with JSON response', text);

        }).catch(function (error) {
            tResult.className = "";
            tResult.innerHTML = error;

            console.log('request failed', error)
        });
        
        var tResult = document.querySelector("#tResult");
        tResult.className = "";
        //
        //tResult.innerHTML += '<span class="resultHangul">' + rHangul + '</span>';
        //tResult.innerHTML += '<span class="resultRomanizan">Kamu berasal dari marga <i>' + namebymonth[m-1].romanizan.toUpperCase() + '</i> dan nama panggilanmu adalah <i>' + namebyday[d-1].romanizan.toUpperCase() + ' ' + nr + '</i></br>Romanisasi Revisi: ( ' + rStr + ' )</span>';
        
    }

    $("#generate").click(function(e) {
        getRandom();
    })

    $("#true-random-integer-generator-min").on('keypress',function(e) {
        if(e.which == 13) {
            getRandom();
        }
    });

    $("#true-random-integer-generator-max").on('keypress',function(e) {
        if(e.which == 13) {
            getRandom();
        }
    });
});