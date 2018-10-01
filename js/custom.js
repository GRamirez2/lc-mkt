let paramsP1 = "{name} the choices we make everyday can help us live happier and healthier lives – both at {company name} and at home. That’s why you have been offered this exciting new diabetes benefit called, LivingConnected from CCS Medical.";

let paramsP2 = "LivingConnected is an innovative mobile health solution that gives you the tools to start living better with diabetes. It is part of {company's} health benefits and its being offered at little or no cost to you.";


//creates an object of all params and their values
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value.replace(/%20/g, " ");
  });
  console.log(vars)
  return vars;
}

const params = getUrlVars()

$(document).ready(()=> {
  $(".paragraph1").text(paramsP1.replace("{name}", `${params.name},`).replace("{company name}", params.company));
  $(".paragraph2").text(paramsP2.replace("{company's}", `${params.company}'s`))
})
