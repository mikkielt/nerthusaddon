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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/chat/chat-basic-commands.js":
/*!*****************************************!*\
  !*** ./src/chat/chat-basic-commands.js ***!
  \*****************************************/
/*! exports provided: initBasicChatCommands */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBasicChatCommands\", function() { return initBasicChatCommands; });\n/* harmony import */ var _chat_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat-manager */ \"./src/chat/chat-manager.js\");\n\n\nfunction makeDialogTextWithSpeaker(str)\n{\n    str = str.split(\" \").slice(1).join(\" \").split(\",\")\n    return \"«\" + str[0] + \"» \" + str.slice(1).join(\",\")\n}\n\nfunction nar1(ch)\n{\n    ch.s = \"nar\"\n    ch.n = \"\"\n    ch.t = ch.t.replace(/^\\*nar1? /,\"\")\n    return ch\n}\n\n\nfunction nar2(ch)\n{\n    ch.s = \"nar2\"\n    ch.n = \"\"\n    ch.t = ch.t.replace(/^\\*nar2 /,\"\")\n    return ch\n}\n\nfunction nar3(ch)\n{\n    ch.s = \"nar3\"\n    ch.n = \"\"\n    ch.t = ch.t.replace(/^\\*nar3 /,\"\")\n    return ch\n}\n\nfunction dial1(ch)\n{\n    ch.s = \"dial1\"\n    ch.n = \"\"\n    ch.t = makeDialogTextWithSpeaker(ch.t)\n    return ch\n}\n\nfunction dial2(ch)\n{\n    ch.s = \"dial2\"\n    ch.n = \"\"\n    ch.t = makeDialogTextWithSpeaker(ch.t)\n    return ch\n}\n\nfunction dial3(ch)\n{\n    ch.s =\"dial3\"\n    ch.n =\"\"\n    ch.t = makeDialogTextWithSpeaker(ch.t)\n    return ch\n}\n\nfunction dial666(ch)\n{\n    ch.s =\"dial666\"\n    ch.n =\"\"\n    ch.t = nerthus.chatCmd.makeDialogTextWithSpeaker(ch.t)\n    return ch\n}\n\n\n\nfunction sys(ch)\n{\n    ch.s=\"sys_comm\"\n    ch.n=\"\"\n    ch.t=ch.t.replace(/^\\*sys /,\"\")\n    return ch\n}\n//\n// function map(ch)\n// {\n//     const cmd = ch.t.split(\" \").slice(1).join(\" \").split(\",\")\n//     const map_url = cmd[0]\n//     const map_id = cmd[1]\n//     if (map_id)\n//         nerthus.worldEdit.changeMap(map_url, 2, map_id)\n//     else\n//         nerthus.worldEdit.changeMap(map_url, 1)\n//\n//     return false\n// }\n//\n// function resetMap(ch)\n// {\n//     const map_id = ch.t.split(\" \").slice(1).join(\" \")\n//     nerthus.worldEdit.changeMap(\"\", 2, map_id)\n//\n//     return false\n// }\n//\n// function light(ch)\n// {\n//     let opacity = ch.t.split(\" \")[1]\n//     if(typeof opacity === \"undefined\")\n//         nerthus.night.dim()\n//     else\n//     {\n//         opacity = opacity.replace(\",\",\".\")\n//         nerthus.worldEdit.changeLight(1 - opacity)\n//     }\n//\n//     return false\n// }\n//\n// function addGraf(ch)\n// {  //cmd[0]=x, cmd[1]=y, cmd[2]=url, cmd[3]=tip_text, cmd[4]=isCol, cmd[5]=map_id\n//     const cmd = ch.t.split(\" \").slice(1).join(\" \").split(\",\")\n//     const x = parseInt(cmd[0])\n//     const y = parseInt(cmd[1])\n//     const _url = cmd[2]\n//     const name = cmd[3]\n//     const isCol = parseInt(cmd[4]) > 0\n//     const map_id = cmd[5]\n//\n//     nerthus.worldEdit.addNpc(x, y, _url, name, isCol, map_id)\n//\n//     return false\n// }\n//\n// function delGraf(ch)\n// {\n//     const cmd = ch.t.split(\" \")[1].split(\",\")\n//     const x = parseInt(cmd[0])\n//     const y = parseInt(cmd[1])\n//     const map_id = cmd[2]\n//\n//     nerthus.worldEdit.deleteNpc(x, y, map_id)\n//\n//     return false\n// }\n//\n//  function hide(ch)\n// {\n//     const cmd = ch.t.split(\" \")[1].split(\",\")\n//     const id = parseInt(cmd[0])\n//\n//     nerthus.worldEdit.hideGameNpc(id)\n//\n//     return false\n// }\n//\n// function weather(ch)\n// {\n//     var weather_id = parseInt(ch.t.split(\" \")[1])\n//     nerthus_weather_bard_id = weather_id\n//     nerthus.weather.set_weather(weather_id)\n//\n//     return false\n// }\n\nfunction me(ch)\n{\n    ch.s = \"me\"\n    ch.n = \"\"\n    ch.t = ch.t.replace(/^\\*me /, \"\")\n    return ch\n}\n\nconst map = {\n    'nar': nar1,\n    'nar1': nar1,\n    'nar2': nar2,\n    'nar3': nar3,\n    'dial': dial1,\n    'dial1': dial1,\n    'dial2': dial2,\n    'dial3': dial3,\n    'dial666': dial666,\n    'sys': sys\n}\nconst publicMap = {\n    'me': me\n}\n\nfunction initBasicChatCommands()\n{\n    for (const cmd in map)\n        Object(_chat_manager__WEBPACK_IMPORTED_MODULE_0__[\"registerChatCommand\"])(cmd, map[cmd], false)\n    for (const cmd in publicMap)\n        Object(_chat_manager__WEBPACK_IMPORTED_MODULE_0__[\"registerChatCommand\"])(cmd, publicMap[cmd], true)\n}\n\n\n//# sourceURL=webpack:///./src/chat/chat-basic-commands.js?");

/***/ }),

/***/ "./src/chat/chat-drunkenness.js":
/*!**************************************!*\
  !*** ./src/chat/chat-drunkenness.js ***!
  \**************************************/
/*! exports provided: initChatDrunkenness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initChatDrunkenness\", function() { return initChatDrunkenness; });\nlet intoxicationLvl = 0\nlet decayTimerID = null\n\nfunction decayTimerHandler()\n{\n    intoxicationLvl--\n    localStorage.setItem('nerthus-intoxication-lvl', intoxicationLvl)\n\n    if (intoxicationLvl < 1)\n    {\n        intoxicationLvl = 0\n        clearInterval(decayTimerID)\n        decayTimerID = null\n    }\n}\n\nfunction shuffleArray(array, cc) // sic\n{\n    var przestanek = 0\n    if (typeof cc == 'undefined') cc = 0\n    if (['.', ',', '?', '!'].lastIndexOf(array[array.length - 1]) > -1) przestanek = 1\n    for (var i = array.length - 1 - cc - przestanek; i > (0 + cc); i--)\n    {\n        var j = Math.floor(Math.random() * (i + 1 - cc) + cc)\n        var temp = array[i]\n        array[i] = array[j]\n        array[j] = temp\n    }\n    return array\n}\n\nfunction shuffleMessage(msg)\n{\n    if (intoxicationLvl === 0 || ['*/@'].indexOf(msg[0]) >= 0)\n        return msg\n\n    let t = []\n    switch (Math.floor(this.lvl / 10))\n    {\n        case 10:\n        case 9:\n            msg = '/me bełkota coś niezrozumiale.'\n            break\n        case 8:\n            msg = shuffleArray(msg.split(' ')).join(' ')\n        // fallthrough\n        case 7:\n            t = msg.split(', ')\n            for (const index in t)\n                t[index] = shuffleArray(t[index].split(' ')).join(' ')\n            msg = t.join(', ')\n        // fallthrough\n        case 6:\n            t = msg.split(', ')\n            for (const index in t)\n                t[index] = shuffleArray(t[index].split(' '), 1).join(' ')\n            msg = t.join(', ')\n        // fallthrough\n        case 5:\n            t = msg.split(' ')\n            for (const index in t)\n                if (t[index].length > 4)\n                    t[index] = shuffleArray(t[index].split('')).join('')\n            msg = t.join(' ')\n        // fallthrough\n        case 4:\n            t = msg.split(' ')\n            for (const index in t)\n                if (t[index].length > 5)\n                    t[index] = shuffleArray(t[index].split('')).join('')\n            msg = t.join(' ')\n        // fallthrough\n        case 3:\n            t = msg.split(' ')\n            for (const index in t)\n                if (t[index].length > 4)\n                    t[index] = shuffleArray(t[index].split(''), 1).join('')\n            msg = t.join(' ')\n        // fallthrough\n        case 2:\n            t = msg.split(' ')\n            for (const index in t)\n                if (t[index].length > 5)\n                    t[index] = shuffleArray(t[index].split(''), 1).join('')\n            msg = t.join(' ')\n        // fallthrough\n        case 1:\n            msg = msg.replace(/[.,:?!\\-]/g, ' *hik*')\n            break\n        case 0:\n            msg = msg.replace(/[.,:?!\\-]/g, '')\n    }\n    return msg\n}\n\nfunction commandContainsDrinkingAlcohol(command)\n{\n    const match = command.match(/^moveitem.*id=(\\d+)/)\n    if (match)\n    {\n        let item\n        if (false)\n        {}\n        else\n        {\n            item = g.item[match[1]]\n        }\n\n        if (item && (item.cl === 16) && // cl = 16 means it's consumable\n            item.stat.search('lvl=') > -1 &&\n            parseInt(item.stat.match(/lvl=([0-9]+)/)[1]) === 18\n        )\n            return true\n    }\n    return false\n}\n\nfunction initChatDrunkenness()\n{\n    const savedIntoxicationLvl = localStorage.getItem('nerthus-intoxication-lvl')\n    if (savedIntoxicationLvl)\n        intoxicationLvl = parseInt(savedIntoxicationLvl)\n    if (intoxicationLvl)\n        decayTimerID = setInterval(decayTimerHandler, 10000)\n\n    const __g = _g\n    window._g = function (task, callback, payload)\n    {\n        if (commandContainsDrinkingAlcohol(task))\n        {\n            intoxicationLvl += 10\n            if (intoxicationLvl > 100) intoxicationLvl = 100\n\n            if (!decayTimerID)\n                decayTimerID = setInterval(decayTimerHandler, 10000)\n        }\n        __g(task, callback, payload)\n    }\n\n    if (false)\n    {}\n    else\n    {\n        const _chatSendMsg = window.chatSendMsg\n        window.chatSendMsg = function (msg)\n        {\n            _chatSendMsg(shuffleMessage(msg))\n        }\n    }\n}\n\n/**\n * Original version license:\n * ==================================================================\n * OBSŁUGA PICIA - Autor Godfryd\n * ==================================================================\n */\n\n\n//# sourceURL=webpack:///./src/chat/chat-drunkenness.js?");

