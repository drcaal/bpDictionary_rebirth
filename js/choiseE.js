function choiseE(choiseKind){
    var tableE = document.getElementsByTagName('table')[0];
    var rowsE = tableE.getElementsByTagName('tr');
    var Enum = 0
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

            var Gpid = row.getElementsByTagName('td')[0].getElementsByTagName('img')[0].getAttribute("alt")
            var all = row.getElementsByTagName('td')
            var data = E_value.filter(function(value){
                return value.pid === Gpid
            })
            all[3].innerHTML = data[0]['attr'][8]
            all[4].innerHTML = data[0]['attr'][9]
            all[5].innerHTML = data[0]['attr'][10]

            if (category == choiseKind) {
                row.style.display = ''; 
                Enum += 1
            }else{
                row.style.display = 'none'; 
            }
          }
          document.getElementsByClassName('B_E_searchNum')[0].innerText = `${choiseKind}幻想有 ${Enum} 条数据`
    // }
}

