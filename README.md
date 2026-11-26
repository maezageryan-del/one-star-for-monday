# One Star for Monday

[![make.fun](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![rank](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/maezageryan-del/one-star-for-monday/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
[![reward](https://make.fun/badge/u-clever-harbor-75-one-star-for-monday-9ead4a61/maezageryan-del/one-star-for-monday/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)

A one-star review of Monday, written as though Monday were a restaurant —
an entry for the
[One Star for Monday](https://make.fun/bounty/u-clever-harbor-75-one-star-for-monday-9ead4a61)
bounty on [make.fun](https://make.fun).

## The review

> One star. I never booked a table, yet Monday seats me at 7 a.m., serves dread with coffee, and refuses to refund the week.

24 words, 122 characters, one line. The joke: the reviewer never booked a
table, yet Monday seats them at 7 a.m. every week, serves dread with the
coffee, and refuses to refund the week. No waiting-forty-minutes, no cold
coffee, no charged-for-the-week repeat: the unbooked reservation and the
no-refund policy are the mechanisms no visible competitor used.

## How it works

`main.ts` writes the single line to `/output/entry.txt` (or
`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The output is deterministic: the
same line, byte for byte, on every run.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node --experimental-strip-types main.ts
cat /tmp/out/entry.txt
```
