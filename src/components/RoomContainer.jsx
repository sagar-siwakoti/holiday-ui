import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context;
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
        </>
    );
}

export default withRoomConsumer(RoomContainer);
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             hello from rooms container
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms}/>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
