"use strict";
cc._RF.push(module, 'cefbaSLcatI1o6cFWztUcMO', 'main_city');
// script/city/main_city.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Global.main_city = this;
    },
    start: function start() {},


    // update (dt) {},
    onEnable: function onEnable() {
        var roleNode = cc.find("main_bg/main_role", this.node);
        roleNode.active = true;
        var spellNode = cc.find("main_bg/main_spell", this.node);
        spellNode.active = false;
        var prestigeNode = cc.find("main_bg/main_prestige", this.node);
        prestigeNode.active = false;
        var anim = roleNode.getComponent(cc.Animation);
        anim.play();
    }
});

cc._RF.pop();