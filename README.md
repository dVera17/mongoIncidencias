# Gestor de incidencias

## Requisitos del sistema

- Node.js y NPM (Node Package Manager) instalados en el sistema.
- Mongodb instalado

## Instalacion

1. Clona este repositorio:
    ```bash
    https://github.com/dVera17/mongoIncidencias.git
    ```
2. Instala las dependencias con el comando:
    ```bash
    npm install
    ```
3. Crea un archivo .env y copia las variables de entorno del archivo .env.example y colocar sus valores, ejemplo:
    ```Javascript
    // .env
    JWT_PRIVATE_KEY = "clave secreta"
    PORT_SERVER = puerto
    DB_USER = "user de mongo"
    DB_PASSWORD = "password"
    DB_NAME = "nombre de la base de datos"
    ```

## Configuracion del packge.json

Las importaciones se manejaran con el estandar ES6 y se agrega el comando "dev" si se esta utilizando [nodemon](https://www.npmjs.com/package/nodemon).
```json
{
    ...,
    "type": "module",
    "scripts": {
        "tsc": "tsc -w",
        "dev": "nodemon --quiet src/index.js"
    }
    ...,
}
```

## Seguridad y autenticacion

Para poder ingresar debes tener un usuario valido, en este caso la base de datos cuenta con uno por defecto que tiene acceso a todos los endpoints que tiene la API.

Para acceder a la API debes seguir los siguientes pasos:

1. Realiza una solicitud `POST` a esta url: `localhost:5010/login`
2. En el body debes enviar la siguiente data:
    ```JSON
    {
        "cedula": 123456789
    }
    ```
3. Copia el token generado y coloca en los encabezados: `Authorization` - `Bearer <Token generado>`
4. Agrega el encabezado `Accept-Version` y su valor es la version de API que vayas a utilizar

## Descripción de Endpoints

### Area 

1. `GET /area`
    - Obtiene todas las areas registradas en la base de datos
    - Accept-Version: 1.0.0

2. `GET /area/:tipoArea`
    - Obtiene las areas por el tipo de area
    - Accept-Version: 1.0.0

### Dispositivo

1. `GET /dispositivo`
    - Obtiene todos los dispositivos registrados en la base de datos
    - Accept-Version: 1.0.0

2. `GET /dispositivo/:tipo_dispositivo`
    - Obtiene los dispositivos por el tipo de dispositivo
    - Accept-Version: 1.0.0

3. `POST /dispositivo`
    - Agrega un dispositivo nuevo a la base de datos
    - Accept-Version: 1.0.0
    - Ejemplo del body
    ```JSON
    {
        "id": 7,
        "marca": "example",
        "modelo": "example",
        "tipo": "mouse",
        "idArea": 2
    }
    ```

### Incidencia

1. `GET /incidencia`
    - Obtiene todas las incidencias registradas en la base de datos
    - Accept-Version: 1.0.0

2. `POST /incidencia`
    - Agrega una incidencia nueva a la base de datos
    - Accept-Version: 1.0.0
    - Ejemplo del body
    ```JSON
    {
        "id": 7,
        "descripcion": "example",
        "fecha": "2023-01-01",
        "categoria": "hardware",
        "tipo": "leve",
        "id_area": 1
    }
    ```

### Trainer

1. `GET /trainer`
    - Obtiene los trainers registrados en la base de datos
    - Accept-Version: 1.0.0

2. `GET /trainer/:cedula`
    - Obtiene un trainer por la cedula
    - Accept-Version: 2.0.0

3. `POST /trainer`
    - Agrega un trainer a la base de datos
    - Accept-Version: 1.0.0
    - Ejemplo del body
    ```JSON
    {
        "cedula": 123789456,
        "nombre": "Example",
        "telefono": "3232323223",
        "emailPersonal": "faker@example.com",
        "emailCorp": "faker@example.com"
    }
    ```

## Inicialización del servidor

Para empezar a utilizar la aplicación, abre tu terminal y ejecuta el siguiente comando.
```bash
npm run dev
```