/***/ }),

/***/ "./src/chat/chat-manager.js":
/*!**********************************!*\
  !*** ./src/chat/chat-manager.js ***!
  \**********************************/
/*! exports provided: initChatMgr, registerChatCommand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initChatMgr\", function() { return initChatMgr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerChatCommand\", function() { return registerChatCommand; });\n/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../permissions */ \"./src/permissions.js\");\n/* harmony import */ var _chat_drunkenness__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-drunkenness */ \"./src/chat/chat-drunkenness.js\");\n\n\n\nconst commandsMap = {}\nconst commandsPublicMap = {}\n\nfunction fixUrl(text)\n{\n    const url = RegExp(/(https?)\\*Krzywi się\\.\\*(\\S+)/)\n    return text.replace(url, '$1:/$2')\n}\n\nfunction handleChatObj(ch)\n{\n    // change message by directly editing object passed as reference\n    const cmd = fetch_cmd(ch)\n    if (cmd)\n    {\n        const callback = fetch_callback(cmd, ch)\n        if (callback)\n        {\n            ch.t = fixUrl(ch.t)\n            log('[' + ch.k + '] ' + ch.n + ' -> ' + ch.t) //[which tab] author -> command //TODO\n\n            return callback(ch)\n        }\n        return true\n    }\n    return true\n}\n\n\nfunction editNiMsg($msg, ch)\n{\n    $msg.addClass(ch.s)\n    const content = $msg.children().eq(2).contents()\n    $msg.children(2).addClass(ch.s)\n    for (let i = 0; i < content.length; i++)\n    {\n        const text = content.eq(i)\n        if (i === 0)\n            text.replaceWith(ch.t)\n        else\n            text.remove()\n    }\n    $msg.children().eq(0).contents().eq(0).replaceWith(ch.n)\n}\n\n\nfunction fetch_cmd(ch)\n{\n    if (ch.t[0] === '*')\n    {\n        const command = RegExp(/^\\*(\\S+)/).exec(ch.t)\n        //fixes bug with /dice, and presumably '* text' messages\n        if (command)\n            return command[1]\n    }\n}\n\nfunction fetch_callback(cmd, ch)\n{\n    if (commandsMap[cmd] && Object(_permissions__WEBPACK_IMPORTED_MODULE_0__[\"checkPermissionLvl\"])(ch.n))\n         return commandsMap[cmd]\n     else\n    return commandsPublicMap[cmd]\n}\n\nfunction run(arg)\n{\n    if (false)\n    {}\n    else\n    {\n        // return TRUE if you want message to NOT show in chat\n        // return FALSE if you want message to show in chat\n\n        // function returns negation so that on callbacks returning TRUE or OBJECT message is visible\n        // and on callbacks returning FALSE or UNDEFINED it is not\n        return !handleChatObj(arg)\n    }\n}\n\n\nfunction initChatMgr()\n{\n    if (false)\n    {}\n    else\n    {\n        g.chat.parsers.push(run)\n    }\n    Object(_chat_drunkenness__WEBPACK_IMPORTED_MODULE_1__[\"initChatDrunkenness\"])()\n}\n\nfunction registerChatCommand(name, func, isPublic)\n{\n    if (isPublic)\n        commandsPublicMap[name] = func\n    else\n        commandsMap[name] = func\n}\n\n\n//# sourceURL=webpack:///./src/chat/chat-manager.js?");

/***/ }),

/***/ "./src/game-integration/loaders.js":
/*!*****************************************!*\
  !*** ./src/game-integration/loaders.js ***!
  \*****************************************/
/*! exports provided: loadOnEveryMap, initiateGameIntegrationLoaders, addToNIdrawList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadOnEveryMap\", function() { return loadOnEveryMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initiateGameIntegrationLoaders\", function() { return initiateGameIntegrationLoaders; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToNIdrawList\", function() { return addToNIdrawList; });\nconst loadQueue = []\n\n/**\n * Executes function immediately, then executes it at every new map load\n * @param fun - function that will be executed\n * @param args - arguments function will take\n */\nfunction loadOnEveryMap(fun, args)\n{\n    fun(args)\n    loadQueue.push([fun, args])\n}\n\nfunction loadNewMapQueue()\n{\n    for (const i in loadQueue)\n    {\n        loadQueue[i][0](loadQueue[i][1])\n    }\n}\n\nfunction initiateGameIntegrationLoaders() //TODO bug: sometimes long loading new map is loaded faster than old\n{\n    if (false)\n    {}\n    else\n    {\n        // Observe map change if user have some kind of fast map switcher (e.g. 'Szybsze przechodzenie' by Adi Wilk)\n        let previousMapId = -1\n\n        window.map.__loaded = window.map.loaded\n        Object.defineProperty(window.map, 'loaded', {\n            set(val)\n            {\n                console.log('New map loaded')\n                this.__loaded = val\n                if (previousMapId !== window.map.id)\n                {\n                    loadNewMapQueue(window.map.id)\n                    previousMapId = window.map.id\n                }\n                return val\n            },\n            get() { return this.__loaded }\n        })\n    }\n}\n\nfunction addToNIdrawList(preparedObject, id)\n{\n    const npcList = Engine.npcs.check()\n    npcList[id] = preparedObject\n}\n\n\n//# sourceURL=webpack:///./src/game-integration/loaders.js?");

/***/ }),

/***/ "./src/game-integration/tips.js":
/*!**************************************!*\
  !*** ./src/game-integration/tips.js ***!
  \**************************************/
/*! exports provided: initTips */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTips\", function() { return initTips; });\n/* harmony import */ var _res_lvl_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/lvl-names */ \"./src/res/lvl-names.json\");\nvar _res_lvl_names__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../res/lvl-names */ \"./src/res/lvl-names.json\", 1);\n/* harmony import */ var _res_vips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../res/vips */ \"./src/res/vips.json\");\nvar _res_vips__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../res/vips */ \"./src/res/vips.json\", 1);\n/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../permissions */ \"./src/permissions.js\");\n\n\n\n\nconst RANK_NAMES = ['Kreator', 'Uber Miszcz Gry', 'Miszcz Gry', 'Strażnik Słowa', 'Tkacz Słów', 'Trubadur', 'Piewca Słowa', 'Radny']\nconst RANKS = {NONE: -1, ADM: 0, SMG: 1, MG: 2, MC: 3, SMC: 4, NARRATOR: 5, NARRATOR_MC: 6, COUNCILOR: 7}\nconst RIGHTS = {ADM: 1, MG: 2, SMG: 16}\n\nfunction rights2rank(rights)\n{\n    if (rights & RIGHTS.ADM) return RANKS.ADM\n    if (rights & RIGHTS.SMG) return RANKS.SMG\n    if (rights & RIGHTS.MG) return RANKS.MG\n    if (rights) return RANKS.MC\n    return RANKS.NONE\n}\n\nfunction getRankNameOf(player)\n{\n    let rank = RANKS.NONE\n    if (player.rights) rank = rights2rank(player.rights)\n\n    switch (Object(_permissions__WEBPACK_IMPORTED_MODULE_2__[\"checkPermissionLvl\"])(player))\n    {\n        case _permissions__WEBPACK_IMPORTED_MODULE_2__[\"PERMISSION_LVL\"].NARRATOR:\n            if (rank === RANKS.MC)\n                rank = RANKS.NARRATOR_MC\n            else\n                rank = RANKS.NARRATOR\n            break\n        case _permissions__WEBPACK_IMPORTED_MODULE_2__[\"PERMISSION_LVL\"].COUNCILOR:\n            rank = RANKS.COUNCILOR\n            break\n    }\n    return rank === RANKS.NONE ? '' : RANK_NAMES[rank]\n}\n\nfunction getTitle(player)\n{\n    const title = _res_vips__WEBPACK_IMPORTED_MODULE_1__[parseInt(player.id)]\n    if (title)\n        return title\n    if (player.lvl)\n        return _res_lvl_names__WEBPACK_IMPORTED_MODULE_0__[Math.min(_res_lvl_names__WEBPACK_IMPORTED_MODULE_0__.length - 1, (parseInt(player.lvl) - 1) >> 3)]\n    return ''\n}\n\nfunction createPlayerTip(player)\n{\n    let tip = '<div style=\"text-align: center\"><b>' + player.nick + '</b>'\n    tip += player.ble ? '<b class=\"bless\">' + player.ble + '</b>' : ''\n    tip += player.clan ? '[' + player.clan.name + ']<br>' : ''\n    tip += '<div style=\"text-align: center;\">' + getTitle(player) + '</div>'\n    const rank = getRankNameOf(player)\n    tip += rank ? '<i style=\"color: #ff1a00\">' + rank + '</i>' : ''\n    tip += (player.attr & 1) ? '<img src=img/mute.gif>' : ''\n    tip += '</div>'\n    return tip\n}\n\nfunction parseTip(player, isHero)\n{\n    if (false)\n    {}\n}\n\n\nfunction getNpcTypeName(worldType)\n{\n    if (worldType > 99)\n        return 'tytan'\n    if (worldType > 79)\n        return 'heros'\n    if (worldType > 29)\n        return 'elita III'\n    if (worldType > 19)\n        return 'elita II'\n    if (worldType > 9)\n        return 'elita'\n    return ''\n}\n\nfunction getNpcDanger(npc)\n{\n    if (npc.type === 2 || npc.type === 3)\n    {\n        const lvlDiff = npc.lvl - hero.lvl\n        if (lvlDiff < -13)\n            return {style: 'style=\"color:#888\"', str: 'Niewarty uwagi'}\n        if (lvlDiff > 19)\n            return {style: 'style=\"color:#f50\"', str: 'Potężny przeciwnik'}\n        if (lvlDiff > 9)\n            return {style: 'style=\"color:#ff0\"', str: 'Poważny rywal'}\n        return {style: '', str: 'Zwykły przeciwnik'}\n    }\n    return {style: '', str: ''}\n}\n\nfunction createNpcTip(npc)\n{\n    let tip = '<b>' + npc.nick + '</b>'\n    if (npc.type === 4)\n        return tip\n\n    const type = getNpcTypeName(npc.wt)\n    tip += type ? '<i>' + type + '</i>' : ''\n\n    if (npc.type <= 0)\n        return tip\n\n    const danger = getNpcDanger(npc)\n    const grp = npc.grp ? ', w grupie' : ''\n    tip += '<span ' + danger.style + '>' + danger.str + grp + '</span>'\n    return tip\n}\n\nfunction initTips()\n{\n    if (false)\n    {}\n    else\n    {\n        $('#hero').attr('tip', createPlayerTip(hero))\n\n        g.tips.other = createPlayerTip\n        g.tips.npc = createNpcTip\n    }\n}\n\n\n//# sourceURL=webpack:///./src/game-integration/tips.js?");

