
        
	var pricet, name,email;
	
	
	function Setprice(){
	pricet=document.getElementById("total1").innerHTML;
	//alert(pricet);
	setCookie("ctotal",pricet,1);
		
	}
	function dynamicdropdown(listindex)
    {	var selectOpt=document.getElementById("hotel");
		selectOpt.options[selectOpt.selectedIndex]=new Option("Select Option");
       
	   switch (listindex)
        {
        case "Venezuela" :
            document.getElementById("destin").options[0]=new Option("Select Option");
			document.getElementById("destin").options[1]=new Option("Angel Falls");
            document.getElementById("destin").options[2]=new Option("Morrocoy NP ");
            document.getElementById("destin").options[3]=new Option("Médanos de Coro NP");
			
            break;
        case "Colombia" :
             document.getElementById("destin").options[0]=new Option("Select Option");
			document.getElementById("destin").options[1]=new Option("Chiribiquete NP");
            document.getElementById("destin").options[2]=new Option("Tayrona NP");
            document.getElementById("destin").options[3]=new Option("Bogota");
			
            break;
			case "Brazil" :
			 document.getElementById("destin").options[0]=new Option("Select Option");
            document.getElementById("destin").options[1]=new Option("Rio de Janeiro");
            document.getElementById("destin").options[2]=new Option("Fernando de Noronha");
            document.getElementById("destin").options[3]=new Option("Iguazu Falls, Paraná");
			
           
            break;
			case "Peru" :
			alert("Not availabe at this moment");
			break;
			case "Ecuador" :
			alert("Not availabe at this moment");
			break;
			case "Bolivia" :
			alert("Not availabe at this moment");
			break;
			case "Argentina" :
			alert("Not availabe at this moment");
			break;
			case "Chile" :
			alert("Not availabe at this moment");
			break;
			case "Paraguay" :
			alert("Not availabe at this moment");
			break;
			case "Uruguay" :
			alert("Not availabe at this moment");
			break;
			
			
        }
        return true;
		
    }
	function dynamicdropdown2(listindex)
	{
		switch (listindex)
        {
			case "Angel Falls" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Waku Lodge");
            document.getElementById("hotel").options[2]=new Option("Tapuy Lodge");
            break;
			case "Morrocoy NP" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Ardileña Hotel");
            document.getElementById("hotel").options[2]=new Option("Posada Los Cocos");
            break;
			case "Médanos de Coro NP" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Amazonia Park");
            document.getElementById("hotel").options[2]=new Option("Eurobuilding Hotel");
            break;
			case "Chiribiquete NP" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Kali Hotel");
            document.getElementById("hotel").options[2]=new Option("Kantawa Spa Hotel");
            break;
			case "Chiribiquete NP" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Kali Hotel");
            document.getElementById("hotel").options[2]=new Option("Posada Villa Maria");
            break;
			case "Tayrona NP" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Hotel Gran Marquise");
            document.getElementById("hotel").options[2]=new Option("Posada Villa Maria");
            break;
			case "Bogota" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Hotel Bogota");
            document.getElementById("hotel").options[2]=new Option("Hotel Las Torres");
            break;
			case "Rio de Janeiro" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Hilton Rio");
            document.getElementById("hotel").options[2]=new Option("Lambada Hotel");
            break;
			case "Fernando de Noronha" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Posada Lua Nova ");
            document.getElementById("hotel").options[2]=new Option("Portões do Sol Hotel");
            break;
			case "Iguazu Falls" :
			document.getElementById("hotel").options[0]=new Option("Select Option");
            document.getElementById("hotel").options[1]=new Option("Posada Amazonia Park");
            document.getElementById("hotel").options[2]=new Option("Posada Rio Azul");
            break;
		}
		return true;
	}

		
	function  daysStaycal(){
		var message2 = document.getElementById("emessage2");
		message2.innerHTML = ""; 
		var patt =/([2][0][2][1]-(0[8-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
		
		var date1 = document.getElementById("start").value;
		var date2 = document.getElementById("end").value;
		if(patt.test(date1) == true && patt.test(date2) == true)
		{//alert("From "+date1+" until"+date2 );
			try{
			
			const dat1= new Date(date1);
			const dat2= new Date(date2);
			var daystay=Math.round((dat2-dat1)*1.1574e-8);
			if(isNaN(daystay)==true) throw "	not valid, select another day"; 
			if(daystay<7)throw "	not valid, the second date must be at least a week after the first day";
			return daystay;// transforms the milliseconds to days
			}
			catch(err){
			message2.innerHTML = "Date is " + err; 
			alert(message2.innerHTML = "Date is " + err)
			//document.getElementById("start").value="";
			document.getElementById("start").focus();
			//document.getElementById("end").value="";
			document.getElementById("end").focus()
			}
		
		}
		else 
		{
		alert("The date should be in this format DD-MM-YYYY\n Reservations are only for this year plase select a date from August 2021 to December 2021");
		document.getElementById("start").focus();
		}
	
	}
	function subscribe(){
		email=document.getElementById("em").value;
		var patt = /^[a-z0-9._\-&]+@[a-z]+\.[a-z]{2,4}$/i ;
		/*( letter a to z, numbers, special characters ._-&)@*(onlyletters allowed).(letters min 2 max 4*/
		
		if(patt.test(email) == true)
		{
			setCookie("e",email,1);	
			document.getElementById("em").value="";
		}
		else{alert("Invalid Email\nPlease try the following format\nSome Example\nabc123@gmail.com\n abc_123@yahoo.ca \n 123.123@abc.us")}
	}
	
	var  selectOpt, selectedHotel,totalnigth,price,daysel, totabt,country;
	
	function validatename()
		{
			try{
				name=document.getElementById("nam").value;
				var patt = /^[a-zA-Z]{2,15}\s[a-zA-Z]{2,15}(?:\s[a-zA-Z]{2,15})?$/i ;//2 or 3 names
				/*( letters a to z Min 2 max 15, space,  letters a to z Min 2 max 15, it could get an space and then another name*/
				
				if(patt.test(name) == false) throw "Invalid Name\nOnly allowed two or three names between 2 and 15 letters each\nOnly letters allowed";
				else{setCookie("n",name,1);}
			
			}catch(err){
				
			   alert("Name is " + err)
			   document.getElementById("nam").focus()
			}
			
		}
	function DisplaySelection(){
		validatename();
		totalnigth=document.getElementById("destselecd").innerHTML;
		country=document.getElementById("ctry").value;
		document.getElementById("contryselecd").innerHTML=country;
		document.getElementById("destselecd").innerHTML=document.getElementById("destin").value;
		daysel=daysStaycal();
		document.getElementById("daysstay").innerHTML=daysel;
		setCookie("c",country,1);
		PricePerNigth();
		if(daysel){
		$('#linkprice').show();
		$('#displaytable').show();	}
	}
	function PricePerNigth(){
		
		selectOpt=document.getElementById("hotel");
		selectedHotel=selectOpt.options[selectOpt.selectedIndex].text;
		document.getElementById("hotelselecd").innerHTML=selectedHotel;
		switch(selectedHotel)
					{
					case "Waku Lodge" :
						price=document.getElementById("p1").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p1").innerHTML;
						
						break;
					case "Tapuy Lodge" :
						price=document.getElementById("p2").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p2").innerHTML;
						
						break;
					case "Ardileña Hotel" :
						price=document.getElementById("p3").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p3").innerHTML;
						
						break;
					case "Posada Los Cocos" :
						price=document.getElementById("p4").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p4").innerHTML;
						
						break;
					case "Hotel Amazonia Park" :
						price=document.getElementById("p5").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p5").innerHTML;
						
						break;
					case "Eurobuilding Hotel" :
						price=document.getElementById("p6").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p6").innerHTML;
						
						break;
					case "Kali Hotel" :
						price=document.getElementById("p7").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p7").innerHTML;
						
						break;	
					
					case "Kantawa Spa Hotel" :
						price=document.getElementById("p8").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p8").innerHTML;
					
						break;	

					case "Posada Villa Maria" :
						price=document.getElementById("p9").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p9").innerHTML;
						
						break;		

					case "Hotel Gran Marquise" :
						price=document.getElementById("p10").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p10").innerHTML;
						
						break;

					case "Hotel Bogota" :
						price=document.getElementById("p11").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p11").innerHTML;
						
						break;

					case "Hotel Las Torres" :
						price=document.getElementById("p12").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p12").innerHTML;
						
						break;	
					case "Hilton Rio" :
						price=document.getElementById("p13").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p13").innerHTML;
						
						break;	
					
					case "Lambada Hotel" :
						price=document.getElementById("p14").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p14").innerHTML;
						
						break;	

					case "Posada Lua Nova" :
						price=document.getElementById("p15").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p15").innerHTML;
						
						break;		

					case "Portões do Sol Hotel" :
						price=document.getElementById("p16").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p16").innerHTML;
						
						break;

					case "Posada Amazonia Park" :
						price=document.getElementById("p17").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p17").innerHTML;
						
						break;

					case "Posada Rio Azul" :
						price=document.getElementById("p18").innerHTML;
						totabt=price*daysel;
						document.getElementById("total1").innerHTML=totabt;
						document.getElementById("pricehotel").innerHTML=document.getElementById("p18").innerHTML;
						
						break;	
					}
					return true;
	}
	
	function searchWords(){
		var words = 'breakfast tours wifi pets pool parking restaurant spa';//Word Index 0 10 16 21 26 31 39 50
		var search, rs, nb;
		
		search=document.getElementById("srch").value;
		var patt = /^[a-zA-Z]{3,9}$/i ;
		//start and end with chars (UPPER or lower) of size 3-9 letters
		
		if(patt.test(search) == true)
		{
		
			search=search.toLowerCase();
					
			
			if(words.indexOf(search)!=-1)
			{	$('#smallcontainer').show();
					//alert("match") 
					nb=words.indexOf(search);
				switch(nb)
				{
					case 0:
					document.getElementById("imgsearch").src = "../img/Arepa_de_pabellon.jpg";
					document.getElementById("description").innerHTML="Breakfast is the first meal of the day eaten after waking from the night's sleep, usually in the morning. The word in English refers to breaking the fasting period of the previous night. There is a strong likelihood for one or more typical, or traditional, breakfast menus to exist in most places, but their composition varies widely from place to place, and has varied over time, so that globally a very wide range of preparations and ingredients are now associated with breakfast. ";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Breakfast";
					rs=document.getElementsByClassName("break");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 10:
					document.getElementById("imgsearch").src = "../img/640px-Tour_Guide.jpg";
					document.getElementById("description").innerHTML="Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Tourism";
					rs=document.getElementsByClassName("tours");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 16:
					document.getElementById("imgsearch").src = "../img/575px-Wi-fi_alliance_logo.png";
					document.getElementById("description").innerHTML="Wi-Fi is a family of wireless network protocols, based on the IEEE 802.11 family of standards, which are commonly used for local area networking of devices and Internet access, allowing nearby digital devices to exchange data by radio waves.";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Wi-Fi";
					rs=document.getElementsByClassName("wifi");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 21:
					document.getElementById("imgsearch").src = "../img/444px-Trillium_Poncho_cat_dog.jpg";
					document.getElementById("description").innerHTML="A pet, or companion animal, is an animal kept primarily for a person's company or entertainment rather than as a working animal, livestock or a laboratory animal. Popular pets are often considered to have attractive appearances, intelligence and relatable personalities, but some pets may be taken in on an altruistic basis (such as a stray animal) and accepted by the owner regardless of these characteristics. ";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Pet";
					rs=document.getElementsByClassName("pet");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 26:
					document.getElementById("imgsearch").src = "../img/640px-Cairns_Lagoon.JPG";
					document.getElementById("description").innerHTML="A swimming pool, swimming bath, wading pool, paddling pool, or simply pool is a structure designed to hold water to enable swimming or other leisure activities. Pools can be built into the ground (in-ground pools) or built above ground (as a freestanding construction or as part of a building or other larger structure).";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Swimming_pool";
					rs=document.getElementsByClassName("pool");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 31:
					document.getElementById("imgsearch").src = "../img/640px-Subterranean_parking_lot.jpg";
					document.getElementById("description").innerHTML="A parking lot (American English) or car park (British English), also known as a car lot, is a cleared area that is intended for parking vehicles. Usually, the term refers to a dedicated area that has been provided with a durable or semi-durable surface. In most countries where cars are the dominant mode of transportation, ";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Parking_lot";
					rs=document.getElementsByClassName("park");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 39:
					document.getElementById("imgsearch").src = "../img/640px-Restaurant_Näsinneula.jpg";
					document.getElementById("description").innerHTML="A restaurant, is a business that prepares and serves food and drinks to customers.Meals are generally served and eaten on the premises. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. ";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Restaurant";
					rs=document.getElementsByClassName("rest");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
					
					case 50:
					document.getElementById("imgsearch").src = "../img/640px-Highgrove_Sauna.jpg";
					document.getElementById("description").innerHTML="A spa is a location where mineral-rich spring water (and sometimes seawater) is used to give medicinal baths. Spa towns or spa resorts (including hot springs resorts) typically offer various health treatments, which are also known as balneotherapy. The belief in the curative powers of mineral waters goes back to prehistoric times. Such practices have been popular worldwide, but are especially widespread in Europe and Japan. Day spas are also quite popular and offer various personal care treatments. ";
					document.getElementById("more").href="https://en.wikipedia.org/wiki/Spa";
					rs=document.getElementsByClassName("spa");
					var i;
					for (i=0;i<rs.length; i++){
					rs[i].style.backgroundColor="yellow";}
					break;
				}
				return true;
			}
			else{alert("Word not found\n Please try with:\nBreakfast, tours, Wifi, pets, Pool, parking, restaurant, spa" )
			document.getElementById("srch").value="";}
			
			
		}
		else 
			{
			alert("The name should contains only letters of size 4 to 6");
			document.getElementById("search").innerHTML = "";
			}
	}
	function hide(){
		$('#smallcontainer').hide();
		$('#linkprice').hide();
		$('#displaytable').hide();
	}
	function setCookie(travelerscookie,value,exdays) {
	  const d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  let expires = "expires=" + d.toGMTString();
	  document.cookie = travelerscookie + "=" + value + ";" + expires + ";path=/";
	  //alert("cookie set");
	} 
    function getCookie(cookie) {
				  let amount = cookie + "=";
				  let decodedCookie = decodeURIComponent(document.cookie);
				  let ca = decodedCookie.split(';');
				  for(let i = 0; i <ca.length; i++) {
					let c = ca[i];
					while (c.charAt(0) == ' ') {
					  c = c.substring(1);
					}
					if (c.indexOf(amount) == 0) {
				  return c.substring(amount.length, c.length);
				}
			  }
			  return "";
		}
		
	
  function calculatetaxes()
	{
	  var Sellprice, country, name1, email1;
	  Sellprice = Number(getCookie("ctotal"));
	  const qst = 0.09975;
	  const gst = 0.05;
	  
		 
			name1=getCookie("n");
			email1=getCookie("e");
				  
			country=getCookie("c");
		  
			totalgst=(Sellprice*gst);
			totalqst=(Sellprice*qst);
			total=Sellprice+totalgst+totalqst;
				
			document.getElementById("countr").innerHTML=country;
			document.getElementById("dispPrice").innerHTML=Sellprice;
			document.getElementById("dispPrice1").innerHTML=Sellprice;
			document.getElementById("totval").innerHTML=Sellprice.toFixed(2);
			document.getElementById("t1").innerHTML=(gst * 100).toFixed(2);
			document.getElementById("gst").innerHTML=totalgst.toFixed(2);
			document.getElementById("totval2").innerHTML=Sellprice.toFixed(2);
			document.getElementById("t2").innerHTML=(qst * 100).toFixed(3);
			document.getElementById("qst").innerHTML=totalqst.toFixed(2);
			document.getElementById("total").innerHTML=total.toFixed(2);
			//This was a test
			/*document.getElementById("pt1").innerHTML=name1;
			document.getElementById("pt2").innerHTML=email1;*/
			
	}
	
	
	