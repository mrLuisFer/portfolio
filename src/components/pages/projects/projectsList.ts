export type IProjectList = {
  id: number
  img: string
  title: string
  desc: string
  date?: string
  authors?: string[]
}

export const projectsList: IProjectList[] = [
  {
    id: 1,
    img: '/assets/contactMe/contactMe-mail-sent.svg',
    title: 'Some project',
    desc: 'lorem ipsu color',
  },
  {
    id: 2,
    img: '/assets/website-creator-illustration.svg',
    title: 'Some project 2',
    desc: 'useMediaQuery is a custom hook used to help detect whether a single media query or multiple media queries individually match.',
  },
]
