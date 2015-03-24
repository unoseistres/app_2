/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

 
/////////////////////////


////////////////////////


$(document).on("pagecreate","#section1",function(){
  $("#section1").on("swipeleft",function(){
  	console.log("section1 left"); 
    $.mobile.changePage("#section2",{transition:"slide"});
       
  }); 
  
  
  
  
});


$(document).on("pagecreate","#section2",function(){
  $("#section2").on("swiperight",function(){
    $.mobile.changePage("#section1",{transition:"slide", reverse:true
	    
    });
    

  }); 
  
  console.log("section2 right"); 
});


$(document).on("pagecreate","#section2",function(){
  $("#section2").on("swipeleft",function(){
    $.mobile.changePage("#section3",{transition:"slide", 
	    
    });
  });  
});


$(document).on("pagecreate","#section3",function(){
  $("#section3").on("swiperight",function(){
    $.mobile.changePage("#section2",{transition:"slide", reverse:true
	    
    });
  });  
});

$(document).on("pagecreate","#section3",function(){
  $("#section3").on("swipeleft",function(){
    $.mobile.changePage("#section4",{transition:"slide",
	    
    });
  });  
});

$(document).on("pagecreate","#section4",function(){
  $("#section4").on("swiperight",function(){
    $.mobile.changePage("#section3",{transition:"slide", reverse:true
	    
    });
  });  
});

$(document).on("pagecreate","#section4",function(){
  $("#section4").on("swipeleft",function(){
    $.mobile.changePage("#section5",{transition:"slide", 
	    
    });
  });  
});

$(document).on("pagecreate","#section5",function(){
  $("#section5").on("swiperight",function(){
    $.mobile.changePage("#section4",{transition:"slide", reverse:true
	    
	    
    });
  });  
});
////////////////////////////////////////////////////external panel

var panel = '<div data-role="panel" id="mypanel" data-position="right" data-display="overlay" data-position-fixed="true"></div>';

$(document).one('pagebeforecreate', function () {
  $.mobile.pageContainer.prepend(panel);
  $("#mypanel").panel();
  $('#section2').append($("#mypanel"))
     
});




//slider
		  function showValue(newValue)
		  {
		y=newValue;

		}
		
/////draggable img

 
	
		
////////////////save picture 


