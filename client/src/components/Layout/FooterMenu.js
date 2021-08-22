import React from 'react'

import { Link } from "react-router-dom"

import { Row, Col } from "react-bootstrap"

import FeedBlack from "../../images/feed.png"
import FeedGrey from "../../images/feed-grey.png"
import DiscoverBlack from "../../images/discover-black.png"
import DiscoverGrey from "../../images/discover-grey.png"
import UserBlack from "../../images/user-black.png"
import UserGrey from "../../images/user-grey.png"

import "./FooterMenu.css"

const FooterMenu = ({ activePage }) => {
    return (
        <div className="footer">
            <Row>
                <Col className="menu-tile">
                    <Link to="/feed">
                        {
                            activePage == "feed" ?
                                <div>
                                    <div className="menu-icon" >
                                        <img src={FeedBlack} />
                                    </div>
                                    <div className="active">Feed</div>
                                </div> :
                                <div>
                                    <div className="menu-icon">
                                        <img src={FeedGrey} />
                                    </div>
                                    <div className="inactive">Feed</div>
                                </div>
                        }
                    </Link>
                </Col>
                <Col className="menu-tile">
                    <Link to="/discover">
                        {
                            activePage == "discover" ?
                                <div>
                                    <div className="menu-icon" >
                                        <img src={DiscoverBlack} />
                                    </div>
                                    <div className="active">Discover</div>
                                </div> :
                                <div>
                                    <div className="menu-icon">
                                        <img src={DiscoverGrey} />
                                    </div>
                                    <div className="inactive">Discover</div>
                                </div>
                        }
                    </Link>
                </Col>
                <Col className="menu-tile">
                    <Link to="/profile">
                        {
                            activePage == "profile" ?
                                <div>
                                    <div className="menu-icon" >
                                        <img src={UserBlack} />
                                    </div>
                                    <div className="active">Profile</div>
                                </div> :
                                <div>
                                    <div className="menu-icon">
                                        <img src={UserGrey} />
                                    </div>
                                    <div className="inactive">Profile</div>
                                </div>
                        }
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default FooterMenu
