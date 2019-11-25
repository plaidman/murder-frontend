import { Game } from './gameModels';

export interface GameUpdated {
    // from server
    game: Game;
}

export interface PlayerAdded {
    // from server
    game: Game;
    playerId: string;
}

export interface SetupPlayer {
    // from client
    name: string;
    expertise: string;
    weapons: string[];
    evidence: string[];
}

export interface ExplainEvidence {
    cardId?: string;
}

export interface StartGame {
    // from client
    playerId: string;
}
