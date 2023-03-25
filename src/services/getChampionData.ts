import { IPlayer, Tags, Roles, IChampion } from '../models/IChampion'

const champions: IChampion[] = [
  {
    championName: 'Aatrox',
    player: {
      name: 'Aatrox',
      summonerName: 'AatroxPlayer'
    },
    role: Roles.Top,
    winrate: 50,
    tags: [{ name: Tags.Tank }, { name: Tags.CC }, { name: Tags.Carry }]
  },
  {
    championName: 'Ahri',
    player: {
      name: 'Ahri',
      summonerName: 'AhriPlayer'
    },
    role: Roles.Mid,
    winrate: 52,
    tags: [{ name: Tags.Squishy }, { name: Tags.GoodFirstPick }, { name: Tags.Carry }]
  },
  {
    championName: 'Akali',
    player: {
      name: 'Akali',
      summonerName: 'AkaliPlayer'
    },
    role: Roles.Mid,
    winrate: 48,
    tags: [{ name: Tags.Squishy }, { name: Tags.Carry }, { name: Tags.Scaler }]
  },
  {
    championName: 'Alistar',
    player: {
      name: 'Alistar',
      summonerName: 'AlistarPlayer'
    },
    role: Roles.Support,
    winrate: 54,
    tags: [{ name: Tags.Tank }, { name: Tags.CC }, { name: Tags.GoodFirstPick }]
  },
  {
    championName: 'Amumu',
    player: {
      name: 'Amumu',
      summonerName: 'AmumuPlayer'
    },
    role: Roles.Jungle,
    winrate: 53,
    tags: [{ name: Tags.Tank }, { name: Tags.CC }, { name: Tags.GoodFirstPick }]
  },
  {
    championName: 'Anivia',
    player: {
      name: 'Anivia',
      summonerName: 'AniviaPlayer'
    },
    role: Roles.Mid,
    winrate: 51,
    tags: [{ name: Tags.Squishy }, { name: Tags.CC }, { name: Tags.Scaler }]
  },
  {
    championName: 'Annie',
    player: {
      name: 'Annie',
      summonerName: 'AnniePlayer'
    },
    role: Roles.Mid,
    winrate: 52,
    tags: [{ name: Tags.Squishy }, { name: Tags.CC }, { name: Tags.Carry }]
  },
  {
    championName: 'Aphelios',
    player: {
      name: 'Aphelios',
      summonerName: 'ApheliosPlayer'
    },
    role: Roles.ADC,
    winrate: 49,
    tags: [{ name: Tags.Squishy }, { name: Tags.Carry }, { name: Tags.Scaler }]
  },
  {
    championName: 'Ashe',
    player: {
      name: 'Ashe',
      summonerName: 'AshePlayer'
    },
    role: Roles.ADC,
    winrate: 51,
    tags: [{ name: Tags.Squishy }, { name: Tags.CC }, { name: Tags.Carry }]
  }
]

export const getChampionData = (): IChampion[] => {
  return champions
}
