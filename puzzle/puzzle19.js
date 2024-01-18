const express = require('express');
const axios = require('axios');
const https = require('https');

const app = express();

const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  });

app.get('/', (req, res) => {

  axios.get('https://192.168.13.122:8990/heal-ui-service/v2.0/ui/accounts/heal_health/application-health?fromTime=1685362083822&toTime=1685362083822', {
    httpsAgent: httpsAgent,
    headers: { 
        'Authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJYeldqTWZBV25zaGpGUHFWcDdiRWNjMkZ2b0d4TDBCSjhzMnVhazFUUWd3In0.eyJleHAiOjE2ODUzNjY0MjMsImlhdCI6MTY4NTM2MzcyMywiYXV0aF90aW1lIjoxNjg1MzU1MTMyLCJqdGkiOiI4YmZiNjM0OS00Y2VmLTRkN2QtYWM1MC0zYzhjNDUyM2I5ZmUiLCJpc3MiOiJodHRwczovLzE5Mi4xNjguMTMuMTIxOjg0NDMvYXV0aC9yZWFsbXMvbWFzdGVyIiwiYXVkIjpbImdyYWZhbmEtc3NvIiwibWFzdGVyLXJlYWxtIiwiYWNjb3VudCJdLCJzdWIiOiI3NjQwMTIzYS1mYmRlLTRmZTUtOTgxMi01ODFjZDFlM2E5YzEiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhcHBzb25lLXNzbyIsIm5vbmNlIjoiNWE2Y2FlMzgtNjZmMS00NDM4LWFkOTctMzg5NWRjNWE2ZjUzIiwic2Vzc2lvbl9zdGF0ZSI6IjI5NDFmZjA5LWJhYzMtNDk4ZC04ZDU0LTI1ODUzMWFjZTFmNiIsImFjciI6IjAiLCJhbGxvd2VkLW9yaWdpbnMiOlsiKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiY3JlYXRlLXJlYWxtIiwib2ZmbGluZV9hY2Nlc3MiLCJhZG1pbiIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZ3JhZmFuYS1zc28iOnsicm9sZXMiOlsiQWRtaW4iXX0sIm1hc3Rlci1yZWFsbSI6eyJyb2xlcyI6WyJ2aWV3LXJlYWxtIiwidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJtYW5hZ2UtaWRlbnRpdHktcHJvdmlkZXJzIiwiaW1wZXJzb25hdGlvbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiYXBwc29uZWFkbWluIiwiZW1haWwiOiJhcHBzb25lYWRtaW4ua0BhcHBub21pYy5jb20ifQ.RhusfO5SPTCysTKJos1vTMITEULsc69Nxq_cRY3hawZRoLjdZjqasq7y7V2eBFpRa-2Zsj9ozUv2bEDTi66D9v0oRu-qFELtG1L-GMn_Vd_WCIIRoFIjo60mSPELL45Il_Tib3jyWMBDLUXRdJ4Pgi4sLPmHqcgOsplNJqj42WU6RaIVLtWs5dR3xFwUslKW9Oecm7LpO8RB4ByT_jxLvzp3cbMxD-VRGoL18LVGKhSNiitxScgsbhJO7TDqQNKmUHt1WtZTc-asZe-aZ4vBGFShvyZbEPPn6P1X8Jtx7EgeVDHLnvICofcMZbZqC2t9iDf-36VyWLK272hKDUl66A',
        'Origin': 'https://192.168.13.122:8990'
    }
  })
    .then(response => {
      // Handle the response from the third-party API
      res.json(response.data);
    })
    .catch(error => {
        console.log(error);
      // Handle any errors that occur during the request
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
