import React, {PureComponent} from "react";

import FlatCard from "./FlatCard";

class FlatCards extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container" style={{padding: "0"}}>
                <div className="row">
                    {
                        this.props.flats.map((flat) => {
                            return <FlatCard flat={flat}/>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default FlatCards;