// JavaScript Document
var button = document.getElementById("button");

button.addEventListener('click', function(){
  notify();
});


function notify(){

  var properties = {
	  body: "Tienes un Mensaje Fam-Mesj",
	  icon: "Fam-Cinet-Favicon.png",
  }
	// Verificar que el navegador soporta notificaciones

  if (!("Notification" in window)) {
    
    alert("Tu navegador no soporta notificaciones");

  }else if(Notification.permission === "granted"){

    // Lanzar notificacion si ya esta autorizado el servicio

    var notification = new Notification("Fam-Cinet", properties);
	  
	notification.onclick = (ev)=>{
		ev.preventDefault();
		window.open(file:///C:/Users/HP/Documents/sebastian/Peliculas%20de%20Fam%20Cinet/Avances%20Famcinet/Carrusel%20falcom%20master/index.html#)
	}

  }else if(Notification.permission !== "denied"){

    Notification.requestPermission(function(permission){

      if(Notification.permission === "granted"){

        var notification = new Notification("Fam-Cinet", properties);
		  
		  notification.onclick = (ev)=>{
		ev.preventDefault();
		window.open(file:///C:/Users/HP/Documents/sebastian/Peliculas%20de%20Fam%20Cinet/Avances%20Famcinet/Carrusel%20falcom%20master/index.html#)
	}

      }

    });

  }



}
