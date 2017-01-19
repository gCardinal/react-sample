import * as React from 'react'
import {Route, IndexRedirect} from 'react-router'
import BaseLayout from 'views/layouts/BaseLayout'
import NotFoundSection from 'views/sections/NotFoundSection'
import SecondSection from 'views/sections/SecondSection'
import HomeSection from 'views/sections/HomeSection'
import Routes from 'routing/Routes'

export default () => {
    return (
        <Route path={Routes.BASE} component={BaseLayout}>
            <IndexRedirect to={Routes.HOME} />

            <Route path={Routes.HOME} component={HomeSection} />
            <Route path={Routes.SECOND} component={SecondSection} />
            <Route path={Routes.NOT_FOUND} component={NotFoundSection} />
        </Route>
    )
}