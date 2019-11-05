import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { Game, Nullable } from 'src/models';

enum GameJoinedStatus {
    SUCCESS = 'success',
    FAILURE = 'failure',
    RESUME = 'resume',
}

export interface GameJoinedData {
    gameId: string;
    playerId: string;
    status: GameJoinedStatus;
    game: Game;
}

@Injectable({
    providedIn: 'root',
})
export class GameEngineService {
    constructor(
        private socket: Socket,
    ) {}

    public joinGame(gameId: Nullable<string>): void {
        this.socket.emit('joinGame', gameId);
    }

    public gameJoinedObservable(): Observable<GameJoinedData> {
        return new Observable<GameJoinedData>((observer) => {
            this.socket.on('gameJoined', (gameJoinedData: GameJoinedData) => {
                observer.next(gameJoinedData);
            });
        });
    }
}
