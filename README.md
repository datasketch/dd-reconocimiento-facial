# Reconocimiento facial

## Requisitos
- Node v12 o superior
- Hugo 0.87.x o superior versión **extended**. En el github de Hugo se encuentran los diferentes [releases](1)

## Setup
- Descargar / clonar el repositorio y `cd` en la carpeta creada.
- Ejecutar `npm install` para instalar las dependencias.
- Ejecutar `hugo` para hacer build del sitio.

Por defecto, los archivos del build quedan guardados en la carpeta `public`.

El sitio está configurado para ser desplegado en la carpeta raíz del dominio, por ejemplo, `midominio.com`.

Sin embargo, si el sitio va a ser desplegado en una subcarpeta del dominio, por ejemplo, `midominio.com/mi-sitio/`, es necesario editar el archivo [`config.toml`](2) ubicado en `config/production/config.toml` y cambiar el valor de la llave `baseURL` por el nombre de la subcarpeta. Este nombre debe iniciar y terminar con una barra inclinada `/`.


| dominio                | baseURL    |
|------------------------|------------|
| midominio.com          | /          |
| midominio.com/mi-sitio | /mi-sitio/ |
| midominio.com/el-sitio | /el-sitio/ |

Si este cambio es realizado después de hacer build, es necesario ejecutar el comando `hugo` una vez más.


[1]https://github.com/gohugoio/hugo/releases
[2]https://github.com/datasketch/dd-reconocimiento-facial/blob/main/config/production/config.toml
