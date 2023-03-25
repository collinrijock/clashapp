export interface IPlayer {
    name: string;
    summonerName: string;
}

export enum Tags {
    Tank = "Tank",
    CC = "cc",
    Squishy = "Squishy",
    GoodFirstPick = "GoodFirstPick",
    CounterPick = "CounterPick",
    Carry = "Carry",
    Scaler = "Scaler",
    Dog = "Dog",
}

export interface ITag {
    name: Tags;
}

export enum Roles {
    Top = "Top",
    Jungle = "Jungle",
    Mid = "Mid",
    ADC = "ADC",
    Support = "Support",
}

export interface IChampion {
    player: IPlayer;
    role: Roles;
    winrate: number;
    tags: ITag[];
    championName: string;
}

export interface ITeamComp {
    Top: IChampion;
    Jungle: IChampion;
    Mid: IChampion;
    ADC: IChampion;
    Support: IChampion;
}

export const getEnumKeys = (inputEnum: any) => {
    return Object.keys(inputEnum);
}