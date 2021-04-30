import React from 'react'
import GoogleMapreact from 'google-map-react'
import IconMarker from './IconMarker'

const Map = ({eventData,center,zoom}) => {

    const Markers = eventData.map(ev => {
        if(ev.categories[0].id === 8) {
            return <IconMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
        }
        return null
    })

    return (
        <div style={{width : '100vw' , height : '100vh'}}>
            <GoogleMapreact
            bootstrapURLKeys={{key : "AIzaSyAv8a_bU5t_yA8qnvUrZZpvZkX1EHdEfs0"}}
            defaultZoom = {zoom}
            defaultCenter = {center}
            >
                {Markers}
            </GoogleMapreact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
      },
      zoom: 8
}

export default Map