/***/ }),

/***/ "./src/interface/css-manager.js":
/*!**************************************!*\
  !*** ./src/interface/css-manager.js ***!
  \**************************************/
/*! exports provided: addBasicStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addBasicStyles\", function() { return addBasicStyles; });\nfunction addBasicStyles()\n{\n    console.log(\"styles added!\")\n    $('<link rel=\"stylesheet\" href=\"' + \"http://localhost/nerthusaddon/\" +'css/style.css' + '\">').appendTo('head')\n}\n\n//# sourceURL=webpack:///./src/interface/css-manager.js?");

/***/ }),

/***/ "./src/interface/panel.js":
/*!********************************!*\
  !*** ./src/interface/panel.js ***!
  \********************************/
/*! exports provided: initPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initPanel\", function() { return initPanel; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings */ \"./src/settings.js\");\n\n\nlet $elm = $()\nconst defaultPosition = [6, 'top-right']\n\nconst settingsTranslations = {\n    'night': 'Pory dnia i nocy',\n    'weather': 'Efekty pogodowe',\n    'zodiac': 'Znaki zodiaku',\n    'hideNpcs': 'Ukrywanie NPCów'\n}\n\nfunction translate_option(name)\n{\n    if (settingsTranslations[name])\n        return settingsTranslations[name]\n    return name\n}\n\n/**\n * Contains functions that return strings that are representations of elements\n */\nconst constructElement = {}\n\nconstructElement.button = function (data)\n{\n    return (\n        '<a href=\"' + data.url + '\" target=\"_blank\" class=\"button\" tip=\"' + data.name + '\" data-tip=\"' + data.name + '\">' +\n        '<img src=\"' + \"http://localhost/nerthusaddon/\" + 'img/panel/' + data.icon + '\" alt=\"' + data.name + '\">' +\n        '</a>'\n    )\n}\n\nconstructElement.buttonGroup = function (groupData)\n{\n    const buttonGroup = []\n    const len = groupData.length\n    for (let i = 0; i < len; i++)\n        buttonGroup.push(this.button(groupData[i]))\n    return buttonGroup.join('')\n}\n\nconstructElement.settingCheckbox = function (optionName)\n{\n    const checked = _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"][optionName] ? ' checked' : ''\n    return (\n        '<label class=\"setting-label\">' +\n        '<span class=\"setting-label-text\">' + translate_option(optionName) + '</span>' +\n        '<input class=\"setting-checkbox\" name=\"' + optionName + '\" type=\"checkbox\"' + checked + '>' +\n        '<span class=\"checkbox-outline\">' +\n        '<span class=\"checkmark\">' +\n        '<div class=\"checkmark-stem\"></div>' +\n        '<div class=\"checkmark-kick\"></div>' +\n        '</span>' +\n        '</span>' +\n        '</label>'\n    )\n}\n\nconstructElement.settings = function (options)\n{\n    const settingsList = []\n    for (const option in options)\n        settingsList.push(this.settingCheckbox(option))\n    const settings = settingsList.join('')\n\n    return (\n        '<div class=\"top-box\">' +\n        settings +\n        '</div>' +\n        '<div class=\"bottom-box\">' +\n        '<button class=\"button text-button save-button\">Zapisz</button>' +\n        '<button class=\"button text-button cancel-button\">Anuluj</button>' +\n        '</div>'\n    )\n}\n\nconstructElement.panel = function (buttonGroupLeft, buttonGroupCenter, buttonGroupRight, settings)\n{\n    return (\n        '<div id=\"nerthus-panel\">' +\n        '<div class=\"header-label-positioner\">' +\n        '<div class=\"header-label\">' +\n        '<div class=\"left-decor\"></div>' +\n        '<div class=\"right-decor\"></div>' +\n        '<span class=\"panel-name\">Panel Nerthusa</span>' +\n        '</div>' +\n        '</div>' +\n        '<div class=\"close-decor\">' +\n        '<button class=\"close-button\" />' +\n        '</div>' +\n        '<div class=\"background\">' +\n        '<div class=\"default-panel\">' +\n        '<div class=\"top-box\">' +\n        '<div id=\"button-group-left\" class=\"button-group\">' + buttonGroupLeft + '</div>' +\n        '<div id=\"button-group-center\" class=\"button-group\">' + buttonGroupCenter + '</div>' +\n        '<div id=\"button-group-right\" class=\"button-group\">' + buttonGroupRight + '</div>' +\n        '</div>' +\n        '<div class=\"bottom-box\">' +\n        '<button class=\"button text-button ok-button\">OK</button>' +\n        '</div>' +\n        '</div>' +\n        '<div class=\"settings-panel hidden\">' +\n        settings +\n        '</div>' +\n        '<button class=\"button nerthus-settings-button\" tip=\"Ustawienia\" data-tip=\"Ustawienia\">' +\n        '<img src=\"' + \"http://localhost/nerthusaddon/\" + 'img/panel/settings.png' + '\" alt=\"Ustawienia\">' +\n        '</button>' +\n        '</div>' +\n        '</div>'\n    )\n}\n\nconstructElement.icon = function ()\n{\n    return '<img id=\"nerthus-shield\" src=\"' + \"http://localhost/nerthusaddon/\" + 'img/nerthus_icon.gif' + '\" tip=\"Nerthus\" alt=\"Nerthus panel\">'\n}\n\nfunction createPanel(data, hidden)\n{\n    if (!$elm.parent || !$elm.parent('body').length)\n    {\n        const buttonGroupLeft = constructElement.buttonGroup(data.leftPanel)\n        const buttonGroupCenter = constructElement.buttonGroup(data.centerPanel)\n        const buttonGroupRight = constructElement.buttonGroup(data.rightPanel)\n        const settingsElement = constructElement.settings(_settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"])\n\n        $elm = $(constructElement.panel(buttonGroupLeft, buttonGroupCenter, buttonGroupRight, settingsElement))\n        const defaultPanel = $elm.find('.default-panel')\n        const settingsPanel = $elm.find('.settings-panel')\n        const panelName = $elm.find('.panel-name')\n        $elm.find('.nerthus-settings-button')\n            .click(function ()\n            {\n                defaultPanel.toggleClass('hidden')\n                settingsPanel.toggleClass('hidden')\n                const tip = settingsPanel.hasClass('hidden') ? 'Ustawienia' : 'Powrót'\n                const $this = $(this)\n                $this.toggleClass('back-to-default')\n                if (settingsPanel.hasClass('hidden'))\n                {\n                    $this.attr({'tip': 'Ustawienia', 'data-tip': 'Ustawienia'})\n                        .children().attr('src', \"http://localhost/nerthusaddon/\" +'img/panel/settings.png')\n                    panelName.text('Panel Nerthusa')\n                }\n                else\n                {\n                    $this.attr({'tip': 'Powrót', 'data-tip': 'Powrót'})\n                        .children().attr('src', \"http://localhost/nerthusaddon/\" +'img/panel/settings-back.png')\n                    panelName.text('Panel Nerthusa - ustawienia')\n                }\n            })\n            .end()\n            .find('.close-button, .cancel-button, .ok-button').click(function ()\n        {\n            $elm.css({visibility: 'hidden', opacity: '0'}) // reset opacity as we're still holding reference\n            defaultPanel.removeClass('hidden')\n            settingsPanel.addClass('hidden')\n        }).end()\n            .find('.save-button').click(function ()\n        {\n            saveSettings()\n            $elm.css({visibility: 'hidden', opacity: '0'}) // reset opacity as we're still holding reference\n            defaultPanel.removeClass('hidden')\n            settingsPanel.addClass('hidden')\n        }).end()\n\n        $elm\n            .css({\n                visibility: hidden ? 'hidden' : 'visible',\n                opacity: 0\n            })\n            .appendTo('body')\n            .css('opacity', hidden ? '0' : '1') // change opacity after appending to body for nice animation\n            .draggable({\n                start: function ()\n                {\n                    const lock = window.g ? window.g.lock : window.Engine.lock\n                    lock.add('nerthus-panel-drag')\n                },\n                stop: function ()\n                {\n                    const lock = window.g ? window.g.lock : window.Engine.lock\n                    lock.remove('nerthus-panel-drag')\n                }\n            })\n    }\n}\n\nfunction preloadPanel()\n{\n    if (!$elm.parent || !$elm.parent('body').length)\n        $.getJSON(\"http://localhost/nerthusaddon/\" + 'panel_links.json', function (data)\n        {\n            createPanel(data, true)\n        })\n}\n\nfunction togglePanel()\n{\n    if (!$elm.parent || !$elm.parent('body').length)\n        $.getJSON(\"http://localhost/nerthusaddon/\" + 'panel_links.json', createPanel)\n    else if ($elm.css('visibility') === 'visible')\n        $elm.css({visibility: 'hidden', opacity: '0'})\n    else\n        $elm.css({visibility: 'visible', opacity: '1'})\n}\n\nfunction saveSettings()\n{\n    $elm.find('.setting-checkbox').each(function () { Object(_settings__WEBPACK_IMPORTED_MODULE_0__[\"saveSetting\"])(this.name, this.checked)})\n    message('Zapisano, odśwież stronę')\n}\n\n\nfunction create_button_ni()\n{\n    if (Engine.interfaceStart && Object.keys(Engine.interface.getDefaultWidgetSet()).includes('nerthus'))\n    {\n        let nerthusPos = defaultPosition\n\n        const serverStoragePos = Engine.serverStorage.get(Engine.interface.getPathToHotWidgetVersion())\n        if (serverStoragePos && serverStoragePos.nerthus) nerthusPos = serverStoragePos.nerthus\n\n        Engine.interface.createOneWidget('nerthus', {nerthus: nerthusPos}, true, [])\n    }\n    else setTimeout(create_button_ni, 500)\n}\n\nfunction initPanel()\n{\n    if (false)\n    {}\n    else\n    {\n        $(constructElement.icon())\n            .hover(preloadPanel.bind(this))\n            .click(togglePanel.bind(this))\n            .appendTo('#panel')\n    }\n}\n\n\n//# sourceURL=webpack:///./src/interface/panel.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chat_chat_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat/chat-manager */ \"./src/chat/chat-manager.js\");\n/* harmony import */ var _chat_chat_basic_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat/chat-basic-commands */ \"./src/chat/chat-basic-commands.js\");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ \"./src/settings.js\");\n/* harmony import */ var _interface_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interface/panel */ \"./src/interface/panel.js\");\n/* harmony import */ var _interface_css_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interface/css-manager */ \"./src/interface/css-manager.js\");\n/* harmony import */ var _game_integration_loaders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game-integration/loaders */ \"./src/game-integration/loaders.js\");\n/* harmony import */ var _npc_npc_manager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./npc/npc-manager */ \"./src/npc/npc-manager.js\");\n/* harmony import */ var _night_night_manager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./night/night-manager */ \"./src/night/night-manager.js\");\n/* harmony import */ var _maps_maps_manager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./maps/maps-manager */ \"./src/maps/maps-manager.js\");\n/* harmony import */ var _game_integration_tips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game-integration/tips */ \"./src/game-integration/tips.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction start()\n{\n    //$('<link rel=\"stylesheet\" href=\"' + nerthus.addon.fileUrl(\"css/style.css\") + '\">').appendTo('head')\n    Object(_interface_css_manager__WEBPACK_IMPORTED_MODULE_4__[\"addBasicStyles\"])()\n    Object(_settings__WEBPACK_IMPORTED_MODULE_2__[\"loadSettings\"])()\n\n    Object(_game_integration_tips__WEBPACK_IMPORTED_MODULE_9__[\"initTips\"])()\n\n    Object(_game_integration_loaders__WEBPACK_IMPORTED_MODULE_5__[\"initiateGameIntegrationLoaders\"])()\n\n    Object(_maps_maps_manager__WEBPACK_IMPORTED_MODULE_8__[\"initMapsManager\"])()\n\n    Object(_npc_npc_manager__WEBPACK_IMPORTED_MODULE_6__[\"initNpcManager\"])()\n\n    Object(_night_night_manager__WEBPACK_IMPORTED_MODULE_7__[\"initNightManager\"])()\n\n    Object(_chat_chat_manager__WEBPACK_IMPORTED_MODULE_0__[\"initChatMgr\"])()\n    Object(_chat_chat_basic_commands__WEBPACK_IMPORTED_MODULE_1__[\"initBasicChatCommands\"])()\n\n    Object(_interface_panel__WEBPACK_IMPORTED_MODULE_3__[\"initPanel\"])()\n    console.log('Nerthus addon fully loaded')\n}\n\nif (false)\n{}\nelse\n{\n    g.loadQueue.push({'fun': start})\n}\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/maps/maps-manager.js":
/*!**********************************!*\
  !*** ./src/maps/maps-manager.js ***!
  \**********************************/
/*! exports provided: MAP_PRIORITY, addToMapChangelist, removeFromMapChangelist, applyCurrentMapChange, initMapsManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAP_PRIORITY\", function() { return MAP_PRIORITY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addToMapChangelist\", function() { return addToMapChangelist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFromMapChangelist\", function() { return removeFromMapChangelist; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyCurrentMapChange\", function() { return applyCurrentMapChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMapsManager\", function() { return initMapsManager; });\n/* harmony import */ var _game_integration_loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-integration/loaders */ \"./src/game-integration/loaders.js\");\n/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../time */ \"./src/time.js\");\n/* harmony import */ var _res_map_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../res/map-config */ \"./src/res/map-config.json\");\nvar _res_map_config__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../res/map-config */ \"./src/res/map-config.json\", 1);\n/* harmony import */ var _utility_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility-functions */ \"./src/utility-functions.js\");\n\n\n\n\n\nconst MAP_PRIORITY = {CUSTOM: 2, CUSTOM_NO_ID: 1, BASIC: 0}\n\nlet currentTopMap\n\nlet customMapNoIdUrl\nconst customMapsUrls = {}\n\nfunction addToMapChangelist(url, priority, mapId)\n{\n    switch (priority)\n    {\n        case MAP_PRIORITY.CUSTOM:\n            customMapsUrls[mapId] = url\n            return\n        case MAP_PRIORITY.CUSTOM_NO_ID:\n            customMapNoIdUrl = url\n            return\n    }\n}\n\nfunction removeFromMapChangelist(priority, mapId)\n{\n    switch (priority)\n    {\n        case MAP_PRIORITY.CUSTOM:\n            delete customMapsUrls[mapId]\n            return\n        case MAP_PRIORITY.CUSTOM_NO_ID:\n            customMapNoIdUrl = ''\n            return\n    }\n}\n\nfunction getBasicMapUrl(mapId)\n{\n    const season = Object(_time__WEBPACK_IMPORTED_MODULE_1__[\"getCurrentSeason\"])()\n    if (_res_map_config__WEBPACK_IMPORTED_MODULE_2__[season][mapId])\n        return _res_map_config__WEBPACK_IMPORTED_MODULE_2__[season][mapId]\n    else if (_res_map_config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT[mapId])\n        return _res_map_config__WEBPACK_IMPORTED_MODULE_2__.DEFAULT[mapId]\n    else\n        return false\n}\n\n\nfunction applyMapChange(mapId)\n{\n    const mapImage = new Image()\n\n    const basicMapUrl = getBasicMapUrl(mapId)\n    if (customMapsUrls[mapId])\n        mapImage.src = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__[\"resolveNerthusUrl\"])(customMapsUrls[mapId])\n    else if (customMapNoIdUrl)\n        mapImage.src = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__[\"resolveNerthusUrl\"])(customMapNoIdUrl)\n    else if (basicMapUrl)\n        mapImage.src = Object(_utility_functions__WEBPACK_IMPORTED_MODULE_3__[\"resolveNerthusUrl\"])(basicMapUrl)\n    else\n        return\n\n    currentTopMap = mapImage\n\n    if (true)\n        $('#ground').css('background', 'url(' + mapImage.src + ')')\n}\n\n\nfunction startMapChanging()\n{\n    //manipulation of map\n    const tmpMapDraw = Engine.map.draw\n    Engine.map.draw = function (canvasRenderingContext)\n    {\n        //draw normal map\n        tmpMapDraw.call(Engine.map, canvasRenderingContext)\n\n        //draw new maps on top of map\n        if (currentTopMap)\n        {\n            canvasRenderingContext.drawImage(\n                currentTopMap,\n                0 - Engine.map.offset[0],\n                0 - Engine.map.offset[1])\n\n            //draw goMark (red X on ground that shows you where you've clicked)\n            if (Engine.map.goMark)\n                Engine.map.drawGoMark(canvasRenderingContext)\n        }\n    }\n}\n\n\nfunction applyCurrentMapChange()\n{\n    if (false)\n        {}\n    else\n        applyMapChange(map.id)\n}\n\n\nfunction initMapsManager()\n{\n    if (false) {}\n    Object(_game_integration_loaders__WEBPACK_IMPORTED_MODULE_0__[\"loadOnEveryMap\"])(applyCurrentMapChange)\n}\n\n\n//# sourceURL=webpack:///./src/maps/maps-manager.js?");

/***/ }),

/***/ "./src/night/lights.js":
/*!*****************************!*\
  !*** ./src/night/lights.js ***!
  \*****************************/
/*! exports provided: turnLightsOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"turnLightsOn\", function() { return turnLightsOn; });\n/* harmony import */ var _game_integration_loaders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game-integration/loaders */ \"./src/game-integration/loaders.js\");\n\n\nconst LIGHT_TYPE_SIZES = {S: '64px', M: '96px', L: '160px', XL: '192px'}\n\nfunction getLightTypeUrl(lightType)\n{\n    return \"http://localhost/nerthusaddon/\" + '/img/night_light_' + lightType + '.png'\n}\n\nfunction getLightNiObject(img)\n{\n    return {\n        draw: function (e)\n        {\n            e.drawImage(img, 0 - Engine.map.offset[0], 0 - Engine.map.offset[1])\n        },\n        getOrder: function ()\n        {\n            return 1000 // Lights always on top\n        }\n    }\n}\n\nfunction addLights(lights)\n{\n    if (false)\n    {}\n    else\n    {\n        for (const i in lights)\n        {\n            const lightTypeSize = LIGHT_TYPE_SIZES[lights[i].type]\n            $('<div />')\n                .css({\n                    background: 'url(' + getLightTypeUrl(lights[i].type) + ')',\n                    width: lightTypeSize,\n                    height: lightTypeSize,\n                    zIndex: map.y * 2 + 12,\n                    position: 'absolute',\n                    left: parseInt(lights[i].x),\n                    top: parseInt(lights[i].y),\n                    pointerEvents: 'none'\n                })\n                .addClass('night-light')\n                .attr('type', lights[i].type)\n                .appendTo('#ground')\n        }\n    }\n\n}\n\nfunction resetLights()\n{\n    if (true)\n        $('#ground .night-light').remove()\n}\n\n\nfunction turnLightsOn()\n{\n    if (false)\n    {}\n    else\n    {\n        resetLights()\n        console.log('tried lights')\n        if ({\"npc\":[1,11,15,16,169,1838,1975,2,2520,257,2663,2887,290,291,330,35,361,37,38,574,8,864],\"lights\":[1,10,1058,1059,11,114,1141,115,12,121,128,137,2,2029,2056,2063,2064,214,222,223,226,244,2520,262,2887,33,344,347,35,36,368,37,38,4,500,574,575,589,630,631,632,727,730,731,8,84,845,9]}.lights.includes(map.id))\n            $.getJSON(\"http://localhost/nerthusaddon/\" + '/night-lights/map_' + map.id + '.json', addLights)\n        else console.log('lights not loaded - no file')\n    }\n}\n\n\n//# sourceURL=webpack:///./src/night/lights.js?");

