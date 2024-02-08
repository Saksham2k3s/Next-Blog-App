"use clinet"
import styles from "./page.module.css";
import Featured from "@/components/Featured/Featured";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Pagination from "@/components/Pagination/Pagination";
import Menu from "@/components/Menu/Menu";

import  { useThemeContext }  from "@/context"; 
export default function Home() {
  const { theme } = useThemeContext();
  return (
   <>
   <div>{theme}</div>
     <Featured/>
     <CategoryList/>
     <CardList/>
     <Pagination/>
     <Menu/>
     
   </>
  );
}
