import React from 'react'
import { Route, Router, IndexRoute, IndexRedirect, DefaultRoute, RouterContext } from 'react-router'
import Dashboard from './dashboard'
import OverView from './overview/view'
import SystemStatus from './system_status/view'
import HostTable from './hosts/host_table'
import HostInfo from './hosts/host_info'
import ActiveChains from './chains/active_view'
import InusedChains from './chains/inused_view'
import About from './about/view'
import ReleaseHistory from './release_history/view'

export default (
    <Route render={props => <RouterContext {...props} />} path="/" name="Dashboard" component={Dashboard}>
        <IndexRedirect to="/overview" />
        <Route name="Overview" path="overview" component={OverView} />
        <Route name="SystemStatus" path="system_status" component={SystemStatus} />
        <Route name="Hosts" path="hosts">
            <IndexRoute component={HostTable} />
            <Route name="HostInfo" path=":hostId" component={HostInfo} />
        </Route>
        <Route name="Chains" path="chains">
            <Route name="ActiveChains" path="active" component={ActiveChains} />
            <Route name="InusedChains" path="inused" component={InusedChains} />
        </Route>
        <Route name="About" path="about" component={About} />
        <Route name="ReleaseHistory" path="release_history" component={ReleaseHistory} />
    </Route>
)