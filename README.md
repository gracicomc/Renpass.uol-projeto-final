<h1 align="center">Final Chalenge 💥 - Repass.UOL 🚙</h1> 

<h2 align="center"> API for renting luxury and semi-luxury cars </h2>
</br>
<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</p>
</br>
<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20DEVELOPING&color=&style=for-the-badge"/>
</p>

<h1 align> 🔍 Some informations about the project: </h1>

### Node version:
```bash
14.18.0
```
### NPM version:
```bash
6.14.15
```
### Dependencies:
```json
    "@joi/date": "^2.1.0",
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "express": "^4.18.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.3",
    "mongoose": "^6.3.5",
    "mongoose-paginate-v2": "^1.6.3",
    "morgan": "^1.10.0",
    "supertest": "^6.2.3",
    "swagger-ui-express": "^4.4.0",
    "dotenv": "^16.0.1"
```

### devDependencies:
```json
    "eslint": "^8.18.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-plugin": "^1.0.11",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "nodemon": "^2.0.16",
    "prettier": "^2.7.1"
```

### Frameworks:
```bash
"express": "^4.18.1"
```
<br>

## 📋 Swagger Documentation - [SwaggerDoc](https://renpassuol.herokuapp.com/api/v1/api-docs/)
<br>

## 👾 Heroku - [Deploy](https://renpassuol.herokuapp.com/api/v1/<ROUTER>)
<br>

<h1 align=> 🖌️ API authors: </h1>

### 👩🏾‍💻Graciela Beatriz - [Profile Link](https://github.com/gracicomc)
</br>

<h1> 👣 Steps to run the code: </h1>

### 1️⃣ - First install dependencies

    npm install

### 2️⃣ - Run server

    npm run dev

### 3️⃣ - Bearer Authentication

    For use all endpoints its necessary to create a person and then
    authenticate it on Authenticate POST endpoint. Use the generated 
    token in Headers and add "Bearer" before paste the token.


<h1 align> 📁 Authenticate Endpoints: </h1>

<details open>
<summary>Auth</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/authenticate/ 
    
    
```json
//req body example
    {
        "email": "joazinho@email.com",
        "password": "123456"
    }
``` 
### Response

`Status: 201 Created`

 ```json
{
    "email": "joazinho@email.com",
    "canDrive": "yes",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ1MWNjOWE3OGM0MTRlN2NhYjZmNSIsImlhdCI6MTY1NDQ4ODc2NCwiZXhwIjoxNjU0NTc1MTY0fQ.7OM35NEznykrb4KwYpDhTJAY7fPhXCXaMV5xKH3g3cs"
}

 ```
#### ❗ That's the token you must copy and paste in Headers of requisition
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Car Endpoints: </h1>

<details>
<summary>Create Car</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/car/ 
    
    
```json
//req body example
{
  "model": "S10 2.8",
  "type": "sedan",
  "brand": "GM",
  "color": "branco",
  "year": "2021",
  "accessories": [
    {
      "description": "Ar-condicionado"
    },
    {
      "description": "Dir. Hidráulica"
    }
  ],
  "passengersQtd": 5
}
``` 
    
### Response

`Status: 201 Created`

 ```json
    {
        "model": "S10 2.8",
        "type": "sedan",
        "brand": "GM",
        "color": "branco",
        "year": "2021",
        "accessories": [
            {
                "description": "Ar-condicionado"
                 "_id": "629d4cd99a78c414e7cab6d1"
            },
            {
                "description": "Dir. Hidráulica"
                "_id": "629d4cd99a78c443e7cab6d1"
            }
        ],
        "passengersQtd": 5,
        "_id": "629d4cd99a78c414e7cab6f1"
}
 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List Cars</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/car/

`You can customize the pagination using query parameters`

```json
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```json
 {
    "vehicles": [
        {
            "model": "S10 2.8",
            "type": "sedan",
            "brand": "GM",
            "color": "branco",
            "year": "2021",
            "accessories": [
                {
                    "description": "Ar-condicionado"
                    "_id": "629d4cd99a78c414e7cab6d1"
                },
                {
                    "description": "Dir. Hidráulica"
                    "_id": "629d4cd99a78c443e7cab6d1"
                }
            ],
        "passengersQtd": 5,
        "_id": "629d4cd99a78c414e7cab6f1"
        }
    ],
    "total": 1,
    "offset": 1,
    "limit": 100,
    "offsets": 1
}
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List a Car by ID</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/car/:id
    
### Response

`Status: 200 OK`

 ```json
    {
        "model": "S10 2.8",
        "type": "sedan",
        "brand": "GM",
        "color": "branco",
        "year": "2021",
        "accessories": [
            {
                "description": "Ar-condicionado"
                 "_id": "629d4cd99a78c414e7cab6d1"
            },
            {
                "description": "Dir. Hidráulica"
                "_id": "629d4cd99a78c443e7cab6d1"
            }
        ],
        "passengersQtd": 5,
        "_id": "629d4cd99a78c414e7cab6f1"
}
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Update a Car by ID</summary>
<br>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/car/:id

 ```json
{
     "color": "verde"
}
 ```
    
