window.addEventListener("load", function(){

    let title = document.querySelector("#title");
    let fields = document.querySelectorAll(".field");
    let form = document.querySelector(".form");

    title.focus()

    fields.forEach(function(field){
        field.addEventListener("blur", function(e){
            console.log(field.value >= 0)
            if((field.name == "awards"|| field.name == "rating" ) && (Number(field.value <= 0) || Number(field.value > 10) )){
                field.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 0 y 10";
                field.classList.remove("is-valid")
                field.nextElementSibling.classList.add("is-invalid")

            }else if(field.name == "length" && (Number(field.value < 35) || Number(field.value > 360) )){
                field.nextElementSibling.innerHTML = "El valor debe estar comprendido entre 35 y 360";
                field.classList.remove("is-valid")
                field.nextElementSibling.classList.add("is-invalid")
            }
            else if((field.name == "title" || field.name == "release_date" ||  field.name == "genre_id") && field.value.length < 1){
                field.nextElementSibling.innerHTML = "completar campo!";
                field.classList.remove("is-valid")
                field.nextElementSibling.classList.add("is-invalid")
            }else{
                field.nextElementSibling.classList.remove("is-invalid")
                field.classList.add("is-valid");
                field.nextElementSibling.innerHTML = "Ok"
            }
        })
    })

    form.addEventListener("submit", function(e){
        e.preventDefault()
        let error = false;
        fields.forEach((field, i)=>{
            if(!field.value){   
                error = true;
                field.nextElementSibling.classList.add("is-invalid")            
                field.nextElementSibling.innerHTML = "completar campo!"
            }
        })
        if(!error){
            this.submit()
        }

    })

    





})