function openPage(id){
  const p = document.querySelector("[tab-name='"+id+"']");
  const tabs = document.querySelectorAll(".tabs .tabcontents");
  for(var  x =0; x < tabs.length; x++)
      tabs[x].classList.add("d-none");
  if(p !== null){
    p.classList.remove("d-none");
  }
}