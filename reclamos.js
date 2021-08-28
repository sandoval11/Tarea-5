// Creamos la tercera coleccion "reclamos"
db.createCollection("reclamos")

//  Verficamos la coleccion creada
show collections

// Insertamos datos a la coleccion "reclamos"

db.reclamos.insertMany( [ { id_reclamo: 001, asunto: "mala calida en los videos", fecha : new Date(2021,05,28), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Pedro", apellidos_cliente: "Ramos", nombre_evento: "Bautizmo" },
 { id_reclamo: 002, asunto: "Llegada tardia al evento", fecha : new Date(2021,05,21), nombre_empleado: "Juan", apellidos_mepleado: "Martin Ramos", nombre_cliente: "Maritza", apellidos_cliente: "Rivas", nombre_evento: "Boda" },
  { id_reclamo: 003, asunto: "Falta de amabilidad", fecha : new Date(2021,03,19), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Raul", apellidos_cliente: "Beltran", nombre_evento: "Cumpleaños" },
   { id_reclamo: 004, asunto: "Mala calida en la fotografias", fecha : new Date(2021,02,15), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Gloria", apellidos_cliente: "De la O", nombre_evento: "Boda" },
    { id_reclamo: 005, asunto: "Mala calida en la fotografias", fecha : new Date(2021,01,12), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Cristian", apellidos_cliente: "Villalta", nombre_evento: "Boda" },
     { id_reclamo: 006, asunto: "mala calida en los videos", fecha : new Date(2021,05,10), nombre_empleado: "Rosa", apellidos_mepleado: "Rodriguez", nombre_cliente: "Gisselle", apellidos_cliente: "Barrios", nombre_evento: "Bautizmo" },
      { id_reclamo: 007, asunto: "mala calida en las fotografias", fecha : new Date(2021,05,08), nombre_empleado: "Bryan", apellidos_mepleado: "Gonzales", nombre_cliente: "Jaime", apellidos_cliente: "Penedo", nombre_evento: "Bautizmo" },
       { id_reclamo: 008, asunto: "Falta de ambilidad", fecha : new Date(2021,04,16), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Gerson", apellidos_cliente: "Baires", nombre_evento: "Cumpleaños" },
        { id_reclamo: 009, asunto: "Falta de ambilidad", fecha : new Date(2021,04,17), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Maria", apellidos_cliente: "Guevara Paiz", nombre_evento: "Baby Shower" },
         { id_reclamo: 010, asunto: "Falta de ambilidad", fecha : new Date(2021,02,09), nombre_empleado: "Yesenia", apellidos_mepleado: "Castillo", nombre_cliente: "Cesar", apellidos_cliente: "Funes", nombre_evento: "Cumpleaños" } ]  )

// vemos los datos registrados en la coleccion "reclamos"
db.reclamos.find().pretty()