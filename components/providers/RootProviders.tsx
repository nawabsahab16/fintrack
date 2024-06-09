"use client";

import { ThemeProvider } from 'next-themes';
import React, { ReactNode } from 'react'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

 
 function RootProviders({children} : {children : ReactNode}) { 

   const [queryClient] = React.useState(() => new QueryClient({}));
   return (
      <QueryClientProvider client={queryClient}>
     <ThemeProvider 
        attribute = "class"
        defaultTheme='dark'
        enableSystem 
        disableTransitionOnChange
     >
       {children}
     </ThemeProvider> 
      <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   )
 }
 
 export default RootProviders