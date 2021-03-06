/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parts_3dsphere_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parts/3dsphere.js */ \"./js/parts/3dsphere.js\");\n/* harmony import */ var _parts_3dsphere_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_parts_3dsphere_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _parts_contact_us_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parts/contact-us.js */ \"./js/parts/contact-us.js\");\n/* harmony import */ var _parts_contact_us_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_parts_contact_us_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swipe-listener */ \"./node_modules/swipe-listener/dist/swipe-listener.min.js\");\n/* harmony import */ var swipe_listener__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swipe_listener__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\n$(document).ready(function() {\r\n    $('.page-name').on('click', function(e) {\r\n        if (e.target.parentElement.classList.contains('active')) {\r\n            $('.wheel-container').removeClass('active')\r\n            document.querySelector('header .menu-btn').checked = false;\r\n        }\r\n    })\r\n\r\n    \r\n    $('select').niceSelect();\r\n\r\n    $(document).on('change', '#file', function(e) {\r\n        const filename = e.currentTarget.value.replace(/^.*[\\\\\\/]/, '');\r\n        $('#add-document-btn').hide();\r\n        $('#filename').text(filename);\r\n        $('#selected-file').show();\r\n\r\n        e.preventDefault();\r\n    });\r\n    $(document).on('change', '#file2', function(e) {\r\n        const filename = e.currentTarget.value.replace(/^.*[\\\\\\/]/, '');\r\n        $('#add-document-btn2').hide();\r\n        $('#filename2').text(filename);\r\n        $('#selected-file2').show();\r\n\r\n        e.preventDefault();\r\n    });\r\n    $(document).on('click', '#delete-file2', function(e) {\r\n        $('#file2').val('');\r\n        $('#add-document-btn2').show();\r\n        $('#filename2').text('');\r\n        $('#selected-file2').hide();\r\n    });\r\n    $(document).on('click', '#delete-file', function(e) {\r\n        $('#file').val('');\r\n        $('#add-document-btn').show();\r\n        $('#filename').text('');\r\n        $('#selected-file').hide();\r\n    });\r\n});\r\n\r\n$('#menu-btn').on('click', function(e) {\r\n    if (e.target.checked) {\r\n        $('.wheel-container').addClass('active')\r\n    } else {\r\n        $('.wheel-container').removeClass('active')\r\n    }\r\n});\r\n\r\n\r\n\r\n//START SWIPE SWITCHER\r\nif (document.querySelector('.wheel-container') != null) {\r\n    function enableSwipeSwitcher() {\r\n        window.currentCardNumber = 0;\r\n        var container = document.querySelector('.wheel-container');\r\n        var listener = swipe_listener__WEBPACK_IMPORTED_MODULE_2___default()(container);\r\n        container.addEventListener('swipe', function (e) {\r\n            var destination = { index: 0 };\r\n            var directions = e.detail.directions;\r\n            var pages = document.querySelectorAll('.wheel-page')\r\n            pages.forEach((elem, index) => {\r\n                if (elem.classList.contains('active')) {\r\n                    if (index == 0 && directions.bottom || index == pages.length - 1 && directions.top){\r\n                        destination.index = index;\r\n                    } else {\r\n                        if (directions.bottom) {\r\n                            destination.index = index - 1;\r\n                        }\r\n                        else if (directions.top) {\r\n                            destination.index = index + 1;\r\n                        }\r\n                        else if (directions.left) {\r\n                            destination.index = index;\r\n                            $('#menu-btn').click();\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n            destination.index += 2\r\n            myFullpage.moveTo(destination.index)\r\n        });\r\n    }\r\n\r\n    enableSwipeSwitcher();\r\n}\r\n//END SWIPE SWITCHER\r\n\r\n\r\n//START LEVEL CARDS\r\nwindow.switchAdvantage = (num) => {\r\n    let activeAdvantage = document.querySelector('.advantages-list').children[parseInt(num)];\r\n    switchCurrentLevelCard(activeAdvantage.getAttribute(\"data-advantage\"));\r\n};\r\nvar switchCurrentLevelCard = window.switchCurrentLevelCard = function (num) {\r\n    num = parseInt(num);\r\n    window.currentCardNumber = num;\r\n    let advantages = document.querySelector('.advantages-list').children;\r\n    let cards = document.querySelectorAll('.card');\r\n    let buffer = [];\r\n    for (let i = num; i < cards.length + num; i++) {\r\n        if (advantages.item(i - num).classList.contains('active')) {\r\n            advantages.item(i - num).classList.remove('active');\r\n        }\r\n        if (i < cards.length) {\r\n            buffer.push(cards.item(i));\r\n        } else {\r\n            buffer.push(cards.item(i - cards.length));\r\n        }\r\n    }\r\n    for (let i = 0; i < cards.length; i++) {\r\n        if (cards.item(i).classList.contains('active'))\r\n            cards.item(i).classList.remove('active');\r\n    }\r\n    document.querySelector('[data-card=\"' + num + '\"]').classList.add('active');\r\n    if (buffer.length != 0) document.querySelector('[data-advantage=\"' + buffer[0].getAttribute(\"data-card\") + \r\n    '\"]').classList.add('active');\r\n    let colorGamaLight\r\n    ($('html').attr('data-theme') == 'dark') ?  colorGamaLight = '255, 255, 255,' : colorGamaLight = '0, 0, 0,'\r\n    buffer.forEach((elem, i) => {\r\n        elem.style.transform = \"matrix3d(1, 0, 0, 0.0000, 0, 1, 0, 0.0001, 0, 0, 1, 0, \" + (i * 100 + 13) + \", \" + i * 100 + \", 0, 1)\";\r\n        elem.style.color = \"rgba(\" + colorGamaLight + (1 - i / cards.length) + \")\";\r\n        elem.style.zIndex = cards.length - i;\r\n    });\r\n}\r\n//END LEVEL CARDS\r\n\r\n\r\n//START Last Page Dynamic Name\r\nfunction changePageName() {\r\n    let navLinks = document.querySelectorAll('.link-to-contact-us');\r\n    for (let i = 0; i < navLinks.length; i++) {\r\n        navLinks.item(i).addEventListener('click', (e) => {\r\n            document.querySelector('#wheel-page-8 .page-name').innerText = e.target.innerText;\r\n        });\r\n    }\r\n}\r\n\r\nchangePageName();\r\n//END Last Page Dynamic Name\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/parts/3dsphere.js":
/*!******************************!*\
  !*** ./js/parts/3dsphere.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.addEventListener(\"load\", windowLoadHandler, false);\r\nvar sphereRad = 200;\r\nvar radius_sp=1.5;\r\n//for debug messages\r\nvar Debugger = function() { };\r\nDebugger.log = function(message) {\r\n    try {\r\n        console.log(message);\r\n    }\r\n    catch (exception) {\r\n        return;\r\n    }\r\n}\r\n\r\nfunction windowLoadHandler() {\r\n    canvasApp(\"#ffffff\");\r\n}\r\n\r\nfunction canvasSupport() {\r\n    return Modernizr.canvas;\r\n}\r\nlet theme;\r\nlet timer;\r\n\r\nfunction canvasApp() {\r\n    if (!canvasSupport()) {\r\n        return;\r\n    }\r\n\r\n    var theCanvas = document.getElementById(\"canvasOne\");\r\n    var context = theCanvas.getContext(\"2d\");\r\n\r\n    var displayWidth;\r\n    var displayHeight;\r\n    var wait;\r\n    var count;\r\n    var numToAddEachFrame;\r\n    var particleList;\r\n    var recycleBin;\r\n    var particleAlpha;\r\n    var r,g,b;\r\n    var fLen;\r\n    var m;\r\n    var projCenterX;\r\n    var projCenterY;\r\n    var zMax;\r\n    var turnAngle;\r\n    var turnSpeed;\r\n    var sphereCenterX, sphereCenterY, sphereCenterZ;\r\n    var particleRad;\r\n    var zeroAlphaDepth;\r\n    var randAccelX, randAccelY, randAccelZ;\r\n    var gravity;\r\n    var rgbString;\r\n    //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.\r\n    var p;\r\n    var outsideTest;\r\n    var nextParticle;\r\n    var sinAngle;\r\n    var cosAngle;\r\n    var rotX, rotZ;\r\n    var depthAlphaFactor;\r\n    var i;\r\n    var theta, phi;\r\n    var x0, y0, z0;\r\n\r\n    init();\r\n\r\n    function init() {\r\n        wait = 1;\r\n        count = wait - 1;\r\n        numToAddEachFrame = 8;\r\n\r\n        //particle color\r\n        theme = document.getElementById(\"html\").getAttribute('data-theme');\r\n        r = theme == 'light'  ?  248 :  0;\r\n        g = theme == 'light'  ?  234 :  138;\r\n        b = theme == 'light'  ?  28 :  211;\r\n\r\n        rgbString = \"rgba(\"+r+\",\"+g+\",\"+b+\",\"; //partial string for color which will be completed by appending alpha value.\r\n        console.log(rgbString)\r\n        particleAlpha = 1; //maximum alpha\r\n\r\n        displayWidth = theCanvas.width;\r\n        displayHeight = theCanvas.height;\r\n\r\n        fLen = 320; //represents the distance from the viewer to z=0 depth.\r\n\r\n        //projection center coordinates sets location of origin\r\n        projCenterX = displayWidth/2;\r\n        projCenterY = displayHeight/2;\r\n\r\n        //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).\r\n        zMax = fLen-2;\r\n\r\n        particleList = {};\r\n        recycleBin = {};\r\n\r\n        //random acceleration factors - causes some random motion\r\n        randAccelX = 0.1;\r\n        randAccelY = 0.1;\r\n        randAccelZ = 0.1;\r\n\r\n        gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.\r\n\r\n        particleRad = 2.5;\r\n\r\n        sphereCenterX = 0;\r\n        sphereCenterY = 0;\r\n        sphereCenterZ = -3 - sphereRad;\r\n\r\n        //alpha values will lessen as particles move further back, causing depth-based darkening:\r\n        zeroAlphaDepth = -750;\r\n\r\n        turnSpeed = 2*Math.PI/1200; //the sphere will rotate at this speed (one complete rotation every 1600 frames).\r\n        turnAngle = 0; //initial angle\r\n\r\n        timer = setInterval(onTimer, 10/24);\r\n    }\r\n\r\n    function onTimer() {\r\n       \r\n        //if enough time has elapsed, we will add new particles.\r\n        count++;\r\n        if (count >= wait) {\r\n\r\n            count = 0;\r\n            for (i = 0; i < numToAddEachFrame; i++) {\r\n                theta = Math.random()*2*Math.PI;\r\n                phi = Math.acos(Math.random()*2-1);\r\n                x0 = sphereRad*Math.sin(phi)*Math.cos(theta);\r\n                y0 = sphereRad*Math.sin(phi)*Math.sin(theta);\r\n                z0 = sphereRad*Math.cos(phi);\r\n\r\n                //We use the addParticle function to add a new particle. The parameters set the position and velocity components.\r\n                //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after\r\n                //it becomes unstuck).\r\n                var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002*x0, 0.002*y0, 0.002*z0);\r\n\r\n                //we set some \"envelope\" parameters which will control the evolving alpha of the particles.\r\n                p.attack = 50;\r\n                p.hold = 50;\r\n                p.decay = 100;\r\n                p.initValue = 0;\r\n                p.holdValue = particleAlpha;\r\n                p.lastValue = 0;\r\n\r\n                //the particle will be stuck in one place until this time has elapsed:\r\n                p.stuckTime = 90 + Math.random()*20;\r\n\r\n                p.accelX = 0;\r\n                p.accelY = gravity;\r\n                p.accelZ = 0;\r\n            }\r\n        }\r\n\r\n        //update viewing angle\r\n        turnAngle = (turnAngle + turnSpeed) % (2*Math.PI);\r\n        sinAngle = Math.sin(turnAngle);\r\n        cosAngle = Math.cos(turnAngle);\r\n\r\n        //background fill\r\n        theme = document.getElementById(\"html\").getAttribute('data-theme');\r\n        context.fillStyle = theme == 'light' ? \"#ffffff\" : theme == 'dark' ? \"#000000\" : \"#ffffff\";\r\n        context.fillRect(0,0,displayWidth,displayHeight);\r\n        let rgbStroke = theme == 'light' ? \"rgba(215,215,215,\" : theme == 'dark' ? \"rgba(51,51,51,\" : \"rgba(215,215,215,\" ;\r\n        context.fillStyle = rgbStroke + depthAlphaFactor*p.alpha + \")\";\r\n\r\n        //update and draw particles\r\n        p = particleList.first;\r\n        while (p != null) {\r\n            //before list is altered record next particle\r\n            nextParticle = p.next;\r\n\r\n            //update age\r\n            p.age++;\r\n\r\n            //if the particle is past its \"stuck\" time, it will begin to move.\r\n            if (p.age > p.stuckTime) {\r\n                p.velX += p.accelX + randAccelX*(Math.random()*2 - 1);\r\n                p.velY += p.accelY + randAccelY*(Math.random()*2 - 1);\r\n                p.velZ += p.accelZ + randAccelZ*(Math.random()*2 - 1);\r\n\r\n                p.x += p.velX;\r\n                p.y += p.velY;\r\n                p.z += p.velZ;\r\n            }\r\n\r\n            /*\r\n            We are doing two things here to calculate display coordinates.\r\n            The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for\r\n            x and z (but the y coordinate will not change).\r\n            Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.\r\n            */\r\n            rotX =  cosAngle*p.x + sinAngle*(p.z - sphereCenterZ);\r\n            rotZ =  -sinAngle*p.x + cosAngle*(p.z - sphereCenterZ) + sphereCenterZ;\r\n            m =radius_sp* fLen/(fLen - rotZ);\r\n            p.projX = rotX*m + projCenterX;\r\n            p.projY = p.y*m + projCenterY;\r\n\r\n            //update alpha according to envelope parameters.\r\n            if (p.age < p.attack+p.hold+p.decay) {\r\n                if (p.age < p.attack) {\r\n                    p.alpha = (p.holdValue - p.initValue)/p.attack*p.age + p.initValue;\r\n                }\r\n                else if (p.age < p.attack+p.hold) {\r\n                    p.alpha = p.holdValue;\r\n                }\r\n                else if (p.age < p.attack+p.hold+p.decay) {\r\n                    p.alpha = (p.lastValue - p.holdValue)/p.decay*(p.age-p.attack-p.hold) + p.holdValue;\r\n                }\r\n            }\r\n            else {\r\n                p.dead = true;\r\n            }\r\n\r\n            //see if the particle is still within the viewable range.\r\n            if ((p.projX > displayWidth)||(p.projX<0)||(p.projY<0)||(p.projY>displayHeight)||(rotZ>zMax)) {\r\n                outsideTest = true;\r\n            }\r\n            else {\r\n                outsideTest = false;\r\n            }\r\n\r\n            if (outsideTest||p.dead) {\r\n                recycle(p);\r\n            }\r\n\r\n            else {\r\n                //depth-dependent darkening\r\n                depthAlphaFactor = (1-rotZ/zeroAlphaDepth);\r\n                depthAlphaFactor = (depthAlphaFactor > 1) ? 1 : ((depthAlphaFactor<0) ? 0 : depthAlphaFactor);\r\n\r\n                let rgbStroke = theme == 'light' ? \"rgba(215,215,215,\" : theme == 'dark' ? \"rgba(51,51,51,\" : \"rgba(215,215,215,\" ;\r\n                context.fillStyle = rgbStroke + depthAlphaFactor*p.alpha + \")\";\r\n\r\n                //draw\r\n                context.beginPath();\r\n                context.arc(p.projX, p.projY, m*particleRad, 0, 2*Math.PI, false);\r\n                context.closePath();\r\n                context.fill();\r\n            }\r\n\r\n            p = nextParticle;\r\n        }\r\n    }\r\n\r\n    function addParticle(x0,y0,z0,vx0,vy0,vz0) {\r\n        var newParticle;\r\n        var color;\r\n\r\n        //check recycle bin for available drop:\r\n        if (recycleBin.first != null) {\r\n            newParticle = recycleBin.first;\r\n            //remove from bin\r\n            if (newParticle.next != null) {\r\n                recycleBin.first = newParticle.next;\r\n                newParticle.next.prev = null;\r\n            }\r\n            else {\r\n                recycleBin.first = null;\r\n            }\r\n        }\r\n        //if the recycle bin is empty, create a new particle (a new ampty object):\r\n        else {\r\n            newParticle = {};\r\n        }\r\n\r\n        //add to beginning of particle list\r\n        if (particleList.first == null) {\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n            newParticle.next = null;\r\n        }\r\n        else {\r\n            newParticle.next = particleList.first;\r\n            particleList.first.prev = newParticle;\r\n            particleList.first = newParticle;\r\n            newParticle.prev = null;\r\n        }\r\n\r\n        //initialize\r\n        newParticle.x = x0;\r\n        newParticle.y = y0;\r\n        newParticle.z = z0;\r\n        newParticle.velX = vx0;\r\n        newParticle.velY = vy0;\r\n        newParticle.velZ = vz0;\r\n        newParticle.age = 0;\r\n        newParticle.dead = false;\r\n        if (Math.random() < 0.5) {\r\n            newParticle.right = true;\r\n        }\r\n        else {\r\n            newParticle.right = false;\r\n        }\r\n        return newParticle;\r\n    }\r\n\r\n    function recycle(p) {\r\n        //remove from particleList\r\n        if (particleList.first == p) {\r\n            if (p.next != null) {\r\n                p.next.prev = null;\r\n                particleList.first = p.next;\r\n            }\r\n            else {\r\n                particleList.first = null;\r\n            }\r\n        }\r\n        else {\r\n            if (p.next == null) {\r\n                p.prev.next = null;\r\n            }\r\n            else {\r\n                p.prev.next = p.next;\r\n                p.next.prev = p.prev;\r\n            }\r\n        }\r\n        //add to recycle bin\r\n        if (recycleBin.first == null) {\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n            p.next = null;\r\n        }\r\n        else {\r\n            p.next = recycleBin.first;\r\n            recycleBin.first.prev = p;\r\n            recycleBin.first = p;\r\n            p.prev = null;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/parts/3dsphere.js?");