### Response

`Status: 200 OK`
```json

    {
        "model": "S10 2.8",
        "type": "sedan",
        "brand": "GM",
        "color": "verde",
        "year": "2021",
        "accessories": [
            {
                "description": "Ar-condicionado"
                 "_id": "629d4cd99a78c414e7cab6d1"
            },
            {
                "description": "Dir. Hidráulica"
                "_id": "629d4cd99a78c443e7cab6d1"
            }
        ],
        "passengersQtd": 5,
        "_id": "629d4cd99a78c414e7cab6f1"
}
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```

</details>

<details>
<summary>Update an Acessory by ID of description</summary>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/car/:id/accessories/:accessoriesId

 ```json
{
     "description": "Câmbio Automático"
}
 ```
    
### Response

`Status: 200 OK`
```json
    {
        "model": "S10 2.8",
        "type": "sedan",
        "brand": "GM",
        "color": "verde",
        "year": "2021",
        "accessories": [
            {
                "description": "Câmbio Automático"
                 "_id": "629d4cd99a78c414e7cab6d1"
            },
            {
                "description": "Dir. Hidráulica"
                 "_id": "629d4d99a78c414e7cab6f1"
            }
        ],
        "passengersQtd": 5,
        "_id": "629d4cd99a78c414e7cab6f1"
}
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Delete a Car by ID</summary>
<br>

### Request

`DELETE`

    https://renpassuol.herokuapp.com/api/v1/car/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Person Endpoints: </h1>

<details>
<summary>Create Person</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/person/ 
    
    
```json
//req body example
{
  "name": "João Lopes",
  "cpf": "131.147.860-49",
  "birthDay": "03/03/1998",
  "email": "joazinho@email.com",
  "password": "123456",
  "canDrive": "yes"
}

``` 
    
### Response

`Status: 201 Created`

 ```json
{
    "name": "João Lopes",
    "cpf": "131.147.860-49",
    "birthDay": "03/03/1998",
    "email": "joazinho@email.com",
    "password": "$2b$10$YNHg1.71HVvbfpcfPwoBOuT6A460yM83kKgDOI6EiC2FBVD5QtTJG",
    "canDrive": "yes",
    "_id": "629d51cc9a78c414e7cab6f5"
}

 ```
     
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List Person</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/person/

`You can customize the pagination using query parameters`

```json
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```json
{
    "people": [
        {
            "_id": "629d51cc9a78c414e7cab6f5",
            "name": "João Lopes",
            "cpf": "131.147.860-49",
            "birthDay": "03/03/1998",
            "email": "joazinho@email.com",
            "password": "$2b$10$YNHg1.71HVvbfpcfPwoBOuT6A460yM83kKgDOI6EiC2FBVD5QtTJG",
            "canDrive": "yes"
        }
    ],
    "total": 1,
    "offset": 1,
    "limit": 100,
    "offsets": 1
}

 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List a Person by ID</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/person/:id
    
### Response

`Status: 200 OK`

 ```json
{
    "name": "João Lopes",
    "cpf": "131.147.860-49",
    "birthDay": "03/03/1998",
    "email": "joazinho@email.com",
    "password": "$2b$10$YNHg1.71HVvbfpcfPwoBOuT6A460yM83kKgDOI6EiC2FBVD5QtTJG",
    "canDrive": "yes",
    "_id": "629d51cc9a78c414e7cab6f5"
}
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Update a Person by ID</summary>
<br>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/person/:id

 ```json
{
     "name": "João Lopes Gomes"
}
 ```
    
