const ClearPlugin = require('webpack-clean-plugin')

module.exports = {
    mode: 'production',
    plugins: [
        new ClearPlugin()
    ]
}