/***/ }),

/***/ "./js/parts/contact-us.js":
/*!********************************!*\
  !*** ./js/parts/contact-us.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//START FORM LISTENERS\r\n\r\nfunction addFormListeners () {\r\n    let forms = document.querySelectorAll(\"form\");\r\n    for (let i = 0; i < forms.length; i++) {\r\n        let form = forms.item(i);\r\n        form.addEventListener('submit', (e) => {\r\n            e.preventDefault();\r\n                sendForm(form);\r\n        });\r\n    }\r\n}\r\n\r\nfunction sendForm (form) {\r\n    let formData = new FormData(form);\r\n    formData.append('contact_type', form.getAttribute(\"data-contact-type\"));\r\n    let action = form.getAttribute(\"action\");\r\n    var http = new XMLHttpRequest();\r\n    http.open(\"POST\", action, true);\r\n    http.send(formData);\r\n    if (http.status != 200) {\r\n        // $('.toast').toast('show', {\r\n        //     delay: 3000\r\n        // });\r\n        // $(\"#contact-form\").trigger('reset')\r\n    } else {\r\n\r\n    }\r\n    form.reset();\r\n    http.onload = function() {\r\n      \r\n    }\r\n}\r\n\r\naddFormListeners()\r\n// new_proj_form\r\n// careers_form\r\n// something_form\r\n//END FORM LISTENERS\n\n//# sourceURL=webpack:///./js/parts/contact-us.js?");

/***/ }),

