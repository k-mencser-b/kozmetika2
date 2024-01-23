import { Outlet } from "react-router-dom"
import BaborNavigation from "../components/BaborNavigation"


const BaborPageRoot = () => {
    return (
        <>
        <BaborNavigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
};

export default BaborPageRoot;