# ☄ API-Nasa ☄
Esta App está basada en los datos de la NASA referentes a los asteroides que han chocado contra la Tierra (landings), así como los que orbitan alrededor del planera, siguiendo su trayectoria (neas).

La aplicación, mobile first, dispone de un front, desarrollado con ReactJS funcional y un back, una API REST hecha con Express y MongoDB, desplegado en la nube (Atlas Mongo). En este proyecto, se puede ver el uso de JS para la manipulación del DOM, empleo de asincronía, promesas, fetch (utilizando axios), así como el uso de diferentes librerías y paquetería nom.

Se ha empleado un control de versiones con GitHub con diferentes ramas.

La pantalla principal está compuesta por una barra de navegación que nos permitirá acceder a la información tanto de los landings como de los neas o volver al inicio. Asimismo, se obtiene la APOD (Astronomy Picture Of
the Day) junto con información adicional de la misma:


[Pantalla inicio .webm](https://user-images.githubusercontent.com/107259913/194924041-f45c5dd0-da1d-4d27-9f69-b2226cb53f49.webm)

Al acceder a la información sobre Landings, podemos visualizar un mapa donde se recogen todos los registrados y ubicados en el mismo según su latitud y longitud de cada uno de ellos.

Asimismo, es posible realizar una búsqueda de los mismos por masa o clase en el buscador ubicado en la parte superior de la pantalla.

Además, dispone de la posibilidad de visualizar todos los landings registrados o crear uno de ellos. Esta misma opción está disponible dentro del apartados de Neas.

[allLandings.webm](https://user-images.githubusercontent.com/107259913/194924616-60c8af5e-d167-403c-ac4b-e07d382322c6.webm)

Formulario de registro de un nuevo landing o nea:

![form registro](https://user-images.githubusercontent.com/107259913/194928376-8387c099-3fad-4d68-9689-1bb642ab2d1f.png)


Una vez creado el nuevo registro, se añadirá a la lista ya existente, con las opciones propias de cada uno de ellos, a saberse: la edición de la información de los mismos o bien su eliminación.

Listado:

![listado](https://user-images.githubusercontent.com/107259913/194929234-335a2048-540d-4775-8864-6289f3cab924.png)


Opciones de Editar y Eliminar en cada uno de los registros:

![OPCIONES](https://user-images.githubusercontent.com/107259913/194929920-565f6b5a-339c-4c8e-b452-c1ae65d539a5.png)

[deleteNEa.webm](https://user-images.githubusercontent.com/107259913/194930104-615906ad-4da4-4b23-b6a9-ef2de4205309.webm)


[deleteLand.webm](https://user-images.githubusercontent.com/107259913/194930118-ca40fc54-1902-4c8d-8acd-6df8187f0e8d.webm)

Para finalizar, esta APP tiene desarrollada su back con Node.js y Express. Los elementos se almacenan en una mase de datos no relacional (MongoDB), usando un ODM como Mongoose. En cuanto a la librería empleada para la visual de front, se ha empleado Tailwind.
