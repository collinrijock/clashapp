import { IChampion, ITeamComp, Roles, getEnumKeys } from '../models/IChampion'
import { IDraftAction } from '../models/IDraftAction'

export interface IData {
  teamComp: ITeamComp
  championData: IChampion[]
}

const DynamicChampionRoster = (championData: IChampion[], draftAction?: IDraftAction): IData => {
  if (draftAction) {
    const teamComp = getTeamCompFromChampionData(championData)
    const newChampionData = championData
  }
  // initial call
  else {
    const teamComp = getTeamCompFromChampionData(championData)
    const newChampionData = championData
  }
  return {
    teamComp: teamComp,
    championData: newChampionData
  }
}

const getTeamCompFromChampionData = (championData: IChampion[]): ITeamComp => {
  const championMapping: Map<Roles, IChampion> = new Map()
  for (let key in getEnumKeys(Roles)) {
    const role = Roles[key]
    const roleRankings = getRankingForRole(championData, role).sort((a, b) => a.rank - b.rank)
    championMapping.set(role, championRankings.champions[0])
  }
}
const getRankingForRole = (
  championData: IChampion[],
  role: Roles
): [champion: IChampion, rank: number][] => {
  return
}
