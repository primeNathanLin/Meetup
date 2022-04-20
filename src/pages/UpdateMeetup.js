import { useNavigate, useParams } from "react-router-dom";
import UpdateMeetupForm from "../components/meetups/UpdateMeetupForm";

function UpdateMeetupPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  function updateMeetupHandler(meetupData) {
    fetch(
      `https://react-getting-started-7ae1e-default-rtdb.firebaseio.com/meetups/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/", { replace: true });
    });
  }
  return (
    <section>
      <h1>Update Meetup</h1>
      <UpdateMeetupForm onUpdateMeetup={updateMeetupHandler} id={id} />
    </section>
  );
}

export default UpdateMeetupPage;
