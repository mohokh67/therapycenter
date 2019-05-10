import React, { useEffect } from "react";
import moment from "moment";
import { connect } from 'react-redux';
import { firebase } from "./../lib/base";

import Item from "../components/Item";
import sourceData from "../data";
import Calendar from "../components/booking/Calendar";


function Book(props) {

  const Massage =(() => {
    const { massageId } = props.match.params;
    const currentMassage = sourceData.massages.find(
      massage => massage.id === massageId
    );
    return <Item service={currentMassage} key={currentMassage.id} showBooking={false} />;
  });

  const Booking = (() => {
    const { massageId, calendarView } = props.match.params;
    // let book = new Book();
    return (
      <div className="column is-8">
        <Calendar
          view={calendarView}
          massageId={massageId}
          updateBooking={updateBooking}
        />
      </div>
    );
  });

  useEffect(() => {
    console.log("🔥 Booking Mounted");

    //this.setState({ loading: true });
    // let ref = base.syncState(`bookings`, {
    //   context: this,
    //   state: "bookings",
    //   then: () => {
    //     console.log("✔🔄 Just synced with firebase");
    //     //this.setState({ loading: false });
    //   }
    // });

    return function cleanup() {
      console.log("📤 App Unmounting");
      // base.removeBinding(ref);
    };

  })


  /**
   * @integer date: unix timestamp
   * @integer startFrom: a number between 9 to 18
   */
  const updateBooking = (date, startFrom, updatedBooking) => {
    console.log("going to update the state");
    return new Promise((resolve, reject) => {
      const dateTimeStamp = moment.unix(date).format("YYYYMMDD");

      firebase
        .database()
        .ref(`bookings/${dateTimeStamp}/${startFrom}`)
        .set(updatedBooking)
        .then(() => {
          resolve();
        });
    });
  };

  return (
    <div className="container is-fluid">
      <div className="columns is-multiline">
        <Massage />
        <Booking />
      </div>
    </div>
  );

}

const mapStoreToProps = state => ({
  ...state
})

// const mapDispatchToProps = dispatch => {
//   return {
//     isLoggedIn: () => {
//       dispatch(isLoggedIn());
//     }
//   }
// }

export default connect(mapStoreToProps, null)(Book);

