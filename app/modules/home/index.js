import { connect } from "react-redux";
import HomePage from './home.component';
import { logout } from "../../actions/authentication-actions";

const mapStateToProps = state => ({
    listItems: state.flights,
    navItems: state.bottomNavItems,
    isLoggedIn: state.auth.isLoggedIn,
    userEmail: state.auth.email,
    isLoading: state.app.isLoading
});

const mapDispatchToProps = dispatch => ({
    onLogout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);