import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function UseLocationCallBack({callback, ...props}) {
  const location = useLocation()
  useEffect(() => {
    console.log("locationss", location)
    callback(location)
    return () => null
  }, [location]); 
  return null;
}
