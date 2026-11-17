const { chromium } = require('D:/Projects/ronit-agent/tools/playwright/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 400, height: 780 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file:///D:/kids-game-projects/boom-race/index.html');
  await p.evaluate(()=>localStorage.setItem('boomrace-v2', JSON.stringify({money:100,owned:['basic-0'],car:'basic-0',stars:{},unlocked:30})));
  await p.reload(); await p.waitForTimeout(300); await p.click('#playBtn');
  let shot=false; const t0=Date.now();
  while(Date.now()-t0<90000){ await p.waitForTimeout(350);
    const s = await p.evaluate(()=>({end:!document.getElementById('endS').hidden, lost:__boomRace.S.lost}));
    if(s.lost>0 && !shot){ shot=true; await p.waitForTimeout(150); await p.screenshot({path: require('path').join(require('os').tmpdir(), 'minus.png')}); }
    if(s.end) break; await p.keyboard.press(Math.random()<.5?'ArrowLeft':'ArrowRight'); }
  await p.waitForTimeout(500); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'end3.png') });
  console.log(await p.textContent('#endMoney'), '|', await p.evaluate(()=>localStorage.getItem('boomrace-v2')), 'errors', JSON.stringify(errs));
  await b.close();
})();
