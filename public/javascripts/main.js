$(document).ready(() => {

  $('.button-collapse').sideNav({
        closeOnClick: true
  });

  $('a[href*=#]:not([href=#])').click(function(event){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      event.preventDefault();
  });

  function validateEmail(emailAddress) {
      var regularExpression = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
      return regularExpression.test(emailAddress);
  }

  function showEmailValidationState(event) {
      if (!validateEmail(event.target.value)) {
        $("#formButton").prop("disabled",true);
      }
      else if(validateEmail(event.target.value)) {
        $('#formButton').removeAttr('disabled');
      }
  }
  document.getElementById("formEmail").addEventListener("keyup", showEmailValidationState);
});

function formSubmit(){
  var fullName = document.getElementById('formName').value;
  var email = document.getElementById('formEmail').value;
  var organization = document.getElementById('formOrganization').value;
	$.post('/form', {
		formName: fullName,
		formEmail: email,
		formOrganization: organization
	},
	function(data, status) {
		if(status == 'success') {
		  winObj = window.open('/../VD_Company_Brochure.pdf','','left=10000,screenX=10000');
		}
	});
 }

// function formSubmit() {
//   $.post('/form', {
//     formName: formName,
//     formEmail: formEmail,
//     formOrganization: formOrganization
//   },
//   function(data, status){
//     console.log(data, status);
//   });
//   var winObj = window.open(x,'','left=10000,screenX=10000');
//   winObj.document.execCommand('SaveAs','null','../VD_Company_Brochure.pdf');
//   winObj.close();
// }

// $(document).ready(function(){
// 	// loadPlayer();
// 	// onYouTubePlayerAPIReady()
// 	$(window).scroll(function(){
// 		// console.log('1'+this.id);
// 	  $('.scrollSpy').each(function(){
// 			// console.log(this.id);
// 			if(this.id == "iframe"){
// 				$("#iframe")[0].src += "&" + "autoplay=1" + "&" + "loop=1" + "&" + "playlist=Y5iyG8EoYbw";
// 			}
// 			else{
// 				$("#iframe")[0].src = "https://www.youtube.com/embed/Y5iyG8EoYbw?enablejsapi=1&controls=0&showinfo=0&autohide=1";
// 			}
// 			if(isScrolledIntoView($(this))){
// 				console.log(this.id);
// 			}
// 	    // if(isScrolledIntoView($(this))){
// 	      // console.log('3'+this.id);
// 				// if(this.id != "iframe"){
// 				// 	$("#iframe")[0].src = "https://www.youtube.com/embed/Y5iyG8EoYbw?enablejsapi=1&controls=0&showinfo=0&autohide=1";
// 				// }
// 	      // if(this.id == "iframe"){
// 	      // 	$("#iframe")[0].src += "&" + "autoplay=1" + "&" + "loop=1" + "&" + "playlist=Y5iyG8EoYbw";
// 	      // }
// 	      // else{
// 	      // 	$("#iframe")[0].src = "https://www.youtube.com/embed/Y5iyG8EoYbw?enablejsapi=1&controls=0&showinfo=0&autohide=1";
// 	      // }
// 	    // }
// 	  });
// 	});
//
// 	function isScrolledIntoView(elem){
// 	    var $elem = $(elem);
// 	    var $window = $(window);
//
// 	    var docViewTop = $window.scrollTop();
// 	    var docViewBottom = docViewTop + $window.height();
//
// 	    var elemTop = $elem.offset().top;
// 	    var elemBottom = elemTop + $elem.height();
//
// 	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// 	}
//
// 	// 2. This code loads the IFrame Player API code asynchronously.
//
//
//  //      player.stopVideo();
//       // console.log();
//
// 	// function isScrolledIntoView	(el) {
// 	//     var elemTop = el.getBoundingClientRect().top;
// 	//     var elemBottom = el.getBoundingClientRect().bottom;
//
// 	//     // Only completely visible elements return true:
// 	//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
// 	//     // Partially visible elements return true:
// 	//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
// 	//     return isVisible;
// 	// };
//
// 	// element = document.getElementById("contentVideo");
// 	// console.log("asfdsg");
// 	// if(isScrolledIntoView(element)){
// 	// 	console.log("Yayee");
// 	// };
//
// 	// $('#myStopClickButton').click(function(){
// 	//   $('.myVideoClass').each(function(){
// 	//     $(this).stopVideo();
// 	//   });
// 	// });
//
// 	// if ($('#contentVideo').visible(true)) {
//  //    	print("True");
// 	// }
//
// 	//fancybox.js init
// 	// $('.fancybox').fancybox({
// 	// 	openEffect : 'none',
// 	// 	closeEffect : 'none',
// 	// 	prevEffect : 'none',
// 	// 	nextEffect : 'none',
//
// 	// 	arrows : false,
// 	// 	helpers : {
// 	// 		media : {},
// 	// 		buttons : {}
// 	// 	}
// 	// });
//
//
//
// 	// //wow.js init
// 	// wow = new WOW(
// 	//     {
// 	// 	  animateClass: 'animated',
// 	// 	  mobile: false,
// 	// 	  offset: 100
// 	// 	}
// 	// );
// 	// wow.init();
//
// 	// var frame = document.getElementById("player");
// 	// frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
// 	});
//
// var tag = document.createElement('script');
//       tag.id = 'iframe-demo';
//       tag.src = 'https://www.youtube.com/iframe_api';
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
//       // 3. This function creates an <iframe> (and YouTube player)
//       //    after the API code downloads.
//    //    var player;
//    //    function onYouTubeIframeAPIReady() {
// 	  //   player = new YT.Player('existing-iframe-example', {
// 	  //       events: {
// 	  //         'onReady': onPlayerReady,
// 	  //         'onStateChange': onPlayerStateChange
// 	  //       }
// 	  //   });
// 	  // }
// 	  function loadPlayer() {
// 	  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
//
// 	    var tag = document.createElement('script');
// 	    tag.src = "https://www.youtube.com/iframe_api";
// 	    var firstScriptTag = document.getElementsByTagName('script')[0];
// 	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// 	    window.onYouTubePlayerAPIReady = function() {
// 	      onYouTubePlayer();
// 	    };
//
// 	  } else {
//
// 	    onYouTubePlayer();
//
// 	  }
// 	}
// 	var player;
//       // 4. The API will call this function when the video player is ready.
//     function onYouTubePlayer() {
//   player = new YT.Player('player', {
//     height: '490',
//     width: '880',
//     playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
//     events: {
//       'onStateChange': onPlayerStateChange,
//       'onError': catchError
//     }
//   });
// }
//
//   var done = false;
//   function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//       // setTimeout(stopVideo, 6000);
//       done = true;
//     } else if (event.data == YT.PlayerState.ENDED) {
//       location.reload();
//     }
//   }
//
//   function onPlayerReady(event) {
//
//     //if(typeof(SONG.getArtistId()) == undefined)
//     //{
//      console.log("undefineeeed");
//     //}
//     event.target.playVideo();
//   }
//   function catchError(event)
//   {
//     if(event.data == 100) console.log("De video bestaat niet meer");
//   }
//
//   function stopVideo() {
//     player.stopVideo();
//   }
