L.TileLayer.Common = L.TileLayer.extend({
	initialize: function (options) {
		L.TileLayer.prototype.initialize.call(this, this.url, options);
	}
});

function initMap() {

	map = new L.Map('map');

	var mqTilesAttr = 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />';
	
	console.log(L.TileLayer);
	L.TileLayer.MapQuestOpen = L.TileLayer.Common.extend({
		url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png',
		options: {
			subdomains: '1234',
			type: 'osm',
			attribution: 'Map data, ' + mqTilesAttr,
			minZoom: 8, 
			maxZoom: 12
		}
	});		

	map.setView(new L.LatLng(42.15, -8.43),9);
	map.addLayer(new L.TileLayer.MapQuestOpen());
}
