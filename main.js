const team = ["Beatrice","Paco","Tiziano","Antonio"];

function setupSelect(){
  const select = document.getElementById("myName");
  for(let i = 0; i < team.length; i++){
    const option = document.createElement("option");
    option.text = team[i];
    option.value = ""+i;
    select.add(option);
  }
}

function showReviewer(val){
  if(val === '-1'){
    document.getElementById("reviewer").innerText = '';
  }else{
    let rouletteNumber = (new Date().getDate()+val)%team.length;
    rouletteNumber = rouletteNumber===parseInt(val)?rouletteNumber+1:rouletteNumber;
    document.getElementById("reviewer").innerText = team[rouletteNumber];
  }
}
