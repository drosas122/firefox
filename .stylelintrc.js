/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const fs = require("fs");
const path = require("path");
const rollouts = process.env.STYLELINT_SKIP_ROLLOUTS
  ? []
  : require("./stylelint-rollouts.config");

function readFile(filePath) {
  return fs
    .readFileSync(filePath, { encoding: "utf-8" })
    .split("\n")
    .filter(p => p && !p.startsWith("#"));
}

const ignoreFiles 
    "media-query-no-invalid": null,
    "stylelint-plugin-mozilla/media-query-no-invalid": true,
    "stylelint-plugin-mozilla/no-base-design-tokens": true,
    
        "stylelint-plugin-mozilla/media-query-no-invalid": null,
      },
    },
    {
      files: [
        "browser/components/aboutwelcome/**",
        "browser/components/asrouter/**",
        "browser/extensions/newtab/**",
      ],
      customSyntax: "postcss-scss",
      extends: "stylelint-config-standard-scss",
      rules: {
        "@stylistic/color-hex-case": "upper",
        "@stylistic/indentation": 2,
        "@stylistic/no-eol-whitespace": true,
        "@stylistic/no-missing-end-of-source-newline": true,
        "@stylistic/number-leading-zero": "always",
        "@stylistic/number-no-trailing-zeros": true,
        "@stylistic/string-quotes": [
          "single",
          {
            avoidEscape: true,
          },
        ],
        "at-rule-disallowed-list": [
          ["debug", "warn", "error"],
          {
            message: "Clean up %s directives before committing",
          },
        ],
        "at-rule-no-vendor-prefix": null,
        "color-function-notation": null,
        "comment-empty-line-before": [
          "always",
          {
            except: ["first-nested"],
            ignore: ["after-comment", "stylelint-commands"],
          },
        ],
        
    },
    // Rollouts should always be applied last in the overrides section
    // to ensure that they take precedence over other overrides.
    ...rollouts,
  ],
};
