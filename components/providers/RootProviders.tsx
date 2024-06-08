"use client";

import { ThemeProvider } from 'next-themes';
 import React, { ReactNode } from 'react'
 
 function RootProviders({children} : {children : ReactNode}) {
   return (
     <ThemeProvider 
        attribute = "class"
        defaultTheme='dark'
        enableSystem 
        disableTransitionOnChange
     >
         {children}
     </ThemeProvider>
   )
 }
 
 export default RootProviders