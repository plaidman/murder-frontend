import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';
import { GameUpdated, PlayerAdded, SetupPlayer } from './socketModels';

@Injectable({
    providedIn: 'root',
})
export class GameEngineService {
    private gameUpdatedObservable: Observable<GameUpdated>;

    constructor(
        private socket: Socket,
    ) {
        this.gameUpdatedObservable = new Observable<GameUpdated>((observer) => {
            this.socket.on('gameUpdated', (gameUpdatedData: GameUpdated) => {
                observer.next(gameUpdatedData);
            });
        });
    }

    public setupPlayer(
        formData: SetupPlayer,
        subscriber: (playerAddedData: PlayerAdded) => void,
    ): Subscription {
        const observable = new Observable<PlayerAdded>((observer) => {
            this.socket.on('playerAdded', (playerAddedData: PlayerAdded) => {
                observer.next(playerAddedData);
            });
        });

        const subscription = observable.subscribe(subscriber);
        this.socket.emit('setupPlayer', formData);
        return subscription;
    }

    public initGame(): void {
        this.socket.emit('initGame');
    }

    public getGameUpdatedObservable(): Observable<GameUpdated> {
        return this.gameUpdatedObservable;
    }
}
