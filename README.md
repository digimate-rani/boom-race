# מרוץ בום (Boom Race)

A kids' top-down car game, designed together with Rani's son. One HTML file, no build step, no server.

## Play
- Computer: open `index.html` in a browser.
- Phone, online: the GitHub Pages link. Then "Add to Home screen" - after the first visit it works with no internet.
- Phone, no internet at all: copy `index.html` to the phone and open it in the browser.

## The game
- 21 levels. Reach the finish line. Stars: 1 = finished, 2 = also beat the enemy car, 3 = also collected the coin target.
- 5 hearts. Every crash costs a heart and you bounce back to your lane. 0 hearts = try the level again.
- Coins are kept between rounds and buy faster cars in the garage (8 cars).
- Power-ups: shield (8s, smash cars), magnet (9s, pulls coins), lightning (gas boost). Ramps jump over cars and spikes.
- Mini-map on the left: white ring = you, purple = the enemy.

Progress is saved in the browser (localStorage) on each device.
