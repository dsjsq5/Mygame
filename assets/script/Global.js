window.Global={
    city:null,
    battle:null,
    dungeon:null,
    friend:null,
    shop:null,
    strategy:null,
    main_city:null,
    bottom_flag:1,
    change:function(params) {
        if(params != 1){
            this.city.node.getComponent(cc.Sprite).spriteFrame=this.city.city_3;
        }
        if(params != 2){
            this.battle.node.getComponent(cc.Sprite).spriteFrame=this.battle.battle_3;
        }
        if(params != 3){
            this.dungeon.node.getComponent(cc.Sprite).spriteFrame=this.dungeon.dungeon_3;
        }
        if(params != 4){
            this.friend.node.getComponent(cc.Sprite).spriteFrame=this.friend.friend_3;
        }
        if(params != 5){
            this.shop.node.getComponent(cc.Sprite).spriteFrame=this.shop.shop_3;
        }
        if(params != 6){
            this.strategy.node.getComponent(cc.Sprite).spriteFrame=this.strategy.strategy_3;
        }
        switch (this.bottom_flag) {
            case 1:
                this.main_city.node.active=false;
                break;
            default:
                break;
        }
        this.bottom_flag=params;
    },
    changeMainCity:function (parmas) {
        // cc.log("parmas123:"+parmas)
        switch (parmas) {
            case "1":
                var roleNode = cc.find("main_bg/main_role",this.main_city.node);
                roleNode.active=true;
                var roleanim1 = roleNode.getComponent(cc.Animation);
                roleanim1.play("roleAnim1");
                break;
            case "2":
                var spellNode = cc.find("main_bg/main_spell",this.main_city.node);
                spellNode.active=true;
                var spellAnim1 = spellNode.getComponent(cc.Animation);
                spellAnim1.play("spellAnim1");
                break;
            case "3":
                var prestigeNode = cc.find("main_bg/main_prestige",this.main_city.node);
                prestigeNode.active=true;
                var prestigeAnim1 = prestigeNode.getComponent(cc.Animation);
                prestigeAnim1.play("prestigeAnim1");
                break;
            default:
                cc.log("default123:")
                break;
        }
    }
};