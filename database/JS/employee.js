

let tbody = document.getElementById('tbody')


fetch("http://localhost:3000/ragister")
.then((res)=>res.json())
.then(json=>{
    json.map(data=>{
        console.log(data)
        tbody.append(td_fun(data))
    })
})

function td_fun({profile,title,email,status,role}){
    let td = document.createElement('tr')
   td.innerHTML=`
   <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                           <img src="${profile}" alt="">
                        </div>
                         <div class="ml-4">
                            <div class="text-sm font-medium">
                                ${title}
                            </div>
                            <div class="text-sm text-gray-500">
                                ${email}
                            </div>
                         </div>
                    </div>

                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        ${status}
                    </span>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <span class="text-sm text-gray-500">
                              ${role}
                        </span>
                    </td>
   ` ;
   return td;
}