import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Title from 'src/components/common/custom/Title'
import { useTranslation } from 'src/hooks/useTranslation'
import projectsList from './projectsList'
import { BsGithub } from 'react-icons/bs'
import { FiExternalLink } from 'react-icons/fi'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <Box marginTop='8rem'>
      <Title colorscheme='orange' fontSize='5xl' textAlign='center' bgAnimate>
        {t('projects')}
      </Title>
      <Flex gap={5} pt={6} wrap={'wrap'}>
        {projectsList.map((project) => (
          <Box
            key={project.id}
            border={'2px'}
            borderColor={'transparent'}
            paddingTop={3}
            paddingX={3}
            paddingBottom={5}
            borderRadius={5}
            _hover={{
              borderColor: 'orange.500',
            }}
            as='a'
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            color='inherit'
            maxWidth={400}
            maxH={'fit-content'}
            h={'fit-content'}>
            <Box>
              {project.image != null && (
                <Image src={project.image} alt={project.name} borderRadius={'10'} />
              )}
              <Text as='h2' fontWeight={500} fontSize={24}>
                {project.name}
              </Text>
              <Text fontSize={14} opacity={0.5}>
                {project.description}
              </Text>
            </Box>
            <Flex
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              mt={5}
              gap={5}>
              <Box display='flex' alignItems='center' flexWrap={'wrap'} gap={5}>
                {project.technologies.map((tech) => (
                  <Box
                    key={tech.name}
                    display={'flex'}
                    alignItems={'center'}
                    gap={1}
                    _hover={{
                      color: 'orange.300',
                    }}>
                    <tech.icon />
                    <Text fontSize={12}>{tech.name}</Text>
                  </Box>
                ))}
              </Box>
              <Flex gap={5} justifyContent='flex-end' alignItems={'center'}>
                <Box
                  as='a'
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  color='inherit'
                  fontSize={20}
                  zIndex={10}
                  opacity={0.8}
                  _hover={{
                    transform: 'scale(1.1)',
                    opacity: 1,
                  }}>
                  <BsGithub />
                </Box>
                <Box
                  as='a'
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  color='green.200'
                  fontSize={20}
                  zIndex={10}
                  _hover={{
                    transform: 'scale(1.1)',
                  }}>
                  <FiExternalLink />
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}
