// const locations = JSON.parse(document.getElementById('map').dataset.locations);
// const displayMap = (locations) => {
//   mapboxgl.accessToken =
//     'pk.eyJ1IjoiZWxkaW4zMCIsImEiOiJjbDhxeDRvOHgxZXduM29vNXBoZnozamJrIn0.OFkWYiwbRBPcGAyYWjsY-g';
//   var map = new mapboxgl.Map({
//     container: 'map',
//     style: 'mapbox://styles/eldin30/cl8qxxcrx003w15lglhj5rrsu',
//     scrollZoom: false,
//   });

//   const bounds = new mapboxgl.LngLatBounds();
//   locations.forEach((loc) => {
//     //create marker
//     const el = document.createElement('div');
//     el.className = 'marker'; //dodamo markeru klasu koju smo definisali u css-u
//     //Add marker
//     new mapboxgl.Marker({
//       element: el,
//       anchor: 'bottom', //da donji dio elementa bude na lokaciji
//     })
//       .setLngLat(loc.coordinates)
//       .addTo(map); //coordinates su property u nasim tours documentima
//     //Add popup
//     new mapboxgl.Popup({
//       offset: 30,
//     })
//       .setLngLat(loc.coordinates)
//       .setHTML(`<p>Day ${loc.day}: ${loc.description} `)
//       .addTo(map);
//     //Extend map bounds
//     bounds.extend(loc.coordinates);
//   });
//   map.fitBounds(bounds, {
//     padding: {
//       top: 200,
//       left: 100,
//       right: 100,
//       bottom: 150,
//     },
//   });
// };
// const mapBox = document.getElementById('map');

// if (mapBox) {
//   const locations = JSON.parse(mapBox.dataset.locations);
//   displayMap(locations);
// }

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZWxkaW4zMCIsImEiOiJjbDhxeDRvOHgxZXduM29vNXBoZnozamJrIn0.OFkWYiwbRBPcGAyYWjsY-g';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/eldin30/cl8qxxcrx003w15lglhj5rrsu',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();
  locations.forEach((loc) => {
    //create marker
    const el = document.createElement('div');
    el.className = 'marker'; //dodamo markeru klasu koju smo definisali u css-u
    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom', //da donji dio elementa bude na lokaciji
    })
      .setLngLat(loc.coordinates)
      .addTo(map); //coordinates su property u nasim tours documentima
    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description} `)
      .addTo(map);
    //Extend map bounds
    bounds.extend(loc.coordinates);
  });
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      left: 100,
      right: 100,
      bottom: 150,
    },
  });
};
const mapBox = document.getElementById('map');

if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}
