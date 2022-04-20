import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  function onDeleteMeetup() {
    props.onDelete();
    // console.log("I am here middle");
  }

  return (
    <div>
      <ul className={classes.list}>
        {props.meetups.map((meetup) => {
          if (meetup.description.length > 170) {
            return (
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                onDelete={onDeleteMeetup}
                wrapDesc={true}
                wrapWords={true}
              />
            );
          } else {
            return (
              <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
                description={meetup.description}
                onDelete={onDeleteMeetup}
                wrapDesc={true}
                wrapWords={false}
              />
            );
          }
        })}
      </ul>
    </div>
  );
}

export default MeetupList;
