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
            var category = row.getElementsByTagName('td')[12].innerText;

            var Gpid = row.getElementsByTagName('td')[0].getElementsByTagName('img')[0].getAttribute("alt")
            var all = row.getElementsByTagName('td')
            var data = E_value.filter(function(value){
                return value.pid === Gpid
            })
            all[3].innerText = data[0]['atk']
            all[4].innerText = data[0]['def']
            all[5].innerText = data[0]['j']
            all[6].innerText = data[0]['n']
            all[7].innerText = data[0]['q']
            all[8].innerText = data[0]['z']
            all[9].innerText = data[0]['s']

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

