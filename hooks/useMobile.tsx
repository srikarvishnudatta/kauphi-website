import { useContext } from "react";
import { MobileContext } from "./MobileProvider";

export default function useMobile(){
    return useContext(MobileContext);
}