const { chromium } = require('D:/Projects/ronit-agent/tools/playwright/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 400, height: 780 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file:///D:/kids-game-projects/boom-race/index.html');
  // old-format save, like the kid's: owns the rocket
  await p.evaluate(()=>localStorage.setItem('boomrace-v2', JSON.stringify({money:3000,owned:['basic','taxi','rocket'],car:'rocket',stars:{1:3,2:2},unlocked:22})));
  await p.reload(); await p.waitForTimeout(400);
  console.log('migrated', await p.evaluate(()=>localStorage.getItem('boomrace-v2')));
  await p.click('#garageBtn'); await p.waitForTimeout(300); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'g1.png') });
  await p.click('[data-fam="9"]'); await p.waitForTimeout(200); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'g2.png') });
  await p.click('#garageBack'); await p.click('#levelsBtn'); await p.waitForTimeout(200); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'lv.png') });
  await p.click('#levels .back');
  // play level 1 with the plane
  await p.evaluate(()=>{ const s=JSON.parse(localStorage.getItem('boomrace-v2')); s.owned.push('plane-9'); s.car='plane-9'; localStorage.setItem('boomrace-v2', JSON.stringify(s)); });
  await p.reload(); await p.waitForTimeout(300); await p.click('#playBtn');
  await p.waitForTimeout(5000); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'plane.png') });
  const t0=Date.now();
  while(Date.now()-t0<80000){ await p.waitForTimeout(400); if(await p.evaluate(()=>!document.getElementById('endS').hidden)) break; await p.keyboard.press(Math.random()<.5?'ArrowLeft':'ArrowRight'); }
  await p.waitForTimeout(500); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'end2.png') });
  console.log('secs',(Date.now()-t0)/1000, await p.evaluate(()=>localStorage.getItem('boomrace-v2')));
  // level 60 with basic car, crash test
  await p.evaluate(()=>{ const s=JSON.parse(localStorage.getItem('boomrace-v2')); s.car='basic-0'; s.unlocked=60; localStorage.setItem('boomrace-v2', JSON.stringify(s)); });
  await p.reload(); await p.waitForTimeout(300); await p.click('#playBtn'); await p.waitForTimeout(6000);
  await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'l60.png') });
  console.log('l60 crashes', await p.evaluate(()=>__boomRace.S.crashes), 'errors', JSON.stringify(errs));
  await b.close();
})();
