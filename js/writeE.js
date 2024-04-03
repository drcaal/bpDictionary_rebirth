// writeE()
function writeE(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    Ebox = '三叶'
    ELevel = 0
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    
    var E_htmlStr = `<p class="windowTitle">| E - 强化幻想</p>
    <p class="Topword">强化幻想按形状类型分为五类。单击列名可进行升、降序排列。单击幻想图标可查看其制作材料及获取途径。 单击幻想类型</span>可查看幻想计算词条后最终属性<br>名称前标注有 * 号的为活动限定幻想。<br>2023年11月22日Ver.1.02.100版本更新后副本掉宝率大幅度提高,且掉落奖励中新增了强化幻想,若所选幻想可由副本掉落获取时,前置显示掉落副本。</p>

    <div class="EchoiseBox">
        <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">三叶</div>
        <div>山岳</div>
        <div>矢尻</div>
        <div>风车</div>
        <div>水瓶</div>
    </div>
    <div class="ELchoiseBox">
        <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">基础数值</div>
        <div>物攻最大值</div>
        <div>魔攻最大值</div>
        <div>防御最大值</div>
        <p class="B_E_searchNum">三叶幻想有 null 条数据</p>
    </div>
    <table id="Etable">
        <tbody>
            <tr>
                <th width="7%">图标</th>
                <th width="20%">名称</th>
                <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
                <th width="13%" onclick="rewrite(3)" style="cursor: pointer;">物理攻击</th>
                <th width="13%" onclick="rewrite(4)" style="cursor: pointer;">魔法攻击</th>
                <th width="13%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
                <th width="20%">词缀</th>
                <th width="5%">类型</th>
            </tr>`
    
    E_value.forEach((E_every, index)=>{
        var abli = sumend(E_every.end)
        var wuli = String((E_every.attr[1] + E_every.attr[3]*0.6 + E_every.attr[5]*0.4).toFixed(1)) + "(+" + String((E_every.attr[3]*0.6 + E_every.attr[5]*0.4).toFixed(1)) + ")"
        var maho = String((E_every.attr[1] + E_every.attr[6]*0.6 + E_every.attr[7]*0.4).toFixed(1)) + "(+" + String((E_every.attr[6]*0.6 + E_every.attr[7]*0.4).toFixed(1)) + ")"
        var def = String((E_every.attr[2] + E_every.attr[3]*0.4 + E_every.attr[4]*0.6).toFixed(1)) + "(+" + String((E_every.attr[3]*0.4 + E_every.attr[4]*0.6).toFixed(1)) + ")"
        E_every.attr.push(wuli)
        E_every.attr.push(maho)
        E_every.attr.push(def)
        E_htmlStr += `<tr>
        <td style="font-size: 12px;"><img src="./img/icon/e/${E_every.pid}.png" alt="${E_every.pid}" title="${index}"></td>
        <td style="font-size: 14px; padding: 0 5px;">${E_every.name}</td>
        <td>${E_every.attr[0]}</td>
        <td>${wuli}</td>
        <td>${maho}</td>
        <td>${def}</td>
        <td style="font-size: 13px; padding: 0 5px;" class="ImagineData" bak="${abli}">${E_every.end}</td>
        <td style="font-size: 13px;" class="ImagineInfo" title="${index}">${E_every.kind}</td>
    </tr>`
    })
    E_htmlStr += `<tr>
    <th width="7%">图标</th>
    <th width="20%">名称</th>
    <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
    <th width="13%" onclick="rewrite(3)" style="cursor: pointer;">物理攻击</th>
    <th width="13%" onclick="rewrite(4)" style="cursor: pointer;">魔法攻击</th>
    <th width="13%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
    <th width="20%">词缀</th>
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
        if(this.innerText != "基础数值"){
            var type = 0
            if(this.innerText == "物攻最大值"){
                type = 0
            } else if (this.innerText == "魔攻最大值"){
                type = 1
            } else if (this.innerText == "防御最大值"){
                type = 2
            }
            E_value.forEach((E_every, index)=>{
                    var lastattr = getLastAxD(E_every.attr,E_every.max,E_every.end,type)
                    E_every['lastattr'] = lastattr
                    E_every.attr[8] = E_every.lastattr[0]
                    E_every.attr[9] = E_every.lastattr[1]
                    E_every.attr[10] = E_every.lastattr[2]
                })
        } else {
            E_value.forEach((E_every, index)=>{
                    E_every.attr[8]= String((E_every.attr[1] + E_every.attr[3]*0.6 + E_every.attr[5]*0.4).toFixed(1)) + "(+" + String((E_every.attr[3]*0.6 + E_every.attr[5]*0.4).toFixed(1)) + ")"
                    E_every.attr[9] = String((E_every.attr[1] + E_every.attr[6]*0.6 + E_every.attr[7]*0.4).toFixed(1)) + "(+" + String((E_every.attr[6]*0.6 + E_every.attr[7]*0.4).toFixed(1)) + ")"
                    E_every.attr[10] = String((E_every.attr[2] + E_every.attr[3]*0.4 + E_every.attr[4]*0.6).toFixed(1)) + "(+" + String((E_every.attr[3]*0.4 + E_every.attr[4]*0.6).toFixed(1)) + ")"
                })
            }
        choiseE(Ebox)
    }})
    $('#Etable img').click(function(){drawMakeThingWindow(E_value[this.title])})
    $('.ImagineInfo').click(function(){drawImagineInfoWindow(E_value[this.title])})

    $('.ImagineData').mouseenter(function(){
        var bak_data = this.innerHTML
        this.innerHTML = this.getAttribute('bak')
        this.setAttribute('bak',bak_data)
    })
    $('.ImagineData').mouseleave(function(){
        var bak_data = this.innerHTML
        this.innerHTML = this.getAttribute('bak')
        this.setAttribute('bak',bak_data)
    })    
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

function sumattr(ability,attr){
    if(ability.indexOf("勇猛")>-1){
        if(ability == "勇猛G1"){
            attr[0] += 10
        }else if(ability == "勇猛G2"){
            attr[0] += 25
        }else if(ability == "勇猛G3"){
            attr[0] += 50
        }
    }else if(ability.indexOf("不屈")>-1){
        if(ability == "不屈G1"){
            attr[1] += 15
        }else if(ability == "不屈G2"){
            attr[1] += 40
        }else if(ability == "不屈G3"){
            attr[1] += 70
        }else if(ability == "不屈G4"){
            attr[1] += 120
        }
    }else if(ability.indexOf("生命の奔流")>-1){
        if(ability == "生命の奔流G1"){
            attr[7] += 100
        }else if(ability == "生命の奔流G2"){
            attr[7] += 400
        }else if(ability == "生命の奔流G3"){
            attr[7] += 700
        }else if(ability == "生命の奔流G4"){
            attr[7] += 1100
        }
    }else if(ability.indexOf("剛力")>-1){
        if(ability == "剛力G1"){
            attr[2] += 5
        }else if(ability == "剛力G2"){
            attr[2] += 13
        }else if(ability == "剛力G3"){
            attr[2] += 25
        }else if(ability == "剛力G4"){
            attr[2] += 38
        }
    }else if(ability.indexOf("忍耐力")>-1){
        if(ability == "忍耐力G1"){
            attr[3] += 5
        }else if(ability == "忍耐力G2"){
            attr[3] += 13
        }else if(ability == "忍耐力G3"){
            attr[3] += 25
        }else if(ability == "忍耐力G4"){
            attr[3] += 38
        }
    }else if(ability.indexOf("巧妙")>-1){
        if(ability == "巧妙G1"){
            attr[4] += 5
        }else if(ability == "巧妙G2"){
            attr[4] += 13
        }else if(ability == "巧妙G3"){
            attr[4] += 25
        }else if(ability == "巧妙G4"){
            attr[4] += 38
        }
    }else if(ability.indexOf("博識")>-1){
        if(ability == "博識G1"){
            attr[5] += 5
        }else if(ability == "博識G2"){
            attr[5] += 13
        }else if(ability == "博識G3"){
            attr[5] += 25
        }else if(ability == "博識G4"){
            attr[5] += 38
        }
    }else if(ability.indexOf("集中")>-1){
        if(ability == "集中G1"){
            attr[6] += 5
        }else if(ability == "集中G2"){
            attr[6] += 13
        }else if(ability == "集中G3"){
            attr[6] += 25
        }else if(ability == "集中G4"){
            attr[6] += 38
        }
    }else if(ability.indexOf("タフネス")>-1){
        if(ability == "タフネスG1"){
            attr[2] += 3
            attr[3] += 3
        }else if(ability == "タフネスG2"){
            attr[2] += 7
            attr[3] += 7
        }else if(ability == "タフネスG3"){
            attr[2] += 13
            attr[3] += 13
        }else if(ability == "タフネスG4"){
            attr[2] += 19
            attr[3] += 19
        }
    }else if(ability.indexOf("エキスパート")>-1){
        if(ability == "エキスパートG1"){
            attr[2] += 3
            attr[4] += 3
        }else if(ability == "エキスパートG2"){
            attr[2] += 7
            attr[4] += 7
        }else if(ability == "エキスパートG3"){
            attr[2] += 13
            attr[4] += 13
        }else if(ability == "エキスパートG4"){
            attr[2] += 19
            attr[4] += 19
        }
    }else if(ability.indexOf("トランス")>-1){
        if(ability == "トランスG1"){
            attr[2] += 3
            attr[5] += 3
        }else if(ability == "トランスG2"){
            attr[2] += 7
            attr[5] += 7
        }else if(ability == "トランスG3"){
            attr[2] += 13
            attr[5] += 13
        }else if(ability == "トランスG4"){
            attr[2] += 19
            attr[5] += 19
        }
    }else if(ability.indexOf("インスピレーション")>-1){
        if(ability == "インスピレーションG1"){
            attr[2] += 3
            attr[6] += 3
        }else if(ability == "インスピレーションG2"){
            attr[2] += 7
            attr[6] += 7
        }else if(ability == "インスピレーションG3"){
            attr[2] += 13
            attr[6] += 13
        }else if(ability == "インスピレーションG4"){
            attr[2] += 19
            attr[6] += 19
        }
    }else if(ability.indexOf("ストラテジスト")>-1){
        if(ability == "ストラテジストG1"){
            attr[3] += 3
            attr[5] += 3
        }else if(ability == "ストラテジストG2"){
            attr[3] += 7
            attr[5] += 7
        }else if(ability == "ストラテジストG3"){
            attr[3] += 13
            attr[5] += 13
        }else if(ability == "ストラテジストG4"){
            attr[3] += 19
            attr[5] += 19
        }
    }else if(ability.indexOf("屈強な心身")>-1){
        if(ability == "屈強な心身G1"){
            attr[3] += 3
            attr[6] += 3
        }else if(ability == "屈強な心身G2"){
            attr[3] += 7
            attr[6] += 7
        }else if(ability == "屈強な心身G3"){
            attr[3] += 13
            attr[6] += 13
        }else if(ability == "屈強な心身G4"){
            attr[3] += 19
            attr[6] += 19
        }
    }else if(ability.indexOf("ウィズダム")>-1){
        if(ability == "ウィズダムG1"){
            attr[4] += 3
            attr[5] += 3
        }else if(ability == "ウィズダムG2"){
            attr[4] += 7
            attr[5] += 7
        }else if(ability == "ウィズダムG3"){
            attr[4] += 13
            attr[5] += 13
        }else if(ability == "ウィズダムG4"){
            attr[4] += 19
            attr[5] += 19
        }
    }else if(ability.indexOf("シックスセンス")>-1){
        if(ability == "シックスセンスG1"){
            attr[5] += 3
            attr[6] += 3
        }else if(ability == "シックスセンスG2"){
            attr[5] += 7
            attr[6] += 7
        }else if(ability == "シックスセンスG3"){
            attr[5] += 13
            attr[6] += 13
        }else if(ability == "シックスセンスG4"){
            attr[5] += 19
            attr[6] += 19
        }
    }else if(ability.indexOf("気功")>-1){
        if(ability == "気功G1"){
            attr[3] += 3
            attr[4] += 3
        }else if(ability == "気功G2"){
            attr[3] += 7
            attr[4] += 7
        }else if(ability == "気功G3"){
            attr[3] += 13
            attr[4] += 13
        }else if(ability == "気功G4"){
            attr[3] += 19
            attr[4] += 19
        }
    }else if(ability.indexOf("獅子奮迅")>-1){
        if(ability == "獅子奮迅G3"){
            attr[0] += 25
            attr[7] += 350
        }
    }else if(ability.indexOf("守護者")>-1){
        if(ability == "守護者G3"){
            attr[1] += 35
            attr[8] += 75
        }
    }else if(ability.indexOf("戦士の心得")>-1){
        if(ability == "戦士の心得G4"){
            attr[0] += 38
            attr[1] += 60
        }
    }
    return attr
}

function sumend(abilitylist){
    var AbilityList = ""
    abli = abilitylist.split('<br>')
    for (var i = 0;i<abli.length;i++){
        ability = abli[i]
        if(ability.indexOf("勇猛")>-1){
            if(ability == "勇猛G1"){
                AbilityList += "攻击力+10<br>"
            }else if(ability == "勇猛G2"){
                AbilityList += "攻击力+25<br>"
            }else if(ability == "勇猛G3"){
                AbilityList += "攻击力+50<br>"
            }
        }else if(ability.indexOf("不屈")>-1){
            if(ability == "不屈G1"){
                AbilityList += "防御力+15<br>"
            }else if(ability == "不屈G2"){
                AbilityList += "防御力+40<br>"
            }else if(ability == "不屈G3"){
                AbilityList += "防御力+70<br>"
            }else if(ability == "不屈G4"){
                AbilityList += "防御力+120<br>"
            }
        }else if(ability.indexOf("生命の奔流")>-1){
            if(ability == "生命の奔流G1"){
                AbilityList += "HP+100<br>"
            }else if(ability == "生命の奔流G2"){
                AbilityList += "HP+400<br>"
            }else if(ability == "生命の奔流G3"){
                AbilityList += "HP+700<br>"
            }else if(ability == "生命の奔流G4"){
                AbilityList += "HP+1100<br>"
            }
        }else if(ability.indexOf("剛力")>-1){
            if(ability == "剛力G1"){
                AbilityList += "筋力+5<br>"
            }else if(ability == "剛力G2"){
                AbilityList += "筋力+13<br>"
            }else if(ability == "剛力G3"){
                AbilityList += "筋力+25<br>"
            }else if(ability == "剛力G4"){
                AbilityList += "筋力+38<br>"
            }
        }else if(ability.indexOf("忍耐力")>-1){
            if(ability == "忍耐力G1"){
                AbilityList += "耐久力+5<br>"
            }else if(ability == "忍耐力G2"){
                AbilityList += "耐久力+13<br>"
            }else if(ability == "忍耐力G3"){
                AbilityList += "耐久力+25<br>"
            }else if(ability == "忍耐力G4"){
                AbilityList += "耐久力+38<br>"
            }
        }else if(ability.indexOf("巧妙")>-1){
            if(ability == "巧妙G1"){
                AbilityList += "器用+5<br>"
            }else if(ability == "巧妙G2"){
                AbilityList += "器用+13<br>"
            }else if(ability == "巧妙G3"){
                AbilityList += "器用+25<br>"
            }else if(ability == "巧妙G4"){
                AbilityList += "器用+38<br>"
            }
        }else if(ability.indexOf("博識")>-1){
            if(ability == "博識G1"){
                AbilityList += "知力+5<br>"
            }else if(ability == "博識G2"){
                AbilityList += "知力+13<br>"
            }else if(ability == "博識G3"){
                AbilityList += "知力+25<br>"
            }else if(ability == "博識G4"){
                AbilityList += "知力+38<br>"
            }
        }else if(ability.indexOf("集中")>-1){
            if(ability == "集中G1"){
                AbilityList += "精神力+5<br>"
            }else if(ability == "集中G2"){
                AbilityList += "精神力+13<br>"
            }else if(ability == "集中G3"){
                AbilityList += "精神力+25<br>"
            }else if(ability == "集中G4"){
                AbilityList += "精神力+38<br>"
            }
        }else if(ability.indexOf("気合の奔流")>-1){
            if(ability == "気合の奔流G1"){
                AbilityList += "ST+5<br>"
            }else if(ability == "気合の奔流G2"){
                AbilityList += "ST+10<br>"
            }else if(ability == "気合の奔流G3"){
                AbilityList += "ST+15<br>"
            }
        }else if(ability.indexOf("急所感知")>-1){
            if(ability == "急所感知G1"){
                AbilityList += "会心率+30%<br>"
            }else if(ability == "急所感知G2"){
                AbilityList += "会心率+60%<br>"
            }
        }else if(ability.indexOf("痛撃")>-1){
            if(ability == "痛撃G1"){
                AbilityList += "会心力+12<br>"
            }else if(ability == "痛撃G2"){
                AbilityList += "会心力+18<br>"
            }
        }else if(ability.indexOf("タフネス")>-1){
            if(ability == "タフネスG1"){
                AbilityList += "筋力+3 耐久力+3<br>"
            }else if(ability == "タフネスG2"){
                AbilityList += "筋力+7 耐久力+7<br>"
            }else if(ability == "タフネスG3"){
                AbilityList += "筋力+13 耐久力+13<br>"
            }else if(ability == "タフネスG4"){
                AbilityList += "筋力+19 耐久力+19<br>"
            }
        }else if(ability.indexOf("エキスパート")>-1){
            if(ability == "エキスパートG1"){
                AbilityList += "筋力+3 器用+3<br>"
            }else if(ability == "エキスパートG2"){
                AbilityList += "筋力+7 器用+7<br>"
            }else if(ability == "エキスパートG3"){
                AbilityList += "筋力+13 器用+13<br>"
            }else if(ability == "エキスパートG4"){
                AbilityList += "筋力+19 器用+19<br>"
            }
        }else if(ability.indexOf("トランス")>-1){
            if(ability == "トランスG1"){
                AbilityList += "筋力+3 知力+3<br>"
            }else if(ability == "トランスG2"){
                AbilityList += "筋力+7 知力+7<br>"
            }else if(ability == "トランスG3"){
                AbilityList += "筋力+13 知力+13<br>"
            }else if(ability == "トランスG4"){
                AbilityList += "筋力+19 知力+19<br>"
            }
        }else if(ability.indexOf("インスピレーション")>-1){
            if(ability == "インスピレーションG1"){
                AbilityList += "筋力+3 精神力+3<br>"
            }else if(ability == "インスピレーションG2"){
                AbilityList += "筋力+7 精神力+7<br>"
            }else if(ability == "インスピレーションG3"){
                AbilityList += "筋力+13 精神力+13<br>"
            }else if(ability == "インスピレーションG4"){
                AbilityList += "筋力+19 精神力+19<br>"
            }
        }else if(ability.indexOf("ストラテジスト")>-1){
            if(ability == "ストラテジストG1"){
                AbilityList += "耐久力+3 知力+3<br>"
            }else if(ability == "ストラテジストG2"){
                AbilityList += "耐久力+7 知力+7<br>"
            }else if(ability == "ストラテジストG3"){
                AbilityList += "耐久力+13 知力+13<br>"
            }else if(ability == "ストラテジストG4"){
                AbilityList += "耐久力+19 知力+19<br>"
            }
        }else if(ability.indexOf("屈強な心身")>-1){
            if(ability == "屈強な心身G1"){
                AbilityList += "耐久力+3 精神力+3<br>"
            }else if(ability == "屈強な心身G2"){
                AbilityList += "耐久力+7 精神力+7<br>"
            }else if(ability == "屈強な心身G3"){
                AbilityList += "耐久力+13 精神力+13<br>"
            }else if(ability == "屈強な心身G4"){
                AbilityList += "耐久力+19 精神力+19<br>"
            }
        }else if(ability.indexOf("ウィズダム")>-1){
            if(ability == "ウィズダムG1"){
                AbilityList += "器用+3 知力+3<br>"
            }else if(ability == "ウィズダムG2"){
                AbilityList += "器用+7 知力+7<br>"
            }else if(ability == "ウィズダムG3"){
                AbilityList += "器用+13 知力+13<br>"
            }else if(ability == "ウィズダムG4"){
                AbilityList += "器用+19 知力+19<br>"
            }
        }else if(ability.indexOf("シックスセンス")>-1){
            if(ability == "シックスセンスG1"){
                AbilityList += "知力+3 精神力+3<br>"
            }else if(ability == "シックスセンスG2"){
                AbilityList += "知力+7 精神力+7<br>"
            }else if(ability == "シックスセンスG3"){
                AbilityList += "知力+13 精神力+13<br>"
            }else if(ability == "シックスセンスG4"){
                AbilityList += "知力+19 精神力+19<br>"
            }
        }else if(ability.indexOf("気功")>-1){
            if(ability == "気功G1"){
                AbilityList += "耐久力+3 器用+3<br>"
            }else if(ability == "気功G2"){
                AbilityList += "耐久力+7 器用+7<br>"
            }else if(ability == "気功G3"){
                AbilityList += "耐久力+13 器用+13<br>"
            }else if(ability == "気功G4"){
                AbilityList += "耐久力+19 器用+19<br>"
            }
        }else if(ability.indexOf("獅子奮迅")>-1){
            if(ability == "獅子奮迅G3"){
                AbilityList += "攻击力+25 HP+350<br>"
            }
        }else if(ability.indexOf("守護者")>-1){
            if(ability == "守護者G3"){
                AbilityList += "防御力+35 回复力+75<br>"
            }
        }else if(ability.indexOf("戦士の心得")>-1){
            if(ability == "戦士の心得G4"){
                AbilityList += "攻击力+38 防御力+60<br>"
            }
        }else if(ability.indexOf("キドニーブロー")>-1){
            if(ability == "キドニーブローG1"){
                AbilityList += "背后攻击时会心力+18<br>"
            }
        }else if(ability.indexOf("暗殺術")>-1){
            if(ability == "暗殺術G1"){
                AbilityList += "背后攻击时会心率+40%<br>"
            }
        }else if(ability.indexOf("サドンアタック")>-1){
            if(ability == "サドンアタックG1"){
                AbilityList += "背后攻击时伤害提高+6%<br>"
            }
        }else if(ability.indexOf("溢れる力")>-1){
            if(ability == "溢れる力G1"){
                AbilityList += "满血时会心力+6<br>"
            }
        }else if(ability.indexOf("窮鼠")>-1){
            if(ability == "窮鼠G1"){
                AbilityList += "生命值低于30%时,攻击力+20<br>"
            }else if(ability == "窮鼠G3"){
                AbilityList += "生命值低于30%时,攻击力+100<br>"
            }
        }else if(ability.indexOf("背水の陣")>-1){
            if(ability == "背水の陣G1"){
                AbilityList += "生命值低于30%时,会心力+18<br>"
            }else if(ability == "背水の陣G2"){
                AbilityList += "生命值低于30%时,会心力+27<br>"
            }
        }else if(ability.indexOf("ランディング")>-1){
            if(ability == "ランディングG1"){
                AbilityList += "强袭(下落)攻击后,受到伤害降低14%(20秒)<br>"
            }
        }else if(ability.indexOf("安全確保")>-1){
            if(ability == "安全確保G2"){
                AbilityList += "救援成功后,受到伤害降低9%<br>"
            }
        }else if(ability.indexOf("応急処置")>-1){
            if(ability == "応急処置G3"){
                AbilityList += "救援成功后,回复600生命值<br>"
            }
        }else if(ability.indexOf("緊急障壁")>-1){
            if(ability == "緊急障壁G1"){
                AbilityList += "救援时,获得霸体效果<br>"
            }
        }else if(ability.indexOf("強撃:通常攻撃")>-1){
            if(ability == "強撃:通常攻撃G1"){
                AbilityList += "普通攻击造成伤害+7%<br>"
            }else if(ability == "強撃:通常攻撃G3"){
                AbilityList += "普通攻击造成伤害+11%<br>"
            }
        }else if(ability.indexOf("強撃:遠隔攻撃")>-1){
            if(ability == "強撃:遠隔攻撃G1"){
                AbilityList += "远程攻击造成的伤害提高5%<br>"
            }else if(ability == "強撃:遠隔攻撃G3"){
                AbilityList += "远程攻击造成的伤害提高7%<br>"
            }
        }else if(ability.indexOf("強撃:全攻撃")>-1){
            if(ability == "強撃:全攻撃G1"){
                AbilityList += "全攻击造成的伤害提高4%<br>"
            }else if(ability == "強撃:全攻撃G3"){
                AbilityList += "全攻击造成的伤害提高6%<br>"
            }
        }else if(ability.indexOf("強撃:Rスキル")>-1){
            if(ability == "強撃:RスキルG3"){
                AbilityList += "职业动作(右键)造成的伤害提高11%<br>"
            }
        }else if(ability.indexOf("強撃:Bイマジン")>-1){
            if(ability == "強撃:BイマジンG1"){
                AbilityList += "战斗幻想造成的伤害提高6%<br>"
            }
        }else if(ability.indexOf("強撃:近接攻撃")>-1){
            if(ability == "強撃:近接攻撃G1"){
                AbilityList += "近战攻击造成的伤害提高5%<br>"
            }else if(ability == "強撃:近接攻撃G2"){
                AbilityList += "近战攻击造成的伤害提高6%<br>"
            }else if(ability == "強撃:近接攻撃G3"){
                AbilityList += "近战攻击造成的伤害提高7%<br>"
            }
        }else if(ability.indexOf("アサルトダイブ")>-1){
            if(ability == "アサルトダイブG1"){
                AbilityList += "强袭(下落)攻击后,造成的伤害提高4%(20秒)<br>"
            }else if(ability == "アサルトダイブG3"){
                AbilityList += "强袭(下落)攻击后,造成的伤害提高6%(20秒)<br>"
            }
        }else if(ability.indexOf("スキルブースト:Tスキル")>-1){
            if(ability == "スキルブースト:TスキルG1"){
                AbilityList += "技能造成的伤害提高5%<br>"
            }else if(ability == "スキルブースト:TスキルG3"){
                AbilityList += "技能造成的伤害提高7%<br>"
            }
        }else if(ability.indexOf("ジャストカウンター")>-1){
            if(ability == "ジャストカウンターG1"){
                AbilityList += "完美回避攻击造成的伤害提高6%<br>"
            }else if(ability == "ジャストカウンターG3"){
                AbilityList += "完美回避攻击造成的伤害提高10%<br>"
            }
        }else if(ability.indexOf("反撃")>-1){
            if(ability == "反撃G1"){
                AbilityList += "受身(倒地时快速起身)成功后,造成的伤害提高(?)<br>"
            }
        }else if(ability.indexOf("ハードパンチャー")>-1){
            if(ability == "ハードパンチャーG2"){
                AbilityList += "眩晕成功率提高50%<br>"
            }
        }else if(ability.indexOf("睡魔")>-1){
            if(ability == "睡魔G2"){
                AbilityList += "睡眠成功率提高50%<br>"
            }
        }else if(ability.indexOf("ヘイトダウン")>-1){
            if(ability == "ヘイトダウンG2"){
                AbilityList += "受到仇恨降低10%<br>"
            }
        }else if(ability.indexOf("ヘイトブースト")>-1){
            if(ability == "ヘイトブーストG2"){
                AbilityList += "受到仇恨提高10%<br>"
            }
        }else if(ability.indexOf("スタミナセーブ:全")>-1){
            if(ability == "スタミナセーブ:全G1"){
                AbilityList += "体力消耗降低3%<br>"
            }
        }else if(ability.indexOf("スタミナセーブ:走")>-1){
            if(ability == "スタミナセーブ:走G1"){
                AbilityList += "奔跑消耗体力降低4%<br>"
            }
        }else if(ability.indexOf("スタミナセーブ:跳")>-1){
            if(ability == "スタミナセーブ:跳G1"){
                AbilityList += "跳跃消耗体力降低10%<br>"
            }
        }else if(ability.indexOf("スタミナセーブ:避")>-1){
            if(ability == "スタミナセーブ:避G1"){
                AbilityList += "闪避消耗体力降低10%<br>"
            }
        }else if(ability.indexOf("短縮:クラスA")>-1){
            if(ability == "短縮:クラスAG1"){
                AbilityList += "职业动作(右键)的冷却速度提高6%<br>"
            }
        }else if(ability.indexOf("短縮:ULT")>-1){
            if(ability == "短縮:ULTG1"){
                AbilityList += "绝招的冷却速度提高4%<br>"
            }
        }else if(ability.indexOf("短縮:Bイマジン")>-1){
            if(ability == "短縮:BイマジンG1"){
                AbilityList += "战斗幻想的冷却速度提高6%<br>"
            }else if(ability == "短縮:BイマジンG2"){
                AbilityList += "战斗幻想的冷却速度提高11%<br>"
            }
        }else if(ability.indexOf("アンチスタン")>-1){
            if(ability == "アンチスタンG3"){
                AbilityList += "眩晕耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチパライズ")>-1){
            if(ability == "アンチパライズG3"){
                AbilityList += "麻痹耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチポイズン")>-1){
            if(ability == "アンチポイズンG3"){
                AbilityList += "中毒耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチブラインド")>-1){
            if(ability == "アンチブラインドG3"){
                AbilityList += "致盲耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチスキルロック")>-1){
            if(ability == "アンチスキルロックG3"){
                AbilityList += "沉默耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチバインド")>-1){
            if(ability == "アンチバインドG3"){
                AbilityList += "拘束耐性+100%<br>"
            }
        }else if(ability.indexOf("アンチスタミナアウト")>-1){
            if(ability == "アンチスタミナアウトG3"){
                AbilityList += "疲劳耐性+100%<br>"
            }
        }else if(ability.indexOf("耐火の心得")>-1){
            if(ability == "耐火の心得G3"){
                AbilityList += "火属性耐性+10<br>"
            }
        }else if(ability.indexOf("耐氷の心得")>-1){
            if(ability == "耐氷の心得G3"){
                AbilityList += "冰属性耐性+10<br>"
            }
        }else if(ability.indexOf("耐雷の心得")>-1){
            if(ability == "耐雷の心得G3"){
                AbilityList += "雷属性耐性+10<br>"
            }
        }else if(ability.indexOf("耐土の心得")>-1){
            if(ability == "耐土の心得G3"){
                AbilityList += "土属性耐性+10<br>"
            }
        }else if(ability.indexOf("耐光の心得")>-1){
            if(ability == "耐光の心得G3"){
                AbilityList += "光属性耐性+10<br>"
            }
        }else if(ability.indexOf("耐闇の心得")>-1){
            if(ability == "耐闇の心得G3"){
                AbilityList += "暗属性耐性+10<br>"
            }
        }else if(ability.indexOf("防御の極意:全攻撃")>-1){
            if(ability == "防御の極意:全攻撃G1"){
                AbilityList += "受到的全攻击 伤害降低5%<br>"
            }
        }else if(ability.indexOf("防御の極意:近接攻撃")>-1){
            if(ability == "防御の極意:近接攻撃G1"){
                AbilityList += "受到的近战攻击伤害降低5%<br>"
            }
        }else if(ability.indexOf("防御の極意:遠隔攻撃")>-1){
            if(ability == "防御の極意:遠隔攻撃G1"){
                AbilityList += "受到的远程攻击伤害降低5%<br>"
            }
        }else if(ability.indexOf("防御の極意:火属性攻撃")>-1){
            if(ability == "防御の極意:火属性攻撃G1"){
                AbilityList += "受到的火属性伤害降低8%<br>"
            }
        }else if(ability.indexOf("防御の極意:氷属性攻撃")>-1){
            if(ability == "防御の極意:氷属性攻撃G1"){
                AbilityList += "受到的冰属性伤害降低8%<br>"
            }
        }else if(ability.indexOf("防御の極意:雷属性攻撃")>-1){
            if(ability == "防御の極意:雷属性攻撃G1"){
                AbilityList += "受到的雷属性伤害降低8%<br>"
            }
        }else if(ability.indexOf("防御の極意:土属性攻撃")>-1){
            if(ability == "防御の極意:土属性攻撃G1"){
                AbilityList += "受到的土属性伤害降低8%<br>"
            }
        }else if(ability.indexOf("防御の極意:光属性攻撃")>-1){
            if(ability == "防御の極意:光属性攻撃G1"){
                AbilityList += "受到的光属性伤害降低8%<br>"
            }
        }else if(ability.indexOf("防御の極意:闇属性攻撃")>-1){
            if(ability == "防御の極意:闇属性攻撃G1"){
                AbilityList += "受到的闇属性伤害降低8%<br>"
            }
        }
    }
    return(AbilityList)
}


function drawImagineInfoWindow(thingArray){
    var Finalattr = [thingArray.attr[1],thingArray.attr[2],thingArray.attr[3],thingArray.attr[4],thingArray.attr[5],thingArray.attr[6],thingArray.attr[7],0,0]
    var Finalattrmax = [thingArray.max[0],thingArray.max[1],thingArray.max[2],thingArray.max[3],thingArray.max[4],thingArray.max[5],thingArray.max[6],0,0]
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
                    <td style="font-size: 14px;" id="Finalatk">${thingArray.attr[1]}</td>
                    <td style="font-size: 14px;" id="Finaldef">${thingArray.attr[2]}</td>
                    <td style="font-size: 14px;" id="Finalhea"></td>
                    <td style="font-size: 14px;" id="Finalhp"></td>
                    <td style="font-size: 14px;" id="Finalj">${thingArray.attr[3]}</td>
                    <td style="font-size: 14px;" id="Finaln">${thingArray.attr[4]}</td>
                    <td style="font-size: 14px;" id="Finalq">${thingArray.attr[5]}</td>
                    <td style="font-size: 14px;" id="Finalz">${thingArray.attr[6]}</td>
                    <td style="font-size: 14px;" id="Finals">${thingArray.attr[7]}</td>
                </tr>`
        if(thingArray.max != false){
            windowHtml += `<tr>
                    <td style="font-size: 14px;" id="mFinalatk">${thingArray.max[0]}</td>
                    <td style="font-size: 14px;" id="mFinaldef">${thingArray.max[1]}</td>
                    <td style="font-size: 14px;" id="mFinalhea"></td>
                    <td style="font-size: 14px;" id="mFinalhp"></td>
                    <td style="font-size: 14px;" id="mFinalj">${thingArray.max[2]}</td>
                    <td style="font-size: 14px;" id="mFinaln">${thingArray.max[3]}</td>
                    <td style="font-size: 14px;" id="mFinalq">${thingArray.max[4]}</td>
                    <td style="font-size: 14px;" id="mFinalz">${thingArray.max[5]}</td>
                    <td style="font-size: 14px;" id="mFinals">${thingArray.max[6]}</td>
                </tr>`
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
        if($('#ImagineAbility').children().length > 0){
        var firstAbility = $('#ImagineAbility').children("span").get(0).innerText
        var sumed = sumattr(firstAbility,Finalattr)
        var sumedmax = sumattr(firstAbility,Finalattrmax)

        $('#ImagineAbility').children("span").get(0).style.backgroundColor='rgb(55, 194, 192)'
        $('#ImagineAbility').children("span").get(0).style.color='rgb(38, 41, 46)'
        $('#ImagineAbility').children("span").get(0).style.borderColor='rgb(55, 194, 192, 0)'
        $('#ImagineAbility span').not("span:first").css('background-color','rgb(55, 194, 192, 0)')
        $('#ImagineAbility span').not("span:first").css('color','rgb(55, 194, 192)')
        $('#ImagineAbility span').not("span:first").css('border-color','rgb(55, 194, 192)')
        $('#Finalatk').text((sumed[0]+sumed[2]*0.6+sumed[4]*0.4).toFixed(1)+"/"+(sumed[0]+sumed[5]*0.6+sumed[6]*0.4).toFixed(1))
        $('#Finaldef').text((sumed[1]+sumed[2]*0.4+sumed[3]*0.6).toFixed(1))
        $('#Finalhea').text((sumed[8]+sumed[5]*0.4+sumed[6]*0.4).toFixed(1))
        $('#Finalhp').text((sumed[7]+sumed[3]*0.6).toFixed(1))
        if(parseInt(thingArray.attr[3]) != sumed[2]){
            $('#Finalj').text(sumed[2]+'(+'+(sumed[2]-parseInt(thingArray.attr[3]))+')')
        }
        if(parseInt(thingArray.attr[4]) != sumed[3]){
            $('#Finaln').text(sumed[3]+'(+'+(sumed[3]-parseInt(thingArray.attr[4]))+')')
        }
        if(parseInt(thingArray.attr[5]) != sumed[4]){
            $('#Finalq').text(sumed[4]+'(+'+(sumed[4]-parseInt(thingArray.attr[5]))+')')
        }
        if(parseInt(thingArray.attr[6]) != sumed[5]){
            $('#Finalz').text(sumed[5]+'(+'+(sumed[5]-parseInt(thingArray.attr[6]))+')')
        }
        if(parseInt(thingArray.attr[7]) != sumed[6]){
            $('#Finals').text(sumed[6]+'(+'+(sumed[6]-parseInt(thingArray.attr[7]))+')')
        }
        if(thingArray.max != false){
            $('#mFinalatk').text((sumedmax[0]+sumedmax[2]*0.6+sumedmax[4]*0.4).toFixed(1)+"/"+(sumedmax[0]+sumedmax[5]*0.6+sumedmax[6]*0.4).toFixed(1))
            $('#mFinaldef').text((sumedmax[1]+sumedmax[2]*0.4+sumedmax[3]*0.6).toFixed(1))
            $('#mFinalhea').text((sumedmax[8]+sumedmax[5]*0.4+sumedmax[6]*0.4).toFixed(1))
            $('#mFinalhp').text((sumedmax[7]+sumedmax[3]*0.6).toFixed(1))
            if(parseInt(thingArray.max[2]) != sumedmax[2]){
                $('#mFinalj').text(sumedmax[2]+'(+'+(sumedmax[2]-parseInt(thingArray.max[2]))+')')
            }
            if(parseInt(thingArray.max[3]) != sumedmax[3]){
                $('#mFinaln').text(sumedmax[3]+'(+'+(sumedmax[3]-parseInt(thingArray.max[3]))+')')
            }
            if(parseInt(thingArray.max[4]) != sumedmax[4]){
                $('#mFinalq').text(sumedmax[4]+'(+'+(sumedmax[4]-parseInt(thingArray.max[4]))+')')
            }
            if(parseInt(thingArray.max[5]) != sumedmax[5]){
                $('#mFinalz').text(sumedmax[5]+'(+'+(sumedmax[5]-parseInt(thingArray.max[5]))+')')
            }
            if(parseInt(thingArray.max[6]) != sumedmax[6]){
                $('#mFinals').text(sumedmax[6]+'(+'+(sumedmax[6]-parseInt(thingArray.max[6]))+')')
            }
        }
    }

    $('#ImagineAbility span').click(function(){
        $('#ImagineAbility span').css('background-color','rgb(55, 194, 192, 0)')
        $('#ImagineAbility span').css('color','rgb(55, 194, 192)')
        $('#ImagineAbility span').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        var Finalattr = [thingArray.attr[1],thingArray.attr[2],thingArray.attr[3],thingArray.attr[4],thingArray.attr[5],thingArray.attr[6],thingArray.attr[7],0,0]
        var Finalattrmax = [thingArray.max[0],thingArray.max[1],thingArray.max[2],thingArray.max[3],thingArray.max[4],thingArray.max[5],thingArray.max[6],0,0]
        var NowAbility = this.innerText
        var sumed = sumattr(NowAbility,Finalattr)
        var sumedmax = sumattr(NowAbility,Finalattrmax)
        
        $('#Finalatk').text((sumed[0]+sumed[2]*0.6+sumed[4]*0.4).toFixed(1)+"/"+(sumed[0]+sumed[5]*0.6+sumed[6]*0.4).toFixed(1))
        $('#Finaldef').text((sumed[1]+sumed[2]*0.4+sumed[3]*0.6).toFixed(1))
        $('#Finalhea').text((sumed[8]+sumed[5]*0.4+sumed[6]*0.4).toFixed(1))
        $('#Finalhp').text((sumed[7]+sumed[3]*0.6).toFixed(1))
        if(parseInt(thingArray.attr[3]) != sumed[2]){
            $('#Finalj').text(sumed[2]+'(+'+(sumed[2]-parseInt(thingArray.attr[3]))+')')
        } else {$('#Finalj').text(sumed[2])}
        if(parseInt(thingArray.attr[4]) != sumed[3]){
            $('#Finaln').text(sumed[3]+'(+'+(sumed[3]-parseInt(thingArray.attr[4]))+')')
        } else {$('#Finaln').text(sumed[3])}
        if(parseInt(thingArray.attr[5]) != sumed[4]){
            $('#Finalq').text(sumed[4]+'(+'+(sumed[4]-parseInt(thingArray.attr[5]))+')')
        } else {$('#Finalq').text(sumed[4])}
        if(parseInt(thingArray.attr[6]) != sumed[5]){
            $('#Finalz').text(sumed[5]+'(+'+(sumed[5]-parseInt(thingArray.attr[6]))+')')
        } else {$('#Finalz').text(sumed[5])}
        if(parseInt(thingArray.attr[7]) != sumed[6]){
            $('#Finals').text(sumed[6]+'(+'+(sumed[6]-parseInt(thingArray.attr[7]))+')')
        } else {$('#Finals').text(sumed[6])}
        if(thingArray.max != false){
            $('#mFinalatk').text((sumedmax[0]+sumedmax[2]*0.6+sumedmax[4]*0.4).toFixed(1)+"/"+(sumedmax[0]+sumedmax[5]*0.6+sumedmax[6]*0.4).toFixed(1))
            $('#mFinaldef').text((sumedmax[1]+sumedmax[2]*0.4+sumedmax[3]*0.6).toFixed(1))
            $('#mFinalhea').text((sumedmax[8]+sumedmax[5]*0.4+sumedmax[6]*0.4).toFixed(1))
            $('#mFinalhp').text((sumedmax[7]+sumedmax[3]*0.6).toFixed(1))
            if(parseInt(thingArray.max[2]) != sumedmax[2]){
                $('#mFinalj').text(sumedmax[2]+'(+'+(sumedmax[2]-parseInt(thingArray.max[2]))+')')
            } else {$('#mFinalj').text(sumedmax[2])}
            if(parseInt(thingArray.max[3]) != sumedmax[3]){
                $('#mFinaln').text(sumedmax[3]+'(+'+(sumedmax[3]-parseInt(thingArray.max[3]))+')')
            } else {$('#mFinaln').text(sumedmax[3])}
            if(parseInt(thingArray.max[4]) != sumedmax[4]){
                $('#mFinalq').text(sumedmax[4]+'(+'+(sumedmax[4]-parseInt(thingArray.max[4]))+')')
            } else {$('#mFinalq').text(sumedmax[4])}
            if(parseInt(thingArray.max[5]) != sumedmax[5]){
                $('#mFinalz').text(sumedmax[5]+'(+'+(sumedmax[5]-parseInt(thingArray.max[5]))+')')
            } else {$('#mFinalz').text(sumedmax[5])}
            if(parseInt(thingArray.max[6]) != sumedmax[6]){
                $('#mFinals').text(sumedmax[6]+'(+'+(sumedmax[6]-parseInt(thingArray.max[6]))+')')
            } else {$('#mFinals').text(sumedmax[6])}
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

function getLastAxD(attr,maxattr,ability,type){
    var Patk = ["勇猛G3","戦士の心得G4","勇猛G2","獅子奮迅G3","剛力G4","エキスパートG4","巧妙G4","剛力G3","エキスパートG3","タフネスG4","トランスG4","インスピレーションG4","勇猛G1","巧妙G3","剛力G2","タフネスG3","トランスG3","インスピレーションG3","気功G4","ウィズダムG4","エキスパートG2","巧妙G2","気功G3","ウィズダムG3","タフネスG2","トランスG2","インスピレーションG2","剛力G1","エキスパートG1","気功G2","ウィズダムG2","巧妙G1","タフネスG1","トランスG1","インスピレーションG1","気功G1","ウィズダムG1"]
    var Matk = ["勇猛G3","戦士の心得G4","勇猛G2","獅子奮迅G3","博識G4","シックスセンスG4","集中G4","博識G3","シックスセンスG3","ウィズダムG4","トランスG4","ストラテジストG4","勇猛G1","集中G3","博識G2","ウィズダムG3","トランスG3","ストラテジストG3","インスピレーションG4","屈強な心身G4","シックスセンスG2","集中G2","インスピレーションG3","屈強な心身G3","ウィズダムG2","トランスG2","ストラテジストG2","博識G1","シックスセンスG1","インスピレーションG2","屈強な心身G2","集中G1","ウィズダムG1","トランスG1","ストラテジストG1","インスピレーションG1","屈強な心身G1"]
    var def = ["不屈G4","不屈G3","戦士の心得G4","不屈G2","守護者G3","忍耐力G4","タフネスG4","剛力G4","不屈G1","忍耐力G3","タフネスG3","気功G4","ストラテジストG4","屈強な心身G4","剛力G3","忍耐力G2","気功G3","ストラテジストG3","屈強な心身G3","エキスパートG4","トランスG4","インスピレーションG4","タフネスG2","剛力G2","エキスパートG3","トランスG3","インスピレーションG3","気功G2","ストラテジストG2","屈強な心身G2","忍耐力G1","タフネスG1","エキスパートG2","トランスG2","インスピレーションG2","剛力G1","気功G1","ストラテジストG1","屈強な心身G1","エキスパートG1","トランスG1","インスピレーションG1"]
    var Aatk = [50,38,25,25,22.8,19,15.2,15,13,11.4,11.4,11.4,10,10,7.8,7.8,7.8,7.6,7.6,7,5.2,5.2,5.2,5.2,4.2,4.2,4.2,3,3,2.8,2.8,2,1.8,1.8,1.8,1.2,1.2]
    var Ddef = [120,70,60,40,35,22.8,19,15.2,15,15,13,11.4,11.4,11.4,10,7.8,7.8,7.8,7.8,7.6,7.6,7.6,7,5.2,5.2,5.2,5.2,4.2,4.2,4.2,3,3,2.8,2.8,2.8,2,1.8,1.8,1.8,1.2,1.2,1.2]
    var wuli = 0
    var maho = 0
    var sdef = 0
    var Awpoint = 0
    var Ampoint = 0
    var Dpoint = 0
    var abili = ability.split("<br>")
    var bak = 0
    if(type == 0){
        for(var i = 0;i<abili.length;i++){
            Awpoint = Patk.indexOf(abili[i])
            if(Awpoint != -1 && Aatk[Awpoint] > wuli){
                wuli = Aatk[Awpoint]
                bak = abili[i]
            }
        }
        if(wuli != 0){
            Ampoint = Matk.indexOf(bak)
            if(Ampoint != -1){
                maho = Aatk[Ampoint-1]
            }
            Dpoint = def.indexOf(bak)
            if(Dpoint != -1 ){
                sdef = Ddef[Dpoint-1]
            }
        } else {
            wuli = 0
            maho = 0
            sdef = 0
        }
    } else if(type == 1){
        for(var i = 0;i<abili.length;i++){
            Ampoint = Matk.indexOf(abili[i])
            if(Ampoint != -1 && Aatk[Ampoint] > maho){
                maho = Aatk[Ampoint]
                bak = abili[i]
            }
        }
        if(maho != 0){
            Awpoint = Patk.indexOf(bak)
            if(Awpoint != -1){
                wuli = Aatk[Awpoint-1]
                
            }
            Dpoint = def.indexOf(bak)
            if(Dpoint != -1 ){
                sdef = Ddef[Dpoint-1]
            }
        } else {
            wuli = 0
            maho = 0
            sdef = 0
        }
    } else if(type ==2){
        for(var i = 0;i<abili.length;i++){
            Dpoint = def.indexOf(abili[i])
            if(Dpoint != -1 && Ddef[Dpoint] > sdef){
                sdef = Ddef[Dpoint]
                bak = abili[i]
            }
        }
        if(sdef != 0){
            Awpoint = Patk.indexOf(bak)
            if(Awpoint != -1){
                wuli = Aatk[Awpoint]

            }
            Ampoint = Matk.indexOf(bak)
            if(Ampoint != -1 ){
                maho = Aatk[Ampoint]
            }
        } else {
            wuli = 0
            maho = 0
            sdef = 0
        }
    }
    if(maxattr != false){
        wuli = (wuli + maxattr[0] + maxattr[2]*0.6 + maxattr[4]*0.4).toFixed(1)
        maho = (maho + maxattr[0] + maxattr[5]*0.6 + maxattr[6]*0.4).toFixed(1)
        sdef = (sdef + maxattr[1] + maxattr[2]*0.4 + maxattr[3]*0.6).toFixed(1)
    } else {
        wuli = (wuli + attr[1] + attr[3]*0.6 + attr[5]*0.4).toFixed(1)
        maho = (maho + attr[1] + attr[6]*0.6 + attr[7]*0.4).toFixed(1)
        sdef = (sdef + attr[2] + attr[3]*0.4 + attr[4]*0.6).toFixed(1)
    }
    var attrlist = [wuli,maho,sdef]
    return attrlist
}