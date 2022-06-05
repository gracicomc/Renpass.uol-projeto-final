<h1 align="center">Final Chalenge 💥 - Repass.UOL 🚙</h1> 

<h2 align="center"> API for renting luxury and semi-luxury cars </h2>
</br>
<p align="center">
 <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
 <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
</p>

> Status: ⏳ Developing

<h1 align> 🔍 Some informations about the project: </h1>

### Node version:
```
14.18.0
```
### NPM version:
```
6.14.15
```
### Libs:
```
"@joi/date": "^2.1.0",
"eslint": "^8.16.0",
"nodemon": "^2.0.16"
"dotenv": "^16.0.1",
"joi": "^17.6.0",
"mongoose": "^6.3.4",
"mongoose-paginate-v2": "^1.6.3",
```
### Frameworks:
```
"express": "^4.18.1"
```

<h1 align=> 🖌️ API authors: </h1>

* **Graciela Beatriz** - [Link do perfil](https://github.com/gracicomc)

<h1> 👣 Steps to run the code: </h1>

### 1️⃣ - First install dependencies

    npm install

### 2️⃣ - Run server

    npm run dev

### 3️⃣ - (opitional) Insert values into the database

    You can use the demos.md file to insert values on postman 

<h1 align> 📁 Car Endpoints: </h1>

## Create a Car

### Request

`POST`

    http://localhost:3000/api/v1/car/ 
    
    
```
//req body example
{
    "model": "S10 2.8",
    "type": "Sedan",
    "brand": "GM",
    "color": "branco",
    "year": "2000",
    "accessories": [
        {
            "description": "Ar-condicionado"
        }

    ],
    "passengersQtd": 5
}
``` 
    
### Response

`Status: 201 Created`

 ```
 {
    "_id": "629cb11c1ebb5c9b5112b4d6",
    "model": "S10 2.8",
    "type": "Sedan",
    "brand": "GM",
    "color": "branco",
    "year": "2000",
    "accessories": [
        {
            "description": "Ar-condicionado"
        }

    ],
    "passengersQtd": 5
}
 ```
    
    
`Status: 400 Bad Request`
 ```
 {
"message": "Bad Request",
"details": [
    {
      "message": "error message",
    }
  ]
 ```


## Licence

The [MIT License]() (MIT)

Copyright :copyright: 2022 - Renpass.UOL

