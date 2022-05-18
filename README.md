# Backend Assessment

## Assumptions
- The information provided in the UI sketch will be sent from the client in a json formatted POST request body following the "Cars" entity naming conventions
- Client-side will have acess to a list of cars with associated ID's stored in state in order READ, UPDATE, or DELETE car resources using a URL param equal to the car id
- On PATCH request, client-side will not allow user to modify vin, make, model, or year for given car resource. Regardless, they are set as fixed values in the database

## Server steps
- Fork and clone this repository
- 
- Docker container spun up using ```docker compose up```

