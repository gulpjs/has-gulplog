'use strict';

var expect = require('expect');
var sparkles = require('sparkles');

var hasGulplog = require('../');

describe('has-gulplog', function () {
  it('returns false if gulplog is not available', function (done) {
    expect(hasGulplog()).toEqual(false);
    done();
  });

  it('returns true if gulplog is available', function (done) {
    // install a fake gulplog
    var ee = sparkles('gulplog');

    expect(hasGulplog()).toEqual(true);

    ee.remove();

    done();
  });
});
