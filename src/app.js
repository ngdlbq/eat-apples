const app = new (require('koa'))();
const router = new (require('koa-router'))();
const convert = require('koa-convert');
const koaStatic = require('koa-static');
const path = require('path');

const PORT = 3000;

import fs from 'fs'
//import readFile from './utils/readFile'

// 由于koa-static目前不支持koa2
// 所以只能用koa-convert封装一下
app.use(convert(koaStatic(path.join(__dirname,'../public/dist'))))


// 读取文件
/*
const readFile = async (filename, encode='utf8') => {
	let file = '';
	try {
		file = await (new Promise((resolve, reject) => {
			fs.readFile(filename, encode, (err, data) => {
				if(err){
					reject(err);
				} else {
					resolve(data);
				} 
			})
		}));
	} catch(err) {
		console.log(err);
	}
	return file;
}
*/

router.get('/',(ctx,next) => {
	ctx.type = 'html';
	ctx.body = fs.createReadStream('./public/index.html');
});

router.get('/appleBasket/pickApple', (ctx, next) => {
	ctx.body = Math.floor(Math.random()*100);
	return;
})

app.use((ctx,next) => {
	router.routes()(ctx,next);
})

app.listen(PORT, err => {
	if(err) {
		console.log(err);
	} else {
		console.log(`正在监听${PORT}端口...`);
	}
})