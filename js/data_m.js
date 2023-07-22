// ◆ M_value
// ┣ pid 序号
// ┣ name 名字
// ┣ spaceName 分布地点
// ┣ isBoss 小怪还是boss
// ┗ mapWhere 分布地点地图序号
var M_value=[
    {pid:'8001',name:'ゴブリン<br>普通哥布林',spaceName:'アステリア平原<br>バハマール高原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8001','8002','8003']},
    {pid:'8002',name:'エルダーゴブリン<br>哥布林长老',spaceName:'アステリア平原<br>バハマール高原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8035','8002','8036','8004']},
    {pid:'8003',name:'ゴブリンウォーリアー<br>斧头哥布林',spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8002','8037']},
    {pid:'8004',name:'オーガ<br>食人魔',spaceName:'アステリア平原',isBoss:'小怪',mapWhere:['8005']},
    {pid:'8005',name:'タイラントボア<br>黄色狂暴野猪',spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8006','8007','8008']},
    {pid:'8006',name:'ランブルボア<br>幼年野猪',spaceName:'アステリア平原',isBoss:'小怪',mapWhere:['8009']},
    {pid:'8007',name:'ランドフォックス<br>平原狐',spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8010','8011']},
    {pid:'8008',name:'山賊<br>山贼',spaceName:'アステリア平原<br>モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8012','8013','8014','8015']},
    {pid:'8009',name:'山賊の射手<br>山贼射手',spaceName:'アステリア平原<br>モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8017','8013','8070','8015','8018']},
    {pid:'8010',name:'山賊の斥候<br>山贼斥候',spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8013','8019','8020','8021']},
    {pid:'8011',name:'山賊の術士<br>山贼术士',spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8022','8023','8024','8025']},
    {pid:'8012',name:'山賊の護衛<br>山贼护卫',spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8026']},
    {pid:'8013',name:'タイラントボア・グロウ<br>白色狂暴野猪',spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a><br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8027','8028','8029']},
    {pid:'8014',name:'ウリボ<br>小香猪',spaceName:'アステリア平原<br><a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8030','8031']},
    {pid:'8015',name:'スカイフィッシュ<br>天鱼',spaceName:'アステリア平原',isBoss:'小怪',mapWhere:['8032']},
    {pid:'8016',name:'*貝殻ゴブリン<br>*贝壳哥布林',spaceName:'アステリア平原<br>バハマール高原',isBoss:'小怪',mapWhere:['8033','8034']},
    {pid:'8017',name:'ホーンゴート<br>霍恩羊',spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8038','8039']},
    {pid:'8018',name:'カイザーエルク<br>凯撒麋鹿',spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8040','8041']},
    {pid:'8019',name:'ハイランドフォックス<br>高原狐',spaceName:'バハマール高原<br><a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8042','8043']},
    {pid:'8020',name:'リザードゴースト<br>蓝蜥蜴',spaceName:'バハマール高原<br>エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8044','8045']},
    {pid:'8021',name:'ムーク<br>穆库',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8046','8047']},
    {pid:'8022',name:'ムークアーチャー<br>穆库弓弩手',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8048','8049']},
    {pid:'8023',name:'ムークスカウト<br>穆库侦察兵',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8049','8050']},
    {pid:'8024',name:'ミーン<br>黄蝇',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8051','8052']},
    {pid:'8025',name:'ヴェノミーン<br>紫蝇',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8053','8054']},
    {pid:'8026',name:'エビキノコ<br>蘑菇虾',spaceName:'モンテノール渓谷',isBoss:'小怪',mapWhere:['8055']},
    {pid:'8027',name:'カガチヤンマ<br>灰卡伽蜻蜓',spaceName:'モンテノール渓谷<br>エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8056','8057','8062']},
    {pid:'8028',name:'カニクモ<br>蓝蟹蛛',spaceName:'モンテノール渓谷',isBoss:'小怪',mapWhere:['8059']},
    {pid:'8029',name:'ナッポ<br>纳波',spaceName:'モンテノール渓谷',isBoss:'小怪',mapWhere:['8060']},
    {pid:'8030',name:'ロックリザード<br>黄蜥蜴',spaceName:'モンテノール渓谷<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a><br><a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8061','8062','8063']},
    {pid:'8031',name:'ドゴルマン<br>多古尔曼兽',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8064']},
    {pid:'8032',name:'デザートファング<br>大漠獠牙・幼年',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8065']},
    {pid:'8033',name:'グレートファング<br>大漠獠牙・成年',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8066']},
    {pid:'8034',name:'ランドホーク<br>白羽鹞',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8067']},
    {pid:'8035',name:'サンドバイパー<br>白蝰蛇',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8068']},
    {pid:'8036',name:'シャドウバイパー<br>黑蝰蛇',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8069']},
    {pid:'8037',name:'マスクモス<br>彩羽鹞',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8071']},
    {pid:'8038',name:'オオカニクモ<br>黄蟹蛛',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8072']},
    {pid:'8039',name:'オオカガチヤンマ<br>黄卡伽蜻蜓',spaceName:'エバーグリーン砂漠<br><a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8073','8074']},
    {pid:'8040',name:'ヒートバイパー<br>黄蝰蛇',spaceName:'エバーグリーン砂漠',isBoss:'小怪',mapWhere:['8075']},
    {pid:'8041',name:'Ｆゴブリン<br>黑化哥布林',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8076']},
    {pid:'8042',name:'Ｆランドフォックス<br>黑化平原狐',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8077']},
    {pid:'8043',name:'ゴブリン・グロウ<br>紫皮斧头哥布林',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8078']},
    {pid:'8044',name:'グレーターゴブリン<br>哥布林土术士',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'小怪',mapWhere:['8078']},
    {pid:'8045',name:'ブラストミーン<br>红蝇',spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8074']},
    {pid:'8046',name:'アースエレメント<br>土精灵',spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'小怪',mapWhere:['8079']},
    {pid:'8047',name:'アイスエレメント<br>冰精灵',spaceName:'<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'小怪',mapWhere:['8080']},
    {pid:'8048',name:'ペイルアイ<br>拖尾的眼球',spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8081']},
    {pid:'8049',name:'ドラウグ・エッジ<br>灰色剑柄',spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8082']},
    {pid:'8050',name:'ドラウグ・アルマ<br>自律机甲',spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8083']},
    {pid:'8051',name:'贖罪のドラウグ・エッジ<br>金色剑柄',spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'小怪',mapWhere:['8084']},
    {pid:'8052',name:'クアッドアーム<br>灰色虫状浮游机甲',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8085']},
    {pid:'8053',name:'ゾルキシア兵<br>产屋胄卫兵',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8086']},
    {pid:'8054',name:'ゾルキシア狙撃兵<br>产屋狙击兵',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8087']},
    {pid:'8055',name:'ゴーレム<br>巨魔像',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8088']},
    {pid:'8056',name:'バラージアーム<br>棕色虫状浮游机甲',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8089']},
    {pid:'8057',name:'ゾルキシア銃機兵<br>产屋铳机兵',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8090']},
    {pid:'8058',name:'ゾルキシア槍兵<br>产屋枪兵',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8091']},
    {pid:'8059',name:'量産型アイアンコフィン<br>量产型银色自律机甲',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8092']},
    {pid:'8060',name:'ホーリーエレメント<br>光精灵',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'小怪',mapWhere:['8093']},
    {pid:'8061',name:'フローティングオーブ<br>普通眼球',spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8081']},
    {pid:'8062',name:'ゴブリンセージ<br>贤者哥布林',spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'小怪',mapWhere:['8133']},

]
var MB_value = [
    {pid:'8501',name:'ピンクウリボ<br>粉色小香猪',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8094'],showTime:'讨伐附件的同类型敌人' ,level:'1'},
    {pid:'8502',name:'猛る獸<br>猛兽',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8095'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'9'},
    {pid:'8503',name:'赤い飛沫<br>赤红飞沫',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8096'],showTime:'讨伐附件的同类型敌人<br>白天',level:'12'},
    {pid:'8504',name:'深緑の牙<br>深绿的獠牙',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8097'],showTime:'讨伐附件的同类型敌人',level:'15'},
    {pid:'8505',name:'異国の山賊ネズミ<br>异国山贼・鼠',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8098'],showTime:'讨伐附件的同类型敌人<br>夜间<br>打开打怪掉的黑箱子',level:'24'},
    {pid:'8506',name:'猛る金色<br>金黄的盛怒',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8099'],showTime:'讨伐附件的同类型敌人<br>白天',level:'45'},
    {pid:'8507',name:'炎獄<br>炎狱',spaceName:'アステリア平原',isBoss:'Boss',mapWhere:['8100'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'43'},
    {pid:'8508',name:'サファイアトロット<br>宝蓝色的急行',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8101'],showTime:'讨伐附件的同类型敌人<br>白天<br>打开打怪掉的黑箱子',level:'16'},
    {pid:'8509',name:'炎角<br>炎角',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8102'],showTime:'讨伐附件的同类型敌人<br>夜间<br>多人讨伐概率增加',level:'26'},
    {pid:'8510',name:'スプーキーゴート<br>幽灵山羊',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8103'],showTime:'讨伐附件的同类型敌人',level:'19'},
    {pid:'8511',name:'悪しき癒し手<br>邪医',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8104'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'29'},
    {pid:'8512',name:'トリックエルダー<br>蛊师',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8105'],showTime:'讨伐附件的同类型敌人',level:'45'},
    {pid:'8513',name:'エメラルドホーン<br>翡翠号角',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8106'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'51'},
    {pid:'8514',name:'*貝を集めし邪教徒<br>*收集贝壳的邪徒',spaceName:'バハマール高原',isBoss:'Boss',mapWhere:['8107'],showTime:'讨伐附件的同类型敌人',level:'45'},
    {pid:'8515',name:'プレデター<br>捕食者',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8108'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'25'},
    {pid:'8516',name:'鮮やかナッポ<br>缤纷纳波',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8109'],showTime:'讨伐附件的同类型敌人<br>白天',level:'45'},
    {pid:'8517',name:'渓谷の遊猟者<br>峡谷的游猎者',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8110'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'35'},
    {pid:'8518',name:'小さき闘技者<br>小小技斗者',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8111'],showTime:'讨伐附件的同类型敌人',level:'36'},
    {pid:'8519',name:'スカイサーペント<br>螣蛇',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8112'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'21'},
    {pid:'8520',name:'渓谷の尖兵<br>峡谷的哨兵',spaceName:'モンテノール渓谷',isBoss:'Boss',mapWhere:['8113'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'47'},
    {pid:'8521',name:'剛腕の覇者<br>刚腕的霸者',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8114'],showTime:'讨伐附件的同类型敌人<br>多人讨伐概率增加',level:'48'},
    {pid:'8522',name:'隠者の鋭鋏<br>隐士的锐爪',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8115'],showTime:'讨伐附件的同类型敌人',level:'45'},
    {pid:'8523',name:'オロチ<br>粉蛇',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8116'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'50'},
    {pid:'8524',name:'サンドパイソン<br>沙蟒',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8117'],showTime:'讨伐附件的同类型敌人',level:'41'},
    {pid:'8525',name:'異国の山賊射手ヤマネコ<br>异国山贼射手・山猫',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8118'],showTime:'讨伐附件的同类型敌人<br>白天<br>打开打怪掉的黑箱子',level:'31'},
    {pid:'8526',name:'バジリスク<br>玄武蜥蜴',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8119'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'27'},
    {pid:'8527',name:'疾駆の大鷲<br>翱翔之鹫',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8120'],showTime:'讨伐附件的同类型敌人',level:'36'},
    {pid:'8528',name:'クインマスクモス<br>皇后白羽鹞',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8121'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'30'},
    {pid:'8529',name:'這いずる羽音<br>伏地的羽翼',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8122'],showTime:'讨伐附件的同类型敌人<br>白天',level:'35'},
    {pid:'8530',name:'異国の山賊斥候キツネ<br>异国山贼斥候・狐',spaceName:'エバーグリーン砂漠',isBoss:'Boss',mapWhere:['8123'],showTime:'讨伐附件的同类型敌人<br>夜间',level:'42'},
    {pid:'8531',name:'鉄牙<br>铁牙',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'Boss',mapWhere:['8124'],showTime:'讨伐附件的同类型敌人',level:'17'},
    {pid:'8532',name:'荒ぶる牙王<br>狂暴牙王',spaceName:'<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>',isBoss:'Boss',mapWhere:['8127'],showTime:'讨伐附件的同类型敌人',level:'49'},
    {pid:'8533',name:'異国の山賊長ヒグマ<br>异国的山贼匪首・棕熊',spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'Boss',mapWhere:['8125'],showTime:'讨伐附件的同类型敌人',level:'51'},
    {pid:'8534',name:'ドラウグ・ラピス<br>洞穿之石・青金',spaceName:'<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>',isBoss:'Boss',mapWhere:['8126'],showTime:'讨伐附件的同类型敌人',level:'49'},
    {pid:'8535',name:'虚ろの白礫<br>空洞白砾',spaceName:'<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>',isBoss:'Boss',mapWhere:['8128'],showTime:'讨伐附件的同类型敌人',level:'38'},
    {pid:'8536',name:'蒼白灯の守衛<br>苍白之光的守护者',spaceName:'<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>',isBoss:'Boss',mapWhere:['8129'],showTime:'讨伐附件的同类型敌人',level:'47'},
    {pid:'8537',name:'摂理の破戒者<br>违神的破戒者',spaceName:'<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>',isBoss:'Boss',mapWhere:['8130'],showTime:'讨伐附件的同类型敌人',level:'48'},

    {pid:'8538',name:'遺留のオートマトン<br>徘徊的自律机关',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'Boss',mapWhere:['8131'],showTime:'讨伐附件的同类型敌人',level:'44'},
    {pid:'8539',name:'朱に染まりし機神<br>朱红机神',spaceName:'<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>',isBoss:'Boss',mapWhere:['8132'],showTime:'讨伐附件的同类型敌人',level:'48'},

]