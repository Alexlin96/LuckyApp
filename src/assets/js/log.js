/* 控制台 */
/* eslint-disable */
(function() {
  if (window.console && window.console.log) {
    console.log(
      '\n %c Alexlin空间 %c http://linzhiqiang96.com \n',
      'color:#FFFFFB;background:#ffa628;padding:5px 0;border-radius:.5rem 0 0 .5rem;',
      'background: #efefef;padding:5px 0 5px;border-radius:0 .5rem .5rem 0;'
    )
    console.log(
      `%c页面加载消耗了 ${(
        Math.round(performance.now() * 100) /
				100 /
				1000
      ).toFixed(2)}s`,
      'background: #fff;color: #333;text-shadow: 0 0 2px #eee, 0 0 3px #eee, 0 0 3px #eee, 0 0 2px #eee, 0 0 3px #eee;'
    )
    if (!localStorage.getItem('alexlin_access')) {
      localStorage.setItem('alexlin_access', new Date().getTime())
    }
    const _access = new Date(parseInt(localStorage.getItem('alexlin_access')))
    const access = `${_access.getFullYear()}年${_access.getMonth() +
			1}月${_access.getDate()}日`
    let i = 0
    if (!localStorage.getItem('alexlin_hit')) {
      localStorage.setItem('alexlin_hit', 0)
    } else {
      i = parseInt(localStorage.getItem('alexlin_hit'))
    }
    localStorage.setItem('alexlin_hit', ++i)
    console.log(
      `这是你自 ${access} 以来第 ${i} 次在本站打开控制台，欢迎访问~`
    )
    const img = `https://cdn.jsdelivr.net/gh/Alexlin96/images/console/${i % 6}.png`
    console.log('%c ', '\n  background:url('.concat(img, ') no-repeat center;\n  background-size:200px;\n  margin:5px 0;\n  padding:0 0 100px 200px;\n  border-radius:10px;\n  overflow:hidden;\n  '))
  }
})()
/* eslint-disable */