/***/ }),

/***/ "./src/night/night-manager.js":
/*!************************************!*\
  !*** ./src/night/night-manager.js ***!
  \************************************/
/*! exports provided: initNightManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNightManager\", function() { return initNightManager; });\n/* harmony import */ var _res_outdoor_map_exceptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../res/outdoor-map-exceptions */ \"./src/res/outdoor-map-exceptions.json\");\nvar _res_outdoor_map_exceptions__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../res/outdoor-map-exceptions */ \"./src/res/outdoor-map-exceptions.json\", 1);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings */ \"./src/settings.js\");\n/* harmony import */ var _game_integration_loaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-integration/loaders */ \"./src/game-integration/loaders.js\");\n/* harmony import */ var _lights__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lights */ \"./src/night/lights.js\");\n\n\n\n\n\n/**\n * @param time - Date\n * @returns {number}\n */\nfunction timeToOpacity(time)\n{\n    const hour = time.getHours()\n    //const hour = new Date().getHours()\n    if (hour <= 4) return 0.8\n    if (hour >= 21) return 0.6\n    if (hour >= 18) return 0.3\n    return 0\n}\n\nfunction getDarknessNiObject(opacity)\n{\n    return {\n        draw: function (e)\n        {\n            const style = e.fillStyle\n            e.fillStyle = '#000'\n            e.globalAlpha = opacity\n            e.fillRect(0 - Engine.map.offset[0], 0 - Engine.map.offset[1], Engine.map.width, Engine.map.height)\n            e.globalAlpha = 1.0\n            e.fillStyle = style\n        },\n        getOrder: function ()\n        {\n            return 950 // Darkness bellow lights but above everything else\n        }\n    }\n}\n\nfunction changeLight(opacity)\n{\n    if (false)\n        {}\n    else\n    {\n        let $night = $('#nerthus-night')\n        if (!$night.length)\n            $night = $('<div id=\"nerthus-night\"></div>').appendTo('#ground')\n\n        $night.css({\n            height: map.y * 32,\n            width: map.x * 32,\n            zIndex: map.y * 2 + 11,\n            opacity: opacity\n        })\n    }\n}\n\nfunction dim(opacity)\n{\n    let id\n    let mainid\n    if (false)\n    {}\n    else\n    {\n        mainid = map.mainid\n        id = map.id\n    }\n    if ((mainid === 0 && !_res_outdoor_map_exceptions__WEBPACK_IMPORTED_MODULE_0__.indoor.includes(id)) || _res_outdoor_map_exceptions__WEBPACK_IMPORTED_MODULE_0__.outdoor.includes(id))\n        changeLight(opacity)\n    else\n        changeLight(0)\n}\n\nfunction checkAndApplyNight()\n{\n    if (_settings__WEBPACK_IMPORTED_MODULE_1__[\"settings\"]['night'])\n    {\n        const date = new Date()\n        const dimValue = timeToOpacity(date)\n        if (dimValue)\n        {\n            dim(dimValue)\n            Object(_lights__WEBPACK_IMPORTED_MODULE_3__[\"turnLightsOn\"])()\n        }\n    }\n}\n\nfunction initNightManager()\n{\n    Object(_game_integration_loaders__WEBPACK_IMPORTED_MODULE_2__[\"loadOnEveryMap\"])(checkAndApplyNight)\n    // if (INTERFACE === 'NI')\n    // {\n    //     onDefined('Engine.map.d.id', () =>\n    //     {\n    //         checkAndApplyNight()\n    //         loadOnEveryMap(checkAndApplyNight)\n    //     })\n    // }\n    // else\n    // {\n    //     loadOnEveryMap(checkAndApplyNight)\n    // }\n}\n\n// nerthus.night.lights.give_me_the_light = function ()\n// {\n//     $.getScript(nerthus.addon.fileUrl('/NN_night_lights_mgr.js'))\n// }\n\n\n//# sourceURL=webpack:///./src/night/night-manager.js?");

