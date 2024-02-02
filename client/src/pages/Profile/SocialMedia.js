import React from "react";

import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
    <div className="flex items-center justify-start gap-4 mt-4">
      {social_media_links.map(
        (link) =>
          link.link && (
            <a
              key={link.link}
              href={link.link}
              target="_blank"
              alt="social-media-link"
              className="w-[40px] h-[40px] rounded-full cursor-pointer bg-bgColor flex items-center justify-center border border-2 border-textGreen"
            >
              <div className="flex items-center justify-center text-textColor">
                {link.label}
              </div>
            </a>
          )
      )}
    </div>
  );
};

export default SocialMedia;
