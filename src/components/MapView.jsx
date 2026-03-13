import { MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap } from "react-leaflet"
import { useState, useEffect } from "react"
import "leaflet/dist/leaflet.css"

import L from "leaflet"
import "leaflet-routing-machine"
import "leaflet-routing-machine/dist/leaflet-routing-machine.css"


function ChangeMapView({ center }) {
  const map = useMap()

  useEffect(() => {
    map.setView(center, 15)
  }, [center])

  return null
}


function LocationSelector({ setOrigin, setDestination }) {

  const [clickCount, setClickCount] = useState(0)

  useMapEvents({
    click(e) {

      if (clickCount === 0) {
        setOrigin([e.latlng.lat, e.latlng.lng])
        setClickCount(1)
      } else {
        setDestination([e.latlng.lat, e.latlng.lng])
        setClickCount(0)
      }

    }
  })

  return null
}


function Routing({ origin, destination, setSteps, setRouteInfo }) {

  const map = useMap()

  useEffect(() => {

    if (!origin || !destination) return

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(origin[0], origin[1]),
        L.latLng(destination[0], destination[1])
      ],
      lineOptions: {
        styles: [{ color: "#6a5acd", weight: 4 }]
      },
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true
    }).addTo(map)


    routingControl.on("routesfound", function(e){

      const route = e.routes[0]

      const instructions = route.instructions.map(i => i.text)

      setSteps(instructions)

      const distanceKm = (route.summary.totalDistance / 1000).toFixed(2)
      const timeMin = Math.round(route.summary.totalTime / 60)

      setRouteInfo({
        distance: distanceKm,
        time: timeMin
      })

    })


    return () => map.removeControl(routingControl)

  }, [origin, destination])

  return null
}



export default function MapView() {

  const [position, setPosition] = useState([18.4861, -69.9312])
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)

  const [steps, setSteps] = useState([])
  const [routeInfo, setRouteInfo] = useState(null)

  const [originText, setOriginText] = useState("")
  const [destText, setDestText] = useState("")


  useEffect(() => {

    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition((pos) => {

        const lat = pos.coords.latitude
        const lng = pos.coords.longitude

        setPosition([lat, lng])

      })

    }

  }, [])


  function usarUbicacion() {

    if (!navigator.geolocation) {
      alert("Tu navegador no soporta geolocalización")
      return
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {

        const lat = pos.coords.latitude
        const lng = pos.coords.longitude

        setPosition([lat, lng])
        setOrigin([lat, lng])

      },
      () => {
        alert("Debes permitir acceso a la ubicación")
      }
    )

  }


  return (

    <div className="map-container">

      <div className="search-panel">

        <input
          type="text"
          placeholder="Punto de partida"
          value={originText}
          onChange={(e)=>setOriginText(e.target.value)}
        />

        <input
          type="text"
          placeholder="Destino"
          value={destText}
          onChange={(e)=>setDestText(e.target.value)}
        />

        <button
        className="btn"
        onClick={()=>alert("Selecciona origen y destino en el mapa")}
        >
        🚗 Buscar Ruta
        </button>

        <button className="loc-btn" onClick={usarUbicacion}>
          📍 Mi ubicación
        </button>

        <button
        onClick={()=>{
          setOrigin(null)
          setDestination(null)
          setSteps([])
          setRouteInfo(null)
        }}
        >
        ❌ Limpiar ruta
        </button>

        <button
        onClick={()=>{

          const temp = origin
          setOrigin(destination)
          setDestination(temp)

        }}
        >
        🔄 Cambiar ruta
        </button>

      </div>


      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
      >

        <ChangeMapView center={position} />

        <TileLayer
          attribution="© OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationSelector
          setOrigin={setOrigin}
          setDestination={setDestination}
        />


        {origin && (
          <Marker position={origin}>
            <Popup>Origen</Popup>
          </Marker>
        )}

        {destination && (
          <Marker position={destination}>
            <Popup>Destino</Popup>
          </Marker>
        )}

        {origin && destination && (
          <Routing
            origin={origin}
            destination={destination}
            setSteps={setSteps}
            setRouteInfo={setRouteInfo}
          />
        )}

      </MapContainer>


      {routeInfo && (
        <div className="route-info">
          <b>Distancia:</b> {routeInfo.distance} km
          <br/>
          <b>Tiempo estimado:</b> {routeInfo.time} minutos
        </div>
      )}


      {steps.length > 0 && (

        <div className="steps-panel">

          <h3>Pasos de la ruta</h3>

          {steps.map((step, index) => (
            <div key={index}>
              {index + 1}. {step}
            </div>
          ))}

        </div>

      )}

    </div>

  )

}