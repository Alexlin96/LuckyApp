/* eslint-disable */
const $ = selector => document.querySelector(selector)
let canvas = document.getElementById('background');

const hiddenProperty = 'hidden' in document? 'hidden': 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden': null

const DIRECTIONS = {
	UP: 'UP',
	DOWN: 'DOWN',
	LEFT: 'LEFT',
	RIGHT: 'RIGHT',
	UNDIRECTED: 'UNDIRECTED'
}
const isPhone = /Mobile|Android|iOS|iPhone|iPad|iPod|Windows Phone|KFAPWI/i.test(navigator.userAgent)

window.switchPage = {
  switched: false
}

let signatureEl = {}

// 是否完成加载
const isLoaded = {
  loadIntro: false,
  loadAll: false,
  loadMain: false
}

function getMoveDirection(startx, starty, endx, endy) {
	if (!isPhone) {
		return
	}

	const angx = endx - startx
	const angy = endy - starty

	if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
		return DIRECTIONS.UNDIRECTED
	}

	const getAngle = (angx, angy) => (Math.atan2(angy, angx) * 180) / Math.PI

	const angle = getAngle(angx, angy)
	if (angle >= -135 && angle <= -45) {
		return DIRECTIONS.UP
	} else if (angle > 45 && angle < 135) {
		return DIRECTIONS.DOWN
	} else if (
		(angle >= 135 && angle <= 180) ||
		(angle >= -180 && angle < -135)
	) {
		return DIRECTIONS.LEFT
	} else if (angle >= -45 && angle <= 45) {
		return DIRECTIONS.RIGHT
	}

	return DIRECTIONS.UNDIRECTED
}

function loadIntro() {
	if (document[hiddenProperty] || isLoaded.loadIntro) {
		return
  }
	setTimeout(() => {

		$('.wrap').classList.add('in')
		setTimeout(() => {
			$('.content-subtitle').innerHTML = `<span>${[...window.subtitle].join(
				'</span><span>'
			)}</span>`
		}, 270)
	}, 0)
	isLoaded.loadIntro = true
}

function switchPage() {
	if (window.switchPage.switched) {
		return
	}
	const DOM = {
		intro: $('.content-intro'),
		path: $('.shape-wrap path'),
		shape: $('svg.shape')
	}
	DOM.shape.style.transformOrigin = '50% 0%'

	anime({
		targets: DOM.intro,
		duration: 1100,
		easing: 'easeInOutSine',
		translateY: '-200vh'
	})

	anime({
		targets: DOM.shape,
		scaleY: [
			{
				value: [0.8, 1.8],
				duration: 550,
				easing: 'easeInQuad'
			},
			{
				value: 1,
				duration: 550,
				easing: 'easeOutQuad'
			}
		]
	})

	anime({
		targets: DOM.path,
		duration: 1100,
		easing: 'easeOutQuad',
		d: DOM.path.getAttribute('pathdata:id'),
		complete: function (anim) {
			if (canvas) {
				// cancelAnimationFrame(animationID)
				canvas.parentElement.removeChild(canvas)
				canvas = null
			}
		}
	})

	window.switchPage.switched = true
}

function getDayLight() {
	let time = new Date()
	let hour = time.getHours() - 12
	let factor = hour ? Math.abs(hour) / hour : 1
	hour = hour + (time.getMinutes() * 60 + time.getSeconds()) / 3600

  const result = (hour / 4 - factor) * factor
	return Math.min(1, Math.max(result, 0))
}

function setLightColor() {
  $('#page').style.backgroundColor = `rgba(85,85,85,${getDayLight()})`
	new Date().getHours() < 17 && (signatureEl.style.color = '#666')
}

function typeSignature() {
	typeSignature.count = typeSignature.count || 0

	if (typeSignature.count <= signature.length) {
		signatureEl.innerHTML = `${signature.slice(0, typeSignature.count++)}|`
		setTimeout(typeSignature, 100)
	} else {
		signatureEl.innerHTML = signature
	}
}

