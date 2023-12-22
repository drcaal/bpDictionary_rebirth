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
    { pid: '7024', name: 'ルーノキノコ・イミュー', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7025', name: '静寂草', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7026', name: 'オイルシェールグラス', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7027', name: 'ドーンマッシュルーム', obtain: '<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7028', name: 'メンヨウ草', obtain: '<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7029', name: '半島カナムグラ', obtain: '西バーンハルト半島', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7030', name: '氷点花', obtain: '西バーンハルト半島', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7031', name: 'カムノキの新芽', obtain: '西バーンハルト半島', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7032', name: 'ドラファーフ草', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7033', name: '山麓ナデシコ', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7034', name: 'クロネッタの果実', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    { pid: '7035', name: 'トンネルヨモギ', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', kind: '植物采集', mappic:'1', sfrom:'植物'},
    

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
    { pid: '7222', name: '砂丘生痕', kind: '矿物采集', obtain: 'エバーグリーン砂漠', mappic: '1', sfrom:'矿物'},
    { pid: '7223', name: '哭竜鉱', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7224', name: '翼竜の化石', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7225', name: '風故物', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(5)">木漏れ日射す林道・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7226', name: 'ボルオム鉛', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(6)">ボルオム遺跡・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7227', name: '落星孔雀石', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(3)">ともし火の森・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7228', name: '硬化プレート', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7229', name: '謎の金属', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(4)">枷神の産屋・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7230', name: '盛時の礫塊', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7231', name: '風止みの遺物', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7232', name: '浮かぶ車輪', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7233', name: '星状輝石', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7234', name: 'アミメバチ', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7235', name: '曇天結晶', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7236', name: 'ミダイエ鉱', kind: '矿物采集', obtain: '西バーンハルト半島', mappic: '1', sfrom:'矿物'},
    { pid: '7237', name: 'アイアンヘルムの破片', kind: '矿物采集', obtain: '西バーンハルト半島', mappic: '1', sfrom:'矿物'},
    { pid: '7238', name: 'オルドナイト', kind: '矿物采集', obtain: '西バーンハルト半島', mappic: '1', sfrom:'矿物'},
    { pid: '7239', name: 'アランダル歯車', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7240', name: 'インボルナイト', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7241', name: 'スピンドルパーツ', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', mappic: '1', sfrom:'矿物'},
    { pid: '7242', name: 'モスメタル', kind: '矿物采集', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', mappic: '1', sfrom:'矿物'},
      

    { pid: '7401', name: '割れた貝殻', kind: '水栖采集', obtain: '全地图<br>[以下必掉]<br>アステリア平原<br>バハマール高原<br>モンテノール渓谷', mappic: '2', sfrom:'水栖',mapWhere:['740101','740102','740103']},
    { pid: '7402', name: 'さざなみ石', kind: '水栖采集', obtain: '全地图<br>[以下必掉]<br>アステリア平原<br>バハマール高原<br>モンテノール渓谷', mappic: '2', sfrom:'水栖',mapWhere:['740201','740202','740203']},
    { pid: '7403', name: '旅藻草', kind: '水栖采集', obtain: 'ミンスター丘陵', mappic: '1', sfrom:'水栖'},
    { pid: '7404', name: 'フィエル蓮葉', kind: '水栖采集', obtain: 'バハマール高原', mappic: '1', sfrom:'水栖'},
    { pid: '7405', name: 'ルーノコハク・イミュー', kind: '水栖采集', obtain: 'バハマール高原', mappic: '1', sfrom:'水栖'},
    { pid: '7406', name: 'リッツェホーンウッド', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},
    { pid: '7407', name: '急流藻草', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},
    { pid: '7408', name: 'モンテノール池苔', kind: '水栖采集', obtain: 'モンテノール渓谷', mappic: '1', sfrom:'水栖'},
    { pid: '7409', name: '海蛇草', kind: '水栖采集', obtain: '西バーンハルト半島', mappic: '1', sfrom:'水栖'},
    { pid: '7410', name: 'ランツェウッド', kind: '水栖采集', obtain: '西バーンハルト半島', mappic: '1', sfrom:'水栖'},

    
    { pid: '7501', name: '動的エングラムの欠片', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'任意小怪'},
    { pid: '7502', name: '動的エングラム結晶片', kind: '小怪掉落', obtain: '全地图', mappic: '0' , sfrom:'任意小怪'},
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
    { pid: '7582', name: 'ゴブリン・グロウのたてがみ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(1)">巨竜の爪痕・自由探索</a>', mappic: '1', sfrom: 'ゴブリン・グロウ' },
    { pid: '7583', name: 'ドラウグ・アルマの欠片', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(2)">雨止まぬ森・自由探索</a>', mappic: '1', sfrom: 'ドラウグ・アルマ' },
    { pid: '7584', name: 'デザートファングの毛', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom: 'デザートファング' },
    { pid: '7585', name: 'オオカニクモの丸殻の毛', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom: 'オオカニクモ' },
    { pid: '7586', name: 'ペイルポッドの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom: 'ペイルポッド' },
    { pid: '7587', name: 'イグニスエレメントの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom: 'イグニスエレメント' },
    { pid: '7588', name: 'イージスポッドの部品', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(7)">風精の舞台・自由探索</a>', mappic: '1', sfrom: 'イージスポッド' },
    { pid: '7589', name: 'リザードゴーストの特大ヒレ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom: 'リザードゴースト' },
    { pid: '7590', name: 'ゴブリンセージの上たてがみ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom: 'ゴブリンセージ' },
    { pid: '7591', name: 'ドラウグ・エッジのかけら', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom: 'ドラウグ・エッジ' },
    { pid: '7592', name: 'アイスエレメントの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom: 'アイスエレメント' },
    { pid: '7593', name: 'ドゴルマンの生爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(8)">音無き都・自由探索</a>', mappic: '1', sfrom: 'ドゴルマン' },
    { pid: '7594', name: 'ゴブリンファイターの尖った爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom: 'ゴブリンファイター' },
    { pid: '7595', name: 'ゴブリンウォーロードの牙', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom: 'ゴブリンウォーロード' },
    { pid: '7596', name: 'フローティングスフィアのコア', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom: 'フローティングスフィア' },
    { pid: '7597', name: 'フローティングアイの部品', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom: 'フローティングアイ' },
    { pid: '7598', name: 'ペイルアイのコア', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(9)">機跡の谷・自由探索</a>', mappic: '1', sfrom: 'ペイルアイ' },
    { pid: '7599', name: 'ドゴルマンの穿牙', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom: 'ドゴルマン' },
    { pid: '7600', name: 'ヴェノミーンの針', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom: 'ヴェノミーン' },
    { pid: '7601', name: 'カガチヤンマの硬羽', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom: 'カガチヤンマ' },
    { pid: '7602', name: 'ナッポの葉', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom: 'ナッポ' },
    { pid: '7603', name: 'キャニムークスカウトの毛皮', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(10)">緋染めの樹林・自由探索</a>', mappic: '1', sfrom: 'キャニムークスカウト' },
    { pid: '7604', name: 'ムークスカウトの重角', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>', mappic: '1', sfrom: 'ムークスカウト' },
    { pid: '7605', name: 'カニクモトラッパーのハサミ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(11)">暁の虫砦・自由探索</a>', mappic: '1', sfrom: 'カニクモトラッパー' },
    { pid: '7606', name: 'エビキノコポイズンの生爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>', mappic: '1', sfrom: 'エビキノコポイズン' },
    { pid: '7607', name: 'ダークエレメントの結晶', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(12)">呪霊たちの棲家・自由探索</a>', mappic: '1', sfrom: 'ダークエレメント' },
    { pid: '7608', name: 'カニクモフロストの脚', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'カニクモフロスト' },
    { pid: '7609', name: 'ゴーリィの尖った爪', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'ゴーリィ' },
    { pid: '7610', name: 'アースエレメントの不思議な核', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'アースエレメント' },
    { pid: '7611', name: 'ダイアーハウルの穿牙', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'ダイアーハウル' },
    { pid: '7612', name: 'Ｍフォックスの妖牙', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'Mフォックス' },
    { pid: '7613', name: 'ドラウグ・アルマの部品', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'ドラウグ・アルマ' },
    { pid: '7614', name: 'ダークエレメントの核', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'ダークエレメント' },
    { pid: '7615', name: 'デザートファングの獰猛牙', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', mappic: '1', sfrom: 'デザートファング' },
    { pid: '7616', name: 'サンドバイパーの立派な殻', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', mappic: '1', sfrom: 'サンドバイパー' },
    { pid: '7617', name: 'ランドホークの柔らかな翼', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', mappic: '1', sfrom: 'ランドホーク' },
    { pid: '7618', name: 'サンドリザードの爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(13)">黄砂の入り江・自由探索</a>', mappic: '1', sfrom: 'サンドリザード' },
    { pid: '7619', name: 'マスターゴブリンのたてがみ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', mappic: '1', sfrom: 'マスターゴブリン' },
    { pid: '7620', name: 'エビキノコポイズンの尾', kind: '小怪掉落', obtain: '西バーンハルト半島', mappic: '1', sfrom: 'エビキノコポイズン' },
    { pid: '7621', name: 'ゴブリンファイターの爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', mappic: '1', sfrom: 'ゴブリンファイター' },
    { pid: '7622', name: 'エルダーゴブリンの上たてがみ', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', mappic: '1', sfrom: 'エルダーゴブリン' },
    { pid: '7623', name: 'ブラストポッドの部品', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', mappic: '1', sfrom: 'ブラストポッド' },
    { pid: '7624', name: 'フローティングアイの核', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', mappic: '1', sfrom: 'フローティングアイ' },
    { pid: '7625', name: 'イージスポッドの精巧な部品', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', mappic: '1', sfrom: 'イージスポッド' },
    { pid: '7626', name: '量産型アイアンコフィンの装甲', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(16)">カースドノール遺跡・自由探索</a>', mappic: '1', sfrom: '量産型アイアンコフィン' },
    { pid: '7627', name: 'Ｆゴブリンの歪な生爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', mappic: '1', sfrom: 'Ｆゴブリン' },
    { pid: '7628', name: 'Ｆゴブリンウォーロードの爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', mappic: '1', sfrom: 'Ｆゴブリンウォーロード' },
    { pid: '7629', name: 'Ｆエルダーゴブリンの獰猛牙', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', mappic: '1', sfrom: 'Ｆエルダーゴブリンの獰猛牙' },
    { pid: '7630', name: 'カイザーエルクの尖った爪', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(15)">落日古道・自由探索</a>', mappic: '1', sfrom: 'カイザーエルク' },
    { pid: '7631', name: 'ゴブリン・グロウのたてがみ②', kind: '小怪掉落', obtain: '<a onclick="showFuBenWhereIs(14)">滝裏の盗掘痕跡・自由探索</a>', mappic: '1', sfrom: 'ゴブリン・グロウ' },
]