module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1920px':'1920px',
        '1030px': '1030px',
        '353px': '353px'
      },
      screens:{
        "xs": "323.98px",
         "smx": "575.98px",
         "mdx": "767.98px",
         "lgx": "991.98px",
         "xlx": "1199.98px",
         "2xlx": "1599.98px"
      }
    },
  },
  plugins: [],
}
