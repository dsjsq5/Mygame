(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Global.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'aefd08IQ5JH8pRGMbPhAXoK', 'Global', __filename);
// script/Global.js

"use strict";

window.Global = {
    city: null,
    battle: null,
    dungeon: null,
    friend: null,
    shop: null,
    strategy: null,
    change: function change(params) {
        if (params != 1) {
            this.city.node.getComponent(cc.Sprite).spriteFrame = this.city.city_3;
        }
        if (params != 2) {
            this.battle.node.getComponent(cc.Sprite).spriteFrame = this.battle.battle_3;
        }
        if (params != 3) {
            this.dungeon.node.getComponent(cc.Sprite).spriteFrame = this.dungeon.dungeon_3;
        }
        if (params != 4) {
            this.friend.node.getComponent(cc.Sprite).spriteFrame = this.friend.friend_3;
        }
        if (params != 5) {
            this.shop.node.getComponent(cc.Sprite).spriteFrame = this.shop.shop_3;
        }
        if (params != 6) {
            this.strategy.node.getComponent(cc.Sprite).spriteFrame = this.strategy.strategy_3;
        }
    }
};

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
        //# sourceMappingURL=Global.js.map
        