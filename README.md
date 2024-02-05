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

to center a container 
```
<div class="container mx-auto">
  <!-- ... -->
</div>
```
or 


tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
    },
  },
}
```

for padding 

tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      padding: '2rem',
    },
  },
}
```

for each of container padding

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
};
```
#width

![8](https://raw.githubusercontent.com/Mostafaiz/tailwind2024/main/Screenshot%202024-02-02%20185827.png).

اگر یک سایز جدید بخواهیم به بالایی ها اضافه کنیم باید آن را در extend بنویسیم ، اگر خارج از extend بنویسیم ، فقط سایز جدید ما کار خواهد کرد ، سایز ها پیش فرض غیر فعال خواند شد . 

#flex 
```
<body class="bg-gray-500">
<div class="container h-full bg-gray-100">
    <class class="flex gap-4 p-4 bg-green-200">
        <div class="flex-1 bg-red-100">1</div>
        <div class="flex-1 bg-green-500">2</div>
        <div class="flex-1 bg-yellow-500">3</div>
        <div class="flex-1 bg-green-800">4</div>
    </class>
</div>
</body>
```
در کد بالا یک کانتینر داریم ، داخلش یک فلکس که گپ 4 داره و یک پدینگ 4 با چهار تا فلکس 1 
