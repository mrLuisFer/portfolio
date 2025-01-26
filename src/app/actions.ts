'use server'

import { fetchDataForAllYears } from '@/utils/githubActivity'

export async function fetchData() {
  return await fetchDataForAllYears('mrLuisFer', 'flat')
}
