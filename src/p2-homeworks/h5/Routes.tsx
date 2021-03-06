import React from 'react'
import {Routes , Route} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Navigate} from "react-router-dom";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import AllLinks from "./pages/AllLinks";

export const PATH = {
    LINKS: '/links' ,
    PRE_JUNIOR: '/pre-junior' ,
    JUNIOR: '/junior' ,
    JUNIORPLUS: '/juniorPlus' ,
    // add paths
}

function Router() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Routes>
                <Route path={'/*'} element={<Error404/>}/>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} element={<AllLinks/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIORPLUS} element={<JuniorPlus/>}/>
                // add routes

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}


            </Routes>
        </div>
    )
}

export default Router
