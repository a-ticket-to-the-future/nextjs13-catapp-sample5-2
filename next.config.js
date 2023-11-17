/** @type {import('next').NextConfig} */
const nextConfig = {

    // experimental: {
    //     experimentalServerComponents: false // Server Component の機能を無効にする
    //   }
    // 
    images :{
        domains :[
            "cdn2.thecatapi.com"
        ],

    },
    // experimental: {
    //     stream: false,
    //   },

    //   experimental: {
    //         console: true,
    //       },


}

module.exports = nextConfig



// npm run dev --no-experimental-features
