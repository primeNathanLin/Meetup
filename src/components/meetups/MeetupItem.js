import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  const updateUrl = "/meetups/" + props.id;
  const detailUrl = "/meetup-detail/" + props.id;

  function toggleFavortieStatusHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  function deleteMeetupHandler() {
    if (itemIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    }

    // console.log(props.id);

    const fetchUrl =
      "https://react-getting-started-7ae1e-default-rtdb.firebaseio.com/meetups/" +
      props.id +
      ".json";

    fetch(fetchUrl, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        console.log("delete fired.");
        props.onDelete();
      });
  }

  return (
    <li className={props.wrapDesc ? classes.item : classes.itemBig}>
      <Card>
        <div className={props.wrapDesc ? classes.image : classes.imageBig}>
          <Link to={detailUrl}>
            <img src={props.image} alt={props.title}></img>
          </Link>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <div className={props.wrapDesc ? classes.descWrap : classes.desc}>
            {props.wrapWords
              ? props.description.substr(0, 150) + "..."
              : props.description}
          </div>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavortieStatusHandler}>
            {itemIsFavorite ? "Remove Favorites" : "Add To Favorites"}
          </button>
          <button onClick={deleteMeetupHandler}>Delete</button>
          <Link to={updateUrl}>Edit</Link>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
