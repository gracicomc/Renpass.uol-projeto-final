## Create Car
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
    },
    {
      "description": "Dir. Hidráulica"
    }
  ],
  "passengersQtd": 5
}
```

```
{
  "model": "Uno",
  "type": "sport",
  "brand": "Fiat",
  "color": "azul",
  "year": "2017",
  "accessories": [
    {
      "description": "Ar-condicionado"
    },
    {
      "description": "Dir. Hidráulica"
    },
    {
      "description": "Câmbio Automático"
    }
  ],
  "passengersQtd": 4
}
```

```
{
  "model": "Civic",
  "type": "sedan",
  "brand": "Honda",
  "color": "prata",
  "year": "2020",
  "accessories": [
    {
      "description": "Ar-condicionado"
    },
    {
      "description": "Dir. Hidráulica"
    },
    {
      "description": "Câmbio Automático"
    },
    {
      "description": "Air bag"
    },

  ],
  "passengersQtd": 4
}
```

## Create Person
```
{
  "name": "João Lopes",
  "cpf": "131.147.860-49",
  "birthDay": "03/03/1998",
  "email": "joazinho@email.com",
  "password": "123456",
  "canDrive": "yes"
}
```
```
{
  "name": "Maria Silva",
  "cpf": "677.667.070-63",
  "birthDay": "01/05/2004",
  "email": "mariazinha@email.com",
  "password": "123456",
  "canDrive": "yes"
}
```
```
{
  "name": "Marcos Silva",
  "cpf": "738.539.450-74",
  "birthDay": "10/09/2002",
  "email": "marquinhos@email.com",
  "password": "123456",
  "canDrive": "yes"
}
```

## Authenticate
```
    {
        "email": "joazinho@email.com",
        "password": "123456"
    }
```
```
    {
        "email": "mariazinha@email.com",
        "password": "123456"
    }
```
```
    {
        "email": "marquinhos@email.com",
        "password": "123456"
    }
```

## Rental
```
    {
        "name": "Localiza",
        "cnpj": "40.764.224/0001-94",
        "activities": "Rent cars",
        "address": [
            {
                "zipCode": "96200-200",
                "number": 1234,
                "isFilial": false,
            }
        ]
    }
```
```
    {
        "name": "Carros Mania",
        "cnpj": "24.018.613/0001-14",
        "activities": "Alugo carros",
        "address": [
            {
                "zipCode": "26040-040",
                "number": 234,
                "isFilial": true,
            }
        ]
    }
```
```
    {
        "name": "Renpass",
        "cnpj": "25.067.769/0001-58",
        "activities": "Aluga carros",
        "address": [
            {
                "zipCode": "26115-420",
                "number": 893,
                "isFilial": true,
            }
        ]
    }
```



