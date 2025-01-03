'use client'
import GlowBox from '@/components/common/GlowBox'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useMotionValue, useTransform, useSpring } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useMemo } from 'react'

export default function HeroAnimatedImg() {
  const isGreaterThan768 = useMediaQuery('(min-width: 768px)')
  const isGreaterThan1024 = useMediaQuery('(min-width: 1024px)')

  // const imgSize = 350
  const imgSize = useMemo(() => {
    if (isGreaterThan1024) return 350
    if (isGreaterThan768) return 300
    return 250
  }, [isGreaterThan768, isGreaterThan1024])

  // Initialize motion values for x and y positions
  const x = useMotionValue(0.5) // Starts at the center
  const y = useMotionValue(0.5)

  const angle = 10
  // Map x and y values to rotation angles
  const rotateX = useTransform(y, [0, 1], [angle, -angle])
  const rotateY = useTransform(x, [0, 1], [-angle, angle])

  // Add spring animation for smoother transitions
  const springX = useSpring(rotateX, { stiffness: 30, damping: 10 })
  const springY = useSpring(rotateY, { stiffness: 30, damping: 10 })

  // start the animation when the component mounts
  useEffect(() => {
    let t = 0
    const interval = setInterval(() => {
      const value = Math.sin(t) * 0.5 + 0.5 // Oscillates between 0 and 1
      x.set(value)
      y.set(1 - value)
      t += 0.03
    }, 16) // Approximately 60 FPS

    return () => clearInterval(interval)
  }, [x, y])

  return (
    <GlowBox color='#f9e4006c' padding={4} className='mx-auto lg:mx-0'>
      <motion.div
        style={{
          perspective: 500,
          width: imgSize + 20,
          height: imgSize + 10,
        }}
        className='flex items-center justify-center'>
        <motion.div
          style={{
            rotateX: springX,
            rotateY: springY,
          }}>
          <div className='relative brightness-105 drop-shadow-[1px_1px_5px_rgba(255,205,130,0.2)] transition-all ease-in hover:brightness-125 hover:drop-shadow-[3px_3px_15px_rgba(255,205,130,0.5)] hover:duration-500 hover:ease-out'>
            <Image
              src='/assets/hero/sparkles-icon.svg'
              alt='sparkles-icon'
              width={imgSize}
              height={imgSize}
              objectFit='contain'
              objectPosition='center'
              quality={100}
              draggable={false}
              className='max-w-none'
            />
          </div>
        </motion.div>
      </motion.div>
    </GlowBox>
  )
}
