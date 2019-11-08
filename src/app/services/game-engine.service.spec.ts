import { TestBed } from '@angular/core/testing';
import { SocketIoModule } from 'ngx-socket-io';
import { GameEngineService } from './game-engine.service';

describe('GameEngineService', () => {
    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            SocketIoModule.forRoot({ url: 'url' }),
        ]
    }));

    it('should be created', () => {
        const service: GameEngineService = TestBed.get(GameEngineService);
        expect(service).toBeTruthy();
    });
});
