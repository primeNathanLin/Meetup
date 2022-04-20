import { useRef, useEffect, useState } from "react";
import classes from "./UpdateMeetupForm.module.css";
import Card from "../ui/Card";

function UpdateMeetupForm(props) {
  console.log(props);
  const [myMeetupData, setMyMeetupData] = useState({});

  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const url =
    "https://react-getting-started-7ae1e-default-rtdb.firebaseio.com/meetups/" +
    props.id +
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

  function updateHandler(event) {
    event.preventDefault();
    const updatedTitle = titleRef.current.value;
    const updatedImage = imageRef.current.value;
    const updatedAddress = addressRef.current.value;
    const updatedDescription = descriptionRef.current.value;

    const updatedMeetup = {
      title: updatedTitle,
      image: updatedImage,
      address: updatedAddress,
      description: updatedDescription,
    };

    props.onUpdateMeetup(updatedMeetup);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={updateHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            defaultValue={myMeetupData.title}
            ref={titleRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            defaultValue={myMeetupData.image}
            ref={imageRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input
            type="text"
            required
            id="address"
            defaultValue={myMeetupData.address}
            ref={addressRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup description</label>
          <textarea
            required
            id="description"
            rows="5"
            defaultValue={myMeetupData.description}
            ref={descriptionRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Update Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default UpdateMeetupForm;
