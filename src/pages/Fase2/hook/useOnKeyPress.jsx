import { useEffect } from 'react'


export const useOnKeyPress=(callback, targetKey) => {

  useEffect(() => {
      const keyPress = (event) => {
      if(event.key === targetKey){
        callback();
      }
    }

    window.addEventListener('keydown', keyPress);
    return() => {
      window.removeEventListener('keydown', keyPress);
    };


  }, [callback, targetKey])
}
