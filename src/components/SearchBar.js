import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';

const SearchBar = () => {
  return (
    <MDBCol md="12" style={{padding: '0'}}>
      <form className="form-inline mt-6">
        <input className="form-control form-control-lg w-100" type="text" placeholder="Search" aria-label="Search" />
        <MDBIcon style={{color: 'black', marginLeft: '-45px', filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, .2))'}} icon="search" size="2x" />
      </form>
    </MDBCol>
  );
}

export default SearchBar;