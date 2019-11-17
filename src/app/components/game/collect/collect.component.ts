import { Component, Input, OnChanges } from '@angular/core';
import { GameEngineService } from 'src/app/services/game-engine.service';
import { Card, Game } from 'src/app/services/gameModels';

@Component({
    selector: 'app-collect',
    templateUrl: './collect.component.html',
    styleUrls: ['./collect.component.scss']
})
export class CollectComponent implements OnChanges {
    @Input() public game: Game;
    @Input() public playerId: string;
    public collectedCard: Card;

    constructor(
        private gameService: GameEngineService,
    ) {}

    public ngOnChanges() {
        const cards = this.game.players[this.playerId].handCards;
        this.collectedCard = cards[cards.length - 1];
    }

    public startAccusation() {
        this.gameService.startAccusation();
    }
}
