// writeE()
function writeE(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    Ebox = '三叶'
    ELevel = 0
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    
    var E_htmlStr = `<p class="windowTitle">| E - 强化幻想</p>
    <p class="Topword">强化幻想按形状类型分为五类。单击列名可进行升、降序排列。单击幻想图标可查看其制作材料及获取途径。 <span style="color:red;">单击类型</span>可查看幻想计算词条后最终属性<br>名称前标注有 * 号的为活动限定幻想。<br>2023年11月22日Ver.1.02.100版本更新后副本掉宝率大幅度提高,且掉落奖励中新增了强化幻想,若所选幻想可由副本掉落获取时,前置显示掉落副本。<br><span style="color:red;">红色</span>/<span style="color:orange;">橙色</span>标记为目前版本物理/魔法职业最高攻击幻想</p>

    <div class="EchoiseBox">
        <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">三叶</div>
        <div>山岳</div>
        <div>矢尻</div>
        <div>风车</div>
        <div>水瓶</div>
    </div>
    <div class="ELchoiseBox">
        <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">+0</div>
        <div>+5</div>
        <p class="B_E_searchNum">三叶幻想有 null 条数据</p>
    </div>
    <table id="Etable">
        <tbody>
            <tr>
                <th width="7%">图标</th>
                <th width="17%">名称</th>
                <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
                <th width="3%" onclick="rewrite(3)" style="cursor: pointer;">攻击</th>
                <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">防御</th>
                <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">筋力</th>
                <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">耐久</th>
                <th width="3%" onclick="rewrite(7)" style="cursor: pointer;">器用</th>
                <th width="3%" onclick="rewrite(8)" style="cursor: pointer;">知力</th>
                <th width="3%" onclick="rewrite(9)" style="cursor: pointer;">精神</th>
                <th width="14%">词缀</th>
                <th width="14%">词缀效果</th>
                <th width="5%">类型</th>
            </tr>`
    
    E_value.forEach((E_every, index)=>{
        E_htmlStr += `<tr>
        <td style="font-size: 12px;"><img src="./img/icon/e/${E_every.pid}.png" alt="${E_every.pid}" title="${index}"></td>
        <td style="font-size: 14px; padding: 0 5px;">${E_every.name}</td>
        <td>${E_every.lev}</td>
        <td>${E_every.atk}</td>
        <td>${E_every.def}</td>
        <td>${E_every.j}</td>
        <td>${E_every.n}</td>
        <td>${E_every.q}</td>
        <td>${E_every.z}</td>
        <td>${E_every.s}</td>
        <td style="font-size: 13px; padding: 0 5px;">${E_every.end}</td>
        <td style="font-size: 13px;">${E_every.endexp}</td>
        <td style="font-size: 13px;" class="ImagineInfo" title="${index}">${E_every.kind}</td>
    </tr>`
    })
    
    E_htmlStr += `<tr>
    <th width="7%">图标</th>
    <th width="17%">名称</th>
    <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
    <th width="3%" onclick="rewrite(3)" style="cursor: pointer;">攻击</th>
    <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">防御</th>
    <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">筋力</th>
    <th width="3%" onclick="rewrite(6)" style="cursor: pointer;">耐久</th>
    <th width="3%" onclick="rewrite(7)" style="cursor: pointer;">器用</th>
    <th width="3%" onclick="rewrite(8)" style="cursor: pointer;">知力</th>
    <th width="3%" onclick="rewrite(9)" style="cursor: pointer;">精神</th>
    <th width="14%">词缀</th>
    <th width="14%">词缀效果</th>
    <th width="5%">类型</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = E_htmlStr

    let table = document.getElementsByTagName('table')[0];

    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[2].style.backgroundColor = '#43434360';
        table.rows[i].cells[3].style.backgroundColor = '#35353533';
        table.rows[i].cells[4].style.backgroundColor = '#35353533';
        table.rows[i].cells[3].setAttribute('title', '攻击力');
        table.rows[i].cells[4].setAttribute('title', '防御力');
        table.rows[i].cells[5].setAttribute('title', '筋力');
        table.rows[i].cells[6].setAttribute('title', '耐久');
        table.rows[i].cells[7].setAttribute('title', '器用');
        table.rows[i].cells[8].setAttribute('title', '知力');
        table.rows[i].cells[9].setAttribute('title', '精神力');
    }

$('.EchoiseBox div').click(function(){
    $('.EchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
    $('.EchoiseBox div').css('color','rgb(55, 194, 192)')
    $('.EchoiseBox div').css('border-color','rgb(55, 194, 192)')
    this.style.backgroundColor='rgb(55, 194, 192)'
    this.style.color='rgb(38, 41, 46)'
    this.style.borderColor='rgb(55, 194, 192, 0)'
    Ebox = this.innerText
    choiseE(Ebox)
})
    choiseE(Ebox)

$('.ELchoiseBox div').click(function(){
    if(this.style.backgroundColor != 'rgb(55, 194, 192)'){
    $('.ELchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
    $('.ELchoiseBox div').css('color','rgb(55, 194, 192)')
    $('.ELchoiseBox div').css('border-color','rgb(55, 194, 192)')
    this.style.backgroundColor='rgb(55, 194, 192)'
    this.style.color='rgb(38, 41, 46)'
    this.style.borderColor='rgb(55, 194, 192, 0)'
        $('.BLchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BLchoiseBox div').css('color','rgb(55, 194, 192)')
        $('.BLchoiseBox div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        if(ELevel == 0){
            E_value.forEach((E_every, index)=>{
                if(E_every.max.length == 7){
                    console.log(321)
                    var atk_bak = E_every.atk
                    var def_bak = E_every.def
                    var j_bak = E_every.j
                    var n_bak = E_every.n
                    var q_bak = E_every.q
                    var z_bak = E_every.z
                    var s_bak = E_every.s
                    E_every.atk = E_every.max[0]
                    E_every.def = E_every.max[1]
                    E_every.j = E_every.max[2]
                    E_every.n = E_every.max[3]
                    E_every.q = E_every.max[4]
                    E_every.z = E_every.max[5]
                    E_every.s = E_every.max[6]
                    E_every.max[0] = atk_bak
                    E_every.max[1] = def_bak
                    E_every.max[2] = j_bak
                    E_every.max[3] = n_bak
                    E_every.max[4] = q_bak
                    E_every.max[5] = z_bak
                    E_every.max[6] = s_bak
                    }
                })
            ELevel = 5
        } else {
            E_value.forEach((E_every, index)=>{
                if(E_every.max.length == 7){
                    var atk_bak = E_every.atk
                    var def_bak = E_every.def
                    var j_bak = E_every.j
                    var n_bak = E_every.n
                    var q_bak = E_every.q
                    var z_bak = E_every.z
                    var s_bak = E_every.s
                    E_every.atk = E_every.max[0]
                    E_every.def = E_every.max[1]
                    E_every.j = E_every.max[2]
                    E_every.n = E_every.max[3]
                    E_every.q = E_every.max[4]
                    E_every.z = E_every.max[5]
                    E_every.s = E_every.max[6]
                    E_every.max[0] = atk_bak
                    E_every.max[1] = def_bak
                    E_every.max[2] = j_bak
                    E_every.max[3] = n_bak
                    E_every.max[4] = q_bak
                    E_every.max[5] = z_bak
                    E_every.max[6] = s_bak
                    }
                })
                ELevel = 0
            }
        choiseE(Ebox)
    }})
    $('#Etable img').click(function(){drawMakeThingWindow(E_value[this.title])})
    $('.ImagineInfo').click(function(){drawImagineInfoWindow(E_value[this.title])})
}
function drawMakeThingWindow(thingArray){
    var sc_list = []
    var ms_list = []
    var windowHtml = ``
    thingArray.madeIt.sucai_C.forEach((sc)=>{
        for (let i = 0; i<SC_value.length; i++){
            if (sc == SC_value[i].name){
                sc_list.push(i);
                ms_list.push(SC_value[i].sfrom)
                break;
            }
        }
    })
    if(thingArray.madeIt.sucai_B==''){
        var sucai_num = 0
        let dropInfo = getDropInfo(thingArray.pid)
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.name.split('<br>')[1]}</p>
        </div> `
        if (dropInfo.length>0){
            windowHtml += `
            <div class="ThingWindow_madeBox">
            <p class="madeBox_title">副本掉落</p>
            <div class="showdrop">`
            for(let i = 0;i<dropInfo.length;i++){
                windowHtml += `<span class="ThingWindow_d">${dropInfo[i]}</span>`
                if (i==2){
                    windowHtml += `</div><div class="show drop">`
                }
            }
            if (i>2){
                windowHtml += `</div>`
            }
            windowHtml += `</div>`
        }
        windowHtml += `
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">图纸获取</p>
            <p class="tuzhi_how">${thingArray.madeIt.tuzhi}</p>
        </div>
        <div class="ThingWindow_madeBox">
            <p class="madeBox_title">消耗货币</p>
            <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
            <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
            <p class="madeBox_title">小怪材料</p>
            <table>
            <tbody>
                <tr>
                    <th width="25%">名称</th>
                    <th width="5%">数量</th>
                    <th width="10%">获取方式</th>
                    <th width="15%">分布区域</th>
                    <th width="15%">获取对象</th>
                    <th width="38%">地图点位</th>
                </tr>`
        var scList = ``
        for (let i = 0;i<sc_list.length;i++){
            if(SC_value[sc_list[i]]['mappic'] == 4){
                var Monster = SC_value[sc_list[i]]['sfrom'] + "<br>"
                for(var x=0;x<M_value.length;x++){
                    if(M_value[x]['name'].indexOf(Monster)!=-1 && M_value[x]['name'].charAt(0) == Monster.charAt(0)){
                        for(var y=0;y<M_value[x]['spaceName'].length;y++){
                            if(SC_value[sc_list[i]].obtain == M_value[x]['spaceName'][y]){
                                var Nowid = SC_value[sc_list[i]].obtain
                                var SC_List = [];
                                var Point_length = M_value[x]['mapWhere'][y].length;
                                for (var z=0;z<Point_length;z++){
                                    SC_List.push({x: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2+1]})
                                };
                                scList += `<a onclick="mergeImages(${M_value[x]['spaceName'][y]},['1000'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                                // var map = Map_id[parseInt(SC_every.obtain)-1]['mName']
                                break
                            }
                        }
                    }
                }
            } else if(SC_value[sc_list[i]]['mappic'] == 1){
                var Nowid = SC_value[sc_list[i]].obtain
                var SC_List = [];
                var Point = SC_value[sc_list[i]].Point-1
                SC_List.push({x: Map_id[Nowid-1]['aPoint_List'][Point*2] , y: Map_id[Nowid-1]['aPoint_List'][Point*2+1]})
                if(SC_value[sc_list[i]]['sfrom'] == '植物'){
                    scList += `<a onclick="mergeImages(${Nowid},['1003'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                } else if(SC_value[sc_list[i]]['sfrom'] == '矿物'){
                    scList += `<a onclick="mergeImages(${Nowid},['1002'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                } else if(SC_value[sc_list[i]]['sfrom'] == '水栖'){
                    scList += `<a onclick="mergeImages(${Nowid},['1004'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                }
            }
            var place = '全地域'
            if(parseInt(SC_value[sc_list[i]].obtain)<6 && parseInt(SC_value[sc_list[i]].obtain)>0){
                if(SC_value[sc_list[i]].mappic==4){
                    place=SC_value[sc_list[i]].map
                } else if (SC_value[sc_list[i]].mappic==1){
                    place='-'
                }
            } else if (SC_value[sc_list[i]].mappic==4 || SC_value[sc_list[i]].mappic==1){
                place='-'
            }
            if(SC_value[sc_list[i]].mappic=='1' || SC_value[sc_list[i]].mappic=='4'){
                windowHtml += `<tr class="canclick">
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                    <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                    <td style="font-size: 14px;">${place}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                    <td>${scList}</td>
                </tr>`
            }else if(SC_value[sc_list[i]].mappic=='2'){
                // var imgSrcString  =``
                // for(var y=0;y<SC_value[sc_list[i]].mapWhere.length;y++){
                //     imgSrcString += `<img src="./img/map/`+SC_value[sc_list[i]].mapWhere[y]+`.png" alt="暂无" style="height: 150px;">`
                // }
                windowHtml += `<tr class="canclick">
                <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                <td style="font-size: 14px;">${place}</td>
                <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                <td>-</td>
                </tr>`
            }else{
                windowHtml += `<tr>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                    <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                    <td style="font-size: 14px;">${place}</td>
                    <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                    <td>-</td>
                </tr>`
            }
        }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        // draggableElement.style.top = window.innerHeight-450+'px'
        // draggableElement.style.left = window.innerWidth-805+'px'
    }else if(thingArray.madeIt.sucai_B!=''&&thingArray.madeIt.sucai_B!='wepen'){
        var sucai_num = 0
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.name.split('<br>')[1]}</p>
        </div>
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">特殊掉落物需求</p>
            `
            var isMB=0
    
            MB_value.forEach((MB_every)=>{
                // console.log(MB_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B);
                if(MB_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B){

                    var mapList = ``
                    var Nowid = parseInt(MB_every.spaceName[0]);
                    var Map_List = [];
                    Map_List.push({x: Map_id[Nowid-1]['aPoint_List'][(MB_every.mapWhere[0][0]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(MB_every.mapWhere[0][0]-1)*2+1]})
                    mapList += `<a onclick="mergeImages(${MB_every.spaceName[0]},['1001'],${JSON.stringify(Map_List).replace(/\"/g,"'")})">${Map_id[Nowid-1]['mName']}</a><br>`
                    windowHtml += `<div class="ThingWindow_madeBox" style="height: 180px;"><table><tbody>
                    <tr style="height: 20px; font-size: 14px;">
                        <th width="15%">样貌</th>
                        <th width="5%">等级</th>
                        <th width="15%">名称</th>
                        <th width="10%">种系</th>
                        <th width="25%">地图点位</th>
                        <th width="22%">触发事件</th>
                        <th width="20%">数量</th>
                    </tr>`
                    windowHtml += `<tr>
                        <td><img src="./img/icon/m/${MB_every.pid}.png" alt="暂无" style="height: 80px;"></td>
                        <td style="font-size: 14px;">${MB_every.level}</td>
                        <td style="font-size: 14px;">${MB_every.name}</td>
                        <td style="font-size: 14px;">${MB_every.monsKind}</td>
                        <td>${mapList}</td>
                        <td style="font-size: 14px;">${MB_every.showTime}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_B_num}</td>
                    </tr>`
                    isMB=1
                }
            })
            if(isMB==0){
            M_value.forEach((M_every)=>{
                // console.log(M_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B);
                if(M_every.name.split('<br>')[0]==thingArray.madeIt.sucai_B){
                    windowHtml += `<div class="ThingWindow_madeBox" style="height: 220px;"><table><tbody>
                    <tr style="height: 20px; font-size: 14px;">
                        <th width="6%">样貌</th>
                        <th width="27%">名称</th>
                        <th width="28%">掉落地图</th>
                        <th width="25%">各地图点位<p style="font-size:12px; opacity: .5">（仅在左侧地图内部掉落）</p></th>
                        <th width="10%">数量</th>
                    </tr>`
                    var mapList = ``
                    for(var i=0;i<M_every.spaceName.length;i++){
                            var Nowid = parseInt(M_every.spaceName[i]);
                            var Map_List = [];
                            var Point_length = M_every.mapWhere[i].length;
                            for (var x=0;x<Point_length;x++){
                                Map_List.push({x: Map_id[Nowid-1]['aPoint_List'][(M_every.mapWhere[i][x]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(M_every.mapWhere[i][x]-1)*2+1]})
                            };
                            mapList += `<a onclick="mergeImages(${M_every.spaceName[i]},['1000'],${JSON.stringify(Map_List).replace(/\"/g,"'")})">${Map_id[Nowid-1]['mName']}</a><br>`
                        }

                    windowHtml += `<tr class="canclick" style="height: 120px;">
                        <td><img src="./img/icon/m/${M_every.pid}.png" alt="暂无" style="height: 70px;"></td>
                        <td style="font-size: 14px;">${M_every.name}</td>
                        <td>${thingArray.madeIt.otherWords}</td>
                        <td style="max-width: 350px;">${mapList}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_B_num}</td>
                    </tr>`
                    isMB=1
                }
            })
            }
            if(isMB==0){
                    windowHtml += `<p class="ThingWindow_q">${thingArray.madeIt.otherWords}</p>`
                    setTimeout(function(){
                        document.getElementsByClassName('madeBox_title')[0].innerHTML = '制作开启条件'
                    })
                }
            if(thingArray.madeIt.sucai_C[0]!='-'){
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
                    <p class="madeBox_title">小怪材料</p>
                    <table>
                    <tbody>
                        <tr>
                            <th width="25%">名称</th>
                            <th width="5%">数量</th>
                            <th width="10%">获取方式</th>
                            <th width="15%">分布区域</th>
                            <th width="15%">获取对象</th>
                            <th width="38%">地图点位</th>
                        </tr>`
                var scList = ``
                for (let i = 0;i<sc_list.length;i++){
                    if(SC_value[sc_list[i]]['mappic'] == 4){
                        var Monster = SC_value[sc_list[i]]['sfrom'] + "<br>"
                        for(var x=0;x<M_value.length;x++){
                            if(M_value[x]['name'].indexOf(Monster)!=-1 && M_value[x]['name'].charAt(0) == Monster.charAt(0)){
                                for(var y=0;y<M_value[x]['spaceName'].length;y++){
                                    if(SC_value[sc_list[i]].obtain == M_value[x]['spaceName'][y]){
                                        var Nowid = SC_value[sc_list[i]].obtain
                                        var SC_List = [];
                                        var Point_length = M_value[x]['mapWhere'][y].length;
                                        for (var z=0;z<Point_length;z++){
                                            SC_List.push({x: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2+1]})
                                        };
                                        scList += `<a onclick="mergeImages(${M_value[x]['spaceName'][y]},['1000'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                                        // var map = Map_id[parseInt(SC_every.obtain)-1]['mName']
                                        break
                                    }
                                }
                            }
                        }
                    } else if(SC_value[sc_list[i]]['mappic'] == 1){
                        var Nowid = SC_value[sc_list[i]].obtain
                        var SC_List = [];
                        var Point = SC_value[sc_list[i]].Point-1
                        SC_List.push({x: Map_id[Nowid-1]['aPoint_List'][Point*2] , y: Map_id[Nowid-1]['aPoint_List'][Point*2+1]})
                        if(SC_value[sc_list[i]]['sfrom'] == '植物'){
                            scList += `<a onclick="mergeImages(${Nowid},['1003'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                        } else if(SC_value[sc_list[i]]['sfrom'] == '矿物'){
                            scList += `<a onclick="mergeImages(${Nowid},['1002'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                        } else if(SC_value[sc_list[i]]['sfrom'] == '水栖'){
                            scList += `<a onclick="mergeImages(${Nowid},['1004'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                        }
                    }
                    
                    var place = '全地域'
                    if(parseInt(SC_value[sc_list[i]].obtain)<6 && parseInt(SC_value[sc_list[i]].obtain)>0){
                        if(SC_value[sc_list[i]].mappic==4){
                            place=SC_value[sc_list[i]].map
                        } else if (SC_value[sc_list[i]].mappic==1){
                            place='-'
                        }
                    } else if (SC_value[sc_list[i]].mappic==4 || SC_value[sc_list[i]].mappic==1){
                        place='-'
                    }
                    if(SC_value[sc_list[i]].mappic=='1' || SC_value[sc_list[i]].mappic=='4'){
                        windowHtml += `<tr class="canclick">
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${place}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>${scList}</td>
                        </tr>`
                    }else if(SC_value[sc_list[i]].mappic=='2'){
                        windowHtml += `<tr class="canclick">
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                        <td style="font-size: 14px;">${place}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                        <td style="max-width: 300px;">-</td>
                        </tr>`
                    }else{
                        windowHtml += `<tr>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${place}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>-</td>
                        </tr>`
                    }
                }
            }else{
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>`
            }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
    }else if(thingArray.madeIt.sucai_B!=''&&thingArray.madeIt.sucai_B=='wepen'){
        var sucai_num = 0
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.kind}</p>
        </div>
        <div class="ThingWindow_tuzhiBox canclick">
            <p class="madeBox_title">图纸获取</p>
            <p class="ThingWindow_q">${thingArray.madeIt.tuzhi}</p>`
        if(thingArray.madeIt.sucai_C_num.length!=0){
            windowHtml+=`<p class="madeBox_title">副本掉落物需求</p>`
            for(i in thingArray.madeIt.sucai_F){
                windowHtml += `<p class="ThingWindow_q">${thingArray.madeIt.sucai_F_num[i]}&nbsp;&nbsp;&nbsp;×&nbsp;&nbsp;&nbsp;${thingArray.madeIt.sucai_F[i]}&nbsp;&nbsp;&nbsp;&nbsp;${WSC_value[thingArray.madeIt.sucai_F[i]]}</p>`
            }
        }
            if(thingArray.madeIt.sucai_C[0]!='-'){
                windowHtml+=`
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>
                    <p class="madeBox_title">小怪材料</p>
                    <table>
                    <tbody>
                        <tr>
                            <th width="25%">名称</th>
                            <th width="5%">数量</th>
                            <th width="10%">获取方式</th>
                            <th width="15%">分布区域</th>
                            <th width="15%">获取对象</th>
                            <th width="38%">地图点位</th>
                        </tr>`
                var scList = ``
                for (let i = 0;i<sc_list.length;i++){
                    if(SC_value[sc_list[i]]['mappic'] == 4){
                        var Monster = SC_value[sc_list[i]]['sfrom'] + "<br>"
                        for(var x=0;x<M_value.length;x++){
                            if(M_value[x]['name'].indexOf(Monster)!=-1 && M_value[x]['name'].charAt(0) == Monster.charAt(0)){
                                for(var y=0;y<M_value[x]['spaceName'].length;y++){
                                    if(SC_value[sc_list[i]].obtain == M_value[x]['spaceName'][y]){
                                        var Nowid = SC_value[sc_list[i]].obtain
                                        var SC_List = [];
                                        var Point_length = M_value[x]['mapWhere'][y].length;
                                        for (var z=0;z<Point_length;z++){
                                            SC_List.push({x: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2] , y: Map_id[Nowid-1]['aPoint_List'][(M_value[x]['mapWhere'][y][z]-1)*2+1]})
                                        };
                                        scList += `<a onclick="mergeImages(${M_value[x]['spaceName'][y]},['1000'],${JSON.stringify(SC_List).replace(/\"/g,"'")},0)">${Map_id[Nowid-1]['mName']}</a><br>`
                                        // var map = Map_id[parseInt(SC_every.obtain)-1]['mName']
                                        break
                                    }
                                }
                            }
                        }
                    }
                    var place = '全地域'
                    if(parseInt(SC_value[sc_list[i]].obtain)<6 && parseInt(SC_value[sc_list[i]].obtain)>0){
                        if(SC_value[sc_list[i]].mappic==4){
                            place=SC_value[sc_list[i]].map
                        } else if (SC_value[sc_list[i]].mappic==1){
                            place='-'
                        }
                    } else if (SC_value[sc_list[i]].mappic==4 || SC_value[sc_list[i]].mappic==1){
                        place='-'
                    }
                    if(SC_value[sc_list[i]].mappic=='1' || SC_value[sc_list[i]].mappic=='4'){
                        windowHtml += `<tr class="canclick">
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${place}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>${scList}</td>
                        </tr>`
                    }else if(SC_value[sc_list[i]].mappic=='2'){
                        var imgSrcString  =``
                        // for(var y=0;y<SC_value[sc_list[i]].mapWhere.length;y++){
                        //     imgSrcString += `<img src="./img/map/`+SC_value[sc_list[i]].mapWhere[y]+`.png" alt="暂无" style="height: 150px;">`
                        // }
                        windowHtml += `<tr class="canclick">
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                        <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                        <td style="font-size: 14px;">${place}</td>
                        <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                        <td>${imgSrcString}</td>
                        </tr>`
                    }else{
                        windowHtml += `<tr>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].name}</td>
                            <td style="font-size: 14px;">${thingArray.madeIt.sucai_C_num[sucai_num++]}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].kind}</td>
                            <td style="font-size: 14px;">${place}</td>
                            <td style="font-size: 14px;">${SC_value[sc_list[i]].sfrom}</td>
                            <td>-</td>
                        </tr>`
                    }
                }
            }else{
                windowHtml+=`</tbody></table></div></div>
                <div class="ThingWindow_madeBox">
                    <p class="madeBox_title">消耗货币</p>
                    <p class="ThingWindow_q">种类：${thingArray.madeIt.sucai_Q}</p>
                    <p class="ThingWindow_q_num">数量：${thingArray.madeIt.sucai_Q_num}</p>`
            }
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        // draggableElement.style.left = window.innerWidth-810+'px'
    }

}


