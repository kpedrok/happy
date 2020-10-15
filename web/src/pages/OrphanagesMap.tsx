import 'leaflet';
import 'leaflet/dist/leaflet.css';
import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import mapMarkerImg from '../images/map-marker.svg';
import '../styles/pages/orphanage-map.css';

function OrphanageMap() {
  return (

    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha uma orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Gravataí</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map center={[-29.9419126, -51.0018232]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKE}`} />

      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  )
}

export default OrphanageMap;