import React from "react";
import './HeaderTemplate.css';

class HeadHeader extends React.PureComponent {

    render() {
         
        const smallText = (
            <span className="text2">
                biz bilan bo'ling! <br/>
                o'zbeklar bilan bo'ling!
            </span>
        );

        return (
            <section className="header-bottom">
                <div className="container header-bottom-container">
                    <div className="header-bottom-item">
                        <div>
                            <span className="tex1 ">{this.props.strongText}</span>
                            { this.props.hasSmallText ? smallText : "" }
                        </div>
                        <p className="text3">
                            <span>MUSOFIRLAR.UZ</span> yordamida dunyoning <br/>
                            istalgan joyida najot topasiz!
                        </p>
                        <a className="main-btn text-decoration-none" href="#">Boshlash</a>
                    </div>
                    <div className="global-time">
                        <span className="time">09:45 </span>
                        <br/>
                        <span className="place">Tashkent</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeadHeader;
