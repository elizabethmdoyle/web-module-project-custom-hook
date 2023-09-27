import useLocalStorage from './useLocalStorage';

const useDarkMode =  (initialValue) => {
     const [darkMode, setDarkMode] = useLocalStorage('darkmode', initialValue);

     return [darkMode, setDarkMode];
        // if(darkMode) {
        //     return setDarkMode(!initialValue);
        // }

        // return darkMode;
}

export default useDarkMode;

