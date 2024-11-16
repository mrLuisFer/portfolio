import { useEffect, useState } from 'react'

export const useChristmasDate = () => {
  const [isChristmas, setIsChristmas] = useState<boolean>(false)

  useEffect(() => {
    const decemberDate = new Date('December 25')
    const currentDate = new Date()
    const decemberMonth: number = decemberDate.getMonth() + 1
    const currentMonth: number = currentDate.getMonth() + 1
    const isChristmasDate: boolean =
      currentMonth === decemberMonth && decemberDate.getDate() === currentDate.getDate()
    setIsChristmas(isChristmasDate)
  }, [])

  return isChristmas
}
