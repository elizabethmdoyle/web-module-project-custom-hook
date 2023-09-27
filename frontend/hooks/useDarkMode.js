import {useState} from 'react'

const useDarkMode =  (initialValue) => {
     const [darkMode, setDarkMode] = useState(initialValue);

     return [darkMode, setDarkMode];
        // if(darkMode) {
        //     return setDarkMode(!initialValue);
        // }

        // return darkMode;
}

export default useDarkMode;

