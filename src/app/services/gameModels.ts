export enum CardType {
    WEAPON = 'weapon',
    EVIDENCE = 'evidence',
    HIDDEN = 'hidden',
}

export enum GameState {
    GATHER = 'gather', // waiting for people entering the game
    SHUFFLE = 'shuffle', // done waiting; shuffle cards and suspects and accusor order
    COLLECT = 'collect', // everybody is dealt an evidence card and wait for everybody to look
    ACCUSE = 'accuse', // reveal accusor's cards wait for accusor explanation
    REBUTTAL = 'rebuttal', // wait for accusee to choose 'pass the blame (and another card)' or 'explain the evidence'
    PASS_BLAME = 'passBlame', // wait for accusee to choose another card (if they pass the blame)
    EXPLAIN = 'explain', // wait for accusee to finish their explanation
    PEEK = 'peek', // wait for accusor to peek at an accusee card (if explained) or the swapped card (if passed)
    EXPERT = 'expert', // wait for expert to choose conclusive or inconclusive
    // then goes back to collect
    REVELATION = 'revelation', // at any time, someone can make a thrilling revelation
    REVELATION_SWAP = 'revelationSwap', // if revelation is wrong, accusee can swap one card
    OVER = 'over', // game is finished
}

export interface Game {
    passedTheBlame: boolean;
    gmPlayerId: string;
    players: Record<string, Player>;
    tableCards: Card[];
    state: GameState;
    accusorIds: string[];
    currentAccusor: number;
    accuseeId: string;
    messages: string[];
}

export interface Player {
    id: string;
    name: string;
    expertise: string;
    handCards: Card[];
    canFindEvidence: boolean; // false if they have made an incorrect revelation
}

export interface Card {
    id: string;
    description: string;
    type: CardType;
    expertise: string;
    expertPlayerId: string;
    accuseeName: string;
    accuseeId: string;
    isConclusive: boolean; // if true, permanently face up and can't be traded
}
