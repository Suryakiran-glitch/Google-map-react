import React , {useState , useEffect} from 'react'
import Map from './component/Map.jsx'
import Spinner from './component/Loading.jsx'

function App() {

  const [event, setevent] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    const fetchData = async() => { 
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    const {events} = await res.json()
    setevent(events)
    setloading(false)
  }
  fetchData()
  }, [])

  return (
      <>
        {
          loading ? <Spinner /> : <Map eventData={event} />
        }
      </>
  );
}

export default App;
