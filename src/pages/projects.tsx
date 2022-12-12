import { NextPage } from 'next'
import Title from 'src/components/common/custom/Title'
import { Box } from '@chakra-ui/react'
import GridContainer from 'src/components/pages/projects/GridContainer'

const Projects: NextPage = () => {
  return (
    <>
      <Title colorscheme='blue'>Projects</Title>
      <Box>
        <GridContainer />
      </Box>
    </>
  )
}

export default Projects