/***/ }),

/***/ "./src/npc/npc-actions/add.js":
/*!************************************!*\
  !*** ./src/npc/npc-actions/add.js ***!
  \************************************/
/*! exports provided: addNpc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addNpc\", function() { return addNpc; });\n/* harmony import */ var _collision__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collision */ \"./src/npc/npc-actions/collision.js\");\n/* harmony import */ var _npc_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../npc-dialog */ \"./src/npc/npc-dialog.js\");\n\n\n\n// nerthus.worldEdit.addNpc_ni = function (x, y, url, name, collision, map_id)\n// {\n//     this.npcs.push([x, y, url, name, collision, map_id])\n//     if (typeof map_id === \"undefined\" || parseInt(map_id) === Engine.map.d.id)\n//         this.paintNpc_ni(x, y, url, name, collision, map_id)\n// }\n//\n// nerthus.worldEdit.paintNpc_ni = function (x, y, url, name, collision, map_id)\n// {\n//     const exp = /(.*\\/)(?!.*\\/)((.*)\\.(.*))/\n//     const match = exp.exec(url)\n//\n//     const id = this.coordsToId(x, y)\n//     let data = {}\n//     data[id] = {\n//         actions: 0,\n//         grp: 0,\n//         nick: name === \"\" ? \"Bez nazwy\" : name,\n//         type: name === \"\" ? 4 : 0,\n//         wt: 0,\n//         x: x,\n//         y: y\n//     }\n//     console.log(data)\n//     if (match[4] === \"gif\")\n//     {\n//         data[id].icon = url\n//         const npath = CFG.npath\n//         CFG.npath = \"\"\n//         Engine.npcs.updateData(data)\n//         CFG.npath = npath\n//     }\n//     else\n//     {\n//         data[id].icon = \"obj/cos.gif\"\n//         Engine.npcs.updateData(data)\n//         const image = new Image()\n//         image.src = url\n//\n//         const _x = 32 * x + 16 - Math.floor(image.width / 2)\n//         const _y = 32 * y + 32 - image.height\n//         const obj = {\n//             image: image,\n//             x: _x,\n//             y: _y,\n//             id: id,\n//             map_id: map_id\n//         }\n//         // Engine.npcs.check().push({\n//         //     draw: function(ctx) {\n//         //\n//         //     }\n//         // })\n//     }\n//\n//\n//     if (collision && (typeof map_id === \"undefined\" || parseInt(map_id) === Engine.map.d.id))\n//         this.addCollision_ni(x, y)\n//     else\n//         this.deleteCollision_ni(x, y, 2) //apparently NI adds default collision when adding NPC\n// }\n\n\n// nerthus.worldEdit.readdNpcList_ni = function ()\n// {\n//     this.npcs.forEach(function (npc)\n//     {\n//         console.log(npc)\n//         console.log(parseInt(npc[5]))\n//         console.log(Engine.map.d.id)\n//         if (typeof npc[5] === \"undefined\" || parseInt(npc[5]) === Engine.map.d.id)\n//             nerthus.worldEdit.paintNpc_ni(npc[0], npc[1], npc[2], npc[3], npc[4], npc[5])\n//     })\n// }\n\nfunction createClickWrapper(npc, clickHandler)\n{\n    return function (event)\n    {\n        if (Math.abs(npc.x - hero.x) > 1 || Math.abs(npc.y - hero.y) > 1)\n            hero.mClick(event)\n        else\n            clickHandler()\n    }\n}\n\nfunction addNpc(npc)\n{\n    if (false)\n    {}\n    else\n    {\n        const $npc = $('<div id=\"npc' + npc.id + '\" class=\"npc nerthus-npc\"></div>')\n            .css({\n                backgroundImage: 'url(' + npc.icon + ')',\n                zIndex: npc.y * 2 + 9,\n                left: npc.x * 32,\n                top: npc.y * 32 - 16,\n                pointerEvents: npc.type === 4 ? 'none' : 'auto'\n            })\n\n        const img = new Image()\n        img.onload = function ()\n        {\n            const width = img.width\n            const height = img.height\n\n            const tmpLeft = npc.x * 32 + 16 - Math.round(width / 2) + ((npc.type > 3 && !(width % 64)) ? -16 : 0)\n            const wpos = Math.round(this.x) + Math.round(this.y) * 256\n            let wat\n            if (map.water && map.water[wpos])\n                wat = map.water[wpos] / 4\n            $npc.css({\n                left: tmpLeft,\n                top: npc.y * 32 + 32 - height + (wat > 8 ? 0 : 0),\n                width: (tmpLeft + width > map.x * 32 ? map.x * 32 - tmpLeft : width),\n                height: height - (wat > 8 ? ((wat - 8) * 4) : 0)\n            })\n        }\n        img.src = npc.icon\n        $npc.appendTo('#base')\n        if (npc.nick)\n            $npc.attr({\n                ctip: 't_npc',\n                tip: npc.nick\n            })\n\n        if (npc.dialog)\n        {\n            Object(_npc_dialog__WEBPACK_IMPORTED_MODULE_1__[\"addDialogToDialogList\"])(npc.id, npc.nick, npc.dialog)\n            $npc.click(createClickWrapper(npc, _npc_dialog__WEBPACK_IMPORTED_MODULE_1__[\"openDialog\"].bind(null, npc.id, 0)))\n        }\n\n        if (npc.collision)\n            Object(_collision__WEBPACK_IMPORTED_MODULE_0__[\"setCollision\"])(npc.x, npc.y)\n        return $npc\n    }\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-actions/add.js?");

