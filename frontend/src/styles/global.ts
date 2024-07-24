// Global Styles 
import { createGlobalStyle } from "styled-components"

// ensure there is no margin or padding on the page, except where explicity stated. 
export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Open Sans', sans-serif; 
   }
   #root{
       margin:0 auto;
   }
`