/** @type {import('tailwindcss').Config} */


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  


    ],
    
    theme: {
        extend: {
            colors: {
                'gray-color': '#424242'
            },
        },
    },
    
    plugins: [
        require('@tailwindcss/line-clamp'),
        // other plugins...
      ],

}
