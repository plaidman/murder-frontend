import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';
import { ExpertAnalyzed, ExplainEvidence, GameUpdated, PlayerAdded, SetupPlayer } from './socketModels';

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

    public startRebuttal(): void {
        this.socket.emit('startRebuttal');
    }

    public passTheBlame(): void {
        this.socket.emit('passTheBlame');
    }

    public startExplanation(formData: ExplainEvidence): void {
        this.socket.emit('startExplanation', formData);
    }

    public startExpertOpinion(): void {
        this.socket.emit('startExpertOpinion');
    }

    public startAccuserPeek(): void {
        this.socket.emit('startAccuserPeek');
    }

    public refreshGame(): void {
        this.socket.emit('refreshGame');
    }

    public resetGame(): void {
        this.socket.emit('resetGame');
    }

    public expertAnalyzed(formData: ExpertAnalyzed): void {
        this.socket.emit('finishExpertOpinion', formData);
    }

    public getGameUpdatedObservable(): Observable<GameUpdated> {
        return this.gameUpdatedObservable;
    }
}
