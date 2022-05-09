import React from "react"

export const themes = {
    light: {
        background: 'rgb(235, 217, 253)',
        color: '#000000'    },
    dark:  {
        background: 'rgb(71, 60, 83)',
<<<<<<< Updated upstream
        color: '#F0F8FF'}
        ,
    dark2:  {
        background: 'rgb(80, 92, 94)',
        color: '#000000'
    },
    light2: {
        background: 'rgb(207, 238, 243)',
        color: '#000000'    }
        ,
        dark3:  {
            background: 'rgb(71, 60, 83)',
            color: '#000000'
        },
        light3: {
            background: 'rgb(235, 217, 253)',
            color: '#000000'    }
};


export const ThemeContext = React.createContext(themes.light)
=======
        color: '#F0F8FF'
    }
};
export const themes2 = {
    light: {
        background: 'rgb(235, 217, 253)',
        color: '#000000'    },
    dark:  {
        background: 'rgb(71, 60, 83)',
        color: '#F0F8FF'
    }
};

export const ThemeContext = React.createContext(themes.light)
export const ThemeContext1 = React.createContext(themes2.light)
>>>>>>> Stashed changes
