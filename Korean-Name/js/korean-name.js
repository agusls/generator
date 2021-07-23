$(document).ready(function() {
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 80;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");
    let currentYear = new Date().getFullYear();

    for (var y = 0; y < qntYears; y++) {
        let date = new Date(currentYear);
        let yearElem = document.createElement("option");
        yearElem.value = currentYear
        yearElem.textContent = currentYear;
        selectYear.append(yearElem);
        currentYear--;
    }

    for (var m = 1; m <= 12; m++) {
        let month = monthNames[m-1];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth.append(monthElem);
    }

    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();

    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);

    AdjustDays();
    selectDay.val(day)

    function AdjustDays() {
        var year = selectYear.val();
        var month = parseInt(selectMonth.val());
        selectDay.empty();

        //get the last day, so the number of days in that month
        var days = new Date(year, month, 0).getDate();

        //lets create the days of that month
        for (var d = 1; d <= days; d++) {
        var dayElem = document.createElement("option");
        dayElem.value = d;
        dayElem.textContent = d;
        selectDay.append(dayElem);
        }
    }

    $("#generate-name").click(function(e) {
        sex = $("input[name='sex']:checked").val();
        d = $("#day").val();
        m = $("#month").val();
        y = $("#year").val();
        console.log(sex);
        console.log(d);
        console.log(m);
        console.log(y);

        var namebymonth = [
            { str: 'HAN', hangul: '한', romanizan:'Han' },
            { str: 'GANG', hangul: '강', romanizan:'Kang' },
            { str: 'I', hangul: '이', romanizan:'Lee' },
            { str: 'JO', hangul: '조', romanizan:'Cho' },
            { str: 'YUN', hangul: '윤', romanizan:'Yun' },
            { str: 'GIM', hangul: '김', romanizan:'Kim' },
            { str: 'IM', hangul: '임', romanizan:'Lim' },
            { str: 'JANG', hangul: '장', romanizan:'Jang' },
            { str: 'CHOE', hangul: '최', romanizan:'Choi' },
            { str: 'BAK', hangul: '박', romanizan:'Park' },
            { str: 'SEO', hangul: '서', romanizan:'Suh' },
            { str: 'BAE', hangul: '배', romanizan:'Bae' }
        ];

        var namebyday = [
            { str: 'JIN', hangul: '진', romanizan:'Chin' },
            { str: 'HWA', hangul: '화', romanizan:'Hwa' },
            { str: 'JI', hangul: '지', romanizan:'Jee' },
            { str: 'HYO', hangul: '효', romanizan:'Hyo' },
            { str: 'SI', hangul: '시', romanizan:'Shi' },
            { str: 'DO', hangul: '도', romanizan:'Doh' },
            { str: 'SU', hangul: '수', romanizan:'Su' },
            { str: 'JAE', hangul: '재', romanizan:'Jae' },
            { str: 'HYEON', hangul: '현', romanizan:'Hyeon' },
            { str: 'SO', hangul: '소', romanizan:'Soh' },
            { str: 'EUN', hangul: '은', romanizan:'Un' },
            { str: 'GYEONG', hangul: '경', romanizan:'Kyung' },
            { str: 'YU', hangul: '유', romanizan:'Yoo' },
            { str: 'MYEONG', hangul: '명', romanizan:'Myung' },
            { str: 'SEON', hangul: '선', romanizan:'Sun' },
            { str: 'YE', hangul: '예', romanizan:'Yeh' },
            { str: 'WON', hangul: '원', romanizan:'Weon' },
            { str: 'SEO', hangul: '서', romanizan:'Suh' },
            { str: 'HA', hangul: '하', romanizan:'Hah' },
            { str: 'JU', hangul: '주', romanizan:'Joo' },
            { str: 'BO', hangul: '보', romanizan:'Boh' },
            { str: 'YEONG', hangul: '영', romanizan:'Young' },
            { str: 'SEUL', hangul: '슬', romanizan:'Seul' },
            { str: 'HYE', hangul: '혜', romanizan:'Hye' },
            { str: 'JEONG', hangul: '정', romanizan:'Chung' },
            { str: 'SIN', hangul: '신', romanizan:'Shin' },
            { str: 'YEON', hangul: '연', romanizan:'Youn' },
            { str: 'SEONG', hangul: '성', romanizan:'Sung' },
            { str: 'IN', hangul: '인', romanizan:'Ihn' },
            { str: 'JE', hangul: '제', romanizan:'Je' },
            { str: 'DONG', hangul: '동', romanizan:'Tong' }
        ];

        var namebyyearp = [
            { str: 'RA', hangul: '라', romanizan:'Ra' },
            { str: 'MI', hangul: '미', romanizan:'Mi' },
            { str: 'CHAE', hangul: '채', romanizan:'Chae' },
            { str: 'I', hangul: '이', romanizan:'Lee' },
            { str: 'RIN', hangul: '린', romanizan:'Rin' },
            { str: 'MIN', hangul: '민', romanizan:'Min' },
            { str: 'HUI', hangul: '희', romanizan:'Hui' },
            { str: 'NA', hangul: '나', romanizan:'Na' },
            { str: 'A', hangul: '아', romanizan:'A' },
            { str: 'AE', hangul: '애', romanizan:'Ae' },
        ];

        var namebyyearl = [
            { str: 'HYEOK', hangul: '혁', romanizan:'Hyuk' },
            { str: 'SEOK', hangul: '석', romanizan:'Suk' },
            { str: 'JUN', hangul: '준', romanizan:'Joon' },
            { str: 'BIN', hangul: '빈', romanizan:'Been' },
            { str: 'U', hangul: '우', romanizan:'Woo' },
            { str: 'HYEON', hangul: '현', romanizan:'Hyun' },
            { str: 'HUN', hangul: '훈', romanizan:'Hoon' },
            { str: 'GEUN', hangul: '근', romanizan:'keun' },
            { str: 'HO', hangul: '호', romanizan:'Hou' },
            { str: 'SEOP', hangul: '섭', romanizan:'Sup' },
        ];

        var yearlast = +y.toString().split('').pop();
        console.log(yearlast);

        if( sex == 'L' ) {
            var ny = namebyyearl[yearlast].str.toUpperCase();
            var nh = namebyyearl[yearlast].hangul;
            var nr = namebyyearl[yearlast].romanizan.toUpperCase();
        } else {
            var ny = namebyyearp[yearlast].str.toUpperCase();
            var nh = namebyyearp[yearlast].hangul;
            var nr = namebyyearp[yearlast].romanizan.toUpperCase();
        }
        console.log(ny);
        
        var rStr = namebymonth[m-1].str.toUpperCase() + ' ' + namebyday[d-1].str.toUpperCase() + ' ' + ny;
        var rHangul = namebymonth[m-1].hangul + ' ' + namebyday[d-1].hangul + ' ' + nh;
        var rRomanizan = namebymonth[m-1].romanizan.toUpperCase() + ' ' + namebyday[d-1].romanizan.toUpperCase() + ' ' + nr;

        console.log(rStr);
        console.log(rHangul);
        console.log(rRomanizan);
        
        var tResult = document.querySelector("#tResult");
        tResult.className = "";
        tResult.innerHTML = '<span class="resultStr">' + rRomanizan + '</span>';
        tResult.innerHTML += '<span class="resultHangul">' + rHangul + '</span>';
        tResult.innerHTML += '<span class="resultRomanizan">Kamu berasal dari marga <i>' + namebymonth[m-1].romanizan.toUpperCase() + '</i> dan nama panggilanmu adalah <i>' + namebyday[d-1].romanizan.toUpperCase() + ' ' + nr + '</i></br>Romanisasi Revisi: ( ' + rStr + ' )</span>';
        
    })
});