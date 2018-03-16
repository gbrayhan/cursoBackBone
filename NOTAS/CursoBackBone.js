m= new Puls3.Models.Article({title:"Medicamentos", author:"gbrayhan"})

//Nos interesan las siguiente funciones para todos nuestros modelos
m.toJSON()
/*
Object { title: "Medicamentos", author: "gbrayhan", votes: 10 }
*/

m.on('change',function(){console.log('El Modelo ha cambiado')})

/*--------------------------------------------------------*/
m.set('votes',10)
//Sale el comentario: "El modelo cambio"


/*-----------------------------*/


c= new Puls3.Collections.Articles()


c.add({title: "Cancerologia", author:"gbrayhan"})

c
c.first()

c.on('add',function(miModelo){console.log('Un nuevo modelo se ha agregado',miModelo)})


c.add({title: "Cancerologia", author:"gbrayhan"})
//Mensaje de un nuevo modelo de ha agregado









