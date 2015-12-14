var React = require('react');

export default class TopMenu extends React.Component {
    render() {
        return (<div className="top-menu row between-xs">
            <div className="col-xs-2 end-xs">
                <div className="box">
                    Logo
                </div>
            </div>
            <div className="col-xs-3">
                <div className="box">
                    <a className="login"
                        href="/login">Log in</a>
                    <a className="btn btn-large btn-transparent"
                        href="/register">Create account</a>
                </div>
            </div>
        </div>);
    }
}
