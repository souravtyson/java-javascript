const express = require('express')
var http = require('http');
const app = express()
const port = 3000


app.get('/', (req, res) => {

    var options = {
        host: '192.168.13.122',
        port: 8990,
        path: '/heal-ui-service/v2.0/ui/accounts/heal_health/application-health?fromTime=1685362083822&toTime=1685362083822',
        method: 'GET',
        headers: {}
      };

    var httpreq = http.request(options, function (response) {

        response.on('data', function (chunk) {
          console.log("body: " + chunk);
        });
        response.on('end', function() {
          res.send('ok');
        })
      });

      httpreq.write(data);
      httpreq.end();

    res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})