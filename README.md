# introduction-to-React

In this course I will follow the following React course : https://www.youtube.com/watch?v=Bvwq_S0n2pk&ab_channel=freeCodeCamp.org
From this github repo : https://github.com/hiteshchoudhary/react-english/tree/main


To preview a page :

    - Firstly I have to create the vite project by using the command npm create vite@latest
    - Then install the node_modules by hitting the following command : npm i 

    - Pour installer tailwind : 
npm install -D tailwindcss postcss autoprefixer
    then
npx tailwindcss init -p

Modifier le tailwind.config.js file plus spécifiquement la partie de content suivante : 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

Add the following directives at the beginning of the index.css file : 

@tailwind base;
@tailwind components;
@tailwind utilities;



Then I have to build the project, check in package.json for the specific scripts but in general it should be : npm run dev
Then I can preview by clicking on the localhost 