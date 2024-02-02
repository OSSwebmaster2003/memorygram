import { Box } from "@mui/material";
import React from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { socialMediaWrapper } from "./styles";

const SocialMedia = ({ userInfo }) => {
  const social_media_links = [
    {
      label: <TelegramIcon />,
      link: userInfo?.telegram,
    },
    {
      label: <InstagramIcon />,
      link: userInfo?.instagram,
    },
    {
      label: <TwitterIcon />,
      link: userInfo?.twitter,
    },
    {
      label: <YouTubeIcon />,
      link: userInfo?.youtube,
    },
  ];
  return (
    <Box component="div" sx={socialMediaWrapper}>
      {social_media_links.map(
        (link) =>
          link.link && (
            <Box
              key={link.link}
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {link.label}
              </Box>
            </Box>
          )
      )}
    </Box>
  );
};

export default SocialMedia;
