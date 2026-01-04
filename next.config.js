module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname:"**"
      },
      {
        protocol: "https",
        hostname:"rb.gy",
        pathname: "**"
      }
    ],
  },
};
  
//remotePatterns: ["i.imgur.com","https://i.imgur.com/","https://rb.gy","rb.gy"]