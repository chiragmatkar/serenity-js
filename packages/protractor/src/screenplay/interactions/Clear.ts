import { AnswersQuestions, Interaction, Question, UsesAbilities } from '@serenity-js/core';
import { formatted } from '@serenity-js/core/lib/io';
import { ElementFinder } from 'protractor';
import { withAnswerOf } from '../withAnswerOf';

export class Clear implements Interaction {
    static theValueOf(field: Question<ElementFinder> | ElementFinder) {
        return new Clear(field);
    }

    constructor(private readonly field: Question<ElementFinder> | ElementFinder) {
    }

    performAs(actor: UsesAbilities & AnswersQuestions): PromiseLike<void> {
        return withAnswerOf(actor, this.field, elf => elf.clear());
    }

    toString(): string {
        return formatted `#actor clears the value of ${ this.field }`;
    }
}