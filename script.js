
var pageWrapper=document.getElementById("pagination");
var tableBody= document.getElementById("body");



const getData=(pageValue)=>{
    var url=`https://swapi.dev/api/people/?page=${pageValue}`
    fetch(url)
    .then((res)=>res.json())
    .catch((error)=>{
        alert(error);
    })
    .then((data)=>{
        console.log(data)
        const totalCount=data.count;
        const perPageCount=10;
        const pageNumbers=Math.floor(totalCount/perPageCount);
        renderTableBody(data.results);
        renderPagination(pageNumbers);
    });
}
getData(1);
   
    const renderTableBody=(data)=>{
        tableBody.innerHTML="";
        for (var i=0; i< data.length; i++){
            var row=`<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].skin_color}</td>
                        <td>${data[i].height}</td>
                        <td>${data[i].mass}</td>
                        <td>${data[i].eye_color}</td>
                    </tr>`
            tableBody.innerHTML+=row;
        }
    }
    const renderPagination=(pageNumbers)=>{
        pageWrapper.innerHTML="";
            for(i=0;i<pageNumbers;i++){
                const btnNumber=document.createElement('button');
                btnNumber.classList.add('btn-no');
                const countValue=i+1;
                btnNumber.setAttribute("data-num",countValue);
                btnNumber.innerHTML=countValue;
                btnNumber.addEventListener('click',(event)=>{
                    const pageValue=countValue
                    console.log(pageValue)
                    getData(pageValue);
                })
                pageWrapper.appendChild(btnNumber);
            }
    }