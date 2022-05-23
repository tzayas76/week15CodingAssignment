import React from "react";
import {House} from "./House";
import { houseApi } from "../rest/HousesApi.js";

export  class HousesList extends React.Component {
    state = {
        houses: []
    };

    componentDidMount() {
        this.fetchHouses();
    }

    fetchHouses = async () => {
        const houses = await houseApi.get();
        this.setState({houses});
    };

    updateHouse = async (updatedHouse) => {
        await houseApi.put(updatedHouse);
        this.fetchHouses();
    };
    render() {
        return (
            <div className="house-list">
              {this.state.houses.map((house) => (
                  <House
                    house={house}
                    key={house._id}
                    updateHouse={this.updateHouse}
                    />
              ))}  
            </div>
        )
    }
        
    
   
}