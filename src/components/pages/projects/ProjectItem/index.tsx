import { Box, Heading, Text, List, ListItem, ListIcon, SlideFade } from '@chakra-ui/react'
import { IProjectList } from '../projectsList'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { useState, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { AiOutlineLink } from 'react-icons/ai'

const colorsList = [
  'blue',
  'green',
  'yellow',
  'red',
  'orange',
  'teal',
  'cyan',
  'purple',
  'pink',
]

function getRandomColor(max: number): string {
  const randomNumber: number = Math.floor(Math.random() * max)
  return `${colorsList[randomNumber]}.400`
}

export default function ProjectItem({
  project,
  id,
}: {
  project: IProjectList
  id: number
}) {
  const [showMore, setShowMore] = useState<boolean>(false)

  return (
    <Box
      key={id}
      boxShadow='1px 1px 5px rgba(47, 47, 47, 0.3)'
      borderRadius='15px'
      w='300px'
      _hover={{
        boxShadow: '1px 1px 5px rgba(112, 112, 112, 0.5)',
      }}>
      <Box position='relative' w='100%'>
        <Image src={project.img} alt={project.title} layout='fill' />
      </Box>
      <Box padding='1rem' cursor='grab' _active={{ cursor: 'grabbing' }}>
        <Heading fontSize='2xl' marginBottom='1rem'>
          {project.title}
        </Heading>
        <Text fontSize='md'>{project.desc}</Text>
        {showMore && (
          <SlideFade in={showMore} offsetY='20px'>
            <Box mt='1rem'>
              <List spacing={3}>
                <ListItem
                  cursor='pointer'
                  color='white'
                  width='fit-content'
                  _hover={{
                    color: getRandomColor(colorsList.length),
                  }}>
                  <ListIcon as={BsGithub} />
                  GitHub
                </ListItem>
                <ListItem
                  cursor='pointer'
                  color='white'
                  width='fit-content'
                  _hover={{
                    color: getRandomColor(colorsList.length),
                  }}>
                  <ListIcon as={AiOutlineLink} />
                  Preview
                </ListItem>
              </List>
            </Box>
          </SlideFade>
        )}
      </Box>
      <Box
        padding='0.5rem 1rem'
        borderRadius='0 0 15px 15px'
        cursor='pointer'
        onClick={() => setShowMore((prevState) => !prevState)}
        _hover={{
          background: 'rgb(29, 29, 29)',
        }}>
        <Text display='flex' alignItems='center' gap='5px'>
          {showMore ? 'Ver menos' : 'Ver mas'}
          <Box as='span' transform={showMore ? 'rotate(-180deg)' : ''}>
            <IoIosArrowDown />
          </Box>
        </Text>
      </Box>
    </Box>
  )
}
