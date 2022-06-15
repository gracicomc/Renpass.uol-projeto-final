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
```
14.18.0
```
### NPM version:
```
6.14.15
```
### Dependencies:
```
    "@joi/date": "^2.1.0",
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "joi": "^17.6.0",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.3",
    "mongoose": "^6.3.5",
    "mongoose-paginate-v2": "^1.6.3",
    "mongoose-unique-validator": "^3.1.0",
    "morgan": "^1.10.0",
    "supertest": "^6.2.3",
    "swagger-ui-express": "^4.4.0"

```

### devDependencies:
```
    "eslint": "^8.17.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-promise": "^6.0.0",
    "jest": "^28.1.0",
    "nodemon": "^2.0.16",
    "prettier": "^2.7.0",
    "prettier-eslint-cli": "^6.0.1"
```

### Frameworks:
```
"express": "^4.18.1"
```

<h1 align=> 🖌️ API authors: </h1>

### 👩🏾‍💻Graciela Beatriz - [Profile Link](https://github.com/gracicomc)
</br>

<h1> 👣 Steps to run the code: </h1>

### 1️⃣ - First install dependencies

    npm install

### 2️⃣ - Run server

    npm run dev

### 3️⃣ - (opitional) Insert values into the database

    You can use the demos.md file to insert values on postman 

### 4️⃣ - Bearer Authentication

    For use all endpoints its necessary to create a person and then authenticate it on Authenticate POST endpoint. Use the generated token in Headers and add "Bearer" before paste the token.

<h1 align> 📁 Car Endpoints: </h1>

<details open>
<summary>Create Car</summary>
<br>

### Request

`POST`

    http://localhost:3000/api/v1/car/ 
    
    
```
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

 ```
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
 ```
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

    http://localhost:3000/api/v1/car/

`You can customize the pagination using query parameters`

```
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/car/:id
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/car/:id

 ```
{
     "color": "verde"
}
 ```
    
### Response

`Status: 200 OK`
```

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
 ```
{
    "Error": "error message"
}
 ```
</details>

### Request

`PATCH`

    http://localhost:3000/api/v1/car/:id/accessories/:accessoriesId

 ```
{
     "description": "Câmbio Automático"
}
 ```
    
### Response

`Status: 200 OK`
```

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
 ```
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

    http://localhost:3000/api/v1/car/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```
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

    http://localhost:3000/api/v1/person/ 
    
    
```
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

 ```
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
 ```
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

    http://localhost:3000/api/v1/person/

`You can customize the pagination using query parameters`

```
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/person/:id
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/person/:id

 ```
{
     "name": "João Lopes Gomes"
}
 ```
    
### Response

`Status: 200 OK`
```
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
 ```
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

    http://localhost:3000/api/v1/person/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```
{
    "Error": "error message"
}
 ```
</details>

<h1 align> 📁 Authenticate Endpoints: </h1>

<details>
<summary>Auth</summary>
<br>

### Request

`POST`

    http://localhost:3000/api/v1/authenticate/ 
    
    
```
//req body example
    {
        "email": "joazinho@email.com",
        "password": "123456"
    }
``` 
### Response

`Status: 201 Created`

 ```
{
    "email": "joazinho@email.com",
    "canDrive": "yes",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWQ1MWNjOWE3OGM0MTRlN2NhYjZmNSIsImlhdCI6MTY1NDQ4ODc2NCwiZXhwIjoxNjU0NTc1MTY0fQ.7OM35NEznykrb4KwYpDhTJAY7fPhXCXaMV5xKH3g3cs"
}

 ```
#### ❗ That's the token you must copy and paste in Headers of requisition
    
    
`Status: 400 Bad Request`
 ```
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

    http://localhost:3000/api/v1/rental/ 
    
    
```
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

 ```
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
 ```
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

    http://localhost:3000/api/v1/rental/

`You can customize the pagination using query parameters`

```
example:
page: 2
perPage: 5
``` 
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/rental/:id
    
### Response

`Status: 200 OK`

 ```
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
 ```
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

    http://localhost:3000/api/v1/rental/:id

 ```
{
     "name": "Localiza"
}
 ```
    
### Response

`Status: 200 OK`
```
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
 ```
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

    http://localhost:3000/api/v1/rental/:id
    
### Response

`Status: 204 No Content`

    
`Status: 400 Bad Request`
 ```
{
    "Error": "error message"
}
 ```
</details>


## Licence

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Renpass.UOL

