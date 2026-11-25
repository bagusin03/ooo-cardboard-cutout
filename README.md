# The Cardboard Cutout

[![make.fun · u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/bagusin03/ooo-cardboard-cutout/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/bagusin03/ooo-cardboard-cutout/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

One out-of-office auto-reply, 117 characters — while its owner is away, a cardboard cutout sits in their chair, nods at everything, and has already been promoted.

`main.ts` writes the single 117-character line to `/output/entry.txt`:

> I'm away until Monday. A cardboard cutout of me is in my chair — it nods at everything and has already been promoted.

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–160 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
