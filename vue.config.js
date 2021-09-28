module.exports={
    pages:{
        index:{
            entry:'src/main.js'
        }
    },
    lintOnSave:false,
    devServer:{
        // proxy:'http://localhost:5000'
        proxy:{
            '/dong':{
                target:'http://localhost:5000',
                changeOrigin:true,
                pathRewrite:{'^/dong':''}
            }
        }
    },
    publicPath: './'
}