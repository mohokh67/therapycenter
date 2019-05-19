import React, { useEffect } from "react";
import moment from "moment";
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import Item from "../components/Item";
import sourceData from "../data";
import Calendar from "../components/booking/Calendar";
import { create } from './../lib/firestoreHelper';
import { futureAppointmentsCount } from './../lib/usersCollection';
import { disallowToBook } from './../actions/userActions';

const maximumAppointmentCount = parseInt(process.env.REACT_APP_BOOKING_MAX_NUMBER);

function Book(props) {
  const { massageId, calendarView } = props.match.params;
  const currentMassage = sourceData.massages.find(
    massage => massage.id === massageId
  );

  const Massage =(() => <Item service={currentMassage} key={currentMassage.id} showBooking={false} />);

  const Booking = (() => {
    return (
      <div className="column is-8">
        <Calendar
          view={calendarView}
          massageId={massageId}
          updateBooking={updateBooking}
          isUserAllowToBook={props.user.allowToBook}
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
      // console.log("📤 App Unmounting");
      // base.removeBinding(ref);
    };

  }, [])


  /**
   * @integer date: unix timestamp
   * @integer startFrom: a number between 9 to 18
   */
  const updateBooking = async (date, startFrom, updatedBooking) => {
    const { userId } = props.auth;
    const totalAppointments = await futureAppointmentsCount(userId);
    if(totalAppointments >= maximumAppointmentCount) {
      props.disallowToBook();
      return false;
    }

    console.log("going to update the state");
    const dateTimeStamp = moment.unix(date).format("YYYYMMDD");

    const document = {
      ...updatedBooking,
      date: dateTimeStamp,
      name: props.auth.username,
      startFrom,
      userId,
      serviceId: massageId
    }
    await create({ collectionName: 'bookings', document });

  };

  return (
    <div className="container is-fluid">
      <Helmet>
        <title>{currentMassage.name} booking - Sports Massage Therapy Center</title>
      </Helmet>
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

const mapDispatchToProps = dispatch => {
  return {
    disallowToBook: () => {
      dispatch(disallowToBook());
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Book);

