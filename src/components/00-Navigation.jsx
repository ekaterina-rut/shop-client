import React from 'react';
import { Link } from 'react-router-dom'



export class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav >
                    <ul >
                        <li>
                            <Link to='/'>Home Page</Link>
                        </li>                

                    </ul>
                </nav >
            </div >
        )

    }
    onLogoutClick = () => {
        const { logOut } = this.props;
        logOut();
    }


    onAddBtnClick = () => {
        const { openNewTripForm } = this.props;
        openNewTripForm();

    }
}
