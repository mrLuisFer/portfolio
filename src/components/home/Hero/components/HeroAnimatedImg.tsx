'use client'
import { useMotionValue, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function HeroAnimatedImg() {
  const [isHover, setIsHover] = useState<boolean>(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgSize = 350

  const angle = 10
  const rotateX = useTransform(y, [0, 1], [angle, -angle])
  const rotateY = useTransform(x, [0, 1], [-angle, angle])

  const onMove = (e: any) => {
    const bounds = e.currentTarget.getBoundingClientRect()

    const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth
    const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight

    x.set(xValue, true)
    y.set(yValue, true)
  }

  const resetMousePosition = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        perspective: 500,
        width: imgSize,
        height: imgSize,
      }}>
      <motion.div
        drag
        dragElastic={0.2}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        onPointerMove={onMove}
        animate={isHover ? 'hover' : 'rest'}
        style={{
          rotateX,
          rotateY,
        }}
        whileHover={{
          cursor: 'grabbing',
          scale: 1.1,
        }}
        onHoverStart={() => {
          resetMousePosition()
          setIsHover(true)
        }}
        onHoverEnd={() => {
          resetMousePosition()
          setIsHover(false)
        }}>
        <div className='relative transition-all duration-500 ease-in hover:brightness-125 hover:drop-shadow-[3px_3px_15px_rgba(255,205,130,0.5)] hover:transition-all hover:duration-500 hover:ease-out'>
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
  )
}
