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

var panel = '<div data-role="panel"  id="mypanel" class="dragImg" data-position="right" data-display="overlay" data-position-fixed="true"></div>';

$(document).one('pagebeforecreate', function () {
  $.mobile.pageContainer.prepend(panel);
  $("#mypanel").panel();
     
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
          $('#mypanel').prepend('<img id="theImg" class="dragImg", "theImg" src="'+msg+'"/>');//path of new images and appending them to panel 
            
            
            
            
            //path of new images and appending them to panel 
   // <img id="theImg" draggable="true" ontouchstart="get_pos(event)" ondragstart="drag(event)"/>
 
 
 
 /*
$(function() {
	  			
  				 //Counter
  				 counter = 0;
  				 //Make element draggable
  				 $("#theImg").draggable({
  				 helper: 'clone',
  				 containment: 'can',
  				 //When first dragged
  				 stop: function (ev, ui) {

  				 var pos = $(ui.helper).offset();
  				 objName = "#clonediv" + counter
  				 $(objName).css({
  				 "left": pos.left,
  				 "top": pos.top
            });
            	$(objName).removeClass("drag");
				//When an existiung object is dragged
				$(objName).draggable({
                containment: 'can',
                stop: function (ev, ui) {
                    var pos = $(ui.helper).offset();
                }
            		});
        				}
    		});
				//Make element droppable
				$("#can").droppable({
				drop: function (ev, ui) {
				if (ui.helper.attr('id').search(/drag[0-9]/) != -1) {
                counter++;
                var element = $(ui.draggable).clone();
                element.addClass("tempclass");
                $(this).append(element);
                $(".tempclass").attr("id", "clonediv" + counter);
                $("#clonediv" + counter).removeClass("tempclass");
                //Get the dynamically item id
                draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
                itemDragged = "dragged" + RegExp.$1
                console.log(itemDragged);
                $("#clonediv" + counter).addClass(itemDragged);
                // $("#clonediv" + counter).removeClass(itemDragged);
            					}
        					}
    				});
  			});
*/
  			
/*
  	$('#theImg').draggable({
    helper: "clone"
    
}).on('dragstart', function (e, ui) {
    $(ui.helper).css('z-index','999999');
}).on('dragstop', function (e, ui) {
    $(this).after($(ui.helper).clone(true).draggable());
    $("#theImg").clone().insertAfter("#two");
 

});

$( "#two" ).droppable({
      drop: function( event, ui ) {
        $( this )
          // .addClass("ui-state-highlight")
          console.log("dropped");
      }
      
    });
*/
/*
 $(function() {


  $('#theImg').draggable({
	  helper: "clone", 
	  cursor: 'move', 
	  containment: '#two',
	  
	  stop: function() {

        var cont = $('#two').offset();

        var img = $(this).offset();

        $('#xy').text('x-axis :' + (img.left - cont.left) + ', y-axis :' + (img.top - cont.top));

     }});

   });
*/
 
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
     $(this).append($(ui.helper).clone());
     console.log("clone dropped");
   
   //Pointing to the dragImg class in dropHere and add new class.
         $("#dropHere .dragImg").addClass("item-"+counts[0]);
            $("#dropHere .theImg").addClass("imgSize-"+counts[0]);
                
   //Remove the current class (ui-draggable and dragImg)
         $("#dropHere .item-"+counts[0]).removeClass("dragImg ui-draggable ui-draggable-dragging");

$(".item-"+counts[0]).dblclick(function() {
$(this).remove();
});     
	make_draggable($(".item-"+counts[0])); 
      $(".imgSize-"+counts[0]).resizable(resizeOpts);     
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


