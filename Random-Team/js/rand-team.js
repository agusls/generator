$(document).ready(function() {

    const jsonMLB = {"data":[
		{"name":"D-backs","color":["#A71930","#DBCEAC"]},
		{"name":"Braves","color":["#002F5F","#B71234"]},
		{"name":"Orioles","color":["#ED4C09","#000000"]},
		{"name":"Red Sox","color":["#C60C30","#002244"]},
		{"name":"Cubs","color":["#003279","#CC0033"]},
		{"name":"White Sox","color":["#000000","#C0C0C0"]},
		{"name":"Reds","color":["#C6011F","#000000"]},
		{"name":"Rockies","color":["#000000","#C0C0C0"]},
		{"name":"Indians","color":["#003366","#D30335"]},
		{"name":"Tigers","color":["#001742","#DE4406"]},
		{"name":"Astros","color":["#072854","#FF7F00"]},
		{"name":"Royals","color":["#15317E","#74B4FA"]},
		{"name":"Angels","color":["#B71234","#002244"]},
		{"name":"Dodgers","color":["#083C6B","#EEEEEE"]},
		{"name":"Marlins","color":["#F9423A","#FFD100"]},
		{"name":"Brewers","color":["#182B49","#92754C"]},
		{"name":"Twins","color":["#072754","#C6011F"]},
		{"name":"Mets","color":["#002C77","#FB4F14"]},
		{"name":"Yankees","color":["#1C2841","#808080"]},
		{"name":"Athletics","color":["#003831","#FFD800"]},
		{"name":"Phillies","color":["#BA0C2F","#003087"]},
		{"name":"Pirates","color":["#000000","#FDB829"]},
		{"name":"Padres","color":["#002147","#B4A76C"]},
		{"name":"Giants","color":["#000000","#F2552C"]},
		{"name":"Mariners","color":["#0C2C56","#005C5C"]},
		{"name":"Cardinals","color":["#C41E3A","#0A2252"]},
		{"name":"Rays","color":["#00285D","#9ECEEE"]},
		{"name":"Rangers","color":["#BD1021","#003279"]},
		{"name":"Blue Jays","color":["#003DA5","#041E42"]},
		{"name":"Nationals","color":["#BA122B","#11225B"]}
		]};

	const jsonMLS = {"data":[{"name":"Chicago Fire","color":["#AF2626","#0A174A"]},
		{"name":"Colorado Rapids","color":["#91022D","#85B7EA"]},
		{"name":"Columbus Crew","color":["#000000","#FFDB00"]},
		{"name":"DC United","color":["#000000","#DD0000"]},
		{"name":"FC Dallas","color":["#CF0032","#07175C"]},
		{"name":"Houston Dynamo","color":["#F36600","#2E2926"]},
		{"name":"LA Galaxy","color":["#00245D","#004689"]},
		{"name":"Montreal Impact","color":["#122089","#000000"]},
		{"name":"NE Revolution","color":["#0A2141","#D80016"]},
		{"name":"New York City FC","color":["#6aace6","#0f1d41"]},
		{"name":"New York Red Bulls","color":["#D50031","#012055"]},
		{"name":"Orlando City","color":["#5e299a","#f8e196"]},
		{"name":"Philadelphia Union","color":["#001B2D","#B18500"]},
		{"name":"Portland Timbers","color":["#004812","#EBE72B"]},
		{"name":"Real Salt Lake","color":["#A50531","#013474"]},
		{"name":"San Jose Earthquakes","color":["#0051BA","#000000"]},
		{"name":"Seattle Sounders FC","color":["#4F8A10","#11568C"]},
		{"name":"Sporting Kansas City","color":["#A4BBD7","#0A2141"]},
		{"name":"Toronto FC","color":["#D80016","#313F49"]},
		{"name":"Vancouver Whitecaps","color":["#12264C","#85B7EA"]}]};

    const jsonNBA = {"data":[
		{"name":"Atlanta Hawks","color":["#000080","#FF0000"]},
		{"name":"Boston Celtics","color":["#009E60","#000000"]},
		{"name":"Brooklyn Nets","color":["#000000","#EEEEEE"]},
		{"name":"Charlotte Hornets","color":["#1D8CAA","#1C0C65"]},
		{"name":"Chicago Bulls","color":["#D4001F","#000000"]},
		{"name":"Cleveland Cavaliers","color":["#B3121D","#FFD700"]},
		{"name":"Dallas Mavericks","color":["#0B60AD","#072156"]},
		{"name":"Denver Nuggets","color":["#4B90CD","#FDB827"]},
		{"name":"Detroit Pistons","color":["#00519A","#EB003C"]},
		{"name":"Golden State Warriors","color":["#04529C","#FFCC33"]},
		{"name":"Houston Rockets","color":["#CE1138","#CCCCCC"]},
		{"name":"Indiana Pacers","color":["#092C57","#FFC322"]},
		{"name":"LA Clippers","color":["#EE2944","#146AA2"]},
		{"name":"LA Lakers","color":["#4A2583","#F5AF1B"]},
		{"name":"Memphis Grizzlies","color":["#001F70","#7399C6"]},
		{"name":"Miami Heat","color":["#000000","#B62630"]},
		{"name":"Milwaukee Bucks","color":["#003614","#E32636"]},
		{"name":"MIN Timberwolves","color":["#0F4D92","#000000"]},
		{"name":"New Orleans Pelicans","color":["#002B5C","#B4975A"]},
		{"name":"New York Knicks","color":["#0953A0","#FF7518"]},
		{"name":"OKC Thunder","color":["#007DC3","#F05133"]},
		{"name":"Orlando Magic","color":["#0047AB","#000000"]},
		{"name":"Philadelphia 76ers","color":["#0046AD","#D0103A"]},
		{"name":"Phoenix Suns","color":["#1C105E","#E65F20"]},
		{"name":"Portland Trail Blazers","color":["#F0163A","#B6BFBF"]},
		{"name":"Sacramento Kings","color":["#753BBD","#000000"]},
		{"name":"San Antonio Spurs","color":["#000000","#BEC8C9"]},
		{"name":"Toronto Raptors","color":["#B31B1B","#000000"]},
		{"name":"Utah Jazz","color":["#00275D","#FF9100"]},
		{"name":"Washington Wizards","color":["#C60C30","#002244"]}
		]};

    const jsonNcsaBasketball = {"data":["Albany","Binghamton","Hartford","Maine","Massachusetts Lowell","New Hampshire","StonyBrook","UMBC","Vermont","Cincinnati","Connecticut","Houston","Louisville","Memphis","Rutgers","South Florida","SouthernMethodist","Temple","UCF","Dayton","Duquesne","Fordham","George Mason","George Washington","La Salle","Massachusetts","RhodeIsland","Richmond","Saint Joseph's","Saint Louis","St. Bonaventure","Virginia Commonwealth","BostonCollege","Clemson","Duke","Florida State","Georgia Tech","Maryland","Miami (FL)","North Carolina","North Carolina State","NotreDame","Pittsburgh","Syracuse","Virginia","Virginia Tech","Wake Forest","East Tennessee State","Florida GulfCoast","Jacksonville","Kennesaw State","Lipscomb","Mercer","North Florida","Northern Kentucky","Stetson","USC Upstate","Baylor","IowaState","Kansas","Kansas State","Oklahoma","Oklahoma State","TCU","Texas","Texas Tech","WestVirginia","Butler","Creighton","DePaul","Georgetown","Marquette","Providence","Seton Hall","St. John's","Villanova","Xavier","EasternWashington","Idaho State","Montana","Montana State","North Dakota","Northern Arizona","Northern Colorado","PortlandState","Sacramento State","Southern Utah","Weber State","Campbell","Charleston Southern","Coastal Carolina","Gardner-Webb","HighPoint","Liberty","Longwood","Presbyterian","Radford","UNC-Asheville","VirginiaMilitary","Winthrop","Illinois","Indiana","Iowa","Michigan","Michigan State","Minnesota","Nebraska","Northwestern","Ohio State","PennState","Purdue","Wisconsin","Cal Poly","Cal State Fullerton","Cal State Northridge","Hawaii","Long Beach State","UC Davis","UCIrvine","UC Riverside","UC Santa Barbara","Charleston","Delaware","Drexel","Hofstra","James Madison","North CarolinaWilmington","Northeastern","Towson","William & Mary","Charlotte","East Carolina","Florida Atlantic","FloridaInternational","Louisiana Tech","Marshall","Middle Tennessee","North Texas","Old Dominion","Rice","SouthernMiss","Tulane","Tulsa","UAB","UTEP","UTSA","N.J.I.T.","Cleveland State","Detroit","Green Bay","IllinoisChicago","Milwaukee","Oakland","Valparaiso","Wright State","Youngstown State","Brown","Columbia","Cornell","Dartmouth","Harvard","Pensylvania","Princeton","Yale","Canisius","Fairfield","Iona","Manhattan","Marist","Monmouth","Niagara","Quinnipiac","Rider","Siena","St Peter's","Akron","Ball State","Bowling Green","Buffalo","Central Michigan","Eastern Michigan","Kent State","Miami (OH)","NorthernIllinois","Ohio","Toledo","Western Michigan","Bethune-Cookman","Coppin State","Delaware State","FloridaA&M","Hampton","Howard","Maryland-Eastern Shore","Morgan State","Norfolk State","North Carolina A&T","North CarolinaCentral","Savannah State","South Carolina State","Bradley","Drake","Evansville","Illinois State","Indiana State","Loyola (IL","Missouri State","Northern Iowa","Southern Illinois","Wichita State","Air Force","Boise State","Colorado State","FresnoState","Nevada","New Mexico","San Diego State","San Jose State","UNLV","Utah State","Wyoming","Bryant University","CentralConnecticut State","Fairleigh Dickinson","LIU Brooklyn","Mount St. Mary's","Robert Morris","Sacred Heart","St. Francis (NY)","St.Francis (PA)","Wagner","Austin Peay","Belmont","Eastern Illinois","Eastern Kentucky","Jacksonville State","Morehead State","MurrayState","SIU-Edwardsville","Southeast Missouri State","Tennessee State","Tennessee Tech","Tennessee-Martin","Arizona","ArizonaState","California","Colorado","Oregon","Oregon State","Stanford","UCLA","USC","Utah","Washington","Washington State","AmericanUniversity","Army","Boston University","Bucknell","Colgate","Holy Cross","Lafayette","Lehigh","Loyola (MD","Navy","Alabama","Arkansas","Auburn","Florida","Georgia","Kentucky","LSU","Mississippi State","Missouri","Ole Miss","SouthCarolina","Tennessee","Texas A&M","Vanderbilt","Appalachian State","Chattanooga","Citadel","Davidson","Elon","Furman","GeorgiaSouthern","Samford","UNC Greensboro","Western Carolina","Wofford","Abilene Christian","Central Arkansas","Houston Baptist","IncarnateWord","Lamar","McNeese State","New Orleans","Nicholls State","Northwestern State","Oral Roberts","Sam Houston State","Southeastern Louisiana","Stephen F. Austin","Texas A&M-CC","Alabama A&M","Alabama State","Alcorn State","Arkansas-Pine Bluff","GramblingState","Jackson State","Mississippi Valley State","Prairie View A&M","Southern University","Texas Southern","Denver","IPFW","IUPUI","Nebraska-Omaha","North Dakota State","South Dakota","South Dakota State","WesternIllinois","Arkansas State","Arkansas-Little Rock","Georgia State","Louisiana-Lafayette","Louisiana-Monroe","South Alabama","TexasState","Texas-Arlington","Troy","Western Kentucky","Brigham Young","Gonzaga","LoyolaMarymount","Pacific","Pepperdine","Portland","Saint Mary's","San Diego","San Francisco","Santa Clara","Cal StateBakersfield","Chicago State","Grand Canyon","Idaho","New Mexico State","Seattle","Texas-Pan American","UMKC","Utah Valley"]};

    var jsonNcsaFootball = {"data":[
		{"name":"Air Force Falcons","color":["#0061AA","#DDDDDD"]},
		{"name":"Akron Zips","color":["#C29C41","#000E41"]},
		{"name":"Alabama Crimson Tide","color":["#A80532","#CACCCE"]},
		{"name":"Alabama A&M Bulldogs","color":["#750000","#DDDDDD"]},
		{"name":"Alabama State Hornets","color":["#231F20","#FECB09"]},
		{"name":"Albany Great Danes","color":["#FCBB0D","#3D2777"]},
		{"name":"Alcorn State Braves","color":["#42094A","#FCF5BA"]},
		{"name":"American University Eagles","color":["#143D8D","#C41130"]},
		{"name":"Appalachian State Mountaineers","color":["#FFC520","#000000"]},
		{"name":"Arizona Wildcats","color":["#BB003A","#003559"]},
		{"name":"Arizona State Sun Devils","color":["#FEC927","#96203D"]},
		{"name":"Arkansas Razorbacks","color":["#231F20","#CD1041"]},
		{"name":"Arkansas Pine-Bluff Golden Lions","color":["#EEBB00","#000000"]},
		{"name":"Arkansas State Red Wolves","color":["#231F20","#C8C7C7"]},
		{"name":"Arkansas-Little Rock Trojans","color":["#000000","#AD0000"]},
		{"name":"Army Black Knights","color":["#000000","#D19D00"]},
		{"name":"Auburn Tigers","color":["#FE3300","#172240"]},
		{"name":"Austin Peay Governors","color":["#8E0B0B","#DDDDDD"]},
		{"name":"Ball State Cardinals","color":["#000000","#DA0000"]},
		{"name":"Baylor Bears","color":["#FFC227","#008649"]},
		{"name":"Belmont Bruins","color":["#E82645","#2A3F76"]},
		{"name":"Bethune-Cookman Wildcats","color":["#FEB65F","#841B35"]},
		{"name":"Binghamton Bearcats","color":["#B3B5B8","#006F53"]},
		{"name":"Boise State Broncos","color":["#F27E34","#2D4492"]},
		{"name":"Boston College Eagles","color":["#821E1E","#EEE8B7"]},
		{"name":"Boston University Terriers","color":["#000000","#DD072E"]},
		{"name":"Bowling Green Falcons","color":["#F5793F","#4E2400"]},
		{"name":"Bradley Braves","color":["#000000","#FF151A"]},
		{"name":"Brigham Young Cougars","color":["#002D62","#DDDDDD"]},
		{"name":"Brown Bears","color":["#000000","#8A1E04"]},
		{"name":"Bryant University Bulldogs","color":["#A59474","#231F20"]},
		{"name":"Bucknell Bison","color":["#FF7000","#000064"]},
		{"name":"Buffalo Bulls","color":["#000000","#0068B4"]},
		{"name":"Butler Bulldogs","color":["#000000","#0D1361"]},
		{"name":"Cal Poly Mustangs","color":["#123C31","#FFF1D0"]},
		{"name":"Cal State Bakersfield Roadrunners","color":["#FFD204","#005DAB"]},
		{"name":"Cal State Fullerton Titans","color":["#F68F1E","#003768"]},
		{"name":"Cal State Northridge Matadors","color":["#231F20","#CD1041"]},
		{"name":"California Golden Bears","color":["#FFDE30","#003768"]},
		{"name":"Campbell Fighting Camels","color":["#FF8931","#000000"]},
		{"name":"Canisius Golden Griffins","color":["#EEB211","#002859"]},
		{"name":"Centenary Gentlemen","color":["#161515","#A20B36"]},
		{"name":"Central Arkansas Bears","color":["#939BA1","#4F2683"]},
		{"name":"Central Connecticut State Blue Devils","color":["#1B49A2","#DDDDDD"]},
		{"name":"Central Michigan Chippewas","color":["#E2A253","#780006"]},
		{"name":"Charleston Cougars","color":["#6A0018","#B5A172"]},
		{"name":"Charleston Southern Buccaneers","color":["#00447C","#DDDDDD"]},
		{"name":"Charlotte 49ers","color":["#949431","#006331"]},
		{"name":"Chattanooga Mocs","color":["#00437B","#EEB311"]},
		{"name":"Chicago State Cougars","color":["#006700","#DDDDDD"]},
		{"name":"Cincinnati Bearcats","color":["#FD0026","#000000"]},
		{"name":"Citadel Bulldogs","color":["#002B5C","#DDDDDD"]},
		{"name":"Clemson Tigers","color":["#441F6F","#F06014"]},
		{"name":"Cleveland State Vikings","color":["#231F20","#A7A9AC"]},
		{"name":"Coastal Carolina Chanticleers","color":["#D59C3A","#373434"]},
		{"name":"Colgate Raiders","color":["#241F20","#8B011D"]},
		{"name":"Colorado Buffaloes","color":["#231F20","#D9C994"]},
		{"name":"Colorado State Rams","color":["#000000","#F8E793"]},
		{"name":"Columbia Lions","color":["#004B85","#7CC2F1"]},
		{"name":"Connecticut Huskies","color":["#B2B2AE","#0A1D5A"]},
		{"name":"Coppin State Eagles","color":["#FFF500","#2E3192"]},
		{"name":"Cornell Big Red","color":["#000000","#D60027"]},
		{"name":"Creighton Bluejays","color":["#F2B43B","#192DAA"]},
		{"name":"Dartmouth Big Green","color":["#005730","#DDDDDD"]},
		{"name":"Davidson Wildcats","color":["#E51937","#000000"]},
		{"name":"Dayton Flyers","color":["#E70808","#151A66"]},
		{"name":"Delaware Fightin Blue Hens","color":["#100A04","#FFDD00"]},
		{"name":"Delaware State Hornets","color":["#261511","#01A9EF"]},
		{"name":"Denver Pioneers","color":["#AA976C","#98002E"]},
		{"name":"DePaul Blue Demons","color":["#000000","#BD0F10"]},
		{"name":"Detroit Titans","color":["#E51937","#1C64A4"]},
		{"name":"Drake Bulldogs","color":["#B4B6B8","#0053A0"]},
		{"name":"Drexel Dragons","color":["#000000","#FFDC3E"]},
		{"name":"Duke Blue Devils","color":["#004C7D","#DDDDDD"]},
		{"name":"Duquesne Dukes","color":["#D31145","#002D62"]},
		{"name":"East Carolina Pirates","color":["#000000","#FFCE28"]},
		{"name":"East Tennessee State Buccaneers","color":["#171E23","#BE9434"]},
		{"name":"Eastern Illinois Panthers","color":["#0675D0","#000000"]},
		{"name":"Eastern Kentucky Colonels","color":["#A7AAAB","#730B27"]},
		{"name":"Eastern Michigan Eagles","color":["#7F7F7F","#0B5F24"]},
		{"name":"Eastern Washington Eagles","color":["#000000","#D72E34"]},
		{"name":"Elon Phoenix","color":["#9E0152","#AEA460"]},
		{"name":"Evansville Aces","color":["#FF6B0F","#663399"]},
		{"name":"Fairfield Stags","color":["#D4290F","#181111"]},
		{"name":"Fairleigh Dickinson Knights","color":["#B00C23","#004898"]},
		{"name":"Florida Gators","color":["#39734A","#FF4208"]},
		{"name":"Florida A&M Rattlers","color":["#00B552","#F89728"]},
		{"name":"Florida Atlantic Owls","color":["#CD1041","#004B85"]},
		{"name":"Florida Gulf Coast Eagles","color":["#D1B07F","#009569"]},
		{"name":"Florida International Golden Panthers","color":["#C5960B","#002D62"]},
		{"name":"Florida State Seminoles","color":["#231F20","#A8936B"]},
		{"name":"Fordham Rams","color":["#1E1A1B","#830032"]},
		{"name":"Fresno State Bulldogs","color":["#E32F38","#00427A"]},
		{"name":"Furman Paladins","color":["#3A1769","#DDDDDD"]},
		{"name":"Gardner-Webb Runnin' Bulldogs","color":["#231F20","#BF2C37"]},
		{"name":"George Mason Patriots","color":["#01010C","#FBC52B"]},
		{"name":"George Washington Colonials","color":["#FFB923","#063065"]},
		{"name":"Georgetown Hoyas","color":["#AC928A","#49487C"]},
		{"name":"Georgia Bulldogs","color":["#000000","#A0000B"]},
		{"name":"Georgia Southern Eagles","color":["#9B8348","#9DB7c4"]},
		{"name":"Georgia State Panthers","color":["#F8112B","#005DAA"]},
		{"name":"Georgia Tech Yellow Jackets","color":["#FDB813","#160A06"]},
		{"name":"Gonzaga Bulldogs","color":["#DC272A","#2D2161"]},
		{"name":"Grambling State Tigers","color":["#101008","#F88400"]},
		{"name":"Green Bay Phoenix","color":["#A7A9AC","#B20838"]},
		{"name":"Hampton Pirates","color":["#0067AC","#E5B67D"]},
		{"name":"Hartford Hawks","color":["#ED1B2E","#DDDDDD"]},
		{"name":"Harvard Crimson","color":["#231F20","#C41130"]},
		{"name":"Hawaii Warriors","color":["#000000","#004231"]},
		{"name":"High Point Panthers","color":["#000000","#342B88"]},
		{"name":"Hofstra Pride","color":["#FFCf1B","#0756A4"]},
		{"name":"Holy Cross Crusaders","color":["#909095","#1B2154"]},
		{"name":"Houston Cougars","color":["#012259","#C90822"]},
		{"name":"Houston Baptist Huskies","color":["#00529C","#702D07"]},
		{"name":"Howard Bison","color":["#09347A","#EE3A43"]},
		{"name":"Idaho Vandals","color":["#FFCC13","#000000"]},
		{"name":"Idaho State Bengals","color":["#FAD001","#000000"]},
		{"name":"Illinois Fighting Illini","color":["#1B4178","#F5873C"]},
		{"name":"Illinois State Redbirds","color":["#FEE818","#010000"]},
		{"name":"Illinois-Chicago Flames","color":["#FFE821","#DE3444"]},
		{"name":"Indiana Hoosiers","color":["#A82B3D","#DDDDDD"]},
		{"name":"Indiana State Sycamores","color":["#00669A","#DDDDDD"]},
		{"name":"Iona Gaels","color":["#0F0E12","#FDC10D"]},
		{"name":"Iowa Hawkeyes","color":["#FFD700","#000000"]},
		{"name":"Iowa State Cyclones","color":["#FEC938","#840A2C"]},
		{"name":"IPFW Mastodons","color":["#131111","#929497"]},
		{"name":"IUPUI Jaguars","color":["#011522","#DC973C"]},
		{"name":"Jackson State Tigers","color":["#123297","#DDDDDD"]},
		{"name":"Jacksonville Dolphins","color":["#8B8B8B","#000000"]},
		{"name":"Jacksonville State Gamecocks","color":["#1D1819","#E53F40"]},
		{"name":"James Madison Dukes","color":["#263997","#D5A10E"]},
		{"name":"Kansas Jayhawks","color":["#E51837","#FFD204"]},
		{"name":"Kansas State Wildcats","color":["#633194","#DDDDDD"]},
		{"name":"Kennesaw State Owls","color":["#F0B410","#231F20"]},
		{"name":"Kent State Golden Flashes","color":["#F7BD0A","#131149"]},
		{"name":"Kentucky Wildcats","color":["#EBEBE4","#003399"]},
		{"name":"La Salle Explorers","color":["#FFF200","#000F4C"]},
		{"name":"Lafayette Leopards","color":["#0B070B","#CDBDA3"]},
		{"name":"Lamar Cardinals","color":["#FCB131","#ED1B2E"]},
		{"name":"Lehigh Mountain Hawks","color":["#653600","#CFAB7A"]},
		{"name":"Liberty Flames","color":["#A70F00","#02298A"]},
		{"name":"Lipscomb Bisons","color":["#122A65","#DDDDDD"]},
		{"name":"Long Beach State 49ers","color":["#FFCC00","#000000"]},
		{"name":"Long Island Blackbirds","color":["#000000","#DDDDDD"]},
		{"name":"Longwood Lancers","color":["#B9B9BB","#004990"]},
		{"name":"Louisiana Tech Bulldogs","color":["#ED1C24","#006AB5"]},
		{"name":"Louisiana-Lafayette Ragin' Cajuns","color":["#231F20","#F4A42A"]},
		{"name":"Louisiana-Monroe Warhawks","color":["#B38807","#98012E"]},
		{"name":"Louisville Cardinals","color":["#FFC010","#070707"]},
		{"name":"Loyola (IL) Ramblers","color":["#000000","#FBC312"]},
		{"name":"Loyola (MD) Greyhounds","color":["#DCDCDE","#000000"]},
		{"name":"Loyola Marymount Lions","color":["#00314A","#8C0029"]},
		{"name":"LSU Tigers","color":["#FDB827","#33297B"]},
		{"name":"Maine Black Bears","color":["#000000","#909090"]},
		{"name":"Manhattan Jaspers","color":["#DEDEDE","#528C39"]},
		{"name":"Marist Red Foxes","color":["#210203","#EF1216"]},
		{"name":"Marquette Golden Eagles","color":["#FDB826","#002F78"]},
		{"name":"Marshall Thundering Herd","color":["#000000","#01592F"]},
		{"name":"Maryland Terrapins","color":["#C68746","#000000"]},
		{"name":"Maryland-Eastern Shore Hawks","color":["#231F20","#98012E"]},
		{"name":"Massachusetts Minutemen","color":["#12090A","#9F011A"]},
		{"name":"McNeese State Cowboys","color":["#00529C","#FFD51D"]},
		{"name":"Memphis Tigers","color":["#FEC003","#2A2A9B"]},
		{"name":"Mercer Bears","color":["#000000","#FF7F27"]},
		{"name":"Miami Hurricanes","color":["#E75C2D","#003E24"]},
		{"name":"Miami RedHawks","color":["#3F7D91","#080808"]},
		{"name":"Michigan Wolverines","color":["#FAC417","#272341"]},
		{"name":"Michigan State Spartans","color":["#000000","#1C453A"]},
		{"name":"Middle Tennessee Blue Raiders","color":["#231F20","#0079C2"]},
		{"name":"Milwaukee Panthers","color":["#F0B432","#445266"]},
		{"name":"Minnesota Golden Gophers","color":["#FFF63E","#7F011B"]},
		{"name":"Mississippi Rebels","color":["#FF002C","#002C91"]},
		{"name":"Mississippi State Bulldogs","color":["#762123","#D1D5D8"]},
		{"name":"Mississippi Valley State Delta Devils","color":["#054105","#DDDDDD"]},
		{"name":"Missouri Tigers","color":["#E8AF11","#231F20"]},
		{"name":"Missouri State Bears","color":["#000000","#5F0000"]},
		{"name":"Monmouth Hawks","color":["#051844","#D7D8D8"]},
		{"name":"Montana Grizzlies","color":["#751D4A","#181829"]},
		{"name":"Montana State Bobcats","color":["#D3AF7E","#003875"]},
		{"name":"Morehead State Eagles","color":["#040204","#FFD51D"]},
		{"name":"Morgan State Bears","color":["#231F20","#F47937"]},
		{"name":"Mount St. Mary's Mountaineers","color":["#005596","#A59260"]},
		{"name":"Murray State Racers","color":["#FFE000","#002148"]},
		{"name":"N.J.I.T Highlanders","color":["#002D6D","#EE3024"]},
		{"name":"Navy Midshipmen","color":["#FCBA29","#131630"]},
		{"name":"Nebraska Cornhuskers","color":["#F20017","#DDDDDD"]},
		{"name":"Nevada Wolf Pack","color":["#153E5F","#DDDDDD"]},
		{"name":"New Hampshire Wildcats","color":["#004990","#C3C4C6"]},
		{"name":"New Mexico Lobos","color":["#D41045","#C4C4C4"]},
		{"name":"New Mexico State Aggies","color":["#221E1F","#891216"]},
		{"name":"New Orleans Privateers","color":["#000000","#FD1A41"]},
		{"name":"Niagara Purple Eagles","color":["#201C1D","#69207E"]},
		{"name":"Nicholls State Colonels","color":["#231F20","#C41230"]},
		{"name":"Norfolk State Spartans","color":["#F1C409","#046546"]},
		{"name":"North Carolina Tar Heels","color":["#00275D","#98BFE5"]},
		{"name":"North Carolina A&T Aggies","color":["#0505AA","#FFFF63"]},
		{"name":"North Carolina Central Eagles","color":["#8E9093","#1A1818"]},
		{"name":"North Carolina State Wolfpack","color":["#221E1F","#EF1216"]},
		{"name":"North Carolina-Asheville Bulldogs","color":["#151112","#156199"]},
		{"name":"North Carolina-Wilmington Seahawks","color":["#006561","#FDEE8B"]},
		{"name":"North Dakota Fighting Sioux","color":["#00A26B","#E22D33"]},
		{"name":"North Dakota State Bison","color":["#221E1F","#FEBB1C"]},
		{"name":"North Florida Ospreys","color":["#9F9E9D","#0A548D"]},
		{"name":"North Texas Mean Green","color":["#2D2327","#00853D"]},
		{"name":"Northeastern Huskies","color":["#1A1100","#CC0001"]},
		{"name":"Northern Arizona Lumberjacks","color":["#FFD51F","#629181"]},
		{"name":"Northern Colorado Bears","color":["#13558D","#F9D245"]},
		{"name":"Northern Illinois Huskies","color":["#0F0D0D","#F1122C"]},
		{"name":"Northern Iowa Panthers","color":["#E4AE2F","#473282"]},
		{"name":"Northwestern Wildcats","color":["#000000","#393996"]},
		{"name":"Northwestern State Demons","color":["#F68428","#492F91"]},
		{"name":"Notre Dame Fighting Irish","color":["#BAA008","#00122B"]},
		{"name":"Oakland Golden Grizzlies","color":["#F5E0B6","#998448"]},
		{"name":"Ohio Bobcats","color":["#313139","#E7CEAD"]},
		{"name":"Ohio State Buckeyes","color":["#080808","#C5CCCF"]},
		{"name":"Oklahoma Sooners","color":["#000000","#BA0034"]},
		{"name":"Oklahoma State Cowboys","color":["#000000","#FF6500"]},
		{"name":"Old Dominion Monarchs","color":["#999DA0","#00507D"]},
		{"name":"Oral Roberts Golden Eagles","color":["#D39B16","#002E70"]},
		{"name":"Oregon Ducks","color":["#F4E600","#044520"]},
		{"name":"Oregon State Beavers","color":["#AE3800","#000203"]},
		{"name":"Pacific Tigers","color":["#231F20","#F47820"]},
		{"name":"Penn State Nittany Lions","color":["#00265D","#DDDDDD"]},
		{"name":"Pennsylvania Quakers","color":["#AC0218","#082A74"]},
		{"name":"Pepperdine Waves","color":["#F58026","#003A72"]},
		{"name":"Pittsburgh Panthers","color":["#242021","#003263"]},
		{"name":"Portland Pilots","color":["#0E034E","#DDDDDD"]},
		{"name":"Portland State Vikings","color":["#BFCFD8","#005E60"]},
		{"name":"Prairie View A&M Panthers","color":["#181821","#FFBD29"]},
		{"name":"Presbyterian Blue Hose","color":["#AA153B","#194896"]},
		{"name":"Princeton Tigers","color":["#231F20","#F9A13A"]},
		{"name":"Providence Friars","color":["#C4C4C4","#000000"]},
		{"name":"Purdue Boilermakers","color":["#9FA3A6","#B89D29"]},
		{"name":"Quinnipiac Bobcats","color":["#BA9000","#041B43"]},
		{"name":"Radford Highlanders","color":["#292B2A","#BC1515"]},
		{"name":"Rhode Island Rams","color":["#003559","#3691C6"]},
		{"name":"Rice Owls","color":["#003D7D","#DDDDDD"]},
		{"name":"Richmond Spiders","color":["#003256","#9E0712"]},
		{"name":"Rider Broncs","color":["#000000","#ABADB0"]},
		{"name":"Robert Morris Colonials","color":["#AF1C2E","#BEB9B4"]},
		{"name":"Rutgers Scarlet Knights","color":["#0E1112","#EE363D"]},
		{"name":"Sacramento State Hornets","color":["#B4985A","#00573C"]},
		{"name":"Sacred Heart Pioneers","color":["#CE1040","#B1B3B6"]},
		{"name":"Saint Joseph's Hawks","color":["#B4B5B8","#0B0908"]},
		{"name":"Saint Louis Billikens","color":["#00539C","#DDDDDD"]},
		{"name":"Saint Mary's Gaels","color":["#E51B24","#DCDCDB"]},
		{"name":"Sam Houston State Bearkats","color":["#231F20","#F78F1E"]},
		{"name":"Samford Bulldogs","color":["#C72D30","#D2D4D5"]},
		{"name":"San Diego Toreros","color":["#00275d","#2f99d4"]},
		{"name":"San Diego State Aztecs","color":["#7C6642","#BF2C37"]},
		{"name":"San Francisco Dons","color":["#FFE13A","#22523F"]},
		{"name":"San Jose State Spartans","color":["#FFC021","#005893"]},
		{"name":"Santa Clara Broncos","color":["#000000","#690B0B"]},
		{"name":"Savannah State Tigers","color":["#FF0000","#280298"]},
		{"name":"Seattle Redhawks","color":["#231F20","#BF2E1A"]},
		{"name":"Seton Hall Pirates","color":["#A2ABB2","#0857B1"]},
		{"name":"Siena Saints","color":["#FFD117","#037961"]},
		{"name":"SIU-Edwardsville Cougars","color":["#000004","#BC9B6A"]},
		{"name":"South Alabama Jaguars","color":["#D11241","#003E7E"]},
		{"name":"South Carolina Gamecocks","color":["#000000","#CD0000"]},
		{"name":"South Carolina State Bulldogs","color":["#050305","#080D35"]},
		{"name":"South Dakota Coyotes","color":["#231F20","#CD1241"]},
		{"name":"South Dakota State Jackrabbits","color":["#FFDE00","#005DAB"]},
		{"name":"South Florida Bulls","color":["#A08B4D","#004A36"]},
		{"name":"Southeast Missouri State Redhawks","color":["#231F20","#E2373E"]},
		{"name":"Southeastern Louisiana Lions","color":["#231F20","#F0B510"]},
		{"name":"Southern Illinois Salukis","color":["#000000","#85283D"]},
		{"name":"Southern Methodist Mustangs","color":["#E32F38","#DDDDDD"]},
		{"name":"Southern Miss Golden Eagles","color":["#201C1D","#FFAA3C"]},
		{"name":"Southern University Jaguars","color":["#FFCD02","#004B97"]},
		{"name":"Southern Utah Thunderbirds","color":["#050607","#D12947"]},
		{"name":"St. Bonaventure Bonnies","color":["#70261D","#FEE8AB"]},
		{"name":"St. Francis Terriers","color":["#A9070B","#113682"]},
		{"name":"St. Francis Red Flash","color":["#1E1719","#F41650"]},
		{"name":"St. John's Red Storm","color":["#231F20","#D31145"]},
		{"name":"St. Peter's Peacocks","color":["#30C808","#004CC2"]},
		{"name":"Stanford Cardinal","color":["#A80532","#DDDDDD"]},
		{"name":"Stephen F. Austin Lumberjacks","color":["#EE3A42","#393996"]},
		{"name":"Stetson Hatters","color":["#18581C","#DDDDDD"]},
		{"name":"Stony Brook Seawolves","color":["#B33A4E","#115F9A"]},
		{"name":"Syracuse Orange","color":["#F37321","#002D62"]},
		{"name":"TCU Horned Frogs","color":["#1E1B1C","#EBEBEB"]},
		{"name":"Temple Owls","color":["#000000","#A80532"]},
		{"name":"Tennessee Volunteers","color":["#EE9627","#DDDDDD"]},
		{"name":"Tennessee State Tigers","color":["#060607","#383C84"]},
		{"name":"Tennessee Tech Golden Eagles","color":["#FFDE00","#5A4099"]},
		{"name":"Tennessee-Martin Skyhawks","color":["#000099","#FF6700"]},
		{"name":"Texas Longhorns","color":["#EE7524","#DDDDDD"]},
		{"name":"Texas A&M Aggies","color":["#5C0025","#DDDDDD"]},
		{"name":"Texas A&M-CC Islanders","color":["#008456","#007CC4"]},
		{"name":"Texas Southern Tigers","color":["#6A0403","#DDDDDD"]},
		{"name":"Texas State Bobcats","color":["#9B8449","#744143"]},
		{"name":"Texas Tech Red Raiders","color":["#000000","#C80025"]},
		{"name":"Texas-Arlington Mavericks","color":["#D92D36","#004B7C"]},
		{"name":"Texas-Pan American Broncs","color":["#DC6000","#DDDDDD"]},
		{"name":"Texas-San Antonio Roadrunners","color":["#F47321","#002A5C"]},
		{"name":"Toledo Rockets","color":["#FFD51D","#00488F"]},
		{"name":"Towson Tigers","color":["#1E1C1C","#FFC229"]},
		{"name":"Troy Trojans","color":["#000000","#6E7272"]},
		{"name":"Tulane Green Wave","color":["#00A6eb","#6EA396"]},
		{"name":"Tulsa Golden Hurricane","color":["#000000","#E21721"]},
		{"name":"UAB Blazers","color":["#E7BD05","#040504"]},
		{"name":"UC Davis Aggies","color":["#CB992B","#CCCCCD"]},
		{"name":"UC Irvine Anteaters","color":["#FBC22D","#002B5C"]},
		{"name":"UC Riverside Highlanders","color":["#247BC2","#CCA61F"]},
		{"name":"UC Santa Barbara Gauchos","color":["#FBCB55","#0160A8"]},
		{"name":"UCF Knights","color":["#B4985A","#231F20"]},
		{"name":"UCLA Bruins","color":["#000000","#FFB325"]},
		{"name":"UMBC Retrievers","color":["#AF8706","#FFC10E"]},
		{"name":"UMKC Kangaroos","color":["#231F20","#FFD204"]},
		{"name":"UNC Greensboro Spartans","color":["#E6BE2A","#003559"]},
		{"name":"UNLV Rebels","color":["#D50026","#231E1F"]},
		{"name":"USC Trojans","color":["#FFAC33","#AE2531"]},
		{"name":"USC Upstate Spartans","color":["#231F20","#00703C"]},
		{"name":"Utah Utes","color":["#231F20","#CD1041"]},
		{"name":"Utah State Aggies","color":["#000000","#003263"]},
		{"name":"Utah Valley Wolverines","color":["#C0A000","#E8D766"]},
		{"name":"UTEP Miners","color":["#F9783B","#C2BFBC"]},
		{"name":"Valparaiso Crusaders","color":["#FFD204","#794500"]},
		{"name":"Vanderbilt Commodores","color":["#BB8D09","#000000"]},
		{"name":"Vermont Catamounts","color":["#030202","#FFCE0E"]},
		{"name":"Villanova Wildcats","color":["#123d7C","#80FBFF"]},
		{"name":"Virginia Cavaliers","color":["#EA4B0F","#00204E"]},
		{"name":"Virginia Commonwealth Rams","color":["#000000","#7D7D7A"]},
		{"name":"Virginia Military Institute Keydets","color":["#FFC527","#E52D37"]},
		{"name":"Virginia Tech Hokies","color":["#FBB088","#74232D"]},
		{"name":"Wagner Seahawks","color":["#BABCBE","#00483A"]},
		{"name":"Wake Forest Demon Deacons","color":["#C49544","#000000"]},
		{"name":"Washington Huskies","color":["#E8D4A3","#2B2F64"]},
		{"name":"Washington State Cougars","color":["#97002F","#DDDDDD"]},
		{"name":"Weber State Wildcats","color":["#29086B","#DDDDDD"]},
		{"name":"West Virginia Mountaineers","color":["#000000","#FFC600"]},
		{"name":"Western Carolina Catamounts","color":["#CFAB7A","#492F91"]},
		{"name":"Western Illinois Leathernecks","color":["#DFFF16","#6812BB"]},
		{"name":"Western Kentucky Hilltoppers","color":["#010000","#F32026"]},
		{"name":"Western Michigan Broncos","color":["#1D1B1B","#B59966"]},
		{"name":"Wichita State Shockers","color":["#F8D429","#101008"]},
		{"name":"William & Mary Tribe","color":["#FDF71C","#103217"]},
		{"name":"Winthrop Eagles","color":["#FFAF1E","#9E0B0E"]},
		{"name":"Wisconsin Badgers","color":["#000000","#A00000"]},
		{"name":"Wofford Terriers","color":["#FFD700","#000000"]},
		{"name":"Wright State Raiders","color":["#231F20","#E9AF10"]},
		{"name":"Wyoming Cowboys","color":["#000000","#533B22"]},
		{"name":"Xavier Musketeers","color":["#B0B1B6","#002144"]},
		{"name":"Yale Bulldogs","color":["#040404","#004A81"]},
		{"name":"Youngstown State Penguins","color":["#231F20","#E51937"]}
		]};

    var jsonNFL = {"data":[
		{"name":"Arizona Cardinals","color":["#870619","#000000"]},
		{"name":"Atlanta Falcons","color":["#BD0D18","#000000"]},
		{"name":"Baltimore Ravens","color":["#280353","#000000"]},
		{"name":"Buffalo Bills","color":["#00338D","#C60C30"]},
		{"name":"Carolina Panthers","color":["#000000","#0088CE"]},
		{"name":"Chicago Bears","color":["#03202F","#DD4814"]},
		{"name":"Cincinnati Bengals","color":["#000000","#FB4F14"]},
		{"name":"Cleveland Browns","color":["#26201E","#E34912"]},
		{"name":"Dallas Cowboys","color":["#002244","#8C8B8A"]},
		{"name":"Denver Broncos","color":["#FB4F14","#002244"]},
		{"name":"Detroit Lions","color":["#006DB0","#C5C7CF"]},
		{"name":"Green Bay Packers","color":["#213D30","#FFCC00"]},
		{"name":"Houston Texans","color":["#02253A","#B31B34"]},
		{"name":"Indianapolis Colts","color":["#003B7B","#EEEEEE"]},
		{"name":"Jacksonville Jaguars","color":["#000000","#D0B239"]},
		{"name":"Kansas City Chiefs","color":["#B20032","#F2C800"]},
		{"name":"Miami Dolphins","color":["#008D97","#015679"]},
		{"name":"Minnesota Vikings","color":["#4F2682","#FFC52F"]},
		{"name":"New England Patriots","color":["#0D254C","#D6D6D6"]},
		{"name":"New Orleans Saints","color":["#D2B887","#000000"]},
		{"name":"New York Giants","color":["#192F6B","#CA001A"]},
		{"name":"New York Jets","color":["#0C371D","#EEEEEE"]},
		{"name":"Oakland Raiders","color":["#C4C8CB","#000000"]},
		{"name":"Philadelphia Eagles","color":["#003B48","#000000"]},
		{"name":"Pittsburgh Steelers","color":["#000000","#F2C800"]},
		{"name":"San Diego Chargers","color":["#08214A","#EEC607"]},
		{"name":"San Francisco 49ers","color":["#AF1E2C","#E6BE8A"]},
		{"name":"Seattle Seahawks","color":["#06192E","#4EAE47"]},
		{"name":"St Louis Rams","color":["#13264B","#C9AF74"]},
		{"name":"Tampa Bay Bucs","color":["#D60A0B","#89765F"]},
		{"name":"Tennessee Titans","color":["#648FCC","#000080"]},
		{"name":"Washington Redskins","color":["#773141","#FFB612"]}
		]};

    var jsonNHL = {"data":[
		{"name":"Anaheim Ducks","color":["#000000","#EF5225"]},
		{"name":"Arizona Coyotes","color":["#841F27","#000000"]},
		{"name":"Boston Bruins","color":["#000000","#FFC422"]},
		{"name":"Buffalo Sabres","color":["#002E62","#FDBB2F"]},
		{"name":"Calgary Flames","color":["#E03A3E","#FFC758"]},
		{"name":"Carolina Hurricanes","color":["#E03A3E","#000000"]},
		{"name":"Chicago Blackhawks","color":["#E3263A","#000000"]},
		{"name":"Colorado Avalanche","color":["#8B2942","#01548A"]},
		{"name":"Columbus Blue Jackets","color":["#00285C","#E03A3E"]},
		{"name":"Dallas Stars","color":["#006A4E","#000000"]},
		{"name":"Detroit Red Wings","color":["#EC1F26","#EEEEEE"]},
		{"name":"Edmonton Oilers","color":["#003777","#E66A20"]},
		{"name":"Florida Panthers","color":["#C8213F","#002E5F"]},
		{"name":"Los Angeles Kings","color":["#000000","#AFB7BA"]},
		{"name":"Minnesota Wild","color":["#025736","#BF2B37"]},
		{"name":"Montreal Canadiens","color":["#BF2F38","#213770"]},
		{"name":"Nashville Predators","color":["#FDBB2F","#002E62"]},
		{"name":"New Jersey Devils","color":["#E03A3E","#000000"]},
		{"name":"New York Islanders","color":["#00529B","#F57D31"]},
		{"name":"New York Rangers","color":["#0161AB","#E6393F"]},
		{"name":"Ottawa Senators","color":["#E4173E","#000000"]},
		{"name":"Philadelphia Flyers","color":["#F47940","#000000"]},
		{"name":"Pittsburgh Penguins","color":["#000000","#D1BD80"]},
		{"name":"San Jose Sharks","color":["#05535D","#F38F20"]},
		{"name":"St Louis Blues","color":["#0546A0","#FFC325"]},
		{"name":"Tampa Bay Lightning","color":["#013E7D","#000000"]},
		{"name":"Toronto Maple Leafs","color":["#003777","#EEEEEE"]},
		{"name":"Vancouver Canucks","color":["#07346F","#047A4A"]},
		{"name":"Vegas Golden Knights","color":["#282828","#85714d"]},
		{"name":"Washington Capitals","color":["#CF132B","#00214E"]},
		{"name":"Winnipeg Jets","color":["#002E62","#0168AB"]}
		]};

    var jsonPremierLeague = {"data":["Arsenal","Aston Villa","Chelsea","Everton","Fulham","Liverpool","Manchester City","Manchester United","Newcastle United","Norwich City","Queens Park Rangers","Reading","Southampton","Stoke City","Sunderland","Swansea City","Tottenham Hotspur","West Bromwich Albion","West Ham United","Wigan Athletic"]};

    const jsonSports = {"data":["Auto Racing","Badminton","Baseball","Basketball","Bobsleigh","Bowling","Boxing","Cheerleading","Competitive Swimming","Crew","Cricket","Curling","Endurance Running","Fencing","Field Hockey","Fishing","Football","Golf","Gynastics","Horse Racing","Ice Hockey","Lacrosse","Mixed Martial Arts","Poker","Polo","Pool","Roller derby","Rowing","Rugby","Skateboarding","Skiing","Snowboarding","Soccer","Surfing","Tennis","Track","Ultimate","Volleyball","Weightlifting","Wiffleball","Wrestling"]};

    var jsonTeamName = {"RandL":{
		"1":["Awkward","Bald","Big","Black","Blue","Cajun","Coy","Dangerous","Defective","Delta","Demon","Deranged","Educated","Fanatical","Festive","Fighting","Flaming","Flawless","Flying","Glistening","Golden","Graceful","Great","Green","Grotesque","Hideous","Horned","Horrible","Lady","Little","Mad","Marvelous","Mean","Mighty","Obscene","Odd","Old","Orange","Overconfident","Polar","Powerful","Prairie","Punctual","Purple","Red","Remarkable","Running","Sassy","Screaming","Seemly Short","Serious","Silver","Simple","Solemn","Somber","Spicy","Strange","Sugar","Supreme","Swift","Threatening","Thundering","Ultimate","Unaccountable","Unethical","Voodoo","Weak","Wet","White","Wicked","Winter","Wonderful"],
		"2":["Aces","Anchormen","Archers","Artichokes","Avengers","Badgers","Battlers","Bearcats","Bears","Beavers","Bees","Belles","Bengals","Bison","Blazers","Bloodhounds","Blossoms","Bluejays","Blues","Bobcats","Bombers","Boys","Braves","Brewers","Broncos","Bruins","Buccaneers","Buckeyes","Buffaloes","Bulldogs","Bullets","Bulls","Cadets","Camels","Captains","Cardinals","Catamounts","Cats","Cavaliers","Chargers","Chiefs","Clippers","Cobras","Colonels","Colonials","Colts","Comets","Commodores","Conquerors","Cougars","Cowboys","Cowgirls","Coyotes","Crusaders","Cubs","Cyclones","Defenders","Demons","Devilettes","Devils","Dodgers","Dolphins","Dragons","Ducks","Dutchmen","Eagles","Engineers","Explorers","Express","Falcons","Fire","Firebirds","Flames","Flash","Fleet","Flyers","Foresters","Foxes","Friars","Frogs","Gamecocks","Gators","Generals","Gentlemen","Giants","Gladiators","Gophers","Gorillas","Governors","Greyhounds","Griffins","Grizzlies","Hawkeyes","Hawks","Heels","Highlanders","Hobos","Hornets","Hurricanes","Huskies","Indians","Islanders","Jackrabbits","Jaguars","Janes","Jays","Jets","Jimmies","Johnnies","Kangaroos","Kingsmen","Knights","Kohawks","Ladies","Lakers","Lancers","Leopards","Lightning","Lions","Llamas","Longhorns","Magicians","Marauders","Maroons","Mavericks","Men","Miners","Minutemen","Monarchs","Monks","Monsters","Mountaineers","Mules","Musketeers","Mustangs","Nighthawks","Oaks","Ocelots","Oilers","Outlaws","Owls","Pacers","Paladins","Panthers","Patriots","Peacocks","Penguins","Pickles","Pilots","Pioneers","Pirates","Poets","Pointers","Pride","Princes","Princesses","Privateers","Racers","Raiders","Rainbows","Ramblers","Rams","Rangers","Raptors","Rattlesnakes","Ravens","Razorbacks","Rebels","Reds","Redskins","Rockets","Rocks","Royals","Rustlers","Saints","Seagulls","Seahawks","Seawolves","Senators","Sharks","Sox","Spartans","Spiders","Squirrels","Stags","Stallions","Stars","Storm","Sunbirds","Suns","Thunder","Thunderbirds","Tigers","Titans","Tornadoes","Trailblazers","Trojans","Trolls","Vandals","Vikings","Vixens","Volunteers","Vulcans","Warriors","Wave","Wildcats","Wolfpack","Wolverines","Wolves","Wombats","Women","Yellowjackets"]
	}};

	function randomNoDuplicate(tdata, tnum, tduplicate) {
		
		var ranNums = [],
		nums = tdata.slice(0),
		i = nums.length,
		j = 0,
		jj = 0;
		
		while (i--) {
			j = Math.floor(Math.random() * (i+1));
			ranNums.push(nums[j]);
			if( tduplicate == false ) nums.splice(j,1);
		}
		

		var tRand = [];
		var z = 0;
		while ( z < tnum && z < ranNums.length ) {
			tRand.push(ranNums[z]);
			z++;
		}
		console.log(tRand);
		
		var dataset = $("#dataset").val();
		var result = '<ol class="list">';
		var dataSports2 = jsonTeamName['RandL'][2];
		var ii = dataSports2.length;

		z = 0;
		while ( z < tRand.length ) {
			if ( typeof tRand[z] === 'object' ) {				
				result += '<li><span class="rand_large" style="color:' + tRand[z].color[0] + ';text-shadow:' + tRand[z].color[1] + ' 1px 1px 0;">' + tRand[z].name + '</span></li>';
			} else {
				if (dataset == 'team-names') {					
					jj = Math.floor(Math.random() * (ii+1));
					result += '<li>' + tRand[z] + ' ' + dataSports2[jj] + '</li>';
				} else {
					result += '<li>' + tRand[z] + '</li>';
				}
				
			}
			
			z++;
		}
		result += '</ol>';

		return result;
	}

	$("#random").click(function(e) {
        //
        var dataset = $("#dataset").val();
        var quantity = $("#quantity").val();
		var duplicate = $("#duplicate:checked").length > 0;;
		console.log(dataset);
		console.log(duplicate);

		if (dataset == 'mlb-team') {
			var dataSports = jsonMLB['data'];
		} else if (dataset == 'soccer-teams') {
			var dataSports = jsonMLS['data'];
		} else if (dataset == 'nba-team') {
			var dataSports = jsonNBA['data'];
		} else if (dataset == 'ncaa-basketball') {
			var dataSports = jsonNcsaBasketball['data'];
		} else if (dataset == 'ncaa-football') {
			var dataSports = jsonNcsaFootball['data'];
		} else if (dataset == 'nfl-team') {
			var dataSports = jsonNFL['data'];
		} else if (dataset == 'nhl-team') {
			var dataSports = jsonNHL['data'];
		} else if (dataset == 'premier-league-football-teams') {
			var dataSports = jsonPremierLeague['data'];
		} else if (dataset == 'team-names') {
			var dataSports = jsonTeamName['RandL'][1];
		} else {
			var dataSports = jsonSports['data'];
		}

		
		console.log(dataSports);
		results = randomNoDuplicate(dataSports, quantity, duplicate);
        
        var tResult = document.querySelector("#tResult");
        tResult.className = "";
        tResult.innerHTML = results;
		
		
    })

	$('#random').click();

});