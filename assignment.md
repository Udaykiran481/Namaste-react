# Build your first Hello World program using
- Using just HTML  
- Using JS to manipulate the DOM  
- Using React  
  - use CDN Links  
  - Create an Element  
  - reate nested React Elements  
  - Use root.render

```html
- using just html 

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <div id="root">
        <h1>Hello World</h1>
    </div>
</body>
</html>
 
--using javascript

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
    <div id="root"></div>
    <script>
        const heading = document.createElement("h1");
        heading.innerHTML="hello world by javascript";
        const root=document.getElementById("root");
        root.appendChild(heading);
    </script>
</body>
</html>

--using react
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./index.css">
  </head>

  <body>
    <div id="root"></div>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
        const heading = React.createElement(
            "h1", //tagname
            {id:"heading",style:{color:'blue'}},//object=> attributes
            "Hello World From REACT!!" //=>children
            );
        console.log(heading);//provides object
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
    </script>
  </body>
</html>
