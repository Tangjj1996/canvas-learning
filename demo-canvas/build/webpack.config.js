const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const dev = require('./webpack.dev.config')
const prod = require('./webpack.prod.config')

const config = process.env.NODE_ENV === 'development' ? dev : prod

module.exports = merge(base, config)