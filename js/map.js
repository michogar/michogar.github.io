L.TileLayer.Common = L.TileLayer.extend({
	initialize: function (options) {
		L.TileLayer.prototype.initialize.call(this, this.url, options);
	}
});

function initMap() {

	map = new L.Map('map');

	var mqTilesAttr = 'Tiles &copy; <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png" />';
	
	L.TileLayer.MapQuestOpen = L.TileLayer.Common.extend({
		url: 'http://otile{s}.mqcdn.com/tiles/1.0.0/{type}/{z}/{x}/{y}.png',
		options: {
			subdomains: '1234',
			type: 'osm',
			attribution: 'Map data, ' + mqTilesAttr,
			minZoom: 2, 
			maxZoom: 16
		}
	});
	
	var myIcon = L.icon({
		 iconUrl: 'http://www.gravatar.com/avatar/9607e20d66433bc6f327524a8753603b.png',
		 iconSize: [70, 70],
		 className : 'img-rounded'
	});

	map.setView(new L.LatLng(43.16, -5.31),9);
	map.addLayer(new L.TileLayer.MapQuestOpen());
	
	var marker = new L.marker([43.16, -5.31], 
		{
			icon: myIcon,
			clickable : true,
		});
		
	marker.on('click', function(evt) {
		
	})
	
	marker.addOneTimeEventListener('mouseover', function(evt) {
		$('.leaflet-marker-icon').attr('src', 'img/one-momen.png');
	})
	
	
	marker.addOneTimeEventListener('mouseout', function(evt) {
		$('.leaflet-marker-icon').attr('src', 'http://www.gravatar.com/avatar/9607e20d66433bc6f327524a8753603b.png');
	})
		
	marker.addTo(map);
}
