
function choiseBKind(BBox, BElement){
    var table = document.getElementsByTagName('table')[0];
    var rows = table.getElementsByTagName('tr');
    var Bnum = 0
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        for (let i = 1; i < rows.length-1; i++) {
            var row = rows[i];
            var category1 = row.getElementsByTagName('td')[15].innerText+'型';
            var category2 = row.getElementsByTagName('td')[3].innerText;
            var Gpid = row.getElementsByTagName('td')[0].getElementsByTagName('img')[0].getAttribute("alt")
            var all = row.getElementsByTagName('td')
            var data = B_value.filter(function(value){
                return value.pid === Gpid
            })
            all[4].innerText = data[0]['atk']
            all[5].innerText = data[0]['def']
            all[6].innerText = data[0]['j']
            all[7].innerText = data[0]['n']
            all[8].innerText = data[0]['q']
            all[9].innerText = data[0]['z']
            all[10].innerText = data[0]['s']
    
            if ((BBox == category1||BBox == '全部')&&(BElement == category2||BElement == '全部')) {
                row.style.display = ''; 
                Bnum+=1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${BBox}类型 ${BElement}属性 共有 ${Bnum} 条数据`

    // }
}

// function choiseBElement(choiseKind){
//     let table = document.getElementsByTagName('table')[0];
//     let rows = table.getElementsByTagName('tr');
    
    // if(isShow == 0){
    //     for (let i = 1; i < rows.length; i++) {
    //         const row = rows[i];
    //         const category = row.getElementsByTagName('td')[11].innerText;
    //         if (category == choiseKind) {
    //           row.style.display = 'none'; 
    //         }
    //       }
    // }else{
        // for (let i = 1; i < rows.length; i++) {
        //     const row = rows[i];
        //     const category = row.getElementsByTagName('td')[3].innerText;
        //     if (category == choiseKind) {
        //         row.style.display = ''; 
        //     }else if(choiseKind == '全部'){
        //         row.style.display = ''; 
        //     }else{
        //         row.style.display = 'none'; 
        //     }
        //   }
    // }
// }