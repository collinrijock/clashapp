import { IChampion, ITeamComp, Roles, getEnumKeys } from '../models/IChampion'
import { IDraftAction } from '../models/IDraftAction'

export interface IData {
  teamComp: ITeamComp
  championData: IChampion[]
}

const DynamicChampionRoster = (championData: IChampion[], draftAction?: IDraftAction): IData => {
  let teamComp: ITeamComp;
  let newChampionData: IChampion[];
  if (draftAction) {
    teamComp = getTeamCompFromChampionData(championData)
    newChampionData = championData
  }
  // initial call
  else {
    teamComp = getTeamCompFromChampionData(championData)
    newChampionData = championData
  }
  return {
    teamComp: teamComp,
    championData: newChampionData
  }
}

const getTeamCompFromChampionData = (championData: IChampion[]): ITeamComp => {
  const championMapping = getEnumKeys(Roles).reduce((acc: Map<Roles, IChampion>,key: string) => {
    const role = Roles[key]
    const roleRankings = getRankingForRole(championData, role).sort((a, b) => a.rank - b.rank)
    acc.set(role, roleRankings[0].champion)
    return acc;
  }, new Map<Roles, IChampion>())
  return {
    Top: championMapping.get(Roles.Top)!,
    Jungle: championMapping.get(Roles.Jungle)!,
    Mid: championMapping.get(Roles.Mid)!,
    ADC: championMapping.get(Roles.ADC)!,
    Support: championMapping.get(Roles.Support)!
  }
}

const getRankingForRole = (
  championData: IChampion[],
  role: Roles
): IChampionRanking[] => {
  return championData.map((champion: IChampion, i: number) => {return {champion: champion, rank: i}})
}

interface IChampionRanking {
  champion: IChampion;
  rank: number;
}
