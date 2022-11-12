import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: ['Rubik','sans-serif',].join(','),
    },
    palette: {
        primary: {
            main: '#271c47',
        },
        secondary: {
            main: '#ffa900',
        },
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 6,
                    textTransform: 'none'
                }
            }
        }
    }
});
theme = responsiveFontSizes(theme);

export default theme;