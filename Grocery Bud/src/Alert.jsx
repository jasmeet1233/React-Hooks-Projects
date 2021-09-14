import React, {useEffect} from 'react'

const Alert = ({ alertObj, alertMessageDisplay, list }) => {
    
    useEffect(() => {
        console.log('mounted')
        const timeout = setTimeout(() => {
            alertMessageDisplay()
        }, 2000);
        return () => {
            console.log('unmounted')
            return clearTimeout(timeout)
        }
    }, [list])

  const { message, show } = alertObj;
  return <h3>{message}</h3>;
};

export default Alert
