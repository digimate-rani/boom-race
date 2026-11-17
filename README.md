# מרוץ בום (Boom Race)

A kids' top-down car game, designed together with Rani's son. One HTML file, no build step, no server.

## Play
- Computer: open `index.html` in a browser.
- Phone, online: the GitHub Pages link. Then "Add to Home screen" - after the first visit it works with no internet.
- Phone, no internet at all: copy `index.html` to the phone and open it in the browser.

## The game
- 100 levels. Reach the finish line. Stars: 1 = finished, 2 = also beat the enemy car, 3 = also collected the coin target. The enemy gets stronger and starts further ahead each level, but is never faster than you.
- Crashes do nothing to you: the other car flies away and you keep driving.
- Coins are kept between rounds (worth more in later levels) and buy cars in the garage: 100 cars in 10 families, 120 to 700 km/h. The last one, "טיסה 700", is a plane that flies over everything.
- Power-ups: shield (8s, smash cars), magnet (9s, pulls coins), lightning (gas boost). Ramps jump over cars and spikes.
- Mini-map on the left: white ring = you, purple = the enemy.

Progress is saved in the browser (localStorage) on each device.
