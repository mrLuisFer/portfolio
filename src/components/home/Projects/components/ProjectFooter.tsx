import GithubIcon from '@/components/common/Icons/Github'
import { Project } from '../projectsList'
import { FiExternalLink } from 'react-icons/fi'

function FooterLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`flex items-center gap-2 text-sm font-bold opacity-85 transition hover:opacity-100 ${className}`}>
      {children}
    </a>
  )
}

export default function ProjectFooter({ project }: { project: Project }) {
  return (
    <div className='flex items-center justify-between gap-5 px-4 py-3'>
      <FooterLink href={project.github}>
        <GithubIcon />
        GitHub Repository
      </FooterLink>
      <FooterLink href={project.link} className='text-blue-200 hover:text-blue-300'>
        Live Demo
        <FiExternalLink />
      </FooterLink>
    </div>
  )
}
