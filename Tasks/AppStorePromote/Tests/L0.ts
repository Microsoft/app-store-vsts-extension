// npm install mocha --save-dev
// typings install dt~mocha --save --global

import * as path from 'path';
import * as assert from 'assert';
import * as ttm from 'vsts-task-lib/mock-test';

describe('app-store-promote L0 Suite', function () {
    /* tslint:disable:no-empty */
    before(() => {
    });

    after(() => {
    });
    /* tslint:enable:no-empty */

    it('enforce darwin', (done:MochaDone) => {
        this.timeout(1000);

        let tp = path.join(__dirname, 'EnforceDarwin.js');
        let tr: ttm.MockTestRunner = new ttm.MockTestRunner(tp);

        tr.run();
        assert.equal(true, tr.createdErrorIssue('The Apple App Store Promote task can only run on a Mac computer.'));
        assert(tr.failed, 'task should have failed');

        done();
    });

});
