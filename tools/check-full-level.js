const { chromium } = require('D:/Projects/ronit-agent/tools/playwright/node_modules/playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 400, height: 780 } });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file:///D:/kids-game-projects/boom-race/index.html');
  await p.evaluate(()=>localStorage.setItem('boomrace-v2', JSON.stringify({money:60,owned:['basic'],car:'basic',stars:{},unlocked:1})));
  await p.reload(); await p.waitForTimeout(400); await p.click('#playBtn');
  await p.evaluate(()=>{ __boomRace.S.hearts = 999; });
  const t0 = Date.now(); let jumped=false;
  while (Date.now() - t0 < 70000) {
    await p.waitForTimeout(300);
    const st = await p.evaluate(()=>({air:__boomRace.S.p.air, end:!document.getElementById('endS').hidden}));
    if (st.air>0 && !jumped){ jumped=true; await p.screenshot({path: require('path').join(require('os').tmpdir(), 'jump.png')}); }
    if (st.end) break;
    await p.keyboard.press(Math.random()<.5?'ArrowLeft':'ArrowRight');
  }
  await p.waitForTimeout(700); await p.screenshot({ path: require('path').join(require('os').tmpdir(), 'win.png') });
  console.log('secs', (Date.now()-t0)/1000, 'jumped', jumped, await p.evaluate(()=>localStorage.getItem('boomrace-v2')));
  await p.click('#nextBtn'); await p.waitForTimeout(1500);
  console.log('level chip:', await p.textContent('#levelChip'), 'errors:', JSON.stringify(errs));
  await b.close();
})();
