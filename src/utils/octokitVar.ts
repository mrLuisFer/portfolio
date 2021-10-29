import { Octokit } from 'octokit'

const token: unknown = process.env.REACT_APP_GHTOKEN
export const octokit = new Octokit({ auth: token })
