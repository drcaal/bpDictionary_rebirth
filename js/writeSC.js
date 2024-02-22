var scWhere = `全地图`
var scKind = `全种类`
function writeSC(){
    nowPage = 1
    scWhere = `全地图`
    scKind = `全种类`
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    clearInterval(interevalPic)
    document.getElementsByClassName('floatBox')[0].innerHTML = ``
//     <div class="goToId">
//     <div onclick="scrollToSection('zhiwu')">植物</div>
//     <div onclick="scrollToSection('kuangwu')">矿物</div>
//     <div onclick="scrollToSection('shuiqi')">水栖</div>
//     <div onclick="scrollToSection('xiaoguai')">小怪</div>
//     <div onclick="scrollToSection('qita')">其他</div>
// </div>`
    var SC_htmlStr = `<p class="windowTitle">| 幻想与武器素材</p>
    <p class="Topword">该列表仅包含大地图及自由探索地图中的小怪掉落物和植物、矿物及水栖采集物，不包含大地图及自由探索地图中的 Boss 掉落物和多人副本特殊产物。<br>在获取方式为“小怪掉落”的条例中，地图点位为该小怪的分布图；在植物、矿物及水栖采集物的条例中，地图点位为拥有必出采集点的稀有采集物的必出采集点；其他类别的条例和植物、矿物及水栖采集物中的非稀有采集物和暂不具备必出采集点的稀有采集物则不在地图点位中进行标注。</p>
    <div class="BchoiseBoxLevel BchoiseBoxLevelWhere" style="flex-wrap: wrap; padding-bottom: 10px; border: none; margin-bottom: -20px; margin-top: -5px;  height: 28px; overflow: hidden; transition: .5s;"  id="MapKindShowAll">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);  width: auto;">全地图</div>
    <div>アステリア平原</div>
    <div>バハマール高原</div>
    <div>モンテノール渓谷</div>
    <div>エバーグリーン砂漠</div>
    <div>西バーンハルト半島</div>
    <div>巨竜の爪痕・自由探索</div>
    <div>ボルオム遺跡・自由探索</div>
    <div>木漏れ日射す林道・自由探索</div>
    <div>ともし火の森・自由探索</div>
    <div>雨止まぬ森・自由探索</div>
    <div>枷神の産屋・自由探索</div>
    <div>風精の舞台・自由探索</div>
    <div>音無き都・自由探索</div>
    <div>機跡の谷・自由探索</div>
    <div>緋染めの樹林・自由探索</div>
    <div>暁の虫砦・自由探索</div>
    <div>呪霊たちの棲家・自由探索</div>
    <div>黄砂の入り江・自由探索</div>
    <div>滝裏の盗掘痕跡・自由探索</div>
    <div>落日古道・自由探索</div>
    <div>カースドノール遺跡・自由探索</div>
    <div>海月灯の砂径・自由探索</div>
    <div>ソプラの山道・自由探索</div>
    <p class="MshowMoreTag">[展开]</p>
</div>
<div class="BchoiseBoxLevel BchoiseBoxLevelWM" style="flex-wrap: wrap; padding-bottom: 0px; border: none;">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0); width: auto;">全种类</div>
    <div>植物采集</div>
    <div>矿物采集</div>
    <div>水栖采集</div>
    <div>小怪掉落</div>
    <div>其他</div>
    <p class="B_E_searchNum">全部地域 全部类型 共有 null 条数据</p>
</div>
    <table>
        <tbody>
            <tr>
                <th width="10%">名称</th>
                <th width="12%">获取方式</th>
                <th width="25%">分布区域</th>
                <th width="28%">获取对象</th>
                <th width="10%">制造用途</th>
            </tr>`
    SC_value.forEach((SC_every)=>{
        var mapList = ``
        if(SC_every.pid=='7901'){
            var trNameId = `<tr id="qita" class="canclick">`
        }else if(SC_every.pid=='7006'){
            var trNameId = `<tr id="zhiwu" class="canclick">`
        }else if(SC_every.pid=='7207'){
            var trNameId = `<tr id="kuangwu" class="canclick">`
        }else if(SC_every.pid=='7401'){
            var trNameId = `<tr id="shuiqi" class="canclick">`
        }else if(SC_every.pid=='7501'){
            var trNameId = `<tr id="xiaoguai" class="canclick">`
        }else{
            var trNameId = `<tr class="canclick">`
        }
        // SC_every.sfrom != "植物" && SC_every.sfrom != "矿物" && SC_every.sfrom != "水栖" && 
        if(SC_every.sfrom != "任意小怪" && SC_every.sfrom != "对应属性小怪" && SC_every.sfrom != "全采集物" && SC_every.sfrom != "植物、矿物"){
            var Monster = SC_every.sfrom + "<br>"
            for(var i=0;i<M_value.length;i++){
                if((SC_every.sfrom == "植物" || SC_every.sfrom == "矿物" || SC_every.sfrom == "水栖") && SC_every.mappic == 1){
                    var Nowid = SC_every.obtain
                    var Point_id = SC_every.Point;
                    var Map_List = [];
                    // var try0 = Map_id[Nowid-1]
                    // var try1 =SC_every.name
                    // console.log({try0,try1})
                    Map_List.push({x: Map_id[Nowid-1]['aPoint_List'][([Point_id]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][([Point_id]-1)*2+1]})
                    if(SC_every.sfrom == "植物"){
                        mapList += `<a onclick="mergeImages(${Nowid},['1003'],${JSON.stringify(Map_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                    } else if(SC_every.sfrom == "矿物"){
                        mapList += `<a onclick="mergeImages(${Nowid},['1002'],${JSON.stringify(Map_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                    } else {
                        mapList += `<a onclick="mergeImages(${Nowid},['1004'],${JSON.stringify(Map_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                    }
                    // mapList += `<a onclick="mergeImages(${Nowid},['1000'],${JSON.stringify(Map_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                    break
                }
                if(M_value[i]['name'].indexOf(Monster)!=-1 && M_value[i]['name'].charAt(0) == Monster.charAt(0)){
                    for(var y=0;y<M_value[i]['spaceName'].length;y++){
                        if(SC_every.obtain == M_value[i]['spaceName'][y]){
                            var Nowid = SC_every.obtain
                            var Map_List = [];
                            var Point_length = M_value[i]['mapWhere'][y].length;
                            for (var z=0;z<Point_length;z++){
                                Map_List.push({x: Map_id[Nowid-1]['aPoint_List'][(M_value[i]['mapWhere'][y][z]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(M_value[i]['mapWhere'][y][z]-1)*2+1]})
                            };
                            mapList += `<a onclick="mergeImages(${M_value[i]['spaceName'][y]},['1000'],${JSON.stringify(Map_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                            // var map = Map_id[parseInt(SC_every.obtain)-1]['mName']

                            break
                        }
                    }
                }
            }
        }

        if(SC_every.mappic=='1'){
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>${mapList}</td>
                <td>${SC_every.sfrom}</td>
                <td>-</td>
            </tr>`
        }else if(SC_every.mappic=='2'){
            // for(var i=0;i<SC_every.mapWhere.length;i++){
                // imgSrcString += `<img src="./img/map/`+SC_every.mapWhere[i]+`.png" alt="暂无" style="height: 150px;">`
            // }
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>全图采集</td>
                <td>${SC_every.sfrom}</td>
                <td>-</td>
            </tr>`
        }else if(SC_every.mappic=='4'){
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>${mapList}</td>
                <td>${SC_every.sfrom}</td>
                <td></td>
            </tr>`
        }else{
            SC_htmlStr += trNameId+`
                <td style="font-size: 14px;">${SC_every.name}</td>
                <td style="font-size: 14px;">${SC_every.kind}</td>
                <td>全图小怪掉落</td>
                <td>${SC_every.sfrom}</td>
                <td>-</td>
            </tr>`
        }
        
    })
    
    SC_htmlStr += `<tr>
    <th width="10%">名称</th>
    <th width="12%">获取方式</th>
    <th width="25%">分布区域</th>
    <th width="28%">获取对象</th>
    <th width="28%">制造用途</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = SC_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[0].style.backgroundColor = '#35353555';
        table.rows[i].cells[2].style.backgroundColor = '#35353555';
        // table.rows[i].cells[3].style.backgroundColor = '#353535';
        // table.rows[i].cells[4].style.backgroundColor = '#353535';
        table.rows[i].cells[2].setAttribute('title', '分布范围');
        table.rows[i].cells[3].setAttribute('title', '获取对象');
        // table.rows[i].cells[5].setAttribute('title', '筋力');
        // table.rows[i].cells[6].setAttribute('title', '耐久');
        // table.rows[i].cells[7].setAttribute('title', '器用');
        // table.rows[i].cells[8].setAttribute('title', '知力');
        // table.rows[i].cells[9].setAttribute('title', '精神力');
    }
    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部地域 全部种类 共有 ${table.rows.length-2} 条数据`

    showStart()
    $('.BchoiseBoxLevelWhere div').click(function(){
        $('.BchoiseBoxLevelWhere div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWhere div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWhere div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        scWhere = this.innerText
        choiseSCwhere(scWhere, scKind)
    })
    $('.BchoiseBoxLevelWM div').click(function(){
        $('.BchoiseBoxLevelWM div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxLevelWM div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxLevelWM div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        scKind = this.innerText
        choiseSCwhere(scWhere, scKind)
    })

document.getElementsByClassName('MshowMoreTag')[0].onclick=function(){
    if(document.getElementById('MapKindShowAll').style.height!='260px'){
    document.getElementById('MapKindShowAll').style.height = '260px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[收起]'}
    else{
    document.getElementById('MapKindShowAll').style.height = '28px'
    document.getElementsByClassName('MshowMoreTag')[0].innerHTML = '[展开]'}
}

var uni_sc = ["トコヨ草","グロークンシード","水晶の原石","環状石","割れた貝殻","さざなみ石","動的エングラムの欠片","動的エングラム結晶片"]
var Plant = 0
var Metel = 0
var Water = 0
for(var i = 0;i<SC_value.length;i++){
    if(SC_value[i].sfrom == "植物"){
        Plant += 1
    } else if(SC_value[i].sfrom == "矿物"){
        Metel += 1
    } else if(SC_value[i].sfrom == "水栖"){
        Water += 1
    }
}
Plant +=5
Water +=6

var List = document.getElementsByTagName('table')[0];
var rows = List.getElementsByTagName('tr');

B_value.forEach((B_every)=>{
    var sc = B_every.madeIt['sucai_C']
    if(sc.length == 3){
        for(var i = 0;i<sc.length;i++){
            if(uni_sc.indexOf(sc[i]) == -1){
                var modo_sc = sc[i]
                var target_name = B_every.name.split("<br>")[0]
                var data = SC_value.filter(function(value){
                    return value.name === modo_sc
                })
                var id = data[0]['pid']
                if(data[0]['sfrom'] == "植物"){
                    var Final_Point = parseInt(id)-7000
                } else if(data[0]['sfrom'] == "矿物"){
                    var Final_Point = parseInt(id)-7206+Plant
                } else if(data[0]['sfrom'] == "水栖"){
                    var Final_Point = parseInt(id)-7400+Plant+Metel
                } else{
                    var Final_Point = parseInt(id)-7506+Plant+Metel+Water
                }
                var target_line = rows[Final_Point].getElementsByTagName('td')
                target_line[4].innerText = "B-" + target_name
            }
        }
    }
})
E_value.forEach((E_every)=>{
    var sc = E_every.madeIt['sucai_C']
    if(sc.length == 3){
        for(var i = 0;i<sc.length;i++){
            if(uni_sc.indexOf(sc[i]) == -1){
                var modo_sc = sc[i]
                var target_name = E_every.name.split("<br>")[0]
                var target_kind = E_every.kind
                var data = SC_value.filter(function(value){
                    return value.name === modo_sc
                })
                if(data.length==0){
                    continue
                }
                var id = data[0]['pid']
                if(data[0]['sfrom'] == "植物"){
                    var Final_Point = parseInt(id)-7000
                } else if(data[0]['sfrom'] == "矿物"){
                    var Final_Point = parseInt(id)-7206+Plant
                } else if(data[0]['sfrom'] == "水栖"){
                    var Final_Point = parseInt(id)-7400+Plant+Metel
                } else{
                    var Final_Point = parseInt(id)-7506+Plant+Metel+Water
                }
                if(target_name.indexOf("<")>-1){
                    target_name = target_name.split(">")[1]
                }
                var target_line = rows[Final_Point].getElementsByTagName('td')
                target_line[4].innerText = "E-" + target_kind +"-" + target_name
            }
        }
    }
})
W_value.forEach((W_every)=>{
    var sc = W_every.madeIt['sucai_C']
    if(sc.length == 2){
        for(var i = 0;i<sc.length;i++){
            console.log(sc[i])
            if(uni_sc.indexOf(sc[i]) == -1){
                var modo_sc = sc[i]
                var target_name = W_every.name
                var data = SC_value.filter(function(value){
                    return value.name === modo_sc
                })
                var id = data[0]['pid']
                if(data[0]['sfrom'] == "植物"){
                    var Final_Point = parseInt(id)-7000
                } else if(data[0]['sfrom'] == "矿物"){
                    var Final_Point = parseInt(id)-7206+Plant
                } else if(data[0]['sfrom'] == "水栖"){
                    var Final_Point = parseInt(id)-7400+Plant+Metel
                } else{
                    var Final_Point = parseInt(id)-7506+Plant+Metel+Water
                }
                var target_line = rows[Final_Point].getElementsByTagName('td')
                if(target_line[4].innerText == ""){
                    target_line[4].innerText += W_every.level + "-" + W_every.elem +"武\n"
                }
                target_line[4].innerText += target_name + "\n"
            }
        }
    }
})

}

