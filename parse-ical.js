module.exports = function(RED) {
	var ical = require('node-ical');

    function ParseICAL(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {		
			ical.fromURL(msg.payload, {}, function(err, data) {
				for (var k in data){
					if (data.hasOwnProperty(k)) {
						msg.payload = data[k];
						node.send(msg);
					}
				}
			});
        });
    }
    RED.nodes.registerType("parse-ical", ParseICAL);
}