window.setTimeout(function(){

document.querySelector('#shower-h2').textContent = "Bienvenido a su sitio especializado de bienes raíces";



}, 500)

window.setTimeout(function(){

    document.querySelector('#shower-h2').textContent = "Aquí podrá visualizar ejemplos según la información suministrada";
    
    
    
    }, 3500)


    window.setTimeout(function(){
        document.querySelector('#shower-h2').textContent = "";
        /*document.querySelector('#shower').style.backgroundImage ="url('low.jpg')";*/
        
        
        
        }, 7500)
    

document.querySelector('.btn').addEventListener('click', function () {

    let type = document.querySelector('.type').value;
    let price = document.querySelector('.price').value;
    console.log(type);
   if (type == 'urban' && price == 'low') {

    document.querySelector('#shower').style.backgroundImage ="url('low.jpg')";

   } else if (type == 'urban' && price == 'medium') {

    document.querySelector('#shower').style.backgroundImage ="url('medium-urban.jpg')";

   } else if (type == 'urban' && price == 'high') {

    document.querySelector('#shower').style.backgroundImage ="url('high-urban.jpg')";

   } else if (type == 'rural' && price == 'low') {

    document.querySelector('#shower').style.backgroundImage ="url('rural-low.jpg')";

   } else if (type == 'rural' && price == 'medium') {

    document.querySelector('#shower').style.backgroundImage ="url('rural-medium.jpg')";

   } else if (type == 'rural' && price == 'high') {

    document.querySelector('#shower').style.backgroundImage ="url('rural-high.jpg')";

   } else if (type == 'beach' && price == 'low') {

    document.querySelector('#shower').style.backgroundImage ="url('beach-low.jpg')";

   } else if (type == 'beach' && price == 'medium') {

    document.querySelector('#shower').style.backgroundImage ="url('beach-medium.jpg')";

   } else if (type == 'beach' && price == 'high') {

    document.querySelector('#shower').style.backgroundImage ="url('beach-high.jpg')";

   }



})



