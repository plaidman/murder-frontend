import { Card, CardType } from './gameModels';

export const hiddenCard: Card = {
    id: '',
    accuseeId: '',
    accuseeName: '',
    description: '<card not visible>',
    expertId: '',
    expertise: '',
    isConclusive: false,
    type: CardType.HIDDEN,
};
