function mostrarAlerta(){
    Swal.fire({
        title: "¿Queremos saber si te gusta la sandía?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        
        if (result.isConfirmed) {
          Swal.fire("Guardado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Ok perfecto", "", "success");
        }
      });
}


