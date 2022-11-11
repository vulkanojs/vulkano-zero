# Vulkano Zero

Vulkano Zero is a small, simple, and fast framework for creating web applications using NodeJS.

## Stack

- Node.js
- [Express](http://expressjs.com)
- [Mongoose](http://mongoosejs.com/)
- [Nunjucks](http://mozilla.github.io/nunjucks/) (Template Engine)
- [Nodemon](http://nodemon.io/) (Reload automatically for dev mode)
- [PM2](http://pm2.keymetrics.io/) (Deployment)
- [BrowserSync](https://www.browsersync.io/) (Time-saving synchronised browser testing)
- [WebPack](https://webpack.js.org/) (Bundle your scripts)

### System Requirements

- Unix
- Node.js v18+

## Quick start

- Clone from https://github.com/vulkanojs/vulkano-zero
- Run `npm install` as usual to install dependencies
- Run `npm run dev` to start working


## NPM preset tasks

| Command                         | Description                               |
| :------------------------------	| :---------------------------------------- |
| `npm run dev`                   | Run development server and watch changes	|
| `npm run start`                 | Start server                              |
| `npm run webpack`               | Start webpack (js, sass, and  browsersync)|
| `npm run build`                 | Task to buils assets in production mode   |
| `npm run deploy:pi`             | Deploy to Raspberry Pi via PM2            |


## Project Structure

- `app/` - Your backend application, this is where you work.
- `client/` - Your JS and CSS sources
- `core/` - Vulkano Zero heart (hack it if you want)
- `public/` - HTTP Public folder. Compiled assets goes here too.
- `Procfile` - Heroku entry point
- `README.md` - This file
- `app.js` - Server entry point
- `nodemon.json` - Nodemon configuration file
