# Banco

## Descripción

Sistema web de un banco.
El banco #03 guarda tarjetas con numeración mayor a 55 (primeros 2 dígitos de 16) y menor 7750 (primeros 4 dígitos de 16)

[Servicio](http://3.83.142.54:9191/banco.wsdl)

## Funcionalidades

- Realizar cargo

- Realizar reembolso

## Diagrama de clases

#### Tarjeta

| Atributo |  Tipo  |
| :------: | :----: |
| tarjeta  | String |
| fechacad | String |
|   cvv    |  int   |
|  monto   |  int   |

## Mapa de actores

![](https://github.com/Vaalu-18/Banco/blob/master/imagenes/mapaactores.png)

## Casos de uso

![](C:\Users\omar_\Documents\Tecnologias Para la Integración de Soluciones\casosdeuso.png)

## Descripción CU-01

![](C:\Users\omar_\Documents\Tecnologias Para la Integración de Soluciones\casodeusouno.png)

## Descripción CU-02

![](C:\Users\omar_\Documents\Tecnologias Para la Integración de Soluciones\casodeusodos.png)

## Diagrama de actividades

![](C:\Users\omar_\Documents\Tecnologias Para la Integración de Soluciones\diagramadeactividades.png)

## Diagrama de componentes

![](C:\Users\omar_\Documents\Tecnologias Para la Integración de Soluciones\diagramadecomponentes.png)

## Métodos

- getCobro(CobrarRequest) : CobrarResponse

- getReembolso(ReembolsoRequest) : ReembolsoResponse

## Mensajes

- Cobrar

  - Exitoso

    Se muestra mensaje: "Banco 3: Se ha realizado un cargo a la tarjeta ejecutiva con terminación: XXXX-XXXX-XXXX-XXXX por la cantidad de: $_____.00 con número de autorización"

  - Errores

    - Se ingresó una cadena menor a 16 caracteres

      Se muestra mensaje: "Transacción cancelada. El numero de tarjeta ejecutiva que ha ingresado no pertenece al sistema de tarjetas permitido. Por favor, ingrese un numero de tarjeta valido (16 dígitos)"

    - Se ingreso una cadena de 16 caracteres pero contiene dígitos alfabéticos

      Se muestra mensaje: "Transacción cancelada. El numero de tarjeta ejecutiva que ha ingresado no pertenece al sistema de tarjetas permitido. Por favor, ingrese un numero de tarjeta valido (16 dígitos numéricos)"
      
    - Se ingreso una cadena de fecha de caducidad mayor o menor a 4 dígitos

      Se muestra mensaje: "La fecha de caducidad debe contener sólo 4 dígitos(mm/aa)"

    - Se ingreso una cadena de fecha de caducidad donde el mes (mm) es 0 o mayor a 12 y el año (aa) es 0 o mayor a 99

      Se muestra mensaje: "La fecha ingresada es incorrecta. Por favor, ingrese una fecha que este dentro del formato permitido (mmaa)" 

    - Se ingreso una cadena de fecha de caducidad y la tarjeta ya caducó

      Se muestra mensaje: "Su tarjeta se encuentra caducada. Por favor acuda a su banco más cercano para una renovación"

    - Se ingreso un código cvv mayor o menor a 3

      Se muestra el mensaje: "El código cvv sólo está compuesto por 3 digitos numéricos, ingrese correctamente el cvv"

    - No se pudo ingresar los datos a la base de datos

      Se muestra mensaje: "Banco 3: No se ha podido realizar el registro de su pago debido a un problema en la Base de Datos"

  - Excepciones

    - La cadena ingresada es correcta, pero la numeración pertenece a otro banco

      "Cargo en proceso... La tarjeta: XXXX-XXXX-XXXX-XXXX pertenece a otro banco. En seguida estableceremos una conexión con el para poder realizar el cargo... Banco #: Se ha realizado un cargo a la tarjeta ejecutiva con terminación:"+ "XXXX-XXXX-XXXX-XXXX " por la cantidad de: $_____.00 con número de autorización"

- Reembolso

  - Exitoso

    "Banco 3: Se ha realizado un reembolso a la tarjeta ejecutiva con terminación: "+"XXXX-XXXX-XXXX-XXXX por la cantidad de: $______.00  Gracias por su confianza"

  - Errores

    - Se ingreso una cadena menor a 16 caracteres

      "El reembolso no ha sido realizado. El numero de tarjeta ejecutiva que ha ingresado no pertenece al sistema de tarjetas permitido. Por favor, ingrese un numero de tarjeta valido (16 dígitos)"

    - Se ingreso una cadena de 16 caracteres pero contiene dígitos alfabéticos

      "El reembolso no ha sido realizado. El numero de tarjeta ejecutiva que ha ingresado no pertenece al sistema de tarjetas permitido. Por favor, ingrese un numero de tarjeta valido (16 dígitos numéricos)"

  - Excepciones

    - La cadena ingresada es correcta pero la numeración pertenece a otro banco

      "La tarjeta: XXXX-XXXX-XXXX-XXXX pertenece a otro banco. En seguida estableceremos una conexión con el para poder otorgarle su reembolso... Banco #: Se ha realizado un reembolso a la tarjeta ejecutiva con terminación: "+"XXXX-XXXX-XXXX-XXXX por la cantidad de: $______.00 Gracias por su confianza"

      
