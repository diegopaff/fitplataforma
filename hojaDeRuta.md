Proceso para la elaboración de la plataforma



1 - Crear un formulario de login con Formik 
2- Autenticar el login con Firebase
3- Cuando funcione te devuelve un user id que se guarda en un contexto global
4 - Con ese user id, podes hacer un llamado a la firestore que creaste con el mismo id, y con eso traer la info de ese usuario


Info necesaria en el firestore: 
userId: (se usa la que devuelve el AUTH del login)
Nombre
Apellido
Equipo
Posicion
Foto de perfil
Videos{ (investigar que host es mejor, por ahora puede ser google drive)
    -Charlas Zoom completas
    -Video mostrado en charla
    -Partidos {
        Acciones del jugador
     }
    -Highlights 
}

Estadisticas{
    -minutos jugados
    -Goles en el campeonato
    -Asistencias
    -etc...
}