function choiseE(choiseKind,ChoiseTag){
    var tableE = document.getElementsByTagName('table')[0];
    var rowsE = tableE.getElementsByTagName('tr');
    var Enum = 0
    var targetTag = ''
    if (ChoiseTag == '全词条')targetTag='全词条'
    else if (ChoiseTag == '眩晕耐性')targetTag='アンチスタン'
    else if (ChoiseTag == '麻痹耐性')targetTag='アンチパライズ'
    else if (ChoiseTag == '疲劳耐性')targetTag='アンチスタミナアウト'
    else if (ChoiseTag == '拘束耐性')targetTag='アンチバインド'
    else if (ChoiseTag == '毒耐性')targetTag='アンチポイズン'
    else if (ChoiseTag == '致盲耐性')targetTag='アンチブラインド'
    else if (ChoiseTag == '沉默耐性')targetTag='アンチスキルロック'
    else if (ChoiseTag == 'B冷缩')targetTag='短縮:Bイマジン'
    else if (ChoiseTag == '绝招冷缩')targetTag='短縮:ULT'
    else if (ChoiseTag == '右键冷缩')targetTag='短縮:クラスA'
    else if (ChoiseTag == '全体力减免')targetTag='スタミナセーブ・全'
    else if (ChoiseTag == '奔跑体力减免')targetTag='スタミナセーブ・走'
    else if (ChoiseTag == '跳跃体力减免')targetTag='スタミナセーブ・跳'
    else if (ChoiseTag == '回避体力减免')targetTag='スタミナセーブ・避'
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        for (let i = 1; i < rowsE.length-1; i++) {
            var row = rowsE[i];
            var category = row.getElementsByTagName('td')[7].innerText;
            var tag = row.getElementsByTagName('td')[6].innerText;

            var Gpid = row.getElementsByTagName('td')[0].getElementsByTagName('img')[0].getAttribute("alt")
            var all = row.getElementsByTagName('td')
            var data = E_value.filter(function(value){
                return value.pid === Gpid
            })
            all[3].innerHTML = data[0]['attr'][8]
            all[4].innerHTML = data[0]['attr'][9]
            all[5].innerHTML = data[0]['attr'][10]

            if ((category == choiseKind || choiseKind == '全类型')&&(tag.includes(targetTag) || targetTag=='全词条')) {
                row.style.display = ''; 
                Enum += 1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${choiseKind}幻想有 ${Enum} 条数据`
    // }
}

