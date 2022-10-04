# armino

# api End Points

## POST
### url: 
```

  locahost:4000/api/v1/auth/siginup
```
### body
raw json data
```
{
  "name":"Albert",
  "password":"12345",
  "email":"albert@sample.com"
}
```
response cookie/token

```
locahost:4000/api/v1/ayth/siginin

```
### body
raw json data
```
{
  "password":"12345",
  "email":"albert@sample.com"
}
```
response cookie/token

### url: 
```zsh
  locahost:4000/api/v1/admin/addproduct
```
### header
paste below token or login as admin so cookie will store you as an admin
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI2MGY3YjJhYzg5ODdjODEzMTI2YWQ0YTUiLCJpYXQiOjE2MjcwMzk0MjMsImV4cCI6MTYyNzA0NjYyMywiaXNzIjoic3RhY2todWJNYXNjIn0.DBuUJYYpr3gkTxDwHGGwqM-U0htZQZ9K6QTSa4DoTT0
```
### body
raw json data
```
{
    "title":"wildcraft",
    "price":1500,
    "productType":"Bag"

}
```


### url: 
```zsh
  locahost:4000/api/v1/user/addtocart
```
### header
paste below token or login as user so cookie will store you as an user
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI2MGY3YjJhYzg5ODdjODEzMTI2YWQ0YTUiLCJpYXQiOjE2MjcwMzk0MjMsImV4cCI6MTYyNzA0NjYyMywiaXNzIjoic3RhY2todWJNYXNjIn0.DBuUJYYpr3gkTxDwHGGwqM-U0htZQZ9K6QTSa4DoTT0
```
### body
raw json data
```
{
    "productId":"633bf3e29e49c6f07b235eda",
    "price":1500,
    "quntity":2,
    "productType":"Bag"

}
```

## Get
### url:
```
localhost:4000/api/v1/user/cart
```
### header
paste below token or login as user so cookie will store you as an user
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiI2MGY3YjJhYzg5ODdjODEzMTI2YWQ0YTUiLCJpYXQiOjE2MjcwMzk0MjMsImV4cCI6MTYyNzA0NjYyMywiaXNzIjoic3RhY2todWJNYXNjIn0.DBuUJYYpr3gkTxDwHGGwqM-U0htZQZ9K6QTSa4DoTT0
```
```
responce
{
    "cartThing": [
        {
            "_id": "633be4183710e60583e638c9",
            "productId": "633bdfca1217f91efc691eec",
            "quntity": 5,
            "totalPrice": 150,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf07eb2a2a4a58cd3ecf1",
            "productId": "633bf032b2a2a4a58cd3ecee",
            "quntity": 6,
            "totalPrice": 600,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf09f59b29f8539d909e4",
            "productId": "633bf032b2a2a4a58cd3ecee",
            "quntity": 6,
            "totalPrice": 600,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf0c29a336d9a8bab4e22",
            "productId": "633bf032b2a2a4a58cd3ecee",
            "quntity": 6,
            "totalPrice": 600,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf1139e49c6f07b235ed3",
            "productId": "633bf032b2a2a4a58cd3ecee",
            "quntity": 6,
            "totalPrice": 564,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf36a9e49c6f07b235ed8",
            "productId": "633bf34b9e49c6f07b235ed5",
            "quntity": 15,
            "totalPrice": 3650,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8ca9d96320c27e99181",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8cd9d96320c27e99184",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8ce9d96320c27e99187",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8d09d96320c27e9918a",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8d09d96320c27e9918d",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        },
        {
            "_id": "633bf8d19d96320c27e99190",
            "productId": "633bf3e29e49c6f07b235eda",
            "quntity": 2,
            "totalPrice": 3000,
            "userId": "633bd3f71c81d26c41fcbfe8",
            "__v": 0
        }
    ],
    "Total": 24164,
    "promoCode": "PRIME123",
    "discount": 123,
    "PayAmount": 24041
}
```
