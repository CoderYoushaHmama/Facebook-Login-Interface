let create_new_button = document.getElementById("create_new");
let signUp_section = document.getElementById("signUp");
let exit_button = document.getElementById("exit");
let radio_input1 = document.getElementById("radio_input1");
let radio_input2 = document.getElementById("radio_input2");
let radio_input3 = document.getElementById("radio_input3");

function show_select(){
        document.getElementById("pronoun_option").style.display="table-row";
        document.getElementById("selects").disabled= false;
        document.getElementById("select").disabled= false;
}

function exit_select(){
    document.getElementById("pronoun_option").style.display="none";
    document.getElementById("selects").disabled= true;
    document.getElementById("select").disabled= true;
}

function clickRadio1(){
    radio_input1.checked=true;
}

function clickRadio2(){
    radio_input2.checked=true;
}

function clickRadio3(){
    radio_input3.checked=true;
}

exit_button.onclick=()=>{
    signUp_section.style.display="none";
    document.getElementById("editting_opacity1").style.opacity="100%";
    document.getElementById("editting_opacity2").style.opacity="100%";
    document.getElementById("editting_opacity3").style.opacity="100%";
};

create_new_button.onclick=()=>{
    signUp_section.style.display="block";
    document.getElementById("editting_opacity1").style.opacity="50%";
    document.getElementById("editting_opacity2").style.opacity="50%";
    document.getElementById("editting_opacity3").style.opacity="50%";
};