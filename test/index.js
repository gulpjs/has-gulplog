"use strict";

var assert = require("node:assert");
var { describe, it } = require("node:test");

var sparkles = require("sparkles");

var hasGulplog = require("../");

describe("has-gulplog", function () {
  it("returns false if gulplog is not available", function () {
    assert.strictEqual(hasGulplog(), false);
  });

  it("returns true if gulplog is available", function () {
    // install a fake gulplog
    var ee = sparkles("gulplog");

    assert.strictEqual(hasGulplog(), true);
    ee.remove();
  });
});
