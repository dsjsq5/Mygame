"use strict";
cc._RF.push(module, '608a79l7H9KAZhf+T7svpl4', 'city');
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
        // var self = this;
        // cc.loader.loadRes("texture/bottom/city_1", cc.SpriteFrame, function (err, spriteFrame) {
        //     self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        // });
    }
});

cc._RF.pop();