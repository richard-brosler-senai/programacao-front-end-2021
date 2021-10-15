var acc = document.getElementsByClassName("optionVersion");
	var i;	
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var panel = this.nextElementSibling;
	    if (panel.style.display === "block") {
	      panel.style.display = "none";
	    } else {
	      panel.style.display = "block";
	    }
	  });
	}
  $("button.optionVersion").click(function(){
		var total=$("button.optionVersion").length;
		var meuElemento = $("button.optionVersion").index(this);
		var principal = $("div.panel:eq("+meuElemento+")").attr("style");
		var x=0;
		while(x<total){
			if(x!=meuElemento){
				$("div.panel:eq("+x+")").attr("style","display:none");
				$("button.optionVersion:eq("+x+")").attr("class", "optionVersion accordion");
			}
			x++;
		}
	});
	$("button.dropbtn").click(function(){
		var validate = $(this).next("span.dropbtn.conteudo").css('display');
		$("span.dropbtn.conteudo").css("display", "none");
		console.log(validate)
		if(validate == "none"){
		    $(this).next("span.dropbtn.conteudo").css("display", "inline-table");
		    $(this).find(".iconVertical").css("width", "0px");
		} else{
		    $(this).next("span.dropbtn.conteudo").css("display", "none");
		    $(this).find(".iconVertical").css("width", "2px");
		}	
	});
