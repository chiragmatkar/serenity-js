import { TableDefinition } from 'cucumber';

type Callback =  (error?: Error, pending?: string) => void;

export = function() {
    this.Given(/^.*step (?:.*) passes$/, function(done: Callback) {
        done();
    });

    this.Given(/^.*step (?:.*) fails$/, function(done: Callback) {
        done(new Error(`Something's wrong`));
    });

    this.Given(/^.*step (?:.*) marked as (pending|skipped)/, function(result: string, done: Callback) {
        done(void 0, result);
    });

    this.Given(/^.*step (?:.*) receives a table:$/, function(data: TableDefinition, done) {
        done();
    });

    this.Given(/^.*step (?:.*) receives a doc string:$/, function(docstring: string, done) {
        done();
    });

    this.Given(/^.*step times out$/,  { timeout: 100 }, function(done: Callback) {
        setTimeout(done, 1000);
    });
};