function save(dataURL){
	alert("do you want to save?");
	// console.log(dataURL);

    window.canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){//the file of the images
            console.log(msg);
          $('#mypanel').prepend('<img id="theImg" class="dragImg" src="'+msg+'"/>');//path of new images and appending them to panel 
            
 
 
 $(function(){  
 //Make every clone image unique.  
   var counts = [0];
    var resizeOpts = { 
      handles: "all" ,autoHide:true
    };    
   $(".dragImg").draggable({
                         helper: "clone",
                         
                         //Create counter
                         start: function() { counts[0]++; }
                        });

$("#dropHere").droppable({
       drop: function(e, ui){
               if(ui.draggable.hasClass("dragImg")) {
     $(this).append($(ui.helper).clone().css('z-index','999999'));
   
     console.log("clone dropped");
   
   //Pointing to the dragImg class in dropHere and add new class.
         $("#dropHere .dragImg").addClass("item-"+counts[0]);
            $("#dropHere .theImg").addClass("imgSize-"+counts[0]);
            console.log("adding new ");
                
   //Remove the current class (ui-draggable and dragImg)
         $("#dropHere .item-"+counts[0]).removeClass("dragImg ui-draggable ui-draggable-dragging");


$(".item-"+counts[0]).tap(function() {
$(this).remove(); }); 
make_draggable($(".item-"+counts[0])); 
// $(".imgSize-"+counts[0]).resizable(resizeOpts);     
   
  
    
     var reqAnimationFrame = (function () {
        return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
    })();

    var log = document.querySelector("#log");
    var el = document.querySelector("#hit");

    var START_X = Math.round((window.innerWidth - el.offsetWidth) / 2);
    var START_Y = Math.round((window.innerHeight - el.offsetHeight) / 2);

    var ticking = false;
    var transform;
    var timer;

    var mc = new Hammer.Manager(el);

    mc.add(new Hammer.Pan({ threshold: 0, pointers: 0 }));

    mc.add(new Hammer.Swipe()).recognizeWith(mc.get('pan'));
    mc.add(new Hammer.Rotate({ threshold: 0 })).recognizeWith(mc.get('pan'));
    mc.add(new Hammer.Pinch({ threshold: 0 })).recognizeWith([mc.get('pan'), mc.get('rotate')]);

    mc.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));
    mc.add(new Hammer.Tap());

    
    mc.on("pinchstart pinchmove", onPinch);
    

    mc.on("hammer.input", function(ev) {
        if(ev.isFinal) {
            // resetElement();
        }
    });


    function resetElement() {
        el.className = 'animate';
        transform = {
            translate: { x: START_X, y: START_Y },
            scale: 1,
            angle: 0,
            rx: 0,
            ry: 0,
            rz: 0
        };

        requestElementUpdate();

        if (log.textContent.length > 2000) {
            log.textContent = log.textContent.substring(0, 2000) + "...";
        }
    }

    function updateElementTransform() {
        var value = [
                    'translate3d(' + transform.translate.x + 'px, ' + transform.translate.y + 'px, 0)',
                    'scale(' + transform.scale + ', ' + transform.scale + ')',
                    'rotate3d('+ transform.rx +','+ transform.ry +','+ transform.rz +','+  transform.angle + 'deg)'
        ];

        value = value.join(" ");
        el.textContent = value;
        el.style.webkitTransform = value;
        el.style.mozTransform = value;
        el.style.transform = value;
        ticking = false;
    }

    function requestElementUpdate() {
        if(!ticking) {
            reqAnimationFrame(updateElementTransform);
            ticking = true;
        }
    }

    function logEvent(str) {
        //log.insertBefore(document.createTextNode(str +"\n"), log.firstChild);
    }

    function onPan(ev) {
        el.className = '';
        transform.translate = {
            x: START_X + ev.deltaX,
            y: START_Y + ev.deltaY
        };

        requestElementUpdate();
        logEvent(ev.type);
    }

    var initScale = 1;
    function onPinch(ev) {
        if(ev.type == 'pinchstart') {
            initScale = transform.scale || 1;
        }

        el.className = '';
        transform.scale = initScale * ev.scale;

        requestElementUpdate();
        logEvent(ev.type);
    }

    var initAngle = 0;
    function onRotate(ev) {
        if(ev.type == 'rotatestart') {
            initAngle = transform.angle || 0;
        }

        el.className = '';
        transform.rz = 1;
        transform.angle = initAngle + ev.rotation;
        requestElementUpdate();
        logEvent(ev.type);
    }

    function onSwipe(ev) {
        var angle = 50;
        transform.ry = (ev.direction & Hammer.DIRECTION_HORIZONTAL) ? 1 : 0;
        transform.rx = (ev.direction & Hammer.DIRECTION_VERTICAL) ? 1 : 0;
        transform.angle = (ev.direction & (Hammer.DIRECTION_RIGHT | Hammer.DIRECTION_UP)) ? angle : -angle;

        clearTimeout(timer);
        timer = setTimeout(function () {
            resetElement();
        }, 300);
        requestElementUpdate();
        logEvent(ev.type);
    }

    function onTap(ev) {
        transform.rx = 1;
        transform.angle = 25;

        clearTimeout(timer);
        timer = setTimeout(function () {
            resetElement();
        }, 200);
        requestElementUpdate();
        logEvent(ev.type);
    }

    function onDoubleTap(ev) {
        transform.rx = 1;
        transform.angle = 80;

        clearTimeout(timer);
        timer = setTimeout(function () {
            resetElement();
        }, 500);
        requestElementUpdate();
        logEvent(ev.type);
    }

    resetElement();
       
       
       } 



       }
      });


var zIndex = 0;
function make_draggable(elements)
{	
	elements.draggable({
		containment:'parent',
		start:function(e,ui){ ui.helper.css('z-index',++zIndex); },
		stop:function(e,ui){
		}
	});
}    


    
   }); 	
       
       
       
       
        },
        
        function(err){
            console.log(err);
            
        },
       
        document.getElementById('can')
    );
    	alert("hi");
}
