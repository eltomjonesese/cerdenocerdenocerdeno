(function(){

    let $lnkRegistroEntrada     =       $("#registro-entrada");
    let $lnkRegistroSalida      =       $("#registro-salida");
    let srcRegistroEntrada      =       './pages/regentrada/index.php';
    let srcRegistroSalida       =       './pages/regsalida/index.php';
    let errors                  =       0;   

    let get_form_registro_entrada = function() {
        $.ajax({
            url: srcRegistroEntrada,
            method: get,
            success: function(dta){
                alert('a');
                $('body').append(dta);
            },
            error: function(){
                alert('a');
                errors++;
            }
        });
    }

    let prepare_all = function(){
        get_form_registro_entrada();

        //$lnkRegistroEntrada.on("click", show_form_registro_entrada, false);
        //$lnkRegistroSalida.on("click", show_form_registro_salida, false);
    }


    prepare_all();

})();