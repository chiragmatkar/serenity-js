import { Interaction, UsesAbilities } from '../../../../../core/src/screenplay';
import { PlayAGuitar } from '../abilities';
import { Chord } from '../Chord';

export class PlayAChord extends Interaction {
    static of(chord: Chord) {
        return new PlayAChord(chord);
    }

    constructor(private chord: Chord) {
        super();
    }

    performAs(actor: UsesAbilities): PromiseLike<void> {
        return PlayAGuitar.as(actor).play(this.chord);
    }

    toString = () => `#actor plays the chord of ${ this.chord.name }`;
}
