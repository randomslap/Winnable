import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import HomeJumbotron from "../components/Jumbotron"

var owjs = require('overwatch-js');
const ow = require('overwatch-stats-api');

class StatsFinder extends Component {

    
    state = {
        bnetName: "",
        bnetNum: "",
        battleNetUser: bnetName +"#"+ bnetNum,
        userRank: "",
        rankPicture: "",
        userIcon: "",
      };

      loadStats = () =>{
        owjs
        .search(this.state.bnetName + '#' + this.state.bnetNum)
        .then((data) => {
            (async () => {
                const stats = await ow.getBasicInfo(data[0].urlName, platform);
                console.log(stats)
            })();
    });
      }


	render() {
		return (
			<div>
				<HomeJumbotron/>
			</div>
		);
	}
}

export default StatsFinder;