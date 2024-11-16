import GithubIcon from '@/components/common/Icons/Github'
import GitLabIcon from '@/components/common/Icons/Gitlab'
import LinkedInIcon from '@/components/common/Icons/LinkedIn'
import TwitterIcon from '@/components/common/Icons/Twitter'
import { github, gitlab, linkedin, twitter } from '@/utils/socialLinks'

export interface ISocialMedia {
  href: string
  label: string
  external: boolean
  Icon?: React.FC
}

export const socialMedia: ISocialMedia[] = [
  {
    href: twitter,
    label: 'Twitter',
    external: true,
    Icon: TwitterIcon,
  },
  {
    href: linkedin,
    label: 'LinkedIn',
    external: true,
    Icon: LinkedInIcon,
  },
  {
    href: github,
    label: 'GitHub',
    external: true,
    Icon: GithubIcon,
  },
  {
    href: gitlab,
    label: 'GitLab',
    external: true,
    Icon: GitLabIcon,
  },
]
