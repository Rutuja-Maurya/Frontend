$("#clear").click(function(){
 $("#txtNo1").val("")
$("#txtNo2").val("")
$("#result").val("")
$("#display").val("")
});
});
 

  function calculate() {
      var txtNo1=document.getElementById("txtNo1").value();
	  if(txtNo1==""){
		  alert("Enter 1st number");
		  return false;
	  }
      var txtNo2=document.getElementById("txtNo2").value();
	  if(txtNo2==""){
		  alert("Enter 2nd number");
		  return false;
	  }
	  
		var txtNo1=$("#txtNo1").val();
		var txtNo2=$("#txtNo2").val();
		
var id=$("input[name='math']:checked").val();

      let result ;
   if(id=="add")
{
result=parseInt(txtNo1) + parseInt(txtNo2);
}
else if(id=="sub"){
result=parseInt(txtNo1) - parseInt(txtNo2);
}
else if(id=="multi"){
result=parseInt(txtNo1) * parseInt(txtNo2);
}
else if(id=="div"){
result=parseInt(txtNo1) / parseInt(txtNo2);
}
else
{
	alert("Please select any one operation");
	
     $("#result").val(result);
	 $("#display").val(result);
    };