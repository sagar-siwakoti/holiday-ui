import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();
//<RoomContext.Provider value={'hello'} />;

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  //GET DATA
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images: images, id };
      return room;
    });
    return tempItems;
  }

  getRoom(slug) {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  render() {
    return (
      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

//wrapping the context for consumer
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props){
    return(
        <RoomConsumer>
          {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    );
  }

}

export { RoomProvider, RoomConsumer, RoomContext };
