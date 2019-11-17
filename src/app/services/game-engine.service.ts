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

    public startGame(playerId: string): void {
        this.socket.emit('startGame', { playerId });
    }

    public startAccusation(): void {
        this.socket.emit('startAccusation');
    }

    public passTheBlame(): void {
        console.log('pass the blame');
        this.socket.emit('passTheBlame');
    }

    public explainTheEvidence(): void {
        console.log('explain the evidence');
        this.socket.emit('explainTheEvidence');
    }

    public startRebuttal(): void {
        console.log('start rebuttal');
        this.socket.emit('startRebuttal');
    }

    public requestGame(): void {
        this.socket.emit('requestGame');
    }

    public getGameUpdatedObservable(): Observable<GameUpdated> {
        return this.gameUpdatedObservable;
    }
}
