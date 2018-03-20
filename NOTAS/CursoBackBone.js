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


m = window.collections.articles.first()
m.toJSON()

m.set('user','Alejandra')
m.save()
//Se guardan los cambios en el servidor
//cuando refresquemos el archivo first el nombre sera el que seteamos en este caso Alejandra

m = window.collections.articles.add({user:'Diego',title:'Cancerologia'})
//crea un archivo

window.collections.articles
//Nos mostrara 8 articulos en las colecciones

window.collections.articles.first().toJSON() //Prueba funcionando

------------------------------------------------------------------------

v = new Puls3.Views.Article({model: window.collections.articles.first() })
//Manda un debugger



this.$el //elemento del dom que tendra la vista

//el, eventos y render 3 cosas que tienen una vista

m= window.collections.articles.add({user:"Alex",title:"Cortana"})


//Template 
//Underscore, Swig como se complia y como se renderea










