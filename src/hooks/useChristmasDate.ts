import { useEffect, useState } from 'react'

/**
 * Custom Hook: useChristmasDate
 * Determines if the current date is December 25th (Christmas Day).
 * @returns {boolean} `true` if the current date is December 25th, otherwise `false`.
 */
export const useChristmasDate = (): boolean => {
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

  return Boolean(isChristmas)
}
