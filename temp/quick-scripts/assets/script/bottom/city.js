(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/bottom/city.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '608a79l7H9KAZhf+T7svpl4', 'city', __filename);
// script/bottom/city.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {

        city_1: {
            default: null,
            type: cc.SpriteFrame
        },
        city_2: {
            default: null,
            type: cc.SpriteFrame
        },
        city_3: {
            default: null,
            type: cc.SpriteFrame
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        Global.city = this;
        this.node.getComponent(cc.Sprite).spriteFrame = this.city_1;
    },
    start: function start() {},


    // update (dt) {},

    onclick: function onclick() {
        this.node.getComponent(cc.Sprite).spriteFrame = this.city_1;
        Global.change(1);
        Global.main_city.node.active = true;
        // var self = this;
        // cc.loader.loadRes("texture/bottom/city_1", cc.SpriteFrame, function (err, spriteFrame) {
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
        //# sourceMappingURL=city.js.map
        