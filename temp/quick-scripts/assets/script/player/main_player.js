(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/player/main_player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3be76PJypZCUpjdE0omEIiR', 'main_player', __filename);
// script/player/main_player.js

"use strict";

var main_player = {
    player_id: "",
    name: "",
    player_texture: null, //职业头像
    class: null, //职业
    race: null, //种族
    dungeon: null, //地下城
    friend: null, //好友
    level: 0, //等级
    equipment: null, //装备
    vip: null, //vip等级
    spell: null, //技能
    prestige: null, //声望
    rank: null, //军衔
    palyer_map: null, //地图开启状态
    bag: null, //背包
    coin: 0, //金币
    rune: 0, //符石
    place: 0, //当前位置

    HP: 0, //生命
    MP: 0, //法力
    agility: 0, //敏捷
    stamina: 0, //耐力
    strength: 0, //力量
    intelligence: 0, //智力
    spirit: 0, //精神

    attack: 0, //攻击力
    mana: 0, //魔法攻击
    attack_speed: 0, //攻击速度
    haste: 0, //急速
    critchange: 0, //暴击
    hit_rating: 0, //命中
    precise: 0, //精准
    lifesteal: 0, //吸血
    cleaving_attack: 0, //分裂攻击
    armor_pen: 0, //物理穿透
    magic_pen: 0, //法术穿透

    magic_resist: 0, //魔抗
    armor: 0, //护甲
    parry: 0, //招架
    avoidance: 0, //躲避
    block: 0, //档格
    resilience_rating: 0 //韧性

};

module.exports = main_player;

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
        //# sourceMappingURL=main_player.js.map
        