/***/ }),

/***/ "./src/npc/npc-actions/change.js":
/*!***************************************!*\
  !*** ./src/npc/npc-actions/change.js ***!
  \***************************************/
/*! exports provided: changeGameNpc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeGameNpc\", function() { return changeGameNpc; });\nfunction changeGameNpc(npc)\n{\n    if (false)\n    {}\n    else\n    {\n        let $style = $('#nerthus-npc-changing')\n        if (!$style.length)\n            $style = $('<style id=\"nerthus-npc-changing\" />').appendTo('head')\n\n        $style.append('#npc' + npc.id + '{' +\n            'background-repeat: no-repeat;' +\n            'background-image: url(' + npc.newUrl + ') !important;' +\n            '}')\n    }\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-actions/change.js?");

/***/ }),

/***/ "./src/npc/npc-actions/collision.js":
/*!******************************************!*\
  !*** ./src/npc/npc-actions/collision.js ***!
  \******************************************/
/*! exports provided: setCollision, removeCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCollision\", function() { return setCollision; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeCollision\", function() { return removeCollision; });\nfunction setCollision(x, y)\n{\n    if (false)\n        {}\n    else\n        g.npccol[x + 256 * y] = true\n}\n\nfunction removeCollision(x, y)\n{\n    if (false)\n        {}\n    else\n        delete g.npccol[x + 256 * y]\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-actions/collision.js?");

/***/ }),

/***/ "./src/npc/npc-actions/hide.js":
/*!*************************************!*\
  !*** ./src/npc/npc-actions/hide.js ***!
  \*************************************/
/*! exports provided: isNpcHidable, hideGameNpc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNpcHidable\", function() { return isNpcHidable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hideGameNpc\", function() { return hideGameNpc; });\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../settings */ \"./src/settings.js\");\n\n\nfunction isNpcHidable(npc)\n{\n    if (false)\n        {}\n    else\n        return npc.lvl === 0 || npc.lvl + 13 < hero.lvl\n}\n\nfunction hideGameNpc(id, always)\n{\n    if (false)\n    {}\n    else\n    {\n        let $style = $('#nerthus-npc-hiding')\n        if (!$style.length)\n            $style = $('<style id=\"nerthus-npc-hiding\"\\>').appendTo('head')\n\n        if (always || _settings__WEBPACK_IMPORTED_MODULE_0__[\"settings\"].hideNpcs)\n            $style.append('#npc' + id + '{display: none}')\n    }\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-actions/hide.js?");

/***/ }),

/***/ "./src/npc/npc-dialog.js":
/*!*******************************!*\
  !*** ./src/npc/npc-dialog.js ***!
  \*******************************/
/*! exports provided: addDialogToDialogList, openDialog, initNpcDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addDialogToDialogList\", function() { return addDialogToDialogList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"openDialog\", function() { return openDialog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNpcDialog\", function() { return initNpcDialog; });\n/* harmony import */ var _npc_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc-manager */ \"./src/npc/npc-manager.js\");\n\n\nconst LINE_ICON = 'icon LINE_OPTION line_option' // TODO NI/SI?\nconst EXIT_ICON = 'icon LINE_EXIT line_exit'\n\nlet dialogList = {}\n\nfunction addDialogToDialogList(npcId, npcNick, dialog)\n{\n    dialogList[npcId] = {\n        npcNick: npcNick,\n        dialog: dialog\n    }\n}\n\nfunction openDialog(npcId, index)\n{\n    const npcNick = dialogList[npcId].npcNick\n    const dialog = dialogList[npcId].dialog\n    const npcMessage = parsePlaceholders(dialog[index][0])\n    const playerReplies = parseReplies(dialog[index], npcId)\n\n    displayDialog(npcId, npcNick, npcMessage, playerReplies)\n\n    if (false)\n    {}\n    else\n    {\n        g.lock.add('nerthus-dialog')\n\n        map.resizeView(512, 192)\n    }\n}\n\nfunction parseReplies(dialogInstance, npcId)\n{\n    const replies = []\n\n    for (let i = 1; i < dialogInstance.length; i++)\n        replies.push(parseReply(dialogInstance[i], npcId))\n    return replies\n\n}\n\n\nfunction parseReply(replyRow, npcId)\n{\n    const reply = parseReplyRow(replyRow)\n    if (reply.to === 'END')\n    {\n        reply.click = closeDialog\n        reply.icon = EXIT_ICON\n    }\n    else if (reply.to)\n    {\n        reply.click = function ()\n        {\n            removeScroll()\n            openDialog(npcId, reply.to)\n            addScroll()\n            $('#dlgin').scrollTop(0)\n        }\n        reply.icon = LINE_ICON\n    }\n    return reply\n}\n\nfunction parseReplyRow(reply)\n{\n    const replyArr = reply.split('->')\n    return {text: parsePlaceholders(replyArr[0]), to: replyArr[1]}\n}\n\nfunction parsePlaceholders(text)\n{\n    if (false)\n        {}\n    else\n        return text.replace('#NAME', hero.nick)\n}\n\nfunction addScroll()\n{\n    clearInterval(g.talk.scrollCheckInterval)\n    const $dlgin = $('#dlgin')\n    g.talk.scrollCheckInterval = setInterval(function ()\n    {\n        if ($('#talkscroll').length) return\n        if ($dlgin.height() < ($('#dlgin .message').innerHeight() + $('#dlgin .replies').innerHeight()))\n        {\n            $('#dlgin').css({'margin-right': 20})\n            addScrollbar('dlgin', 490, 'talkscroll')\n        }\n    }, 100)\n    if ($dlgin.height() < ($('#dlgin .message').innerHeight() + $('#dlgin .replies').innerHeight()))\n    {\n        $dlgin.css({'margin-right': 20})\n        addScrollbar('dlgin', 490, 'talkscroll')\n    }\n}\n\nfunction removeScroll()\n{\n    removeScrollbar('dlgin', 'talkscroll')\n}\n\nfunction parseInnerDialog(npcMessage, playerReplies)\n{\n    let innerDial = '<p class=\"npc-message\">' + npcMessage + '</p><ul class=\"answers\">'\n    const repliesLen = playerReplies.length\n    for (let i = 0; i < repliesLen; i++)\n    {\n        let iconClass = LINE_ICON\n        if (playerReplies[i].to === 'END') iconClass = EXIT_ICON\n\n        innerDial +=\n            '<li class=\"answer dialogue-window-answer ' + iconClass + '\">' +\n            '<div class=\"' + iconClass + '\"></div>' +\n            '<span class=\"answer-text\">' + (i + 1) + '. ' + playerReplies[i].text + '</span>' +\n            '</li>'\n    }\n    return innerDial\n}\n\n\nfunction addEventToAnswer(answer, $dialWin, replies, index, id)\n{\n    if (replies[index])\n        $(answer).click(function ()\n        {\n            if (replies[index].to === 'END')\n                closeDialog()\n            else\n                openDialog(id, replies[index].to)\n            $('.scroll-wrapper', $dialWin).trigger('update')\n        })\n}\n\nfunction displayDialog(npcId, npcNick, npcMessage, playerReplies)//(message, replies, npc)\n{\n    if (false)\n    {}\n    else\n    {\n        $('#dlgin .message').empty().append('<h4>' + npcNick + '</h4>' + npcMessage)\n        const $replies = $('#dlgin .replies').empty()\n        $replies.append.apply($replies, playerReplies.map(composeReply))\n        addScroll()\n        $('#dialog').show()\n    }\n}\n\nfunction closeDialog()\n{\n    if (false)\n    {}\n    else\n    {\n        $('#dialog').hide()\n        g.lock.remove('nerthus-dialog')\n        map.resizeView()\n        removeScroll()\n    }\n}\n\nfunction composeReply(reply)\n{\n    return $('<li>')\n        .addClass(reply.icon)\n        .append('<div class=\"' + reply.icon + '\">')\n        .append(reply.text)\n        .click(reply.click)\n}\n\nfunction checkDialog(command)\n{\n    const match = command.match(/^talk.*id=(\\d+)/)\n    if (match)\n    {\n        const id = match[1]\n        if (id >= Object(_npc_manager__WEBPACK_IMPORTED_MODULE_0__[\"coordsToId\"])(0, 0) &&\n            dialogList[id] !== undefined)\n        {\n            return id\n        }\n    }\n    return false\n}\n\nfunction initNpcDialog()\n{\n    if (false)\n    {}\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-dialog.js?");

/***/ }),

/***/ "./src/npc/npc-manager.js":
/*!********************************!*\
  !*** ./src/npc/npc-manager.js ***!
  \********************************/
