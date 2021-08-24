import { YMaps, Map, Placemark, Clusterer, MapStateBase, withYMaps } from 'react-yandex-maps';
import { event, placeData } from '../components/interfaces';
import React, { useMemo, useState, Ref, useEffect, useRef } from 'react';
import { location } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';
import { Link } from 'react-router-dom';
import { useIonRouter } from '@ionic/react';

interface MapComponentInt {
  place?: Array<number>,
  events?: Array<event>
}

const MapComponent: React.FC<MapComponentInt> = ({ place, events }) => {
  const router = useIonRouter();
  const [coords, setCoords] = useState<Array<number>>([]);
  const [zoom, setZoom] = useState(9)
  const mapState = useMemo(() => ({ center: place || [55.755696, 37.617306], zoom: zoom }), [
    coords,
  ])
  const [ref, setRef] = useState<Ref<any> | null>()
  useEffect(() => {
    const interval = setInterval(function () {
      let geo = Geolocation.getCurrentPosition().then((geo) => {
        if (geo?.coords) {
          setCoords([geo.coords.latitude, geo.coords.longitude])
        }
        console.log(geo);
        console.log(ref);
      }).catch((e) => { console.error(e) });
    }, 5000);

  }, [1])
  
  return (
    <YMaps>
      <Map
        style={{
          position: "fixed",
          top: 0,
          zIndex: -1,
          height: "100%",
          width: "100%"
        }} defaultState={mapState}
        instanceRef={ref => setRef(ref)}
        modules={["templateLayoutFactory", "layout.Image", "layout.ImageWithContent", "geocode"]}
      >
        <Placemark geometry={coords}
          modules={['geoObject.addon.balloon']}
          options={{
            iconLayout: 'default#image',
            iconImageHref: location,
            iconImageSize: [30, 42],
          }}
        />
        {
          events?.map((event, idx) => {
            if (event.geo) {
              return (
                <Placemark key={idx} geometry={[event.geo[0], event.geo[1]]} onClick={() => {
                  router.push("/event/" + event.id);
                }} />
              )
            }
          })
        }
      </Map>
    </YMaps>
  );
};

export default MapComponent;
