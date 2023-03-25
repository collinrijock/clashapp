export interface IDraftAction {
    kind: DraftActionKind;
    targetChampionName: string;
}

export enum DraftActionKind {
    Pick: "pick",
    Ban: "ban",
}