import { Box, useDisclosure, SlideFade } from '@chakra-ui/react'
import Link from '../custom/Link'
import { TbExternalLink } from 'react-icons/tb'

interface ISocialMediaItemProps {
  href: string
  label: string
  external: boolean
}

export default function SocialMediaItem({ item }: { item: ISocialMediaItemProps }) {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box
      key={item.label}
      onMouseEnter={onToggle}
      onMouseLeave={onToggle}
      display='flex'
      alignItems='center'
      gap='5px'>
      <Link
        href={item.href}
        external={item.external}
        opacity='0.5'
        _hover={{ opacity: '1' }}>
        {item.label}
      </Link>
      {item.external && (
        <SlideFade in={isOpen} offsetX='20px' offsetY='0'>
          <Box>
            <TbExternalLink />
          </Box>
        </SlideFade>
      )}
    </Box>
  )
}
