import React from 'react'
import { Home_page } from './02-Home_page';
import { Navigation } from './00-Navigation'
import { Switch, Route, Redirect } from 'react-router-dom';
import { Page_4 } from './04-Page';
import { connect } from 'react-redux'


class _Welcome_page extends React.Component {
    render() {
        const { isUpdateOpen } = this.props

        return (
            <div>
                <Navigation />
                {isUpdateOpen ? <Redirect to="/page_4" /> : <Redirect to="/" />}

                <h2>welcome page</h2>
                {/* <Home_page /> */}
                <Switch>
                    <Route exact path="/" component={Home_page} />
                    <Route exact path="/page_4" component={Page_4} />
                </Switch>
            </div>
        )
    }
}

const mapDispatchToSate = (state) => ({
    isUpdateOpen: state.isUpdateOpen,
})

export const Welcome_page = connect(mapDispatchToSate)(_Welcome_page)