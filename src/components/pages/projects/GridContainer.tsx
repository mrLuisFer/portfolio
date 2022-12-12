import { Responsive as ResponsiveGridLayout } from 'react-grid-layout'
import { projectsList } from './projectsList'
import ProjectItem from './ProjectItem'

import { Box, Heading } from '@chakra-ui/react'

export default function GridContainer() {
  const generateLayouts = () => {
    const y = Math.ceil(Math.random() * 4) + 1
    const x = Math.round(Math.random() * 5) * 2
    console.log(x, y)
    return {
      lg: projectsList.map((item, id) => ({
        x,
        y: Math.floor(id / 6) * y,
        w: 2,
        h: 2,
        i: `${id}`,
        static: Math.random() < 0.05,
      })),
    }
  }

  return (
    <ResponsiveGridLayout
      className='layout'
      layouts={generateLayouts()}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 8, sm: 6, xs: 4, xxs: 2 }}
      width={1200}>
      {projectsList.map((project, id) => (
        <Box key={id}>
          <ProjectItem id={id} project={project} />
        </Box>
      ))}
    </ResponsiveGridLayout>
  )
}
