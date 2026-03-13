import { useState } from "react";
import Header from "./Header";

function MenuLikes() {
  const [likes, setlikes] = useState("Likes");
  const [videoLikes, setVideoLikes] = useState(0);

  return (
    <>
      <Header />
      <h1>Menu</h1>
      <h2>Video Name : {likes}</h2>
      <h3>Likes : {videoLikes}</h3>

      <button onClick={() => setVideoLikes(videoLikes + 1)}>Like Video</button>
      <button onClick={() => setVideoLikes(videoLikes - 1)}>DisLike Video</button>
    </>
  );
}

export default MenuLikes;