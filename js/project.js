var a=document.getElementById('taskinfo')
var tasklist=document.getElementById('tasklist')
document.getElementById('add').onclick=function()
{
    if(a.value.length==0)
    {
         alert("enter something")
    }
    else{
        tasklist.innerHTML= tasklist.innerHTML+`
        <div class="task">
        <span id="work">${a.value}</span>
        <button class="del">clear</button>
        </div>`
       let alltasks=document.querySelectorAll('.del')
       for(i=0;i<alltasks.length;i++)
        {
            alltasks[i].onclick=function()
            {
                this.parentNode.remove()
            }
        }
        a.value=""
    }
}