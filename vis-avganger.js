function fjernMelding()
{
   document.getElementById("melding").innerHTML="";   
}  


function vis(fraflyplass)
{
  var foresporsel=new XMLHttpRequest();  
  
  foresporsel.onreadystatechange=function() 
    {
      if (foresporsel.readyState==4 && foresporsel.status==200)  
        {
          document.getElementById("melding").innerHTML=foresporsel.responseText;  
        }
    }

  foresporsel.open("GET","vis-avganger.php?fraflyplass="+fraflyplass);  
  foresporsel.send();  
}


function fokus(element)
{
   element.style.background="yellow";
}  


function mistetFokus(element)
{
   element.style.background="white";
}  

function musInn(element)
{
  if(element==document.getElementById("fraflyplass"))
  {
    document.getElementById("melding").innerHTML="Du skal skrive inn flyplasskoden som skal bestå av 3 små bokstaver";
  }
}
  function musUt(element)
{
  document.getElementById("melding").innerHTML="";
}

function settfokus(element)
{
  element.focus();
}

function velgFraflyplass(fraflyplass)
{
    document.getElementById("fraflyplass").value=fraflyplass;
    fjernMelding();  
}  