function Messenger(el) {
	const context = this
	let countCall = 0
	let counter = 0
	let callCount = 0

	context.init = function () {
		context.codeletters = '&#*+%?￡@§$'
		context.message = 0
		context.currentLength = 0
		context.fadeBuffer = false
		context.messages = ['...']

		setTimeout(context.animateIn, 100)
	}

	context.generateRandomString = function (length) {
		let randomText = ''
		while (randomText.length < length) {
			randomText += context.codeletters.charAt(
				Math.floor(Math.random() * context.codeletters.length)
			)
		}

		return randomText
	}

	context.animateIn = function () {
		if (context.currentLength < context.messages[context.message].length) {
			context.currentLength = context.currentLength + 2
			if (context.currentLength > context.messages[context.message].length) {
				context.currentLength = context.messages[context.message].length
			}

			el.innerHTML = context.generateRandomString(context.currentLength)

			setTimeout(context.animateIn, 20)
		} else {
			if (++callCount > 2) {
				return
			}
			setTimeout(context.animateFadeBuffer, 20)
		}
	}

	context.animateFadeBuffer = function () {
		if (context.fadeBuffer === false) {
			context.fadeBuffer = []
			for (let i = 0; i < context.messages[context.message].length; i++) {
				context.fadeBuffer.push({
					c: Math.floor(Math.random() * 12) + 1,
					l: context.messages[context.message].charAt(i)
				})
			}
		}

		let doCycles = false
		let message = ''

		for (let i = 0; i < context.fadeBuffer.length; i++) {
			let fader = context.fadeBuffer[i]
			if (fader.c > 0) {
				doCycles = true
				fader.c--
				message += context.codeletters.charAt(
					Math.floor(Math.random() * context.codeletters.length)
				)
			} else {
				message += fader.l
			}
		}

		el.innerHTML = message

		if (doCycles === true) {
			if (++counter === 15) {
				typeSignature()
				countCall = 3
				return
			} else if (counter < 15) {
				setTimeout(context.animateFadeBuffer, 50)
			} else {
				return
			}
		} else {
			if (countCall > 2) {
				return
			} else if (++countCall === 2) {
				typeSignature()
			} else {
				context.cycleText()
			}
		}
	}
	context.cycleText = function () {
		context.message = context.message + 1
		if (context.message >= context.messages.length) {
			context.message = 0
		}

		context.currentLength = 0
		context.fadeBuffer = false
		el.innerHTML = ''

		setTimeout(context.animateIn, 200)
	}

	context.init()
}

function loadMain() {
	if (isLoaded.loadMain) {
		return
	}
	setLightColor()
	setTimeout(() => {
		$('.card-inner').classList.add('in')
		new Messenger(signatureEl)
	}, 400)
	isLoaded.loadMain = true
}

function loadAll() {
	if (isLoaded.loadAll) {
		return
	}
	switchPage()
	loadMain()
	isLoaded.loadAll= true
}

function touchstartFn(e) {
  window.startx = e.touches[0].pageX
  window.starty = e.touches[0].pageY
}

function touchendFn(e) {
  let endx, endy
  endx = e.changedTouches[0].pageX
  endy = e.changedTouches[0].pageY
  const direction = getMoveDirection(window.startx, window.starty, endx, endy)
  if (direction !== DIRECTIONS.UP) {
    return
  }
  loadAll()
}

const visibilityChangeEvent = hiddenProperty.replace(/hidden/i,'visibilitychange')

export const home = () => {
  signatureEl = $('#signature')
  isLoaded.loadIntro = false
  isLoaded.loadAll = false
  isLoaded.loadMain = false
  window.switchPage.switched = false
  loadIntro()
  window.addEventListener(visibilityChangeEvent, loadIntro)
  window.addEventListener('DOMContentLoaded', loadIntro)
  const enterEl = $('.enter')
  enterEl.addEventListener('click', loadAll)
  enterEl.addEventListener('touchenter', loadAll)
  document.body.addEventListener('mousewheel', loadAll, { passive: true })
  $('.arrow').addEventListener('mouseenter', loadAll)
  $('.arrow').addEventListener('touchend', loadAll)
  if (isPhone) {
    document.addEventListener('touchstart',touchstartFn)
    document.addEventListener('touchend', touchendFn)
  }
}

export const removeHomeEventListener = () => {
  isLoaded.loadIntro = false
  isLoaded.loadAll = false
  isLoaded.loadMain = false
  window.switchPage.switched = false
  window.removeEventListener(visibilityChangeEvent, loadIntro)
  window.removeEventListener('DOMContentLoaded', loadIntro)
  document.body.removeEventListener('mousewheel', loadAll, { passive: true })
  if (isPhone) {
    document.removeEventListener('touchstart',touchstartFn, { passive: true })
    document.removeEventListener('touchend',touchendFn, { passive: true })
  }
}
/* eslint-disable */