/*! exports provided: coordsToId, initNpcManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"coordsToId\", function() { return coordsToId; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initNpcManager\", function() { return initNpcManager; });\n/* harmony import */ var _npc_time_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./npc-time-manager */ \"./src/npc/npc-time-manager.js\");\n/* harmony import */ var _game_integration_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-integration/loaders */ \"./src/game-integration/loaders.js\");\n/* harmony import */ var _npc_actions_hide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./npc-actions/hide */ \"./src/npc/npc-actions/hide.js\");\n/* harmony import */ var _npc_actions_change__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./npc-actions/change */ \"./src/npc/npc-actions/change.js\");\n/* harmony import */ var _npc_actions_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./npc-actions/add */ \"./src/npc/npc-actions/add.js\");\n/* harmony import */ var _npc_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./npc-dialog */ \"./src/npc/npc-dialog.js\");\n\n\n\n\n\n\n\n// unified id for nerthus npcs\nfunction coordsToId(x, y)\n{\n    return 50000000 + (x * 1000) + y\n}\n\nfunction resolveUrl(url)\n{\n    if (url.startsWith('#'))\n        return \"http://localhost/nerthusaddon/\" + url.slice(1)\n    return url\n}\n\nfunction CustomNpc(x, y, url, nick, collision, dialog)\n{\n    this.x = parseInt(x)\n    this.y = parseInt(y)\n\n    this.id = coordsToId(x, y)\n\n    this.nick = nick\n    this.type = this.nick === '' ? 4 : 0\n\n    this.icon = resolveUrl(url)\n\n    this.actions = 0\n    this.grp = 0\n    this.wt = 0\n\n    this.collision = collision\n    this.dialog = dialog\n}\n\n\nfunction deploy(npc)\n{\n    if (!Object(_npc_time_manager__WEBPACK_IMPORTED_MODULE_0__[\"isNpcDeployable\"])(npc)) return 1\n    switch (npc.type)\n    {\n        case 'delete':\n            if (!Object(_npc_actions_hide__WEBPACK_IMPORTED_MODULE_2__[\"isNpcHidable\"])(npc))\n                return\n            return Object(_npc_actions_hide__WEBPACK_IMPORTED_MODULE_2__[\"hideGameNpc\"])(npc.id, npc.lvl === 0)\n        case 'change':\n            return Object(_npc_actions_change__WEBPACK_IMPORTED_MODULE_3__[\"changeGameNpc\"])(npc)\n        default:\n            const tip = npc.hasOwnProperty('tip') ? npc.tip : '<b>' + npc.name + '</b>'\n            const customNpc = new CustomNpc(npc.x, npc.y, npc.url, tip, npc.collision, npc.dialog)\n\n            return Object(_npc_actions_add__WEBPACK_IMPORTED_MODULE_4__[\"addNpc\"])(customNpc)\n    }\n}\n\nfunction resetNpcs()\n{\n    if (true)\n    {\n        $('.nerthus-npc').remove()\n    }\n}\n\n\nfunction loadNpcsFromFile(url)\n{\n    $.getJSON(url, function (npcs)\n    {\n        if (npcs) npcs.forEach(deploy)\n    })\n}\n\nfunction loadNpcs()\n{\n    if (false)\n    {}\n    else\n    {\n        if ({\"npc\":[1,11,15,16,169,1838,1975,2,2520,257,2663,2887,290,291,330,35,361,37,38,574,8,864],\"lights\":[1,10,1058,1059,11,114,1141,115,12,121,128,137,2,2029,2056,2063,2064,214,222,223,226,244,2520,262,2887,33,344,347,35,36,368,37,38,4,500,574,575,589,630,631,632,727,730,731,8,84,845,9]}.npc.includes(map.id))\n            loadNpcsFromFile(\"http://localhost/nerthusaddon/\" + '/npcs/map_' + map.id + '.json')\n    }\n\n}\n\n\nfunction initNpcManager()\n{\n    Object(_npc_dialog__WEBPACK_IMPORTED_MODULE_5__[\"initNpcDialog\"])()\n    Object(_game_integration_loaders__WEBPACK_IMPORTED_MODULE_1__[\"loadOnEveryMap\"])(function ()\n    {\n        resetNpcs()\n        loadNpcs()\n    })\n}\n\n\n//# sourceURL=webpack:///./src/npc/npc-manager.js?");

/***/ }),

/***/ "./src/npc/npc-time-manager.js":
/*!*************************************!*\
  !*** ./src/npc/npc-time-manager.js ***!
  \*************************************/
/*! exports provided: isNpcDeployable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNpcDeployable\", function() { return isNpcDeployable; });\nfunction validateTime(npc)\n{\n    if (!npc.time)\n        return true\n\n    const start = parseTimeStrToDate(npc.time.split('-')[0])\n    const end = parseTimeStrToDate(npc.time.split('-')[1])\n    const now = new Date()\n    if (start > end)\n        return start <= now || now <= end\n    return start <= now && now <= end\n}\n\nfunction parseTimeStrToDate(timeStr)\n{\n    timeStr = timeStr.split(':')\n    const date = new Date()\n    date.setHours(timeStr[0], timeStr[1] || 0)\n    return date\n}\n\nfunction validateDays(npc)\n{\n    if (!npc.days)\n        return true\n\n    const day_of_week = new Date().getDay()\n    return npc.days.indexOf(day_of_week) > -1\n}\n\nfunction parseStrToDate(date_str) //DD.MM.YYYY\n{\n    date_str = date_str.split('.')\n    const date = new Date()\n    const day = date_str[0] || date.getDay()\n    const month = date_str[1] ? parseInt(date_str[1]) - 1 : date.getMonth() //month 0-11\n    const year = date_str[2] || date.getFullYear()\n    date.setFullYear(year, month, day)\n    return date\n}\n\nfunction validateDate(npc)\n{\n    if (!npc.date)\n        return true\n\n    const begin = parseStrToDate(npc.date.split('-')[0])\n    const end = parseStrToDate(npc.date.split('-')[1])\n\n    const now = new Date()\n    if (begin > end)\n        begin.setTime(begin.getTime() - 31556952000) //1 year prior, for winter dates for example 21.11-20.03\n\n    return begin <= now && now <= end\n}\n\nfunction isNpcDeployable(npc)\n{\n    return validateTime(npc)\n        && validateDays(npc)\n        && validateDate(npc)\n}\n\n//# sourceURL=webpack:///./src/npc/npc-time-manager.js?");

/***/ }),

/***/ "./src/permissions.js":
/*!****************************!*\
  !*** ./src/permissions.js ***!
  \****************************/
/*! exports provided: PERMISSION_LVL, checkPermissionLvl, hasNarrationRights */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PERMISSION_LVL\", function() { return PERMISSION_LVL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkPermissionLvl\", function() { return checkPermissionLvl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasNarrationRights\", function() { return hasNarrationRights; });\n/* harmony import */ var _res_permissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./res/permissions */ \"./src/res/permissions.json\");\nvar _res_permissions__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./res/permissions */ \"./src/res/permissions.json\", 1);\n\n/*\n    0: normal player\n    1: narrator\n    2: councilor (radny)\n    100: dev or other special reason\n */\nconst PERMISSION_LVL = {DEFAULT: 0, NARRATOR: 1, COUNCILOR: 2, SPECIAL: 100}\n\nfunction checkPermissionLvl(nick)\n{\n    if (_res_permissions__WEBPACK_IMPORTED_MODULE_0__.radny.indexOf(nick) >= 0) return PERMISSION_LVL.COUNCILOR\n    if (_res_permissions__WEBPACK_IMPORTED_MODULE_0__.narrator.indexOf(nick) >= 0) return PERMISSION_LVL.NARRATOR\n    if (_res_permissions__WEBPACK_IMPORTED_MODULE_0__.special.indexOf(nick) >= 0) return PERMISSION_LVL.SPECIAL\n    return PERMISSION_LVL.DEFAULT\n}\n\nfunction hasNarrationRights(nick)\n{\n    return checkPermissionLvl(nick) > PERMISSION_LVL.DEFAULT\n}\n\n\n//# sourceURL=webpack:///./src/permissions.js?");

/***/ }),

/***/ "./src/res/lvl-names.json":
/*!********************************!*\
  !*** ./src/res/lvl-names.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[\\\"Ciułacz\\\",\\\"Łowca Wilków\\\",\\\"Tropiciel Zulusów\\\",\\\"Poganiacz Goblinów\\\",\\\"Piętno Orków\\\",\\\"Miłośnik Harpii\\\",\\\"Rezun Olbrzymów\\\",\\\"Hycel Gnolli\\\",\\\"Koszmar Tolloków\\\",\\\"Magazynier Pełną Gębą\\\",\\\"Zguba Minotaurów\\\",\\\"Niszczyciel Szkieletów\\\",\\\"Treser Centaurów\\\",\\\"Nieustraszony Pogromca Korsarzy\\\",\\\"Tańczący z Mumiami\\\",\\\"Szabrownik Wraków\\\",\\\"Gobliński Kat\\\",\\\"Postrach Berserkerów\\\",\\\"Władca Kazamatów\\\",\\\"Młot na Czarownice\\\",\\\"Dręczyciel Praorków\\\",\\\"Zguba Czarnej Gwardii\\\",\\\"Poskramiacz Furboli\\\",\\\"Egzekutor Myświórów\\\",\\\"Wielki Inkwizytor\\\",\\\"Zaklinacz Arachnidów\\\",\\\"Kat Demonisa\\\",\\\"Oprawca Maddoków\\\",\\\"Potomek Najwyższych\\\",\\\"Władca Puszczy\\\",\\\"Konkwistador\\\",\\\"Ewokator Duchów\\\",\\\"Odkrywca Reliktów\\\",\\\"Smocza Krew\\\",\\\"Piekielny Jeźdźca\\\",\\\"Ponury Żniwiarz\\\",\\\"Gwardzista Piekieł\\\"]\");\n\n//# sourceURL=webpack:///./src/res/lvl-names.json?");

/***/ }),

/***/ "./src/res/map-config.json":
/*!*********************************!*\
  !*** ./src/res/map-config.json ***!
  \*********************************/
