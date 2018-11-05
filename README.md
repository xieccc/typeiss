# typeiss.js
#### It can check all data types.
| Value               | typeiss.js|
| ---------           | ---------:|
| Undeclared variables| Undefined |
| undefined           | Undefined |
| Boolean             |   Boolean |
| Number              |    Number |
| String              |    String |
| Function            |  Function |
| Array               |     Array |
| Object              |    Object |
| Date                |      Date |
| RegExp              |    RegExp |
| Set                 |       Set |
| Map                 |       Map |
----
#### Installation
```npm install typeiss```

#### Usage
----
#####  In Node.js:
```const a = require('typeiss')```
##### In a browser:
```<script src="typeis.js"></script>```

#### Examples
----
```
typeiss(undefined) //return Undefined
typeiss(true)     //return Boolean
typeiss('string') //return String
···

typeiss(undefined,['Undefined'])   //return true
typeiss(true,['Boolean','Array'])  //return true
typeiss(true,['Array'])            //return false
typeiss('string',['String','Boolean','Array'])  //return true
typeiss('string',['Boolean','Array'])           //return false
```


