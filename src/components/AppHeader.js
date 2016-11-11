import React from 'react';
import ReactDom from 'react-dom';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <div className="logo logo--small"></div>
            </div>
            <div className="col-xs-9 text-right">
              <nav>
                <ul className="dropdown">
                 <li className="dropdown-top">
                   <a className="dropdown-top" href="/">Lorem <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                   <ul className="dropdown-inside">
                     <li><a href="#">Ipsum</a></li>
                     <li><a href="#">Ipsum</a></li>
                     <li><a href="#">Ipsum</a></li>
                   </ul>
                 </li>
                 <li className="dropdown-top">
                   <a className="dropdown-top" href="#">Ipsum <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                   <ul className="dropdown-inside">
                     <li><a href="#">Customers</a></li>
                     <li><a href="#">News</a></li>
                   </ul>
                 </li>
                 <li className="dropdown-top">
                  <a className="dropdown-top" href="/">Dolor <i className="fa fa-caret-down" aria-hidden="true"></i></a>
                   <ul className="dropdown-inside">
                     <li><a href="#">Sports</a></li>
                     <li><a href="#">Horror film</a></li>
                     <li><a href="#">Comedy & humor</a></li>
                   </ul>
                 </li>
                 <li><a href="#">Amet</a></li>
                 <li><i className="fa fa-search input__search__icon" aria-hidden="true"></i>
                   <input className="input__search" placeholder="Search Ratio"/>
                 </li>
                 <button className="button button--nav button--inline">Sign Up</button>
                </ul>
              </nav>
            </div>

          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