/*! exports provided: SPRING, SUMMER, AUTUMN, WINTER, DEFAULT, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"SPRING\\\":{},\\\"SUMMER\\\":{},\\\"AUTUMN\\\":{},\\\"WINTER\\\":{\\\"1\\\":\\\"/obrazki/miasta/zima-ithan.png\\\",\\\"2\\\":\\\"/obrazki/miasta/zima-torneg.png\\\",\\\"9\\\":\\\"/obrazki/miasta/zima-werbin.png\\\",\\\"33\\\":\\\"/obrazki/miasta/zima-eder.png\\\",\\\"35\\\":\\\"/obrazki/miasta/zima-karka-han.png\\\",\\\"257\\\":\\\"/obrazki/miasta/zima-mythar.png\\\",\\\"574\\\":\\\"/obrazki/miasta/zima-nithal.png\\\"},\\\"DEFAULT\\\":{\\\"8\\\":\\\"#/maps/Zniszczone Opactwo.png\\\",\\\"9\\\":\\\"#/maps/Werbin.png\\\",\\\"11\\\":\\\"#/maps/Dolina Yss.png\\\",\\\"12\\\":\\\"#/maps/Stare Ruiny.png\\\",\\\"167\\\":\\\"#/maps/Przeklęty Zamek - wejście południowe.png\\\",\\\"168\\\":\\\"#/maps/Przeklęty Zamek - wejście północne.png\\\",\\\"169\\\":\\\"#/maps/Przeklęty Zamek - wejście wschodnie.png\\\",\\\"170\\\":\\\"#/maps/Przeklęty Zamek - podziemia północne.png\\\",\\\"171\\\":\\\"#/maps/Przeklęty Zamek - podziemia południowe.png\\\",\\\"172\\\":\\\"#/maps/Przeklęty Zamek - zbrojownia.png\\\",\\\"174\\\":\\\"#/maps/Przeklęty Zamek - sala zgromadzeń.png\\\",\\\"175\\\":\\\"#/maps/Przeklęty Zamek p.1.png\\\",\\\"290\\\":\\\"#/maps/Opactwo.png\\\",\\\"291\\\":\\\"#/maps/Opactwo p.1.png\\\",\\\"292\\\":\\\"#/maps/Opactwo - piwnica.png\\\",\\\"864\\\":\\\"#/maps/Akademia wojskowa - piwnica p.2.png\\\",\\\"866\\\":\\\"#/maps/Cytadela p.1.png\\\",\\\"3246\\\":\\\"#/maps/Zapomniana kopalnia p.1.png\\\",\\\"3247\\\":\\\"#/maps/Zapomniana kopalnia p.2.png\\\",\\\"3248\\\":\\\"#/maps/Zapomniana kopalnia p.3.png\\\",\\\"3741\\\":\\\"#/maps/Przeklęty Zamek p.2.png\\\",\\\"3742\\\":\\\"#/maps/Przeklęty Zamek - komnata.png\\\"}}\");\n\n//# sourceURL=webpack:///./src/res/map-config.json?");

/***/ }),

/***/ "./src/res/outdoor-map-exceptions.json":
/*!*********************************************!*\
  !*** ./src/res/outdoor-map-exceptions.json ***!
  \*********************************************/
/*! exports provided: indoor, outdoor, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"indoor\\\":[3459,3969],\\\"outdoor\\\":[1862]}\");\n\n//# sourceURL=webpack:///./src/res/outdoor-map-exceptions.json?");

/***/ }),

/***/ "./src/res/permissions.json":
/*!**********************************!*\
  !*** ./src/res/permissions.json ***!
  \**********************************/
/*! exports provided: radny, narrator, special, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"radny\\\":[\\\"Umbrael Regis\\\",\\\"Astratas\\\"],\\\"narrator\\\":[\\\"Karl Steinhoff\\\",\\\"Materios Dragonius\\\",\\\"Rothe\\\",\\\"Argetus\\\",\\\"Kamivis\\\",\\\"Yao Shasamo\\\",\\\"Rothen\\\"],\\\"special\\\":[\\\"Leira Elamshin\\\",\\\"Sihaya\\\",\\\"Lechi Chucherko\\\",\\\"Ath`Lar Draa`Ilythiiri\\\",\\\"Aktibro\\\",\\\"Shiraya\\\",\\\"Minstrella\\\",\\\"Noys Hollyhook-Rumore\\\",\\\"Mateusz z Rocevaux\\\",\\\"Korano Ligatur\\\",\\\"Kris Aphalon\\\",\\\"Zireath\\\",\\\"Anward\\\",\\\"Ney Talleyrand\\\"]}\");\n\n//# sourceURL=webpack:///./src/res/permissions.json?");

/***/ }),

/***/ "./src/res/vips.json":
/*!***************************!*\
  !*** ./src/res/vips.json ***!
  \***************************/
/*! exports provided: 16, 50, 319, 513, 1558, 2230, 2720, 3077, 4146, 6749, 6901, 7422, 9226, 9565, 10222, 10372, 10406, 10430, 10473, 10523, 10880, 12002, 12932, 13438, 13931, 14615, 15098, 15746, 16089, 16372, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"16\\\":\\\"Teźa\\\",\\\"50\\\":\\\"Mulher Má\\\",\\\"319\\\":\\\"Niecny drow\\\",\\\"513\\\":\\\"Zbieracz gumijagód\\\",\\\"1558\\\":\\\"Zielarka\\\",\\\"2230\\\":\\\"Mhroczniś\\\",\\\"2720\\\":\\\"Fochnisia\\\",\\\"3077\\\":\\\"Siewca Wiatru\\\",\\\"4146\\\":\\\"Gumitruskawka\\\",\\\"6749\\\":\\\"Przezacna\\\",\\\"6901\\\":\\\"Zło wcielone\\\",\\\"7422\\\":\\\"Mistrz pióra\\\",\\\"9226\\\":\\\"Zadumany\\\",\\\"9565\\\":\\\"Donna Amadonna\\\",\\\"10222\\\":\\\"Władca Ciemności\\\",\\\"10372\\\":\\\"Boski Wiatr\\\",\\\"10406\\\":\\\"Latorośle drowa\\\",\\\"10430\\\":\\\"Wschodzące Słońce\\\",\\\"10473\\\":\\\"Wędrowny Rysownik\\\",\\\"10523\\\":\\\"Lux Aeterna\\\",\\\"10880\\\":\\\"Boski Wiatr\\\",\\\"12002\\\":\\\"Głodny hobbit\\\",\\\"12932\\\":\\\"Latorośle drowa\\\",\\\"13438\\\":\\\"Zakuty łeb\\\",\\\"13931\\\":\\\"Wilcza Zamieć\\\",\\\"14615\\\":\\\"Iluzjonista\\\",\\\"15098\\\":\\\"Siostra Płomieni\\\",\\\"15746\\\":\\\"Miłośniczka kocimiętki\\\",\\\"16089\\\":\\\"Chochlica-ponczlica\\\",\\\"16372\\\":\\\"Chluba Lolth\\\"}\");\n\n//# sourceURL=webpack:///./src/res/vips.json?");

/***/ }),

/***/ "./src/settings.js":
/*!*************************!*\
  !*** ./src/settings.js ***!
  \*************************/
/*! exports provided: settings, saveSetting, loadSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"settings\", function() { return settings; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveSetting\", function() { return saveSetting; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadSettings\", function() { return loadSettings; });\nconst settings = {'night': true, 'weather': true, 'zodiac': true, 'hideNpcs': false}\n\nfunction saveSetting(name, value)\n{\n    settings[name] = value\n    localStorage.nerthus_options = JSON.stringify(settings)\n}\n\n\nfunction loadSettings()\n{\n    if (localStorage.nerthus_options)\n    {\n        const loadedSettings = JSON.parse(localStorage.nerthus_options)\n        for (const opt in loadedSettings)\n            if (loadedSettings.hasOwnProperty(opt))\n                settings[opt] = loadedSettings[opt]\n    }\n    saveSetting(settings)\n    return settings\n}\n\n\n//# sourceURL=webpack:///./src/settings.js?");

/***/ }),

/***/ "./src/time.js":
/*!*********************!*\
  !*** ./src/time.js ***!
  \*********************/
/*! exports provided: SEASON, getCurrentSeason */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SEASON\", function() { return SEASON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCurrentSeason\", function() { return getCurrentSeason; });\nconst SEASON = Object.freeze({SPRING: \"SPRING\", SUMMER: \"SUMMER\", AUTUMN: \"AUTUMN\", WINTER: \"WINTER\"})\n//TODO implement this file in other places\n\nfunction getCurrentSeason()\n{\n    function makeStartDate(day, month)\n    {\n        const date = new Date()\n        date.setUTCDate(day)\n        date.setUTCMonth(month - 1)\n        return date\n    }\n\n    const date = new Date()\n    const SPRING_BEGIN = makeStartDate(21, 3)\n    const SUMMER_BEGIN = makeStartDate(22, 6)\n    const AUTUMN_BEGIN = makeStartDate(23, 9)\n    const WINTER_BEGIN = makeStartDate(22, 11) //long winter\n\n    if (date >= WINTER_BEGIN)\n        return SEASON.WINTER\n    if (date >= AUTUMN_BEGIN)\n        return SEASON.AUTUMN\n    if (date >= SUMMER_BEGIN)\n        return SEASON.SUMMER\n    if (date >= SPRING_BEGIN)\n        return SEASON.SPRING\n    return SEASON.WINTER\n}\n\n\n//# sourceURL=webpack:///./src/time.js?");

/***/ }),

/***/ "./src/utility-functions.js":
/*!**********************************!*\
  !*** ./src/utility-functions.js ***!
  \**********************************/
/*! exports provided: resolveNerthusUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resolveNerthusUrl\", function() { return resolveNerthusUrl; });\nfunction resolveNerthusUrl(url) {\n    return url.replace(/^#/,\"http://localhost/nerthusaddon/\")\n}\n\n\n//# sourceURL=webpack:///./src/utility-functions.js?");

/***/ })

/******/ });