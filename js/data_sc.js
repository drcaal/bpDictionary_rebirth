// ◆ SC_value
// ┣ pid 序号
// ┣ name 名字
// ┣ obtain 分布范围
// ┣ kind 获取方式
// ┣ mappic 是否有对应的地图图片文件
// ┗ sfrom 材料类型
var SC_value = [
    { pid: '7901', name: 'ベースクレイ', obtain: '全地图', kind: '其他', mappic:'0', sfrom:'全采集物'},
    { pid: '7902', name: '力の結晶片G1', kind: '其他', obtain: '全地图', mappic: '0' , sfrom:'植物、矿物'},
    { pid: '7903', name: '持続の結晶片G1', kind: '其他', obtain: '全地图', mappic: '0' , sfrom:'植物、矿物' },
    { pid: '7904', name: '世話役の結晶片G1', kind: '其他', obtain: '全地图', mappic: '0' , sfrom:'植物、矿物'},
    { pid: '7905', name: '世話役の結晶片G2', kind: '其他', obtain: '全地图', mappic: '0' , sfrom:'植物、矿物'},


    { pid: '7006', name: 'トコヨ草', obtain: '全地图', kind: '植物采集', mappic:'0', sfrom:'植物'},
    { pid: '7007', name: 'グロークンシード', obtain: '全地图', kind: '植物采集', mappic:'0', sfrom:'植物'},
    { pid: '7008', name: 'あかつき草', obtain: 'ミンスター丘陵', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7009', name: '長毛草', obtain: 'アステリア平原', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7010', name: '星屑草', obtain: 'アステリア平原', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7011', name: '煙霧苔', obtain: 'バハマール高原', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7012', name: 'ストリガの実', obtain: 'バハマール高原', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7013', name: '道草花', obtain: 'モンテノール渓谷', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7014', name: 'メリソスフラワー', obtain: 'モンテノール渓谷', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7015', name: '寂れユリ', obtain: 'モンテノール渓谷', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7016', name: '砂丘斑点虫', obtain: 'エバーグリーン砂漠', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7017', name: 'レインフォールハーブ', obtain: 'エバーグリーン砂漠', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7018', name: '砂ミミズ', obtain: 'エバーグリーン砂漠', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7019', name: '砂蝋枝', obtain: 'エバーグリーン砂漠', kind: '植物采集', mappic:'0', sfrom:'植物'},
    { pid: '7020', name: 'ミラービーンズ', obtain: 'エバーグリーン砂漠', kind: '植物采集', mappic:'0', sfrom:'植物'},
    { pid: '7021', name: 'リュウノツメモドキ', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7022', name: '燃える妖花', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},  
    { pid: '7023', name: 'フィエルの若木', obtain: '<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},  
    

    { pid: '7207', name: '水晶の原石', kind: '矿物采集', obtain: '全地图', mappic: '0', sfrom:'矿物'},
    { pid: '7208', name: '環状石', kind: '矿物采集', obtain: '全地图', mappic: '0', sfrom:'矿物'},
    { pid: '7209', name: '平原ヒスイ', kind: '矿物采集', obtain: '海鳴りの草原', mappic: '1', sfrom:'矿物'},
    { pid: '7210', name: 'アステリウム鉱石', kind: '矿物采集', obtain: 'ミンスター丘陵', mappic: '1', sfrom:'矿物'},
    { pid: '7211', name: 'ジラ輝石', kind: '矿物采集', obtain: 'アステリア平原', mappic: '1', sfrom:'矿物'},
    { pid: '7212', name: '隕鉄の欠片', kind: '矿物采集', obtain: 'アステリア平原', mappic: '1', sfrom:'矿物'},
    { pid: '7213', name: 'バハ鉱石', kind: '矿物采集', obtain: 'バハマール高原', mappic: '1', sfrom:'矿物'},
    { pid: '7214', name: '静夜鉱', kind: '矿物采集', obtain: 'バハマール高原', mappic: '1', sfrom:'矿物'},
    { pid: '7215', name: '湧水石', kind: '矿物采集', obtain: 'バハマール高原', mappic: '1', sfrom:'矿物'},
    { pid: '7216', name: 'モンテノールストーン', kind: '矿物采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'矿物'},
    { pid: '7217', name: 'メリソス石灰石', kind: '矿物采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'矿物'},
    { pid: '7218', name: 'エバーグリーン雲母砂', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '0', sfrom:'矿物'},
    { pid: '7219', name: '雨唄いの化石', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom:'矿物'},
    { pid: '7220', name: '谷底白砂', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom:'矿物'},
    { pid: '7221', name: '風の這痕', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '0', sfrom:'矿物'},
    { pid: '7222', name: '砂丘生痕', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '0', sfrom:'矿物'},
    { pid: '7223', name: '哭竜鉱', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7224', name: '翼竜の化石', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7225', name: '風故物', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7226', name: 'ボルオム鉛', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7227', name: '落星孔雀石', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7228', name: '硬化プレート', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom:'矿物'},
      

    { pid: '7401', name: '割れた貝殻', kind: '水栖采集', obtain: '全地图<br>[以下必掉]<br>アステリア平原<br>バハマール高原<br>モンテノール渓谷', mappic: '2', sfrom:'水栖',mapWhere:['740101','740102','740103']},
    { pid: '7402', name: 'さざなみ石', kind: '水栖采集', obtain: '全地图<br>[以下必掉]<br>アステリア平原<br>バハマール高原<br>モンテノール渓谷', mappic: '2', sfrom:'水栖',mapWhere:['740201','740202','740203']},
    { pid: '7403', name: '旅藻草', kind: '水栖采集', obtain: 'ミンスター丘陵', mappic: '1', sfrom:'水栖'},
    { pid: '7404', name: 'フィエル蓮葉', kind: '水栖采集', obtain: 'バハマール高原', mappic: '1', sfrom:'水栖'},
    { pid: '7405', name: 'ルーノコハク・イミュー', kind: '水栖采集', obtain: 'バハマール高原', mappic: '1', sfrom:'水栖'},
    { pid: '7406', name: 'リッツェホーンウッド', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},
    { pid: '7407', name: '急流藻草', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},
    { pid: '7408', name: 'モンテノール池苔', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},

    
    { pid: '7501', name: '動的エングラムの欠片', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'任意小怪'},
    { pid: '7502', name: '動的エングラムの結晶片', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'任意小怪'},
    { pid: '7503', name: '火精の結晶片G1', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'对应属性小怪'},
    { pid: '7504', name: '氷精の結晶片G1', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'对应属性小怪'},
    { pid: '7505', name: '雷精の結晶片G1', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'对应属性小怪'},
    { pid: '7506', name: '土精の結晶片G1', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'对应属性小怪'},
    { pid: '7507', name: 'グレートファングの研がれた牙', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1' , sfrom:'グレートファング'},
    { pid: '7508', name: 'タイラントボア・グロウの上質な毛皮', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1' , sfrom:'タイラントボア・グロウ'},
    { pid: '7509', name: 'ランブルボアの爪', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1' , sfrom:'ランブルボア'},
    { pid: '7510', name: 'デザートファングの高品質な毛皮', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1' , sfrom:'デザートファング'},
    { pid: '7511', name: 'デザートファングの尖った爪', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1' , sfrom:'デザートファング'},
    { pid: '7512', name: 'ウリボの尾', kind: '小怪掉落', obtain: '海鳴りの草原', mappic: '1' , sfrom:'ウリボ'},
    { pid: '7513', name: 'ホーンゴートの角', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ホーンゴート' },
    { pid: '7514', name: 'ホーンゴートの毛皮', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ホーンゴート' },
    { pid: '7515', name: 'カイザーエルクの毛皮', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'カイザーエルク' },
    { pid: '7516', name: 'ランドフォックスの尻尾', kind: '小怪掉落', obtain: 'ミンスター丘陵', mappic: '1', sfrom: 'ランドフォックス' },
    { pid: '7517', name: 'ハイランドフォックスの爪', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ハイランドフォックス' },
    { pid: '7518', name: 'ハイランドフォックスの牙', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ハイランドフォックス' },
    { pid: '7519', name: 'ランドホークの穿孔嘴', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'ランドホーク' },
    { pid: '7520', name: 'ランドホークの鉤爪', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'ランドホーク' },
    { pid: '7521', name: 'ゴブリンの棍棒', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1', sfrom: 'ゴブリン' },
    { pid: '7522', name: 'ゴブリンのたてがみ', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ゴブリン' },
    { pid: '7523', name: 'ゴブリンの尻尾', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ゴブリン' },
    { pid: '7524', name: 'ゴブリンのキバ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom: 'ゴブリン' },
    { pid: '7525', name: 'エルダーゴブリンの杖', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1', sfrom: 'エルダーゴブリン' },
    { pid: '7526', name: 'エルダーゴブリンの首飾り', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'エルダーゴブリン' },
    { pid: '7527', name: 'ゴブリンウォーリアーのたてがみ', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ゴブリンウォーリアー' },
    { pid: '7528', name: 'ゴブリンウォーリアーの尖った爪', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'ゴブリンウォーリアー' },
    { pid: '7529', name: 'ゴブリンセージの杖', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>', mappic: '1', sfrom: 'ゴブリンセージ' },
    { pid: '7530', name: 'ムークの脛毛', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ムーク' },
    { pid: '7531', name: 'ムークの鉤爪', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ムーク' },
    { pid: '7532', name: 'ムークの爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>', mappic: '1', sfrom: 'ムーク' },
    { pid: '7533', name: 'ムークアーチャーのキバ', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ムークアーチャー' },
    { pid: '7534', name: 'オーガの重角', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1', sfrom: 'オーガ' },
    { pid: '7535', name: 'ドゴルマンの体毛', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'ドゴルマン' },
    { pid: '7536', name: 'ミーンの羽', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ミーン' },
    { pid: '7537', name: 'ミーンの針', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ミーン' },
    { pid: '7538', name: 'ミーンの丸殻', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>', mappic: '1', sfrom: 'ミーン' },
    { pid: '7539', name: 'サンドバイパーの甲殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'サンドバイパー' },
    { pid: '7540', name: 'サンドバイパーの殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'サンドバイパー' },
    { pid: '7541', name: 'サンドバイパーの棘', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'サンドバイパー' },
    { pid: '7542', name: 'サンドバイパーのテール', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'サンドバイパー' },
    { pid: '7543', name: 'シャドウバイパーの立派な殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'シャドウバイパー' },
    { pid: '7544', name: 'シャドウバイパーのロングテール', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'シャドウバイパー' },
    { pid: '7545', name: 'シャドウバイパーの厚手の外皮', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'シャドウバイパー' },
    { pid: '7546', name: 'シャドウバイパーのテール', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'シャドウバイパー' },
    { pid: '7547', name: 'リザードゴーストの澄んだ目玉', kind: '小怪掉落', obtain: 'バハマール高原', mappic: '1', sfrom: 'リザードゴースト' },
    { pid: '7548', name: 'リザードゴーストの尖鋭な背ビレ', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'リザードゴースト' },
    { pid: '7549', name: 'リザードゴーストの鮮やかな鱗', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'リザードゴースト' },
    { pid: '7550', name: 'ロックリザードの尖った爪', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ロックリザード' },
    { pid: '7551', name: 'ロックリザードの穿牙', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ロックリザード' },
    { pid: '7552', name: 'ロックリザードの大ヒレ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>', mappic: '1', sfrom: 'ロックリザード' },
    { pid: '7553', name: 'エビキノコの爪', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'エビキノコ' },
    { pid: '7554', name: 'カニクモの爪', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'カニクモ' },
    { pid: '7555', name: 'オオカニクモの立派な殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'オオカニクモ' },
    { pid: '7556', name: 'ナッポの甘い果汁', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ナッポ' },
    { pid: '7557', name: 'ナッポの扇葉', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ナッポ' },
    { pid: '7558', name: 'カガチヤンマの羽', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'カガチヤンマ' },
    { pid: '7559', name: 'カガチヤンマの体液', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'カガチヤンマ' },
    { pid: '7560', name: 'オオカガチヤンマの立派な殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'オオカガチヤンマ' },
    { pid: '7561', name: 'オオカガチヤンマの厚い頭殻', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: 'オオカガチヤンマ' },
    { pid: '7562', name: '山賊の戦靴', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1', sfrom: '山賊' },
    { pid: '7563', name: '山賊の鋭利な剣', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: '山賊' },
    { pid: '7564', name: '山賊の射手の手袋', kind: '小怪掉落', obtain: 'アステリア平原', mappic: '1', sfrom: '山賊の射手' },
    { pid: '7565', name: '山賊の射手のズボン', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: '山賊の射手' },
    { pid: '7566', name: '山賊の斥候の上着', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: '山賊の斥候' },
    { pid: '7567', name: '山賊の斥候の剣', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: '山賊の斥候' },
    { pid: '7568', name: '山賊の斥候の戦靴', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>', mappic: '1', sfrom: '山賊の斥候' },
    { pid: '7569', name: '山賊の術士の重い戦靴', kind: '小怪掉落', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom: '山賊の術士' },
    { pid: '7570', name: '山賊の護衛の上着', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>', mappic: '1', sfrom: '山賊の護衛' },
    { pid: '7571', name: 'タイラントボアの無傷の牙', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: 'タイラントボア' },
    { pid: '7572', name: 'ドラウグ・エッジの破片', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: 'ドラウグ・エッジ' },
    { pid: '7573', name: 'ゴーレムの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: 'ゴーレム' },
    { pid: '7574', name: 'バラージアームの機鎧', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: 'バラージアーム' },
    { pid: '7575', name: 'ゾルキシア銃機兵のグローブ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: 'ゾルキシア銃機兵' },
    { pid: '7576', name: 'ゾルキシア槍兵の鎧', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: 'ゾルキシア槍兵' },
    { pid: '7577', name: '量産型アイアンコフィンの機鎧', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: '量産型アイアンコフィン' },
    { pid: '7578', name: 'ホーリーエレメントの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom: 'ホーリーエレメント' },
    { pid: '7579', name: '山賊の斥候の軽甲', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: '山賊の斥候' },
    { pid: '7580', name: '山賊の術士の靴', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: '山賊の術士' },
    { pid: '7581', name: 'ムークの頸毛', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ムーク' },
    { pid: '7582', name: 'ゴブリン・グロウのたてがみ', kind: '小怪掉落', obtain: 'モンテノール渓谷', mappic: '1', sfrom: 'ゴブリン・グロウ' },
    { pid: '7583', name: 'ドラウグ・アルマの欠片', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: 'ドラウグ・アルマ' },

]