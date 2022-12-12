import { NextPage } from 'next'
import Title from 'src/components/common/custom/Title'
import { Box } from '@chakra-ui/react'
import GridContainer from 'src/components/pages/projects/GridContainer'
import SEO from 'src/components/common/SEO'

const Projects: NextPage = () => {
  return (
    <>
      <SEO
        title='Projects | mrLuisFer'
        description='Learn more about my completed projects, along with a preview and a link to github.'
      />
      <Title colorscheme='blue' marginBottom='1rem'>
        Projects
      </Title>
      <Box minH={['', '620px']}>
        <GridContainer />
      </Box>
    </>
  )
}

export default Projects
