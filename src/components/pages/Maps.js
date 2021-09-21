import React from 'react'
import GoogleMapReact from 'google-map-react'

import mapLogo from '../../imgs/map-logo.png'

const AnyReactComponent = ({ text }) => (
  <div>
    <img src={mapLogo} alt='logo' />
    {text}
  </div>
)

const Maps = (props) => {
  const defaultMapOptions = {
    fullscreenControl: false,
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '250px', width: '400px', color: 'white' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAwww52K1ZbqhJ8Jd9kNP4MgevdD_guo7I' }}
        defaultCenter={{ lat: 48.10984, lng: 11.72035 }}
        defaultZoom={16}
        options={defaultMapOptions}
      >
        <AnyReactComponent
          lat={48.10984}
          lng={11.72035}
          text='Ambulante Pflegediens Andrea Schmailzl'
        />
      </GoogleMapReact>
    </div>
  )
}

export default Maps

/*const Maps = (props) => {
  return (
    <div className='maps' style={{ maxHeight: '250px' }}>
      <Map
        style={style}
        google={window.google}
        initialCenter={{ lat: 48.10984, lng: 11.72035 }}
        zoom={16}
      >
        <Marker
          name={'Ambulante Pflegedienst'}
          title={'radil'}
          position={{ lat: 48.10984, lng: 11.72035 }}
        />

        <InfoWindow>
          <h1>Pokusaj</h1>
        </InfoWindow>
      </Map>
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAwww52K1ZbqhJ8Jd9kNP4MgevdD_guo7I',
})(Maps)

const style = {
  maxWidth: 400,
  maxHeight: 250,
  borderRadius: 10,
  position: 'inherit',
}*/
