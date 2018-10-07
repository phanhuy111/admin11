import React, { Component } from 'react';

class Map extends Component {
    render() {
        return (
            <div className="bando">
                <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7836.124609207979!2d106.77885250324164!3d10.88286586042732!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d89aad780e49%3A0x54542761d4c22175!2sKTX+Khu+B%2C+%C4%90HQG!5e0!3m2!1svi!2s!4v1538016707195" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen />
            </div>
        );
    }
}

export default Map;


