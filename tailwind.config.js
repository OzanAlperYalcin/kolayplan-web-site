/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arista: ["ARISTA-PRO", "cursive"]
      },
      // backgroundImage: {
      //   'schedules': "url('../assets/images/schedules.png')",
      // },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        pingSlow: "ping 3s linear infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}