/***/ "./node_modules/swipe-listener/dist/swipe-listener.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/swipe-listener/dist/swipe-listener.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},SwipeListener=function(a,b){if(a){'undefined'!=typeof window&&function(){function a(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var c=document.createEvent('CustomEvent');return c.initCustomEvent(a,b.bubbles,b.cancelable,b.detail),c}return'function'!=typeof window.CustomEvent&&void(a.prototype=window.Event.prototype,window.CustomEvent=a)}();b||(b={}),b=_extends({},{minHorizontal:10,minVertical:10,deltaHorizontal:3,deltaVertical:5,preventScroll:!1,lockAxis:!0,touch:!0,mouse:!0},b);var c=[],d=!1,e=function(){d=!0},f=function(a){d=!1,h(a)},g=function(a){d&&(a.changedTouches=[{clientX:a.clientX,clientY:a.clientY}],i(a))};b.mouse&&(a.addEventListener('mousedown',e),a.addEventListener('mouseup',f),a.addEventListener('mousemove',g));var h=function(d){var e=Math.abs,f=Math.max,g=Math.min;if(c.length){for(var h='function'==typeof TouchEvent&&d instanceof TouchEvent,j=[],k=[],l={top:!1,right:!1,bottom:!1,left:!1},m=0;m<c.length;m++)j.push(c[m].x),k.push(c[m].y);var i=j[0],n=j[j.length-1],o=k[0],p=k[k.length-1],q={x:[i,n],y:[o,p]};if(1<c.length){var r={detail:_extends({touch:h},q)},s=new CustomEvent('swiperelease',r);a.dispatchEvent(s)}var t=j[0]-j[j.length-1],u='none';u=0<t?'left':'right';var v,w=g.apply(Math,j),x=f.apply(Math,j);if(e(t)>=b.minHorizontal&&('left'==u?(v=e(w-j[j.length-1]),v<=b.deltaHorizontal&&(l.left=!0)):'right'==u?(v=e(x-j[j.length-1]),v<=b.deltaHorizontal&&(l.right=!0)):void 0),t=k[0]-k[k.length-1],u='none',u=0<t?'top':'bottom',w=g.apply(Math,k),x=f.apply(Math,k),e(t)>=b.minVertical&&('top'==u?(v=e(w-k[k.length-1]),v<=b.deltaVertical&&(l.top=!0)):'bottom'==u?(v=e(x-k[k.length-1]),v<=b.deltaVertical&&(l.bottom=!0)):void 0),(c=[],l.top||l.right||l.bottom||l.left)){b.lockAxis&&((l.left||l.right)&&e(i-n)>e(o-p)?l.top=l.bottom=!1:(l.top||l.bottom)&&e(i-n)<e(o-p)&&(l.left=l.right=!1));var y={detail:_extends({directions:l,touch:h},q)},z=new CustomEvent('swipe',y);a.dispatchEvent(z)}else{var A=new CustomEvent('swipecancel',{detail:_extends({touch:h},q)});a.dispatchEvent(A)}}},i=function(d){b.preventScroll&&d.preventDefault();var e=d.changedTouches[0];if(c.push({x:e.clientX,y:e.clientY}),1<c.length){var f=c[0].x,g=c[c.length-1].x,h=c[0].y,i=c[c.length-1].y,j={detail:{x:[f,g],y:[h,i],touch:'function'==typeof TouchEvent&&d instanceof TouchEvent}},k=new CustomEvent('swiping',j);a.dispatchEvent(k)}},j=!1;try{var k=Object.defineProperty({},'passive',{get:function(){j={passive:!b.preventScroll}}});window.addEventListener('testPassive',null,k),window.removeEventListener('testPassive',null,k)}catch(a){}return b.touch&&(a.addEventListener('touchmove',i,j),a.addEventListener('touchend',h)),{off:function(){a.removeEventListener('touchmove',i,j),a.removeEventListener('touchend',h),a.removeEventListener('mousedown',e),a.removeEventListener('mouseup',f),a.removeEventListener('mousemove',g)}}}}; true&&'undefined'!=typeof module.exports?(module.exports=SwipeListener,module.exports.default=SwipeListener): true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return SwipeListener}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;\n\n//# sourceURL=webpack:///./node_modules/swipe-listener/dist/swipe-listener.min.js?");

/***/ })

/******/ });