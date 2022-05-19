# Backend Assessment

## Assumptions
- Assume cars are not owned by users or rented by users - no entity relationships required
- The information provided in the UI sketch will be sent from the client in a json formatted POST request body following the "Cars" entity naming conventions

***EXAMPLE REQUEST:  POST to "http://localhost:8889/cars"***
```
{
    "vin": "WP1AC29P65LA91996",
    "licensePlateNum": "585JNQ",
    "registrationNum": "5555555",
    "registrationState": "CA",
    "registrationExpiration": "12/25/2023",
    "registrationName": "John Smith",
    "currentValue": 100000,
    "currentMileage": 25000,
    "description": "This is the description",
    "color": "black"
}
```
- Only the make, model, and year are required values from VIN decoding
- Client-side will have acess to a list of cars with associated ID's stored in state in order READ, UPDATE, or DELETE car resources using a URL param equal to the car id (to see the current list of all cars in this application, use a GET request to ".../cars")

***EXAMPLE REQUEST: GET to "http://localhost:8889/cars/012d1cf5-9e3c-4853-a756-57f0ffcc8c67" would return***
```
{
    "id": "012d1cf5-9e3c-4853-a756-57f0ffcc8c67",
    "vin": "WP1AC29P65LA91996",
    "make": "PORSCHE",
    "model": "Cayenne",
    "year": 2005,
    "licensePlateNum": "585JNQ",
    "registrationNum": "5555555",
    "registrationState": "CA",
    "registrationExpiration": "12/25/2023",
    "registrationName": "John Smith",
    "currentValue": 100000,
    "currentMileage": 25000,
    "description": "This is the description",
    "color": "black"
}
```

- On PATCH request, client-side will not allow user to modify vin, make, model, or year for given car resource - Regardless, they are set as fixed values in the database

## Server steps
- Fork and clone this repository
- Requires Docker
- Requires npm or yarn
- Install dependencies using ```npm install``` or ```yarn install``` from the project root directory
- Bring up database in docker container using ```docker compose up``` in the project root directory (Exposes database on ***port 3306***)
- Bring up server in development mode using ```npm run dev``` or ```yarn dev``` in the project root directory (exposes express app on ***port 8889***)