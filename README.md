# Banco

## Descripción

Sistema web de un banco

[Servicio]: http://3.83.142.54:9191/banco.wsdl

## Funcionalidades

- Realizar cargo

- Realizar reembolso

## Diagrama de clases

#### Banco

| Atributo |  Tipo  |
| :------: | :----: |
| Tarjeta  | String |
|  Monto   |  int   |

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

      