function drawImagineInfoWindow(thingArray){
    let Finalatk = parseFloat(thingArray.atk),Finaldef = parseFloat(thingArray.def),Finalj = parseFloat(thingArray.j),Finaln = parseFloat(thingArray.n),Finalq = parseFloat(thingArray.q),Finalz = parseFloat(thingArray.z),Finals = parseFloat(thingArray.s),Finalhp = 0
    var AbilityList = thingArray.end.split("<br>")
    var windowHtml = ``
        windowHtml += `
        <div class="ThingWindow_nameBox">
            <p class="ThingWindow_title">${thingArray.name.split('<br>')[0]}</p>
            <p class="ThingWindow_title_btm">${thingArray.name.split('<br>')[1]}</p>
        </div>
        <div class="ThingWindow_madeBox">
            <p class="madeBox_title">词条选择</p>
            <p></p><div id=ImagineAbility>`
        for (var Abilitynum = 0;Abilitynum<AbilityList.length;Abilitynum++){
            windowHtml += `<span class="ThingWindow_q" style="border:1px soild">${AbilityList[Abilitynum]}</span>`
        }
        windowHtml += `</div>
            <p></p>
            <p class="madeBox_title">小怪材料</p>
            <table>
            <tbody>
                <tr>
                    <th width="20%">攻击力(物理/魔法)</th>
                    <th width="10%">防御力</th>
                    <th width="10%">回复力</th>
                    <th width="10%">生命值</th>
                    <th width="10%">筋力</th>
                    <th width="10%">耐久力</th>
                    <th width="10%">器用</th>
                    <th width="10%">知力</th>
                    <th width="10%">精神力</th>
                </tr>`
                windowHtml += `<tr>
                    <td style="font-size: 14px;" id="Finalatk">${thingArray.atk}</td>
                    <td style="font-size: 14px;" id="Finaldef">${thingArray.def}</td>
                    <td style="font-size: 14px;" id="Finalhea"></td>
                    <td style="font-size: 14px;" id="Finalhp"></td>
                    <td style="font-size: 14px;" id="Finalj">${thingArray.j}</td>
                    <td style="font-size: 14px;" id="Finaln">${thingArray.n}</td>
                    <td style="font-size: 14px;" id="Finalq">${thingArray.q}</td>
                    <td style="font-size: 14px;" id="Finalz">${thingArray.z}</td>
                    <td style="font-size: 14px;" id="Finals">${thingArray.s}</td>
                </tr>`
        
        windowHtml += `</tbody>
        </table></div>`
        
        document.getElementsByClassName('madeThingsWindow_inside')[0].innerHTML = windowHtml

        showStart()
        draggableElement.style.display = 'block'
        setTimeout(function(){
            draggableElement.style.top = '50%'
            draggableElement.style.transform = 'translateX(-50%) translateY(-50%) scale(1)'
            draggableElement.style.opacity = '1'
        })
        if($('#ImagineAbility').children().length > 0){
        var firstAbility = $('#ImagineAbility').children("span").get(0).innerText
        if(["勇猛G1","勇猛G2","勇猛G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "勇猛G1"){
                Finalatk += 10
            }else if(firstAbility == "勇猛G2"){
                Finalatk += 25
            }else if(firstAbility == "勇猛G3"){
                Finalatk += 50
            }
        }else if(["不屈G1","不屈G2","不屈G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "不屈G1"){
                Finaldef += 15
            }else if(firstAbility == "不屈G2"){
                Finaldef += 40
            }else if(firstAbility == "不屈G3"){
                Finaldef += 70
            }
        }else if(["生命の奔流G1","生命の奔流G2","生命の奔流G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "生命の奔流G1"){
                Finalhp += 100
            }else if(firstAbility == "生命の奔流G2"){
                Finalhp += 400
            }else if(firstAbility == "生命の奔流G3"){
                Finalhp += 700
            }
        }else if(["剛力G1","剛力G2","剛力G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "剛力G1"){
                Finalj += 5
            }else if(firstAbility == "剛力G2"){
                Finalj += 13
            }else if(firstAbility == "剛力G3"){
                Finalj += 25
            }
        }else if(["忍耐力G1","忍耐力G2","忍耐力G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "忍耐力G1"){
                Finaln += 5
            }else if(firstAbility == "忍耐力G2"){
                Finaln += 13
            }else if(firstAbility == "忍耐力G3"){
                Finaln += 25
            }
        }else if(["巧妙G1","巧妙G2","巧妙G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "巧妙G1"){
                Finalq += 5
            }else if(firstAbility == "巧妙G2"){
                Finalq += 13
            }else if(firstAbility == "巧妙G3"){
                Finalq += 25
            }
        }else if(["博識G1","博識G2","博識G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "博識G1"){
                Finalz += 5
            }else if(firstAbility == "博識G2"){
                Finalz += 13
            }else if(firstAbility == "博識G3"){
                Finalz += 25
            }
        }else if(["集中G1","集中G2","集中G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "集中G1"){
                Finals += 5
            }else if(firstAbility == "集中G2"){
                Finals += 13
            }else if(firstAbility == "集中G3"){
                Finals += 25
            }
        }else if(["タフネスG1","タフネスG2","タフネスG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "タフネスG1"){
                Finalj += 3
                Finaln += 3
            }else if(firstAbility == "タフネスG2"){
                Finalj += 7
                Finaln += 7
            }else if(firstAbility == "タフネスG3"){
                Finalj += 13
                Finaln += 13
            }
        }else if(["エキスパートG1","エキスパートG2","エキスパートG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "エキスパートG1"){
                Finalj += 3
                Finalq += 3
            }else if(firstAbility == "エキスパートG2"){
                Finalj += 7
                Finalq += 7
            }else if(firstAbility == "エキスパートG3"){
                Finalj += 13
                Finalq += 13
            }
        }else if(["トランスG1","トランスG2","トランスG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "トランスG1"){
                Finalj += 3
                Finalz += 3
            }else if(firstAbility == "トランスG2"){
                Finalj += 7
                Finalz += 7
            }else if(firstAbility == "トランスG3"){
                Finalj += 13
                Finalz += 13
            }
        }else if(["インスピレーションG1","インスピレーションG2","インスピレーションG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "インスピレーションG1"){
                Finalj += 3
                Finals += 3
            }else if(firstAbility == "インスピレーションG2"){
                Finalj += 7
                Finals += 7
            }else if(firstAbility == "インスピレーションG3"){
                Finalj += 13
                Finals += 13
            }
        }else if(["ストラテジストG1","ストラテジストG2","ストラテジストG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "ストラテジストG1"){
                Finaln += 3
                Finalz += 3
            }else if(firstAbility == "ストラテジストG2"){
                Finaln += 7
                Finalz += 7
            }else if(firstAbility == "ストラテジストG3"){
                Finaln += 13
                Finalz += 13
            }
        }else if(["屈強な心身G1","屈強な心身G2","屈強な心身G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "屈強な心身G1"){
                Finaln += 3
                Finals += 3
            }else if(firstAbility == "屈強な心身G2"){
                Finaln += 7
                Finals += 7
            }else if(firstAbility == "屈強な心身G3"){
                Finaln += 13
                Finals += 13
            }
        }else if(["ウィズダムG1","ウィズダムG2","ウィズダムG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "ウィズダムG1"){
                Finalq += 3
                Finalz += 3
            }else if(firstAbility == "ウィズダムG2"){
                Finalq += 7
                Finalz += 7
            }else if(firstAbility == "ウィズダムG3"){
                Finalq += 13
                Finalz += 13
            }
        }else if(["シックスセンスG1","シックスセンスG2","シックスセンスG3"].indexOf(firstAbility)>-1){
            if(firstAbility == "シックスセンスG1"){
                Finalz += 3
                Finals += 3
            }else if(firstAbility == "シックスセンスG2"){
                Finalz += 7
                Finals += 7
            }else if(firstAbility == "シックスセンスG3"){
                Finalz += 13
                Finals += 13
            }
        }else if(["気功G1","気功G2","気功G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "気功G1"){
                Finaln += 3
                Finalq += 3
            }else if(firstAbility == "気功G2"){
                Finaln += 7
                Finalq += 7
            }else if(firstAbility == "気功G3"){
                Finaln += 13
                Finalq += 13
            }
        }else if(["獅子奮迅G1","獅子奮迅G2","獅子奮迅G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "獅子奮迅G3"){
                Finalatk += 25
                Finalhp += 350
            }
        }else if(["守護者G1","守護者G2","守護者G3"].indexOf(firstAbility)>-1){
            if(firstAbility == "守護者G3"){
                Finaldef += 35
            }
        }
        $('#ImagineAbility').children("span").get(0).style.backgroundColor='rgb(55, 194, 192)'
        $('#ImagineAbility').children("span").get(0).style.color='rgb(38, 41, 46)'
        $('#ImagineAbility').children("span").get(0).style.borderColor='rgb(55, 194, 192, 0)'
        $('#ImagineAbility span').not("span:first").css('background-color','rgb(55, 194, 192, 0)')
        $('#ImagineAbility span').not("span:first").css('color','rgb(55, 194, 192)')
        $('#ImagineAbility span').not("span:first").css('border-color','rgb(55, 194, 192)')
    }
        $('#Finalatk').text((Finalatk+Finalj*0.6+Finalq*0.4).toFixed(1)+"/"+(Finalatk+Finalz*0.6+Finals*0.4).toFixed(1))
        $('#Finaldef').text((Finaldef+Finalj*0.4+Finaln*0.6).toFixed(1))
        $('#Finalhea').text((Finalz*0.4+Finals*0.4).toFixed(1))
        $('#Finalhp').text((Finalhp+Finaln*0.6).toFixed(1))
        if(parseInt(thingArray.j) != Finalj){
            $('#Finalj').text(Finalj+'(+'+(Finalj-parseInt(thingArray.j))+')')
        }
        if(parseInt(thingArray.n) != Finaln){
            $('#Finaln').text(Finaln+'(+'+(Finaln-parseInt(thingArray.n))+')')
        }
        if(parseInt(thingArray.q) != Finalq){
            $('#Finalq').text(Finalq+'(+'+(Finalq-parseInt(thingArray.q))+')')
        }
        if(parseInt(thingArray.z) != Finalz){
            $('#Finalz').text(Finalz+'(+'+(Finalz-parseInt(thingArray.z))+')')
        }
        if(parseInt(thingArray.s) != Finals){
            $('#Finals').text(Finals+'(+'+(Finals-parseInt(thingArray.s))+')')
        }

    $('#ImagineAbility span').click(function(){
        $('#ImagineAbility span').css('background-color','rgb(55, 194, 192, 0)')
        $('#ImagineAbility span').css('color','rgb(55, 194, 192)')
        $('#ImagineAbility span').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        Finalatk = parseFloat(thingArray.atk),Finaldef = parseFloat(thingArray.def),Finalj = parseFloat(thingArray.j),Finaln = parseFloat(thingArray.n),Finalq = parseFloat(thingArray.q),Finalz = parseFloat(thingArray.z),Finals = parseFloat(thingArray.s),Finalhp = 0
        var NowAbility = this.innerText
        if(["勇猛G1","勇猛G2","勇猛G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "勇猛G1"){
                Finalatk += 10
            }else if(NowAbility == "勇猛G2"){
                Finalatk += 25
            }else if(NowAbility == "勇猛G3"){
                Finalatk += 50
            }
        }else if(["不屈G1","不屈G2","不屈G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "不屈G1"){
                Finaldef += 15
            }else if(NowAbility == "不屈G2"){
                Finaldef += 40
            }else if(NowAbility == "不屈G3"){
                Finaldef += 70
            }
        }else if(["生命の奔流G1","生命の奔流G2","生命の奔流G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "生命の奔流G1"){
                Finalhp += 100
            }else if(NowAbility == "生命の奔流G2"){
                Finalhp += 400
            }else if(NowAbility == "生命の奔流G3"){
                Finalhp += 700
            }
        }else if(["剛力G1","剛力G2","剛力G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "剛力G1"){
                Finalj += 5
            }else if(NowAbility == "剛力G2"){
                Finalj += 13
            }else if(NowAbility == "剛力G3"){
                Finalj += 25
            }
        }else if(["忍耐力G1","忍耐力G2","忍耐力G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "忍耐力G1"){
                Finaln += 5
            }else if(NowAbility == "忍耐力G2"){
                Finaln += 13
            }else if(NowAbility == "忍耐力G3"){
                Finaln += 25
            }
        }else if(["巧妙G1","巧妙G2","巧妙G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "巧妙G1"){
                Finalq += 5
            }else if(NowAbility == "巧妙G2"){
                Finalq += 13
            }else if(NowAbility == "巧妙G3"){
                Finalq += 25
            }
        }else if(["博識G1","博識G2","博識G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "博識G1"){
                Finalz += 5
            }else if(NowAbility == "博識G2"){
                Finalz += 13
            }else if(NowAbility == "博識G3"){
                Finalz += 25
            }
        }else if(["集中G1","集中G2","集中G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "集中G1"){
                Finals += 5
            }else if(NowAbility == "集中G2"){
                Finals += 13
            }else if(NowAbility == "集中G3"){
                Finals += 25
            }
        }else if(["タフネスG1","タフネスG2","タフネスG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "タフネスG1"){
                Finalj += 3
                Finaln += 3
            }else if(NowAbility == "タフネスG2"){
                Finalj += 7
                Finaln += 7
            }else if(NowAbility == "タフネスG3"){
                Finalj += 13
                Finaln += 13
            }
        }else if(["エキスパートG1","エキスパートG2","エキスパートG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "エキスパートG1"){
                Finalj += 3
                Finalq += 3
            }else if(NowAbility == "エキスパートG2"){
                Finalj += 7
                Finalq += 7
            }else if(NowAbility == "エキスパートG3"){
                Finalj += 13
                Finalq += 13
            }
        }else if(["トランスG1","トランスG2","トランスG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "トランスG1"){
                Finalj += 3
                Finalz += 3
            }else if(NowAbility == "トランスG2"){
                Finalj += 7
                Finalz += 7
            }else if(NowAbility == "トランスG3"){
                Finalj += 13
                Finalz += 13
            }
        }else if(["インスピレーションG1","インスピレーションG2","インスピレーションG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "インスピレーションG1"){
                Finalj += 3
                Finals += 3
            }else if(NowAbility == "インスピレーションG2"){
                Finalj += 7
                Finals += 7
            }else if(NowAbility == "インスピレーションG3"){
                Finalj += 13
                Finals += 13
            }
        }else if(["ストラテジストG1","ストラテジストG2","ストラテジストG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "ストラテジストG1"){
                Finaln += 3
                Finalz += 3
            }else if(NowAbility == "ストラテジストG2"){
                Finaln += 7
                Finalz += 7
            }else if(NowAbility == "ストラテジストG3"){
                Finaln += 13
                Finalz += 13
            }
        }else if(["屈強な心身G1","屈強な心身G2","屈強な心身G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "屈強な心身G1"){
                Finaln += 3
                Finals += 3
            }else if(NowAbility == "屈強な心身G2"){
                Finaln += 7
                Finals += 7
            }else if(NowAbility == "屈強な心身G3"){
                Finaln += 13
                Finals += 13
            }
        }else if(["ウィズダムG1","ウィズダムG2","ウィズダムG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "ウィズダムG1"){
                Finalq += 3
                Finalz += 3
            }else if(NowAbility == "ウィズダムG2"){
                Finalq += 7
                Finalz += 7
            }else if(NowAbility == "ウィズダムG3"){
                Finalq += 13
                Finalz += 13
            }
        }else if(["シックスセンスG1","シックスセンスG2","シックスセンスG3"].indexOf(NowAbility)>-1){
            if(NowAbility == "シックスセンスG1"){
                Finalz += 3
                Finals += 3
            }else if(NowAbility == "シックスセンスG2"){
                Finalz += 7
                Finals += 7
            }else if(NowAbility == "シックスセンスG3"){
                Finalz += 13
                Finals += 13
            }
        }else if(["気功G1","気功G2","気功G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "気功G1"){
                Finaln += 3
                Finalq += 3
            }else if(NowAbility == "気功G2"){
                Finaln += 7
                Finalq += 7
            }else if(NowAbility == "気功G3"){
                Finaln += 13
                Finalq += 13
            }
        }else if(["獅子奮迅G1","獅子奮迅G2","獅子奮迅G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "獅子奮迅G3"){
                Finalatk += 25
                Finalhp += 350
            }
        }else if(["守護者G1","守護者G2","守護者G3"].indexOf(NowAbility)>-1){
            if(NowAbility == "守護者G3"){
                Finaldef += 35
            }
        }
        $('#Finalatk').text((Finalatk+Finalj*0.6+Finalq*0.4).toFixed(1)+"/"+(Finalatk+Finalz*0.6+Finals*0.4).toFixed(1))
        $('#Finaldef').text((Finaldef+Finalj*0.4+Finaln*0.6).toFixed(1))
        $('#Finalhea').text((Finalz*0.4+Finals*0.4).toFixed(1))
        $('#Finalhp').text((Finalhp+Finaln*0.6).toFixed(1))
        if(parseInt(thingArray.j) != Finalj){
            $('#Finalj').text(Finalj+'(+'+(Finalj-parseInt(thingArray.j))+')')
        }else{
            $('#Finalj').text(Finalj)
        }
        if(parseInt(thingArray.n) != Finaln){
            $('#Finaln').text(Finaln+'(+'+(Finaln-parseInt(thingArray.n))+')')
        }else{
            $('#Finaln').text(Finaln)
        }
        if(parseInt(thingArray.q) != Finalq){
            $('#Finalq').text(Finalq+'(+'+(Finalq-parseInt(thingArray.q))+')')
        }else{
            $('#Finalq').text(Finalq)
        }
        if(parseInt(thingArray.z) != Finalz){
            $('#Finalz').text(Finalz+'(+'+(Finalz-parseInt(thingArray.z))+')')
        }else{
            $('#Finalz').text(Finalz)
        }
        if(parseInt(thingArray.s) != Finals){
            $('#Finals').text(Finals+'(+'+(Finals-parseInt(thingArray.s))+')')
        }else{
            $('#Finals').text(Finals)
        }
    })
}

function getDropInfo(pid){
    let dropList = []
    for (let i = 0;i<E_drop.length;i++){
        for (let j = 0;j<E_drop[i]["dList"].length;j++){
            if(E_drop[i]["dList"][j] == pid){
                dropList.unshift(E_drop[i]["mName"])
            }
        }
    }
    return dropList
}