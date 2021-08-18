const bodyParser = require('body-parser');
const grupos = require('./gruposRoute')
const herois = require('./heroisRoutes')

module.exports = app => {

    app.use(bodyParser.json());
    app.use(grupos)
    app.use(herois)

}