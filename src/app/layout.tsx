
import Head from "next/head";

import '.././styles/LogIn.css'



import "../styles/web/dark.css";
import ScrollToTop from "@/components/dashboard/shared/ScrollToTop";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'LawFirm مكتب  المحاماة',
  description: 'LawFirm مكتب  المحاماة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
    <head>
        <title> LawFirm مكتب  المحاماة</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/fav.png" />
      </head>
<html>
      

          {children}
        

    
      
 



</html>
       
</>

  )
}