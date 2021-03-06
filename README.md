# API Mercado Envios Service

_Api para el manejo y sincronizacion con la api de Mercadopago_

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento ._


### Pre-requisitos 📋

_Software necesario para correr el proyecto_

```
Nodejs
```

```
Mongodb
```

### Instalación 🔧

_Pasos necesarios para la instalacion y correcto funcionamiento de la api_

_1) Clonar el proyecto_

```
git clone https://github.com/christianrusso/mercado-envios
```

_2) Instalar las dependencias del proyecto_

```
npm install
```

_3) Crear un archivo **.env** en la raiz del proyecto siguiendo la estructura de **.env.example** con los datos reales necesarios_



## Ejecutar la aplicacion ⚙️

_Comando para ejecutar en produccion_

```
npm start
```
_Comando para ejecutar en desarrollo_

```
npm run dev
```

## Endpoints 📦

_Endpoints con los que cuenta la api actualmente_

Los providers son los vendedores desde los cuales se quiere obtener la informacion. 
Es necesario que tengan un token, el id no es necesario, ya que si no cuenta con uno, al sincronizar lo guardara.
Se debe tener al menos un provider para poder sincronizar con mercadopago

```
GET /providers/ Get de todos los providers
POST /providers/ Crear un Provider  -body: name, token, sellerId  (sellerId opcional)
DELETE /providers/6074416a0ed0c2336c9867a1 Eliminar un provider, parametro: provider id
```


Mediante este se creara una **sincronizacion** con la base de datos de MP y la de nuestra api.
```
GET /sync/order/ Sincronizar las ordenes y envios de MP
```

```
GET /orders/ Get de todas las ordenes en nuestra base de datos
GET /orders/6074416b0ed0c2336c9867aa Get de una sola orden, parametro: order id
GET /orders/seller/6074416a0ed0c2336c9867a1 Get de todas las ordenes de un vendedor, parametro: seller id
```

```
GET /shipping/ Get de todos los envios
GET /shipping/6074416a0ed0c2336c9867a8 Get de un envio, parametro: shipping id
GET /shipping/mercadolibre/40437477250, Get de un envio, parametro: shipping id de mercadopago
GET /shipping/seller/6074416a0ed0c2336c9867a1 Get de todos los envios de un vendedor, parametro: seller id
```

```
GET /payments/ Get de todos los pagos
GET /payments/6074416a0ed0c2336c9867a2 Get de un pago, parametro: payment id
```

```
GET /sellers/ Get de todos los vendedores
GET /sellers/6074416a0ed0c2336c9867a1 Get de un vendedor, parametro: seller id
```

```
GET /buyers/ Get de todos los compradores
GET /buyers/6074416a0ed0c2336c9867a0 Get de un comprador, parametro: buyer id
```

## Postman Doc 📖

Puedes encontrar los endpoints mas detallados en [Postman](https://documenter.getpostman.com/view/9170091/TzJpiKo5)