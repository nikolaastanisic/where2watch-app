import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Slide from "@mui/material/Slide"; // Import Slide transition
import { Avatar } from "@mui/material";
import "@scss/watch-modal.scss";
import { useMediaQuery } from '@mui/material';

const style = {
 position: "absolute",
 top: "50%",
 left: "40%",
 transform: "translate(-50%, -50%)",
 width: 500,
 bgcolor: "#3a5a4045",
 border: "2px solid #3a5a40",
 boxShadow: 24,
 p: 4,
};

export default function WhereToWatchModal({ movie }) {
 const [watchProviders, setWatchProviders] = useState([]);
 const isMobile = useMediaQuery('(max-width:600px)');
 const fetchWatchProviders = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=3ebdcea237cba8f1759952fa1674302f`
    )
      .then((res) => res.json())
      .then((json) => {
        const providers =
          json?.results?.US?.rent?.map(
            (provider) =>
              (provider = {
                logo: provider.logo_path,
                name: provider.provider_name,
              })
          ) ?? [];
        setWatchProviders(providers);
      });
 };

 const [open, setOpen] = React.useState(false);
 const handleOpen = () => {
  document.body.classList.add('no-scroll');
  fetchWatchProviders(movie.id);
  setOpen(true);
 };
 
 const handleClose = () => {
  document.body.classList.remove('no-scroll');
  setOpen(false);
 };

 return (
  <div>
    <Button onClick={handleOpen}>Where to watch</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Box sx={style}>
          {watchProviders.length > 0 && (
            <div className={`logos ${isMobile ? 'mobile' : ''}`}>
              {watchProviders.map((provider, i) => (
               <span key={i}>
                  <img
                    className="provider-logo"
                    src={"https://image.tmdb.org/t/p/w500/" + provider.logo}
                  />
               </span>
              ))}
            </div>
          )}
          {watchProviders.length === 0 && <span className="not">Not streaming yet.</span>}
        </Box>
      </Slide>
    </Modal>
  </div>
);

}
