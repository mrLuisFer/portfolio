import { projectsList } from './projectsList'
import ProjectItem from './ProjectItem'
import { Box } from '@chakra-ui/react'
import GridLayout, { Layout } from 'react-grid-layout'

export default function GridContainer() {
  const layout: Layout[] = [
    { i: '0', x: 0, y: 0, w: 3, h: 1.5 },
    { i: '1', x: 3, y: 0, w: 3, h: 1.5 },
  ]

  return (
    <GridLayout className='layout' layout={layout} width={1200} margin={[0, 5]} cols={12}>
      {projectsList.map((project, id) => (
        <Box key={`${id}`}>
          <ProjectItem id={id} project={project} />
        </Box>
      ))}
    </GridLayout>
  )
}
