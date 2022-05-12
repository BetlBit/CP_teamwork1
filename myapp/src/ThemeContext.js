import React from "react"

export const themes = {
    light: {
        background: 'rgb(235, 217, 253)',
        color: '#000000'    },
    dark:  {
        background: 'rgb(71, 60, 83)',

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
            color: '#F0F8FF',
            bl: '#000000'
        },
        light3: {
            background: 'rgb(235, 217, 253)',
            color: '#000000'    }
};



export const ThemeContext = React.createContext(themes.light)

