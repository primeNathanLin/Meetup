import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./MeetupDetail.module.css";
import MeetupItem from "../components/meetups/MeetupItem";

function MeetupDetailPage() {
  const { id } = useParams();
  const [myMeetupData, setMyMeetupData] = useState({});

  const url =
    "https://react-getting-started-7ae1e-default-rtdb.firebaseio.com/meetups/" +
    id +
    ".json";

  useEffect(() => {
    fetch(url)
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        const meetup = {
          image: data.image,
          title: data.title,
          address: data.address,
          description: data.description,
        };
        // console.log("meetup");
        setMyMeetupData(meetup);
      });
  }, [url]);

  return (
    <div>
      <ul className={classes.list}>
        <MeetupItem
          key={id}
          id={id}
          image={myMeetupData.image}
          title={myMeetupData.title}
          address={myMeetupData.address}
          description={myMeetupData.description}
          wrapDesc={false}
          wrapWords={false}
        />
      </ul>
    </div>
  );
}

export default MeetupDetailPage;
