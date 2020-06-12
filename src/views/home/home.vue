<template>
  <div class="home">
    <div class="content content-intro">
      <div class="content-inner">
        <!-- canvas -->
        <canvas id="background"></canvas>
        <div class="wrap fade">
          <a href="https://github.com/Alexlin96" class="github-corner" aria-label="View source on GitHub" target="_blank" rel="noopener noreferrer">
            <svg width="80" height="80" viewBox="0 0 250 250" style="fill:transparent; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm" />
              <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body" />
            </svg>
          </a>
          <h2 class="content-title">Alexlin Room</h2>
          <h3 class="content-subtitle" original-content="欢迎访问alexlin空间">&nbsp;</h3>
          <a class="enter">进入</a>
          <div class="arrow arrow-1"></div>
          <div class="arrow arrow-2"></div>
        </div>
      </div>
      <div class="shape-wrap">
        <svg class="shape" width="100%" height="100vh" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns:pathdata="http://www.codrops.com/">
          <path d="M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z" pathdata:id="M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z" />
        </svg>
      </div>
    </div>
    <div class="content content-main">
      <div id="page">
        <div id="card">
          <div class="card-inner fade">
            <header>
              <img src="https://cdn.jsdelivr.net/gh/Alexlin96/images/home/avatar.jpg" width="80" height="80" alt="avatar">
              <h1 data-translate="name">Alexlin</h1>
              <h2 id="signature" data-translate="signature" original-content="Everything Is Possible"></h2>
            </header>
            <ul>
              <li id="whole-first" @click.stop="goAppFn">
                <a href="javascript:;" aria-label="APP">
                  <i class="icon icon-bokeyuan"></i>
                  <span data-translate="APP">APP</span>
                </a>
              </li>
              <li id="whole-second">
                <a href="#" aria-label="Wechat">
                  <i class="icon icon-wechat"></i>
                  <img src="https://cdn.jsdelivr.net/gh/Alexlin96/images/home/wechat.jpg" height="200" width="200" alt="Wechat">
                </a>
              </li>
              <li id="half-first">
                <a href="#" aria-label="Contact me">
                  <i class="icon icon-email"></i>
                  <span data-translate="Contact me">Contact me</span>
                </a>
              </li>
              <li id="quarter-first" class="quarter">
                <a href="#" aria-label="Wechat">
                  <i class="icon icon-wechat"></i>
                  <span data-translate="Wechat">Wechat</span>
                </a>
              </li>
              <li id="quarter-second" class="quarter" @click="goGithubFn">
                <a href="javascript:;" aria-label="Github">
                  <i class="icon icon-github"></i>
                  <span data-translate="Github">Github</span>
                </a>
              </li>
              <li id="quarter-third" class="quarter">
                <a href="#" aria-label="Twitter">
                  <i class="icon icon-twitter"></i>
                  <span data-translate="Twitter">Twitter</span>
                </a>
              </li>
              <li id="quarter-fourth" class="quarter">
                <a href="javascript:;" aria-label="other">
                  <i class="icon icon-other"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import homeConfig from './homeConfig.js'
import { home, removeHomeEventListener } from './home.js'
import { backgroundFn, removeBackgroundEventListener } from './background.js'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      scriptLoaded: {},
      loadUrlArr: [
        'https://cdn.jsdelivr.net/npm/animejs@3.1.0/lib/anime.min.js'
      ]
    }
  },
  computed: {},
  created() {
  },
  mounted() {
    this.init()
  },
  destroyed() {
    removeHomeEventListener()
    removeBackgroundEventListener()
  },
  methods: {
    async init() {
      for (let i = 0; i < this.loadUrlArr.length; i++) {
        await this.loadScript(this.loadUrlArr[i].split('/')[this.loadUrlArr[i].split('/').length - 1], this.loadUrlArr[i])
      }
      this.$nextTick(() => {
        homeConfig()
        home()
        backgroundFn()
      })
    },
    // 加载js
    loadScript(name, url) {
      return new Promise((resolve, reject) => {
        if (typeof this.scriptLoaded[name] === 'undefined') {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.src = url
          document.body.appendChild(script)
          script.onload = () => {
            this.scriptLoaded[name] = true
            resolve({ name })
          }
          script.onerror = (error) => {
            reject(error)
          }
        } else {
          resolve()
        }
      })
    },
    // 跳转github
    goGithubFn() {
      const newPage = window.open()
      newPage.opener = null
      newPage.location = 'https://github.com/Alexlin96'
      newPage.target = '_blank'
    },
    // 跳转lucky app
    goAppFn() {
      this.$router.push({ path: '/setting' }) // 跳转
    }
  }
}
</script>
<style>
.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}
@keyframes octocat-wave {
  0%,100%{transform:rotate(0)}
  20%,60%{transform:rotate(-25deg)}
  40%,80%{transform:rotate(10deg)}
}
@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}
.content-title {
  animation: whiteShadow 1.5s ease-in-out infinite alternate;
}
@keyframes whiteShadow {
  from {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 5px #333,
      0 0 8px #333, 0 0 9px #333, 0 0 10px #333, 0 0 15px #333;
  }
  to {
    text-shadow: 0 0 0.5px #fff, 0 0 1px #fff, 0 0 1.5px #fff, 0 0 2px #333,
      0 0 4px #333, 0 0 5px #333, 0 0 6px #333, 0 0 8px #333;
  }
}

