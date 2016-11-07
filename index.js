var request = require('request');

var url = 'https://qa-switchhero-domain-green.apps-np.homedepot.com/features/search/findByApplicationNameAndFeatureName?applicationName=SwitchHeroUI&featureName=hiddenEndpoint';

exports.isFeatureEnabled = function(callback) {

  request(url, function(err, response, body) {
    if (!err && response.statusCode == 200) {
      var feature = JSON.parse(response.body);
      callback(feature.isActive === 'y');
    } else {
      callback(false);
    }
  });
}