### Response

`Status: 200 OK`
```json
{
    "name": "João Lopes Gomes",
    "cpf": "131.147.860-49",
    "birthDay": "03/03/1998",
    "email": "joazinho@email.com",
    "password": "$2b$10$YNHg1.71HVvbfpcfPwoBOuT6A460yM83kKgDOI6EiC2FBVD5QtTJG",
    "canDrive": "yes",
    "_id": "629d51cc9a78c414e7cab6f5"
}
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Delete a Person by ID</summary>
<br>

### Request

`DELETE`

    https://renpassuol.herokuapp.com/api/v1/person/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Rental Endpoints: </h1>

<details>
<summary>Create Rental</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/rental/ 
    
    
```json
//req body example
{
    "name": "Localiza Rent a Car",
    "cnpj": "50.261.481/0001-67",
    "activities": "Aluguel de Carros",
    "address": [
        {
            "zipCode": "96200-200",
            "number": "200",
            "isFilial": true
        }
    ]
}
``` 
    
### Response

`Status: 201 Created`

 ```json
{
    "_id": "62a91925d10cc4c0f9b70971",
    "name": "Localiza aí",
    "cnpj": "40.764.224/0001-94",
    "activities": "teste",
    "address": [
        {
            "zipCode": "96200-200",
            "street": "Rua General Canabarro",
            "number": 1234,
            "city": "Rio Grande",
            "district": "Centro",
            "state": "RS",
            "complement": "",
            "isFilial": false,
            "_id": "62a91b272af92ef23d601157"
        }
    ]
}
 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary> List Rentals </summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/

`You can customize the pagination using query parameters`

```json
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```json
{
    "rentals": [
        {
            "_id": "62a91925d10cc4c0f9b70971",
            "name": "Localiza aí",
            "cnpj": "40.764.224/0001-94",
            "activities": "teste",
            "address": [
                {
                    "zipCode": "96200-200",
                    "street": "Rua General Canabarro",
                    "number": 1234,
                    "city": "Rio Grande",
                    "district": "Centro",
                    "state": "RS",
                    "complement": "",
                    "isFilial": false,
                    "_id": "62a91b272af92ef23d601157"
                }
            ]
        }
    ],
    "total": 2,
    "offset": 1,
    "limit": 10,
    "offsets": 1
}
 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List a Rental by ID</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/:id
    
### Response

`Status: 200 OK`

 ```json
        {
            "_id": "62a91925d10cc4c0f9b70971",
            "name": "Localiza aí",
            "cnpj": "40.764.224/0001-94",
            "activities": "teste",
            "address": [
                {
                    "zipCode": "96200-200",
                    "street": "Rua General Canabarro",
                    "number": 1234,
                    "city": "Rio Grande",
                    "district": "Centro",
                    "state": "RS",
                    "complement": "",
                    "isFilial": false,
                    "_id": "62a91b272af92ef23d601157"
                }
            ]
        }
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Update a Rental by ID</summary>
<br>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/rental/:id

 ```json
{
     "name": "Localiza"
}
 ```
    
### Response

`Status: 200 OK`
```json
        {
            "_id": "62a91925d10cc4c0f9b70971",
            "name": "Localiza",
            "cnpj": "40.764.224/0001-94",
            "activities": "teste",
            "address": [
                {
                    "zipCode": "96200-200",
                    "street": "Rua General Canabarro",
                    "number": 1234,
                    "city": "Rio Grande",
                    "district": "Centro",
                    "state": "RS",
                    "complement": "",
                    "isFilial": false,
                    "_id": "62a91b272af92ef23d601157"
                }
            ]
        }
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Delete a Rental by ID</summary>
<br>

### Request

`DELETE`

    https://renpassuol.herokuapp.com/api/v1/rental/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Fleet Endpoints: </h1>

<details>
<summary>Create Fleet</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/fleet/ 
    
    
```json
//req body example
{
    "id_car": "62b0ba0be023cf8d212ad608",
    "status": "available",
    "daily_value": 100,
    "plate": "MVJ8782"
}

``` 
    
### Response

`Status: 201 Created`

 ```json
{
    "id_car": "62b0ba0be023cf8d212ad608",
    "id_rental": "<rentalId>",
    "status": "available",
    "daily_value": 100,
    "plate": "MVJ8782",
    "_id": "62b294a58ed0d260a4ab1959"
}

 ```
     
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List Fleet</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/fleet/
 
    
### Response

