var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm for html files
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
    entry:  {
        app:'./src/js/index.js'
    },

    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'build'),//المسار الذي سنضع فيه الملفات في الهدف
        filename: 'js/bundle.js',//سيُنشىء مجلد ويضع بداخله ملفات جافا سكريبت كاملةً
    },

    module: {
        rules: [

            { //ملفات التنسيق ويوجد لهم كمالة في الأسفل
                test: /\.css$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '/' 
                    }
                  },
                  'css-loader'
                ],
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "images",
                    }
                  }
                ]
              },
        
              {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                  {
                    loader: "file-loader", 
                    options: {
                      name: '[name].[ext]',
                      outputPath: "fonts",
                      esModule: false,
                    }
                  }
                ]
              },
            
            {// html ملفات الصور والفيديو التي نستدعيها من ملفات ال
                test: /\.html$/,
                loader: 'html-loader',
            },

            // {//jquery
            //     test: require.resolve('jquery'),
            //     use: [
            //         {
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //       },{
            //         loader: 'expose-loader',
            //         options: '$'
            //       }
            //     ]
            // }

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                  exposes: ['$', 'jQuery'],
                },
              },

        ]
    },

    devServer: {//إعدادات الخادم
        contentBase: path.join(__dirname, "build"),
        // open: true, //لفتح المشروع بشكل تلقائي في المتصفح
        writeToDisk: true, //build لإنشاء مجلد ال
        stats: 'errors-only', //فقط أظهر الأخطاء
        //compress: true,
        //overlay: true
    },

    plugins: [ //html files
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/projects.html',
            filename: 'projects.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/project-details.html',
            filename: 'project-details.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/contact.html',
            filename: 'contact.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/blog.html',
            filename: 'blog.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/blog-details.html',
            filename: 'blog-details.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/add-blog.html',
            filename: 'add-blog.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['app']
        }),
        new MiniCssExtractPlugin({ //كمالة ملفات التنسيق
            filename: 'css/style.css',//لازم نعمل إمبورت للملف بداخل ملف جافا سكريبت الرئيسي
        }),
    ],
};