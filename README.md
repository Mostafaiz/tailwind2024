# tailwind2024

```
npm install -D tailwindcss
npx tailwindcss init

```


tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


src/input.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


terminal
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

src/index.html
```
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
```


#cointainer 

![8](https://raw.githubusercontent.com/Mostafaiz/tailwind2024/main/Screenshot%202024-02-01%20200213.png).
