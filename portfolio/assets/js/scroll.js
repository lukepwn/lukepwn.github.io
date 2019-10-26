/* const callback = function(entries) {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-visible");
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function(target) {
  observer.observe(target);
}); */
//$( document ).ready(function() {
	$(window).scroll(function() {
		
		if ( document.documentElement.scrollTop > $(document).height()*0.1) {
			document.getElementById("one").className = "slideright";
		}
		
		if ( document.documentElement.scrollTop < $(document).height()*0.1) {
			document.getElementById("one").className = "slideleft";
		}
		
		if ( document.documentElement.scrollTop > $(document).height()*0.3) {
			document.getElementById("three").className = "slideleft";
		}
		
		if ( document.documentElement.scrollTop < $(document).height()*0.3) {
			document.getElementById("three").className = "slideright";
		}
		

		/* if ($(this).scrollTop() > 100)
		 {
			$('.top').css({"position": "relative", 
			"opacity": "1",
			"animation-timing-function": "ease", 
			"animation-timing-function": "fadein",
			"animation": "aboutcontent 2s"});
		 }
		else
		 {
			$('.top').css({"opacity": "0", 
			"animation": "none"});
		 } */
	});
//});

/* $(window).scroll(function () {
    var elem = $('h2');
    setTimeout(function() {
        elem.css({"opacity":"0.2","transition":"4s"});
    },4000);            
    elem.css({"opacity":"1","transition":"4s"});    
}); */