import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { EventContextProvider } from './contexts/EventContext';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/defaultTheme';
import { GlobalStyle } from './global';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <EventContextProvider>
      {/* provedor de tema para todo o projeto,
        precisa envolver o component App.
        O atributo theme recebe o valor do objeto de tema
        
        A ordem dos contextos não importa.
      */}
      <ThemeProvider theme={theme}> 
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </EventContextProvider>
  </React.StrictMode>
);

