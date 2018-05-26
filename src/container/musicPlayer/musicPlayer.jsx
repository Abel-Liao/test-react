import React from 'react'

import "./musicPlayer.css";

import PlayerHeader from '../../component/playerHeader/playerHeader'
import PlayerBanner from '../../component/playerBanner/playerBanner'
import PlayerInfo from '../../component/playerInfo/playerInfo'
import PlayerAudio from '../../component/playerAudio/playerAudio'
import PlayerSetting from '../../component/playerSetting/playerSetting'
class MusicPlayer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            play: true,
            down: true
        };
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleClickDown = this.handleClickDown.bind(this);
        this.handleClickReturn = this.handleClickReturn.bind(this);
    }
    handleClickPlay() {
        this.setState({play:!this.state.play})
    }
    handleClickDown(){
        this.setState({down:!this.state.down})
    }
    handleClickReturn() {
        this.props.history.push("/musiclist");
    }
    render() {
        const songName = this.props.location.search.split("=")[1];
        return (
            <div className="music-player">
                <div className="player-top">
                    <PlayerHeader
                        songName={songName}
                        handleClickReturn={this.handleClickReturn}
                        handleClickDown={this.handleClickDown}
                        down={this.state.down}
                    />
                    <PlayerBanner />
                    <img className="avatar" src={require("../../ass/images/musicPlayer/user_icon.png")} alt=""/>
                </div>
                <div className="player-content">
                    <PlayerInfo songName={songName} />
                    <PlayerAudio 
                        handleClickPlay={this.handleClickPlay}
                        play={this.state.play}
                    />
                    <PlayerSetting />
                </div>
            </div>
        );
    }
}
export default MusicPlayer