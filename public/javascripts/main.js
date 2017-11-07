$(document).ready(function(){
	// loadPlayer();
	// onYouTubePlayerAPIReady()
	$(window).scroll(function(){
	  $('.scrollSpy').each(function(){
	    if(isScrolledIntoView($(this))){
	      console.log(this.id);
	      if(this.id == "iframe"){
	      	$("#iframe")[0].src += "&" + "autoplay=1" + "&" + "loop=1" + "&" + "playlist=kfchvCyHmsc";
	      }
	      else{
	      	$("#iframe")[0].src = "https://www.youtube.com/embed/Y5iyG8EoYbw?enablejsapi=1&controls=0&showinfo=0&autohide=1";
	      }
	    }
	  });
	});

	function isScrolledIntoView(elem){
	    var $elem = $(elem);
	    var $window = $(window);

	    var docViewTop = $window.scrollTop();
	    var docViewBottom = docViewTop + $window.height();

	    var elemTop = $elem.offset().top;
	    var elemBottom = elemTop + $elem.height();

	    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	}

	// 2. This code loads the IFrame Player API code asynchronously.


 //      player.stopVideo();
      // console.log();

	// function isScrolledIntoView	(el) {
	//     var elemTop = el.getBoundingClientRect().top;
	//     var elemBottom = el.getBoundingClientRect().bottom;

	//     // Only completely visible elements return true:
	//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	//     // Partially visible elements return true:
	//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	//     return isVisible;
	// };

	// element = document.getElementById("contentVideo");
	// console.log("asfdsg");
	// if(isScrolledIntoView(element)){
	// 	console.log("Yayee");
	// };

	// $('#myStopClickButton').click(function(){
	//   $('.myVideoClass').each(function(){
	//     $(this).stopVideo();
	//   });
	// });

	// if ($('#contentVideo').visible(true)) {
 //    	print("True");
	// }

	//fancybox.js init
	// $('.fancybox').fancybox({
	// 	openEffect : 'none',
	// 	closeEffect : 'none',
	// 	prevEffect : 'none',
	// 	nextEffect : 'none',

	// 	arrows : false,
	// 	helpers : {
	// 		media : {},
	// 		buttons : {}
	// 	}
	// });



	// //wow.js init
	// wow = new WOW(
	//     {
	// 	  animateClass: 'animated',
	// 	  mobile: false,
	// 	  offset: 100
	// 	}
	// );
	// wow.init();

	// var frame = document.getElementById("player");
	// frame.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

	});

var tag = document.createElement('script');
      tag.id = 'iframe-demo';
      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
   //    var player;
   //    function onYouTubeIframeAPIReady() {
	  //   player = new YT.Player('existing-iframe-example', {
	  //       events: {
	  //         'onReady': onPlayerReady,
	  //         'onStateChange': onPlayerStateChange
	  //       }
	  //   });
	  // }
	  function loadPlayer() {
	  if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {

	    var tag = document.createElement('script');
	    tag.src = "https://www.youtube.com/iframe_api";
	    var firstScriptTag = document.getElementsByTagName('script')[0];
	    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	    window.onYouTubePlayerAPIReady = function() {
	      onYouTubePlayer();
	    };

	  } else {

	    onYouTubePlayer();

	  }
	}
	var player;
      // 4. The API will call this function when the video player is ready.
    function onYouTubePlayer() {
  player = new YT.Player('player', {
    height: '490',
    width: '880',
    playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
    events: {
      'onStateChange': onPlayerStateChange,
      'onError': catchError
    }
  });
}

  var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      // setTimeout(stopVideo, 6000);
      done = true;
    } else if (event.data == YT.PlayerState.ENDED) {
      location.reload();
    }
  }

  function onPlayerReady(event) {

    //if(typeof(SONG.getArtistId()) == undefined)
    //{
     console.log("undefineeeed");
    //}
    event.target.playVideo();
  }
  function catchError(event)
  {
    if(event.data == 100) console.log("De video bestaat niet meer");
  }



  function send(){
    var fullName = document.getElementById('formName').value;
    var email = document.getElementById('formEmail').value;
    var organization = document.getElementById('formOrganization').value;
    // console.log(fullName);
    // console.log(email);
    // console.log(organization);
		$.post('/form', {
			fullName: fullName,
			email: email,
			organization: organization
		},
		function(data, status) {
			// console.log(status);
			if(status == 'success') {
				// console.log('ene');
				x = 'file.pdf';
				winObj = window.open(x,'','left=10000,screenX=10000');
		    winObj.document.execCommand('SaveAs','null','../VD_Company_Brochure.pdf');
		    winObj.close();
			}
		});
  }

  function stopVideo() {
    player.stopVideo();
  }
