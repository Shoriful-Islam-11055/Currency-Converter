               // variables
 const input_value = document.querySelector('#weights');
 const america  = document.querySelector('.usa');
 const australia  = document.querySelector('.aus');
 const british  = document.querySelector('.brits');
 const canada  = document.querySelector('.canada');
 const china  = document.querySelector('.chine');
 const euro  = document.querySelector('.euro');
 const india = document.querySelector('.india');
 const japan  = document.querySelector('.japan');
 const russia  = document.querySelector('.rusia');
 const swiss  = document.querySelector('.swiss');
 const results  = document.querySelector('.result');


            //Result show in text field

 input_value.addEventListener('input', (e) =>{
     const value = input_value.value;
     america.textContent =  (value * 0.0118).toFixed(3);
     australia.textContent = (value * 0.0156).toFixed(3);
     british.textContent = (value * 0.0085).toFixed(3);
     canada.textContent = (value * 0.0146).toFixed(3);
     china.textContent = (value * 0.0761).toFixed(3);
     euro.textContent = (value *  0.0099).toFixed(3);
     india.textContent = (value * 0.875).toFixed(3);
     japan.textContent = (value * 1.3).toFixed(3);
     russia.textContent = (value * 0.853).toFixed(3);
     swiss.textContent = (value * 0.0108).toFixed(3);
    
 })

