import React from 'react';
import { MDBFooter, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">
            <div className="pb-4">
                <MDBIcon fab icon="github" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="/#"> ProductionChain </a>
            </p>
        </MDBFooter>
    );
}

export default Footer;