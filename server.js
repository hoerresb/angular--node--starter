const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json());
var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
};
  
app.use(cors(corsOptions))
app.listen(8000, () => {
    console.log('Server started!');
});


app.route('/api/accounts').get((req, res) => {
    res.send({
      accounts: [{ name: 'MyAccount1', defaultName: 'Schwab Brokerage', type: 'Brokerage', accountNumber: '...1234'}, { name: 'MyAccount2', defaultName: 'Schwab Brokerage', type: 'Brokerage', accountNumber: '...4321' }]
    });
});

app.route('/api/accounts/:name').get((req, res) => {
    const requestedAccountName = req.params['name'];
    res.send({ name: requestedAccountName });
});

app.route('/api/accounts').post((req, res) => {
    res.send(201, req.body);
});

app.route('/api/accounts/:name').put((req, res) => {
    res.send(200, req.body);
});

app.route('/api/accounts/:name').delete((req, res) => {
    res.sendStatus(204);
});