import React from "react";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "../Pages/Home";
import Transcript from "../Pages/Transcript";

const Router : React.SFC = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/transcript">
                        <Transcript />
                    </Route>
                    <Route path="/student">Student</Route>
                    <Route path="/course-registration">Course Registration</Route>
                    <Route path="/student-account">Student Account</Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;