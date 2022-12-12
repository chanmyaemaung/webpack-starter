const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	mode: 'production', // အကယ်၍ Dev State ဆိုရင် development အနေဖြင့်ထားပြီး Production ဆိုရင် production ပြောင်းရမည်။
	entry: {
		bundle: path.resolve(__dirname, 'src/index.js'), // လက်ရှိကိုယ်အသုံးပြုမယ့် အဓိက Javascript ရေးသားမည့်နေရာညွှန်ပြခြင်း
	},
	output: {
		path: path.resolve(__dirname, 'dist'), // Project Build လုပ်တာနဲ့ Project ထုတ်ပြမည့်နေရာ သတ်မှတ်ခြင်း
		filename: '[name].[contenthash].js', // javascript ဖိုင်အမည်အား ကျပန်းအမည်ဖြင့် သတ်မှတ်ခြင်း
		clean: true, // Project Build သည့်အခါတိုင်း ဖိုင်များထပ်တလဲလဲ ဖန်တီးမှုဖြစ်ခြင်းမှ ကာကွယ်ဖို့သတ်မှတ်ခြင်း
		assetModuleFilename: '[name][ext]', // Images ဖိုင်တွေအတွက် အမည်နှင့် Extension သတ်မှတ်ခြင်း
	},
	devtool: 'source-map', // Debugging ပြုလုပ်ဖို့အတွက် သတ်မှတ်ခြင်း
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		port: 3000, // ကိုယ်ပိုင် Port သတ်မှတ်ခြင်း။ ပုံမှန်အားဖြင့် Port 8080 ဖြင့်သတ်မှတ်သည်။
		open: true, // Browser မှာ တန်းဖွင့်အတွက် သတ်မှတ်ခြင်း
		hot: true, // တစ်ခုခုချိန်းပြောင်းတိုင်း သက်ဝင်လှုပ်ရှားစေဖို့ သတ်မှတ်ခြင်း
		compress: true, // GZip အတွက် သတ်မှတ်ခြင်း
		historyApiFallback: true,
	}, // ကိုယ်ပိုင် Dev Server တစ်ခုတည်ဆောက်ခြင်း
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}, // CSS နှင့် Sass အတွက်အသုံးပြုဖို့
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			}, // Old Browser တွေအတွက် အဆင်ပြေပြေ ကိုက်ညီနိုင်အောင် အသုံးပြုဖို့
			{
				test: /\.png|svg|jpg|jpeg|gif$/i,
				type: 'asset/resource',
			}, // Image Assets ဖိုင်အသုံးပြုဖို့ သတ်မှတ်ခြင်း
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			title: 'Webpack App Starter',
			filename: 'index.html',
			template: 'src/template.html',
		}), // HTML Template အဖြစ် အသုံးပြုဖို့
		// new BundleAnalyzerPlugin(), // Bundle Analyzer အသုံးပြုပြီး အသုံးပြုထားသမျှ ဖိုင်များကို ဆန်းစစ်နိုင်သည်။
	],
}
