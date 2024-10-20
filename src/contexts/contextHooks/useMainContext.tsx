import { useContext } from 'react';
import MainContext from '../MainContext';


export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error('useMainContext must be used inside MainContextProvider');
  }
  return context;
};

//Ventajas del Hook Personalizado entre el Context y el componente:
//Seguridad: El hook se asegura de que el contexto no sea undefined antes de que se use, lo que evita errores en tiempo de ejecución.
//Facilidad de uso: El código es más claro y manejable, ya que no necesitas preocuparte por manejar un posible valor undefined en cada componente.
