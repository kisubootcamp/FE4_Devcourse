import { useRef } from "react";
import FetchBasic from "./components/basic/FetchBasic";
import FetchBasic2 from "./components/basic/FetchBasic2";
import FetchBasic3 from "./components/basic/FetchBasic3";
import FetchCRUD from "./components/basic/FetchCRUD";
import AxiosBasic from "./components/basic/AxiosBasic";
import AxiosCRUD from "./components/basic/AxiosCRUD";

export default function App() {
    const display = useRef("AxiosCRUD");
    return (
        <>
            {display.current === "FetchBasic" && <FetchBasic />}
            {display.current === "FetchBasic2" && <FetchBasic2 />}
            {display.current === "FetchBasic3" && <FetchBasic3 />}
            {display.current === "FetchCRUD" && <FetchCRUD />}
            {display.current === "AxiosBasic" && <AxiosBasic />}
            {display.current === "AxiosCRUD" && <AxiosCRUD />}
        </>
    );
}