.arrow-1 {
  animation: arrow-movement 2s ease-in-out infinite;
}
.arrow-2 {
  animation: arrow-movement 2s 1s ease-in-out infinite;
}
@keyframes arrow-movement {
	0% {
		opacity: 0;
		top: 92%;
	}
	70% {
		opacity: 1;
	}
	100% {
		opacity: 0;
	}
}

.content-subtitle span{
  animation: letter-glow 0.7s 0s ease both;
}
@keyframes letter-glow {
	0% {
		opacity: 0;
		text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
	}
	66% {
		opacity: 1;
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.9);
	}
	77% {
		opacity: 1;
	}
	100% {
		opacity: 0.7;
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
	}
}

#background { position: absolute; width: 100%; height: 100%; z-index: -1; }

</style>

<style lang="less">
  @import "../../assets/css/home/variable.less";
  @import "../../assets/css/home/icon.less";
  .home {
    font-family: 'Comic Sans MS', 'Helvetica Neue', 'Microsoft Yahei',
		-apple-system, sans-serif !important;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-touch-callout: none;
    user-select: none;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: relative;
    .content {
      width: 100%;
      height: 100vh;
      position: relative;
      background-image: url('https://cdn.jsdelivr.net/gh/Alexlin96/images/background/0.jpg');
    }
    .content-intro {
      z-index: 100;
      height: 200vh;
      .content-inner {
        width: 100%;
        height: 100vh;
        position: relative;
        background: @color-content;
        .wrap {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          .content-title {
            font:@font-alt;
            color: @color-title;
            line-height: 1;
            margin-top: 0.8em;
            margin-bottom: 0.3em;
            text-shadow: rgb(69, 45, 45) 0 0 1px, rgb(255, 255, 251) 0 0 1px,rgb(255, 255, 251) 0 0 2px;
            @media screen and (max-width: 50em) {
              font-size: 2em;
            }
          }
          .content-subtitle {
            color: #fff;
            font: @font-alt;
            font-size: 1.5em;
            margin-bottom: 2em;
            text-shadow: 0 0 4px #ffffff;
          }
          .enter {
            color: @color-enter;
            letter-spacing: 3px;
            white-space: pre;
            pointer-events: auto;
            transition: all 0.4s;
            z-index: 999;
            cursor: pointer;
            &:hover, &:focus {
              color: @color-link-hover;
            }
          }
          .arrow {
            position: absolute;
            left: 49.5%;
            top: 95%;
            transform-origin: 50% 50%;
            transform: translate3d(-50%, 0%, 0);
            &:before, &:after {
              background: #fff;
              content: '';
              display: block;
              height: 3px;
              position: absolute;
              top: 0;
              left: 0;
              width: 13px;
              box-shadow: 1px 1px 20px 0px #fff;
            }
            &:before {
              transform: rotate(45deg) translateX(-10%);
              transform-origin: top left;
            }
            &:after {
              transform: rotate(-45deg) translateX(10%);
              transform-origin: top right;
            }
          }
        }
      }
    }
    .content-main {
      position: fixed;
      top: 0;
      left: 0;
      #page {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: rgba(85, 85, 85, 0);
        color: #eee;
        min-height: 100%;
        transition: background-color ease 5s;
        a {
          color: #eee;
          text-decoration: none;
          &:hover {
            color: #fff;
            text-decoration: underline;
          }
        }
      }
    }
    .shape-wrap {
      position: relative;
      z-index: 10;
      margin: -5px 0 0 0;
      will-change: scroll-position;
      .shape {
        height: 100vh;
        width: 100%;
        display: block;
        fill: rgb(30, 31, 33);
      }
    }
  }

  #card {
    position: relative;
    margin: auto;
    transition: width ease 0.5s, height ease 0.5s;
    header {
      position: relative;
      height: 105px;
      padding: 21px 0 0 100px;
      color: rgb(236, 236, 236);
      img {
        position: absolute;
        left: 0;
        top: 0;
        padding: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
      }
      h1, h2 {
        margin: 0;
        font-weight: normal;
        transform: translateY(-20px);
      }
      h1 {
        color: #222325;
        text-shadow: #676666 1px 1px 2px;
        letter-spacing: 1px;
      }
      h2 {
        margin-top: 0.1em;
        font-size: 1.1em;
        text-shadow: #888 1px 1px 2px;
        letter-spacing: 2px;
      }
    }
    ul {
      position: relative;
      padding: 0;
      transition: width ease 0.5s, height ease 0.5s;
      &:after {
        content: '';
        clear: both;
        display: block;
      }
      li {
        position: absolute;
        list-style: none;
        width: 200px;
        height: 200px;
        overflow: hidden;
        line-height: 200px;
        background-color: #888;
        text-align: center;
        font-size: 4rem;
        transition: background-color ease 0.3s, top ease 0.5s, left ease 0.5s, width ease 0.5s, height ease 0.5s;
        &#half-first {
          height: 95px;
          line-height: 95px;
          font-size: 2rem;
        }
        &.quarter {
          width: 95px;
          height: 95px;
          line-height: 95px;
          font-size: 2rem;
        }
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          &:hover {
            text-decoration: none;
          }
          span {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            font-size: 62.5%;
            transition: top ease 0.3s, opacity ease 0.3s;
          }
          i {
            display: inline-block;
            width: 100%;
            height: 100%;
            transition: opacity ease 0.3s, font-size ease 0.3s, color ease 0.3s;
          }
          &:hover i {
            opacity: 0;
            font-size: 10%;
          }
          &:hover span {
            display: block;
            top: 0;
            opacity: 1;
          }
        }
      }
    }
  }
  #quarter-first {
    &:hover {
      img {
        display: block;
        top: 0;
        opacity: 1;
      }
    }
    span {
      top: 0;
    }
    img {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 62.5%;
      transition: top ease 0.3s, opacity ease 0.3s;
    }
  }
  #whole-first {
    left: 0;
    top: 0;
    &:hover {
      background-color: #39c;
    }
  }
  #whole-second {
    &:hover {
      background-color: #d81;
      img {
        display: block;
        top: 0;
        opacity: 1;
      }
    }
    img {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      font-size: 62.5%;
      transition: top ease 0.3s, opacity ease 0.3s;
    }
  }
  #quarter-second {
    &:hover {
      background-color: #333;
    }
  }
  #quarter-third {
    &:hover {
      background-color: #dd4b39;
    }
  }
  #quarter-fourth {
    &:hover {
      background-color: #fff;
      i {
        opacity: 1;
        font-size: inherit;
        color: #888;
      }
    }
  }
  #half-first {
    &:hover {
      background-color: #595;
    }
  }

  @media screen and (min-width: 801px) {
    #card {
      width: 725px;
      ul {
        width: 725px;
        height: 200px;
        transition: width ease 0.5s;
      }
      header {
        position: absolute;
        top: -105px;
      }
    }
    #whole-second {
      left: 210px;
      top: 0;
    }
    #half-first {
      left: 420px;
      top: 0;
    }
    #quarter-first {
      left: 630px;
      top: 0;
    }
    #quarter-second {
      left: 420px;
      top: 105px;
    }
    #quarter-third {
      left: 525px;
      top: 105px;
    }
    #quarter-fourth {
      left: 630px;
      top: 105px;
    }
  }

  @media screen and (min-width: 641px) and (max-width: 800px) {
    #card,
    #card ul {
      transition: width ease 0.5s;
    }
  }

  @media screen and (min-width: 551px) and (max-width: 800px) {
    #card {
      width: 515px;
      ul {
        width: 515px;
        height: 305px;
      }
    }
    #whole-second {
      left: 210px;
      top: 0;
    }
    #card li#half-first {
      left: 0;
      top: 210px;
      width: 305px;
    }
    #quarter-first {
      left: 315px;
      top: 210px;
    }
    #quarter-second {
      left: 420px;
      top: 0;
    }
    #quarter-third {
      left: 420px;
      top: 105px;
    }
    #quarter-fourth {
      left: 420px;
      top: 210px;
    }
  }

  @media screen and (min-width: 451px) and (max-width: 550px) {
    #card {
      width: 410px;
      ul {
        width: 410px;
        height: 410px;
      }
    }
    #whole-second {
      left: 210px;
      top: 0;
    }
    #card li#half-first {
      left: 0;
      top: 210px;
      width: 410px;
    }
    #quarter-first {
      left: 210px;
      top: 315px;
    }
    #quarter-second {
      left: 0;
      top: 315px;
    }
    #quarter-third {
      left: 105px;
      top: 315px;
    }
    #quarter-fourth {
      left: 315px;
      top: 315px;
    }
  }

  @media screen and (max-width: 480px) {
    #card,
    #card ul {
      transition: none;
    }
  }

  @media screen and (max-width: 450px) {
    #card {
      width: 100%;
      height: 100%;
      padding: 10px;
      ul {
        width: 0;
        height: 0;
        padding: 50%;
        li {
          width: 49%;
          height: 49%;
        }
        li#half-first {
          width: 100%;
          height: 23.5%;
        }
        li.quarter {
          width: 23.5%;
          height: 23.5%;
        }
        li a {
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    #whole-second {
      left: 51%;
      top: 0;
    }
    #card li#half-first {
      left: 0;
      top: 51%;
    }
    #quarter-first {
      left: 51%;
      top: 76.5%;
    }
    #quarter-second {
      left: 0;
      top: 76.5%;
    }
    #quarter-third {
      left: 25.5%;
      top: 76.5%;
    }
    #quarter-fourth {
      left: 76.5%;
      top: 76.5%;
    }
  }

  @media screen and (max-width: 320px) {
    #card ul li {
      line-height: 147px;
    }
    #card ul #half-first {
      line-height: 70px;
    }
    #card li.quarter {
      line-height: 70px;
    }
  }
</style>
