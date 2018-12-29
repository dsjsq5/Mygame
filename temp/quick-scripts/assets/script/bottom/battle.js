(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bottom/battle.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c56a1MMsz9NUatRqlKt3j9C', 'battle', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=battle.js.map
        