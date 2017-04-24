export default function
(state=null, action){
  switch(action.type){
    case 'SELECTED-BOOK':
    return action.payload;
  }
  return state  //esto lo pones
  // para retornar
  // un estado inicial
  //y que la aplicación
  //pueda arrancar
}

//el reducer de la acción