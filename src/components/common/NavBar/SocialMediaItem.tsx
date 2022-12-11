import { Box, SlideFade } from '@chakra-ui/react'
import Link from '../custom/Link'
import { TbExternalLink } from 'react-icons/tb'
import { useState } from 'react'

interface ISocialMediaItemProps {
  href: string
  label: string
  external: boolean
}

export default function SocialMediaItem({ item }: { item: ISocialMediaItemProps }) {
  const [showIcon, setShowIcon] = useState<boolean>(false)

  return (
    <Box
      key={item.label}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      display='flex'
      alignItems='center'
      gap='5px'>
      <Link
        href={item.href}
        external={item.external}
        opacity={showIcon ? '1' : '0.5'}
        _hover={{ opacity: '1' }}>
        {item.label}
      </Link>
      {item.external && (
        <SlideFade in={showIcon} offsetX='20px' offsetY='0'>
          <Box cursor='pointer'>
            <TbExternalLink />
          </Box>
        </SlideFade>
      )}
    </Box>
  )
}
