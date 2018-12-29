"use strict";
cc._RF.push(module, 'c56a1MMsz9NUatRqlKt3j9C', 'battle');
// script/bottom/battle.js

"use strict";

// var City = require("city");
cc.Class({
    extends: cc.Component,

    properties: {
        battle_1: {
            default: null,
            type: cc.SpriteFrame
        },
        battle_2: {
            default: null,
            type: cc.SpriteFrame
        },
        battle_3: {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Global.battle = this;
    },
    start: function start() {},


    // update (dt) {},

    onclick: function onclick() {
        this.node.getComponent(cc.Sprite).spriteFrame = this.battle_1;
        Global.change(2);
        // var cityNode = cc.find("Canvas/bottom/city");
        // cc.log('cityNode:'+cityNode.name);
        // var self = this;
        // cc.loader.loadRes("texture/bottom/battle_1", cc.SpriteFrame, function (err, spriteFrame) {
        //     self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });
    }
});

cc._RF.pop();