`Status: 200 OK`

 ```json
{
    "docs": [
        {
            "id_car": "62b0ba0be023cf8d212ad608",
            "id_rental": "<rentalId>",
            "status": "available",
            "daily_value": 100,
            "plate": "MVJ8782",
            "_id": "62b294a58ed0d260a4ab1959"
        }
    ],
    "total": 1,
    "offset": 1,
    "limit": 100,
    "offsets": 1
}

 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List a Fleet by ID</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/fleet/:id
    
### Response

`Status: 200 OK`

 ```json
{
    "id_car": "62b0ba0be023cf8d212ad608",
    "id_rental": "62b1aef535fbee026c1b552d",
    "status": "available",
    "daily_value": 100,
    "plate": "MVJ8782",
    "_id": "62b294a58ed0d260a4ab1959"
}
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Update a Fleet by ID</summary>
<br>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/fleet/:id

 ```json
{
     "status": "unavailable"
}
 ```
    
### Response

`Status: 200 OK`
```json
{
    "id_car": "62b0ba0be023cf8d212ad608",
    "id_rental": "<rentalId>",
    "status": "unavailable",
    "daily_value": 100,
    "plate": "MVJ8782",
    "_id": "62b294a58ed0d260a4ab1959"
}
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Delete a Fleet by ID</summary>
<br>

### Request

`DELETE`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/fleet/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Reserves Endpoints: </h1>

<details>
<summary>Create Reserve</summary>
<br>

### Request

`POST`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/reserve/ 
    
    
```json
//req body example
{
    "id_user": "62b1d6e27b943caf405128d1",
    "date_start": "10/11/2021",
    "date_end": "12/11/2021",
    "id_car": "62b0ba0be023cf8d212ad608"
}

``` 
    
### Response

`Status: 201 Created`

 ```json
{
    "id_user": "62b1d6e27b943caf405128d1",
    "date_start": "10/11/2021",
    "date_end": "12/11/2021",
    "id_car": "62b0ba0be023cf8d212ad608",
    "id_rental": "<rentalId>",
    "final_value": "200",
    "_id": "62b29ca6088a82cd83d47cc4"
}

 ```
     
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List Reserve</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/reserve/
 
    
### Response

`Status: 200 OK`

 ```json
{
    "docs": [
        {
            "id_user": "62b1d6e27b943caf405128d1",
            "date_start": "10/11/2021",
            "date_end": "12/11/2021",
            "id_car": "62b0ba0be023cf8d212ad608",
            "id_rental": "<rentalId>",
            "final_value": "200",
            "_id": "62b29ca6088a82cd83d47cc4"
        }
    ],
    "total": 1,
    "offset": 1,
    "limit": 100,
    "offsets": 1
}

 ```
    
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>List a Reserve by ID</summary>
<br>

### Request

`GET`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/reserve/:id
    
### Response

`Status: 200 OK`

 ```json
    {
        "id_user": "62b1d6e27b943caf405128d1",
        "date_start": "10/11/2021",
        "date_end": "12/11/2021",
        "id_car": "62b0ba0be023cf8d212ad608",
        "id_rental": "<rentalId>",
        "final_value": "200",
        "_id": "62b29ca6088a82cd83d47cc4"
    }
 ```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Update a Reserve by ID</summary>
<br>

### Request

`PATCH`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/reserve/:id

 ```json
    {
        "date_start": "13/11/2021",
        "date_end": "15/11/2021",
    }
 ```
    
### Response

`Status: 200 OK`
```json
{
    "id_user": "62b1d6e27b943caf405128d1",
    "date_start": "13/11/2021",
    "date_end": "15/11/2021",
    "id_car": "62b0ba0be023cf8d212ad608",
    "id_rental": "<rentalId>",
    "final_value": "200",
    "_id": "62b29ca6088a82cd83d47cc4"
}
```
    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>

<details>
<summary>Delete a Reserve by ID</summary>
<br>

### Request

`DELETE`

    https://renpassuol.herokuapp.com/api/v1/rental/:rentalId/Reserve/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```json
{
    "Error": "error message"
}
 ```
</details>


## Licence

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Renpass.UOL

