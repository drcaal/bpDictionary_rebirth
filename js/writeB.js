
var BBox = '全部'
var BElement = '全部'
// writeB()
function writeB(){
    document.getElementsByClassName('window')[0].style.paddingTop = '85px'
    nowPage = 1
    clearInterval(interevalPic)

    document.getElementsByClassName('floatBox')[0].innerHTML = ``
    BBox = '全部'
    BElement = '全部'
    BLevel = 0
    var B_htmlStr = `
    <p class="windowTitle">| B - 战斗幻想</p>
<p class="Topword">战斗幻想具有三类功能及七类属性。单击列名可进行升、降序排列。单击幻想图标可查看其制作材料及获取途径。 <span style="color:red;">单击类型</span>可查看幻想计算词条后最终属性。<br>名称前标注有 * 号的为活动限定幻想。</p>

<div class="BchoiseBox">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>攻击型</div>
    <div>回复型</div>
    <div>辅助型</div>
</div>
<!--
<div class="BLchoiseBox">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">+0</div>
    <div>+5</div>
</div>
//-->
<div class="BchoiseBoxElement">
    <div style="background-color: rgb(55, 194, 192); color: rgb(38, 41, 46); border-color: rgb(55, 194, 192, 0);">全部</div>
    <div>冰</div>
    <div>雷</div>
    <div>光</div>
    <div>暗</div>
    <div>火</div>
    <div>土</div>
    <div>无</div>
    <p class="B_E_searchNum">全部类型 全部属性 共有 null 条数据</p>
</div>
<table>
    <tbody class='monster_list'>
        <tr>
            <th width="9%">图标</th>
            <th width="19%">名称</th>
            <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
            <th width="3%">属性</th>
            <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">攻击</th>
            <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
            <th width="24%">词缀</th>
            <th width="28%">技能</th>
            <th width="3%" onclick="rewrite(14)" style="cursor: pointer;">冷却</th>
            <th width="7%">类型</th>
        </tr>`
    
    B_value.forEach((B_every, index)=>{
        // <td style="font-size: 13px; padding: 0 5px;" class="ImagineData" bak="${B_every.endexp}">${B_every.end}</td>
        var abli = sumend(B_every.end,B_every.type)
        B_htmlStr += `<tr>
        <td style="font-size: 12px;" id="Btable"><img src="./img/icon/b/${B_every.pid}.png" alt="${B_every.pid}" title="${index}"></td>
        <td style="font-size: 14px; padding: 0 5px;">${B_every.name}</td>
        <td>${B_every.attr[0]}</td>
        <td style="font-size: 13px;">${B_every.element}</td>
        <td>${B_every.attr[1]}</td>
        <td>${B_every.attr[2]}</td>
        <td style="font-size: 13px; padding: 0 5px;" class="ImagineData" bak="${abli}">${B_every.end}</td>
        <td style="font-size: 13px; padding: 8px 5px;">${B_every.skill}</td>
        <td style="font-size: 13px;">${B_every.cd}</td>
        <td style="font-size: 13px;" class="ImagineInfo" title="${index}">${B_every.kind}</td>
    </tr>`
    })
    
    B_htmlStr += `<tr>
    <th width="9%">图标</th>
    <th width="19%">名称</th>
    <th width="3%" onclick="rewrite(2)" style="cursor: pointer;">等级</th>
    <th width="3%">属性</th>
    <th width="3%" onclick="rewrite(4)" style="cursor: pointer;">攻击</th>
    <th width="3%" onclick="rewrite(5)" style="cursor: pointer;">防御</th>
    <th width="24%">词缀</th>
    <th width="28%">技能</th>
    <th width="3%" onclick="rewrite(14)" style="cursor: pointer;">冷却</th>
    <th width="7%">类型</th>
</tr></tbody>
    </table>${buttomTag}`
    
    document.getElementsByClassName('window')[0].innerHTML = B_htmlStr

    let table = document.getElementsByTagName('table')[0];

    document.getElementsByClassName('B_E_searchNum')[0].innerText = `全部类型 全部属性 共有 ${table.rows.length-2} 条数据`
    // 遍历表格的每一行，设置目标列的颜色
    for (var i = 1; i < table.rows.length-1; i++) {
        table.rows[i].cells[2].style.backgroundColor = '#43434360';
        table.rows[i].cells[3].style.backgroundColor = '#43434360';
        table.rows[i].cells[4].style.backgroundColor = '#35353533';
        table.rows[i].cells[5].style.backgroundColor = '#35353533';
        table.rows[i].cells[4].setAttribute('title', '攻击力');
        table.rows[i].cells[5].setAttribute('title', '防御力');
    }

    
    $('.BchoiseBox div').click(function(){
        $('.BchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBox div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBox div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        BBox = this.innerText
        choiseBKind(BBox, BElement)
    })
    $('.BLchoiseBox div').click(function(){
        if(this.style.backgroundColor != 'rgb(55, 194, 192)'){
            $('.BLchoiseBox div').css('background-color','rgb(55, 194, 192, 0)')
            $('.BLchoiseBox div').css('color','rgb(55, 194, 192)')
            $('.BLchoiseBox div').css('border-color','rgb(55, 194, 192)')
            this.style.backgroundColor='rgb(55, 194, 192)'
            this.style.color='rgb(38, 41, 46)'
            this.style.borderColor='rgb(55, 194, 192, 0)'
            if(BLevel == 0){
                B_value.forEach((B_every, index)=>{
                    if(B_every.max.length == 7){
                    var atk_bak = parseInt(B_every.attr[1])
                    var def_bak = parseInt(B_every.attr[2])
                    var j_bak = parseInt(B_every.attr[3])
                    var n_bak = parseInt(B_every.attr[4])
                    var q_bak = parseInt(B_every.attr[5])
                    var z_bak = parseInt(B_every.attr[6])
                    var s_bak = parseInt(B_every.attr[7])
                    B_every.attr[1] = B_every.max[0]
                    B_every.attr[2] = B_every.max[1]
                    B_every.attr[3] = B_every.max[2]
                    B_every.attr[4] = B_every.max[3]
                    B_every.attr[5] = B_every.max[4]
                    B_every.attr[6] = B_every.max[5]
                    B_every.attr[7] = B_every.max[6]

                    B_every.max[0] = atk_bak
                    B_every.max[1] = def_bak
                    B_every.max[2] = j_bak
                    B_every.max[3] = n_bak
                    B_every.max[4] = q_bak
                    B_every.max[5] = z_bak
                    B_every.max[6] = s_bak
                    }
                })
                BLevel = 5
            }
            else{
                B_value.forEach((B_every, index)=>{
                    if(B_every.max.length == 7){
                    var atk_bak = parseInt(B_every.attr[1])
                    var def_bak = parseInt(B_every.attr[2])
                    var j_bak = parseInt(B_every.attr[3])
                    var n_bak = parseInt(B_every.attr[4])
                    var q_bak = parseInt(B_every.attr[5])
                    var z_bak = parseInt(B_every.attr[6])
                    var s_bak = parseInt(B_every.attr[7])
                    B_every.attr[1] = B_every.max[0]
                    B_every.attr[2] = B_every.max[1]
                    B_every.attr[3] = B_every.max[2]
                    B_every.attr[4] = B_every.max[3]
                    B_every.attr[5] = B_every.max[4]
                    B_every.attr[6] = B_every.max[5]
                    B_every.attr[7] = B_every.max[6]
                    B_every.max[0] = atk_bak
                    B_every.max[1] = def_bak
                    B_every.max[2] = j_bak
                    B_every.max[3] = n_bak
                    B_every.max[4] = q_bak
                    B_every.max[5] = z_bak
                    B_every.max[6] = s_bak
                    }
                })
                BLevel = 0
            }
            choiseBKind(BBox, BElement)
        }
    })
    $('.BchoiseBoxElement div').click(function(){
        $('.BchoiseBoxElement div').css('background-color','rgb(55, 194, 192, 0)')
        $('.BchoiseBoxElement div').css('color','rgb(55, 194, 192)')
        $('.BchoiseBoxElement div').css('border-color','rgb(55, 194, 192)')
        this.style.backgroundColor='rgb(55, 194, 192)'
        this.style.color='rgb(38, 41, 46)'
        this.style.borderColor='rgb(55, 194, 192, 0)'
        BElement = this.innerText
        choiseBKind(BBox, BElement)
    })
    $('#Btable img').click(function(){
        drawMakeThingWindow(B_value[this.title])
    })
    $('.ImagineInfo').click(function(){
        drawImagineInfoWindow(B_value[this.title])
    })
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