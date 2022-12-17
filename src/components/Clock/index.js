import {useState, useEffect} from 'react'
import {ClockContainer, Heading, ClockImage, Time} from './styledComponents'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log('time is started')
    return () => {
      clearInterval(timerId)
      console.log('clear interval')
    }
  }, [])
  return (
    <ClockContainer>
      <Heading>Apple</Heading>
      <ClockImage
        src="https://img.freepik.com/free-psd/smartwatch-mock-up-with-grey-watchstrap_1104-110.jpg?w=740&t=st=1671264671~exp=1671265271~hmac=22d59de81128aea34b16443a7af842176200935e5973c02da8fe23bf3602ce2f"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}
export default Clock
