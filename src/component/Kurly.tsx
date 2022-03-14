import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';

import GlobalStyle from '../style/globalStyle';
import EGlobalStyle from '../style/eGlobalStyle'
import { theme, etheme } from '../theme';
import KurlyWrapper from './KurlyWrapper';
import KurlyWrapperEmotionEmotion from './KurlyWrapperEmotion';

const Kurly = (): JSX.Element => {
    const [isStyled, setIsStyled] = useState(false);

    return (
        <>
            <Switch onClick={() => setIsStyled(!isStyled)}>{!isStyled ? 'emotion' : 'styled-component'}</Switch>
            {
                !isStyled ?
                    <ThemeProvider theme={theme}>
                        <GlobalStyle />
                        <KurlyWrapper />
                    </ThemeProvider>
                    :
                    <ThemeProviderEmotion theme={etheme}>
                        <EGlobalStyle />
                        <KurlyWrapperEmotionEmotion />
                    </ThemeProviderEmotion>
            }
        </>
    )
}

export default Kurly;

const Switch = styled.button`
    
`