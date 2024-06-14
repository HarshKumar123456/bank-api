# bank-api
API for searching bank via branch name | Node.js, Express.js

## It was fun to develop this project in just 2 Hours

# How to run it locally

## Step 1:
First of all download zip file of this repo or clone it. 
<br>
## Step 2: 
Then go to the root of project where server.js is located run this command

```
npm install
npm run start 
```

## WooHoo !! Now you can acess it 



In this project I have used Node.js and Express.js to make a an API server,
<br>
which sends the details of the banks as per the branch name.
<br>
#### For example:
On accessing endpoint
```
http://localhost:8000/api/v1/bank/GWALIOR

```

it will show all the bank's details which contains the Gwalior in it,
<br>
in any casing(Upper case or Lower case or Combination of both) provided

<br>
<br>
<br>
<br>

#### In General API endpoint:
```
http://localhost:8000/api/v1/bank/<branchName>

```
<br>
<br>
Replace <branchName> by any branch name you want to try with and get the response in the format.
<br>
<br>

```
{
  "success": true,
  "message": "Got GWALIOR banks successfully....",
  "data": [
    {
      "ifsc": "ALLA0210260",
      "bank_id": 11,
      "branch": "GWALIOR",
      "address": "SANATAN DHARAM MANDIR MARG DIST. GWALIOR MADHYA PRADESH  474001",
      "city": "GWALIOR",
      "district": "GWALIOR",
      "state": "MADHYA PRADESH",
      "bank_name": "ALLAHABAD BANK"
    },
    {
      "ifsc": "ALLA0211608",
      "bank_id": 11,
      "branch": "GWALIOR GRANTH",
      "address": "GWALIOR GRANT PO DATAULI PO DATAULI GONDA UTTAR PRADESH",
      "city": "GONDA",
      "district": "GONDA",
      "state": "UTTAR PRADESH",
      "bank_name": "ALLAHABAD BANK"
    },
    ....
    ]
}
```
<br>
<br>

#### Otherwise it will give result as: 
<br>

```
{
  "success": true,
  "message": "Sorry!! page not found...."
}

```





