# What is Javascript : 

 - Js is a single threaded scripting language 
 - Case sensitive 
 - Light Weight (It can run anywhere) 
 - Dynamic language , server side language 
 - Synchoronous 
 - Loosely typed (Dynamic) - Data type is not a restriction 

 # MULTI - PARADIGM
 - Does it have classes ? Yes
 - Does it have functions ? Yes 
 - Is it a modular prog. lang ? Yes
 

 **The full form of md is mark-down**

 # Ways to add js 

 ## Inline - 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Web Fundamentals </h2>
    <button onclick="alert('Hello again')">Click me</button> 
</body>
</html>
```

## Internal - 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Web Fundamentals </h2>
    <!-- <button onclick="alert('Hello again')">Click me</button>  -->
    <script>
        console.log('Hey Everyone !!')
    </script>
</body>
</html>
```

## External - 

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Web Fundamentals </h2>
    <!-- <button onclick="alert('Hello again')">Click me</button>  -->
    <!-- <script>
        console.log('Hey Everyone !!')
    </script> -->
    <script src="script.js"></script>
</body>
</html>
```

# developer tools 

- F12 
- CTRL + SHIFT + I / CMD + SHIFT + I
- Right click , open inspect 

# Consoling variable Vs string 
- If we console any value in the form of a string , the value is printed as it is :
```
console.log('my_name')
```
- If i dont pass any string in the console , then the value assigned in the variable will show up 

```
let my_name = "ritik"
my_name= 'ayush'
console.log(my_name);
```

# Datatypes 
- Number - A number , can be 12, 1000 . 
- Bigint - very very large numbers larger than 2^53 
- string - A collection of strings , Wrapped in "", '', ``
- boolean - It returns true(1) , false(0) 
- undefined - We create a variable , but don't define it . 
- Null - It means nothing 
- object - It is a key value pair . key is always a string . value can be anything 
- Symbol- It shows uniqueness  , like &,_$
 


# SESSION 2

