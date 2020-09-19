
	//title
	var param = window.location.search.match(/(r=)([\%\w\d]+)+/g);
	if (param) {
		document.title = window.decodeURI(param[0].split('=')[1]);
	}
	
	//count
	var weddingDate = new Date('2020/10/18 11:08:18').getTime();
	function formatTime (time, digit) {
		return ('0' + time).slice(0 - (digit || 2));
	}

	function setMessage (count) {
		if (count < 0) {
			count = 0 - count;
			$('.invite-count').addClass('success');
		}
		return count;
	}

	setInterval(function () {
		var during = Math.ceil((weddingDate - (new Date()).getTime())/1000);
		var count = setMessage(during);
		var date = {
			day: Math.floor(count/86400),
			hour: formatTime(Math.floor((count%86400)/3600)),
			minute: formatTime(Math.floor((count%3600)/60)),
			second: formatTime(Math.floor(count%60))
		};
		$.each('day hour minute second'.split(' '), function (index, key) {
			$('.count-' + key).html(date[key]);
		});
	}, 250);
	
	var p_one = 0;
	var p_two = 0;
	var p_three = 0;
	var p_four = 0;
	var p_five = 0;
	var p_six = 0;
	var str_text = "琴瑟在御，莫不静好。";
	var str_text2 = "宜言饮酒，与子偕老。";
	var str_text3 = "看此日桃花灼灼，宜室宜家，卜他年瓜瓞绵绵，尔昌尔炽。";
	var str_text4 = "谨以白头之约，书向鸿笺，好将红叶之盟，载明鸳谱。";
	var str_text5 = "此证。";
	var str_text6 = "尹钊 韩莹莹敬上";
	
	function typing1(){
		var divTyping = document.getElementById("p_title")
		if(p_one<=str_text.length){
			divTyping.innerHTML = str_text.slice(0,p_one++);
			setTimeout("typing1()",100)
		}else{
			divTyping.innerHTML = str_text;
			typing2();
		}
	}
	function typing2(){
		var divTyping = document.getElementById("p_title2")
		if(p_two<=str_text2.length){
			divTyping.innerHTML = str_text2.slice(0,p_two++);
			setTimeout("typing2()",100)
		}else{
			divTyping.innerHTML = str_text2;
			typing3();
		}
	}
	function typing3(){
		
		
		var divTyping = document.getElementById("p_title3")
		if(p_three<=str_text3.length){
			divTyping.innerHTML = str_text3.slice(0,p_three++);
			setTimeout("typing3()",100)
		}else{
			divTyping.innerHTML = str_text3;
			typing4();
		}
	}
	function typing4(){
		
		
		var divTyping = document.getElementById("p_title4")
		if(p_four<=str_text4.length){
			divTyping.innerHTML = str_text4.slice(0,p_four++);
			setTimeout("typing4()",100)
		}else{
			divTyping.innerHTML = str_text4;
				typing5();
		}
	}
	function typing5(){
		
		
		var divTyping = document.getElementById("p_title5")
		if(p_five<=str_text5.length){
			divTyping.innerHTML = str_text5.slice(0,p_five++);
			setTimeout("typing5()",100)
		}else{
			divTyping.innerHTML = str_text5;
			typing6();
			// $(".map_api").removeClass("none");
		}
	}
	function typing6(){
		
		
		var divTyping = document.getElementById("p_title6")
		if(p_six<=str_text6.length){
			divTyping.innerHTML = str_text6.slice(0,p_six++);
			setTimeout("typing5()",100)
		}else{
			divTyping.innerHTML = str_text6;
			
			// $(".map_api").removeClass("none");
		}
	}
	p_title6
	typing1();
	
	

	
