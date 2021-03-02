import React from "react";
import "./styles.css";
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat buttonSize">
        <ReplayIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__left buttonSize">
        <CloseIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__star buttonSize">
        <StarRateIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__right buttonSize">
        <FavoriteIcon fontSize="medium" />
      </IconButton>
      <IconButton className="swipeButtons__lightning buttonSize">
        <FlashOnIcon fontSize="medium" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
