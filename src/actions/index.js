export function selectBook(bookObject){
  return {
    type:'SELECTED-BOOK',
    payload:bookObject
  };
}

//la acción

/*
- En el componente se hace un map de los
libros

- El map llama a esta acción en onClick y
le envía el dato del libro clickeado

-Esta acción asigna ese dato (objeto) como
valor de payload

-El reducer mira si la acción que se 
ejecutó fué esta y si es el caso, retorna
ese valor de payload

-Como ese reducer es el valor asignado
a la clave activeBook del objeto state,
deja grabado en el state el objeto
clickeado



*/