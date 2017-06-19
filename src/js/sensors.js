$(document).ready(function(){




io.on('connection',function(socket){  
    console.log("A user is connected");
    });


$.get("http://interview.optumsoft.com/sensornames", function(data, status){
    
var tbody = $('#sensor_names tbody'),
props = ["Sensor Names"];


$.each(data, function(i, sensornames) {
    
    var tr = $('<tr>');
    $('<td class="nr">').html(sensornames).appendTo(tr);  
   $('<td>').html('<button class="subscribe">Subscribe</button>').appendTo(tr);
    $('<td>').html('<button class="unsubscribe">Unsubscribe</button>').appendTo(tr);
    // $('button').appendTo($('<td>'));
     tbody.append(tr);
    }); 
    
    $(".subscribe").click(function() {
    var $row = $(this).closest("tr");    // Find the row
    var $text = $row.find(".nr").text(); // Find the text
        socket.emit("subscribe", $text);
        console.log( socket.emit("subscribe", $text));
    
});
    
        $(".unsubscribe").click(function() {
    var $row = $(this).closest("tr");    // Find the row
    var $text = $row.find(".nr").text(); // Find the text
    alert($text);
});
});

});

