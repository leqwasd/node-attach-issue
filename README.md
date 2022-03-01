This project describes issue, trying to attach to remote process (running locally).

Steps to reproduce:
* clone this repo
* run `npm install`
* run `npm run build`
* run `docker-compose build`
* run `docker-compose up`
* got to `./src/index.ts:8` and place a breakpoint
* go to `http://localhost:4444` 

Breakpoint is hit ✓

Switch to branch - broken and do the same

Breakpoint is not hit...