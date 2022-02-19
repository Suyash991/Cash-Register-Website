const billAmount=document.querySelector("#amount-for");
let amountPaid=document.querySelector("#amount-given");
let checkButton=document.querySelector("#check-button");
let message=document.querySelector("#error-message");
let numberOfNotes=document.querySelectorAll(".noOfNotes");

const notes=[2000,500,100,20,10,1];
checkButton.addEventListener("click", function validateBillAmount()
{ 
   
    message.style.display="none"
  if(billAmount.value>0)
  {
   let differenceAmount=amountPaid.value-billAmount.value;
      if((differenceAmount>=0))
      {
            calculateNotes(differenceAmount);
      }
      else
      {
         
          showError("You wanna wash dishes");
      }
     

  }
  else
  {

    showError("Invalid amount");
  }

});

function calculateNotes(Amount)
{
  

    for(i=0;i<notes.length;i++)
    {
        
        var numOfNotes= Math.trunc(Amount/notes[i]);
        console.log(numOfNotes);
        Amount=Amount%notes[i];
        console.log(Amount);
        numberOfNotes[i].innerHTML=numOfNotes;
       

    }
    
}
function showError(msg)
{
    message.style.display="block";
    message.innerHTML=msg;
}