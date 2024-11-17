import GithubIcon from '@/components/common/Icons/Github'
import GitLabIcon from '@/components/common/Icons/Gitlab'
import LinkedInIcon from '@/components/common/Icons/LinkedIn'
import TwitterIcon from '@/components/common/Icons/Twitter'

export const enum SocialMedia {
  twitter = 'https://twitter.com/mrluisfer_',
  linkedin = 'https://www.linkedin.com/in/mrluisfer/',
  github = 'https://www.github.com/mrLuisFer',
  gitlab = 'https://gitlab.com/mrLuisFer',
  linkedinContact = 'https://www.linkedin.com/in/mrluisfer/',
  githhubRepositories = 'https://github.com/mrLuisFer?tab=repositories',
}

export interface ISocialMedia {
  href: string
  label: string
  external: boolean
  Icon?: React.FC
}

export const socialMedia: ISocialMedia[] = [
  {
    href: SocialMedia.twitter,
    label: 'Twitter',
    external: true,
    Icon: TwitterIcon,
  },
  {
    href: SocialMedia.linkedin,
    label: 'LinkedIn',
    external: true,
    Icon: LinkedInIcon,
  },
  {
    href: SocialMedia.github,
    label: 'GitHub',
    external: true,
    Icon: GithubIcon,
  },
  {
    href: SocialMedia.gitlab,
    label: 'GitLab',
    external: true,
    Icon: GitLabIcon,
  },
]
