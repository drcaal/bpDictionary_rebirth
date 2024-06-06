var MkindName = '全种系'
var Mwhere = '全地域'
var MKinds = '全特性'
function writeM(){
    nowPage = 1
    MkindName = '全种系'
    Mwhere = '全地域'
    MKinds = '全特性'
    clearInterval(interevalPic)
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'

    document.getElementsByClassName('floatBox')[0].innerHTML = `<div class="goToId">
    <div onclick="scrollToSection('xiaoguai')">小怪</div>
    <div onclick="scrollToSection('Boss')">Boss</div>
</div>`
    var M_htmlStr = `<p class="windowTitle">| 地图及自由探索怪物清单</p>
    <p class="Topword">该清单包含野外地图及自由探索地图中的小怪及 Boss ,暂不包含仅在多人副本及主线剧情副本中出现的怪物。<br>地图点位上的红色标注为有可能刷新该怪物的地点，左键单击图片可将其放大并可用鼠标滚轮再次放大。<br>单击怪物列表内的种系/特性,将直接选择同类别。<br>对于怪物的弱点与抵抗属性，有两种情况造成的伤害将获得提升：一，装备怪物弱点属性的武器，造成任意属性（除开怪物的抵抗属性）的伤害；二，装备任意属性的武器，对怪物造成弱点属性的伤害。战斗幻想造成的伤害不受上述情况一的影响，即，不会随角色装备的武器属性的变化而变化。</p>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWhere" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -20px; margin-top: -5px; height: 28px; overflow: hidden; transition: .5s;" id="MapKindShowAll">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全地域</div>`
    for(var i = 0;i<Map_id.length;i++){
        M_htmlStr += `<div>` + Map_id[i].mName + `</div>`
    }
    M_htmlStr += `
    <p class="MshowMoreTag">[展开]</p>
</div>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWM" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -10px; height: 28px; overflow: hidden; transition: .5s;" id="MonsterKindShowAll">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全种系</div>
    <div>ボア系</div>
    <div>ゴート系</div>
    <div>フォックス系</div>
    <div>ホーク系</div>
    <div>スフィア系</div>
    <div>ゴブリン系</div>
    <div>ムーク系</div>
    <div>オーガ系</div>
    <div>ドゴルマン系</div>
    <div>ミーン系</div>
    <div>バイパー系</div>
    <div>クアッドアーム系</div>
    <div>ゴーレム系</div>
    <div>トライポッド系</div>
    <div>ドラウグ系</div>
    <div>リザード系</div>
    <div>エビキノコ系</div>
    <div>スカイフィッシュ系</div>
    <div>カニクモ系</div>
    <div>ナッポ系</div>
    <div>ヤンマ系</div>
    <div>エレメント系</div>
    <div>山賊系</div>
    <div>ゾルキシア兵</div>
    <div>バーンハルト兵</div>
    <div>ファットマン系</div>
    <div>ペッカー系</div>
    <div>ギルミー系</div>
    <div>マノー系</div>
    <p class="MshowMoreTag">[展开]</p>
</div>
    <div class="BchoiseBoxLevel BchoiseBoxLevelMK" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -20px; margin-top: -5px; height: 28px; overflow: hidden; transition: .5s;" id="MonsterKindsShowAll">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全特性</div>
    <div>ヒューマン</div>
    <div>デミヒューマン</div>
    <div>バグ</div>
    <div>バファリア遺産</div>
    <div>ビースト</div>
    <div>クラステイシャン</div>
    <div>グランド</div>
    <div>フロート</div>
    <div>フラックス</div>
    <div>マキナ</div>
    <div>アバリティア</div>
    <div>アンデッド</div>
    <div>アクア</div>
    <p class="MshowMoreTag">[展开]</p>
    <p class="B_E_searchNum" style="margin-top:100px;">全部种系 共有 null 条数据</p>
</div>
    <p class="M_mbTile" id="xiaoguai" style="margin-top: 20px;">地图及自由探索中的小怪</p>
    <p class="Topword">以下为小怪清单，注意：<b>小怪的掉落物有区域分别，并非所有地图上的该种小怪都会掉落材料，</b>如有刷材料的需求请于材料列表中进行搜索或翻阅。</p>
    <table>
        <tbody>
            <tr>
                <th width="12%">样貌</th>
                <th width="20%">名称</th>
                <th width="16%">种系</th>
                <th width="4%">弱效</th>
                <th width="4%">强效</th>
                <th width="22%">分布区域</th>
                <th width="38%">特性</th>
            </tr>`
    M_value.forEach((M_every,num)=>{
        var mapList = ``
        var kinds_list = ``
        // if (num>103){
        //     return 1
        // }
        for(var i=0;i<M_every.spaceName.length;i++){
        // for(var i=0;i<M_every.spaceName.length;i++){
            var id = M_every.spaceName[i];
            var Nowid = 0;
            var Map_List = [];
            for (var k=0;k<Map_id.length;k++){
                if (Map_id[k]['num'] == id){
                    Nowid = k
                    break
                }
            }
            // var Point_length = M_every.mapWhere[i].length/2;
            // for (var x=0;x<Point_length;x++){
            var Point_length = M_every.mapWhere[i].length;
            for (var x=0;x<Point_length;x++){
                Map_List.push({x: Map_id[Nowid]['aPoint_List'][(M_every.mapWhere[i][x])*2] , y: Map_id[Nowid]['aPoint_List'][(M_every.mapWhere[i][x])*2+1]})
            };
            mapList += `<a onclick="mergeImages(${Nowid},['1000'],${JSON.stringify(Map_List).replace(/\"/g,"'")})">${Map_id[Nowid]['mName']}</a><br>`
        }
        for(var i=0;i<M_every.monsKinds.length;i++){
            kinds_list += "<div>" + M_every.monsKinds[i] + "</div>"
        }
        M_htmlStr += `<tr class="canclick">
            <td><img src="img/icon/m/${M_every.pid}.png" style="height: 100px;"></td>
            <td style="font-size: 14px;">${M_every.name}</td>
            <td style="font-size: 14px;" class="Mkind_button"><div>${M_every.monsKind}</div></td>
            <td style="font-size: 14px;">${M_every.moreElem}</td>
            <td style="font-size: 14px;">${M_every.lessElem}</td>
            <td>${mapList}</td>
            <td style="font-size: 14px;" class="Mkinds_button">${kinds_list}</td>
        </tr>`
        // if(num == M_value.length-1){
        // }
    })
    M_htmlStr += `<tr>
    <th width="12%">样貌</th>
    <th width="20%">名称</th>
    <th width="16%">种系</th>
    <th width="4%">弱效</th>
    <th width="4%">强效</th>
    <th width="22%">分布区域</th>
    <th width="38%">特性</th>
</tr></tbody>
    </table>`

    M_htmlStr += `<p class="M_mbTile" id="Boss" style="margin-top: 40px;">地图及自由探索中的 Boss</p>
    <p class="Topword">以下为 Boss 清单。Boss 刷新时将在同区域内的地图范围内进行图标广播。Boss 的刷新通常都具有数十分钟的冷却时间。</p>
    <table id="monsterBossId">
        <tbody>
            <tr>
                <th width="15%">样貌</th>
                <th width="5%">等级</th>
                <th width="12%">名称</th>
                <th width="13%">种系</th>          
                <th width="22%">地图点位</th>
                <th width="10%">特性</th>
                <th width="30%">触发事件</th>
            </tr>`
    
    MB_value.forEach((MB_every)=>{
        var Bkinds_list = ``
        var mapList = ``
        var id = MB_every.spaceName[0];
        var Nowid = 0;
        var Map_List = [];
        for (var k=0;k<Map_id.length;k++){
            if (Map_id[k]['num'] == id){
                Nowid = k
                break
            }
        }
        Map_List.push({x: Map_id[Nowid]['aPoint_List'][(MB_every.mapWhere[0][0])*2] , y: Map_id[Nowid]['aPoint_List'][(MB_every.mapWhere[0][0])*2+1]})
        mapList += `<a onclick="mergeImages(${Nowid},['1001'],${JSON.stringify(Map_List).replace(/\"/g,"'")})">${Map_id[Nowid]['mName']}</a><br>`
        for(var i=0;i<MB_every.monsKinds.length;i++){
            Bkinds_list += "<div>" + MB_every.monsKinds[i] + "</div>"
        }
        M_htmlStr += `<tr>
            <td><img src="img/icon/m/${MB_every.pid}.png" style="height: 110px;"></td>
            <td style="font-size: 14px;">${MB_every.level}</td>
            <td style="font-size: 14px;">${MB_every.name}</td>
            <td style="font-size: 14px;" class="Mkind_button"><div>${MB_every.monsKind}</div></td>
            <td>${mapList}</td>
            <td style="font-size: 14px;" class="Mkinds_button">${Bkinds_list}</td>
            <td>${MB_every.showTime}</td>
        </tr>`
    })
    
    M_htmlStr += `<th width="15%">样貌</th>
    <th width="5%">等级</th>
    <th width="15%">名称</th>
    <th width="10%">种系</th>
    <th width="23%">地图点位</th>
    <th width="15%">特性</th>
    <th width="24%">触发事件</th><tr>
    </tr></tbody>
    </table>${buttomTag}`
    
    
    document.getElementsByClassName('window')[0].innerHTML = M_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[1].style.backgroundColor = '#35353555';
        table.rows[i].cells[3].style.backgroundColor = '#35353555';
        table.rows[i].cells[5].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        table.rows[i].cells[4].setAttribute('title', '分布范围');
        table.rows[i].cells[3].setAttribute('title', '抵抗属性');
        table.rows[i].cells[2].setAttribute('title', '弱点属性');
        table.rows[i].cells[1].setAttribute('title', '名称');
        // table.rows[i].cells[5].setAttribute('title', '筋力');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    let tableB = document.getElementsByTagName('table')[1];
    
    for (var i = 1; i < tableB.rows.length-2; i++) {
        tableB.rows[i].cells[1].style.backgroundColor = '#35353555';
        tableB.rows[i].cells[3].style.backgroundColor = '#35353555';
        tableB.rows[i].cells[5].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        tableB.rows[i].cells[1].setAttribute('title', '等级');
        tableB.rows[i].cells[3].setAttribute('title', '分布区域');
        tableB.rows[i].cells[2].setAttribute('title', '名称');
        tableB.rows[i].cells[5].setAttribute('title', '触发事件');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    
    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全地域 全种系 全特性 共有 ${table.rows.length+tableB.rows.length-5} 条数据`
    // document.getElementsByClassName('window')[0].innerHTML += MB_htmlStr
    showStart()
    $('.BchoiseBoxLevelWhere div').click(function(){
        $('.BchoiseBoxLevelWhere div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWhere div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWhere div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        Mwhere = this.innerText
        choiseMKind(Mwhere, MkindName,MKinds)
    })
    $('.BchoiseBoxLevelWM div').click(function(){
        $('.BchoiseBoxLevelWM div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWM div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWM div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        MkindName = this.innerText
        choiseMKind(Mwhere, MkindName,MKinds)
    })
    $('.BchoiseBoxLevelMK div').click(function(){
        $('.BchoiseBoxLevelMK div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelMK div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelMK div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        MKinds = this.innerText
        choiseMKind(Mwhere, MkindName,MKinds)
    })
    $('.Mkinds_button div').click(function(){
        $('.BchoiseBoxLevelMK div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelMK div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelMK div').css('border-color','rgb(55, 194, 192)')
        var $target = $('.BchoiseBoxLevelMK div:contains(' + this.innerText + ')')
        $target.css('background-color','rgb(55, 194, 192)')
        $target.css('color','rgb(38, 41, 46)')
        $target.css('border-color','rgb(55, 194, 192, 0)')
        MKinds = this.innerText
        choiseMKind(Mwhere, MkindName,MKinds)
    })
    $('.Mkind_button div').click(function(){
        $('.BchoiseBoxLevelWM div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWM div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWM div').css('border-color','rgb(55, 194, 192)')
        var $target = $('.BchoiseBoxLevelWM div:contains(' + this.innerText + ')')
        $target.css('background-color','rgb(55, 194, 192)')
        $target.css('color','rgb(38, 41, 46)')
        $target.css('border-color','rgb(55, 194, 192, 0)')
        MkindName = this.innerText
        choiseMKind(Mwhere, MkindName,MKinds)
    })
    
document.getElementsByClassName('MshowMoreTag')[1].onclick=function(){
    if(document.getElementById('MonsterKindShowAll').style.height!='160px'){
    document.getElementById('MonsterKindShowAll').style.height = '160px'
    document.getElementsByClassName('MshowMoreTag')[1].innerHTML = '[收起]'}
    else{
    document.getElementById('MonsterKindShowAll').style.height = '28px'
    document.getElementsByClassName('MshowMoreTag')[1].innerHTML = '[展开]'}
}
document.getElementsByClassName('MshowMoreTag')[0].onclick=function(){
    if(document.getElementById('MapKindShowAll').style.height!='280px'){
    document.getElementById('MapKindShowAll').style.height = '280px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[收起]'}
    else{
    document.getElementById('MapKindShowAll').style.height = '28px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[展开]'}
}
document.getElementsByClassName('MshowMoreTag')[2].onclick=function(){
    if(document.getElementById('MonsterKindsShowAll').style.height!='72px'){
    document.getElementById('MonsterKindsShowAll').style.height = '72px'
    document.getElementsByClassName('MshowMoreTag')[2].innerHTML = '[收起]'}
    else{
    document.getElementById('MonsterKindsShowAll').style.height = '28px'
    document.getElementsByClassName('MshowMoreTag')[2].innerHTML = '[展开]'}
}
}

function mergeImages(baseImagePath, overlayImagePaths, positions) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var baseImage = new Image();
    Imagesrc = Map_id[baseImagePath]['num']
    baseImage.src = '/img/monster/' + Imagesrc + '.png';
    baseImage.onload = function() {
      canvas.width = baseImage.width;
      canvas.height = baseImage.height;
      context.drawImage(baseImage, 0, 0);
      for (var twice=overlayImagePaths.length;twice<positions.length;twice++){
        overlayImagePaths.push(overlayImagePaths[0])
      }
      overlayImagePaths.forEach(function(overlayImagePath, index) {
        var overlayImage = new Image();
        overlayImage.src = '/img/monster/' + overlayImagePath + '.png';
        loadedCount = 0;
        overlayImage.onload = function() {
            context.drawImage(overlayImage, positions[index].x, positions[index].y);
            loadedCount ++
            if (loadedCount == overlayImagePaths.length){
                var dataUrl = canvas.toDataURL()
                function showMonsterWhereIs(src){
                $('.IMGshowWindow').attr('src',src)
                $('.IMGshowWindow').css('display','block')
                isshowWindowClose=1}
                showMonsterWhereIs(dataUrl)
            };
        };
      });
    };
  }