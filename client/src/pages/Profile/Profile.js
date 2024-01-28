import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { visitProfile } from "../../actions/auth";

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import {
  wrapper,
  topPart,
  profileImg,
  infoDivWrapper,
  name,
  bio,
  tableRowWrapper,
  dialogue,
  answerDialogue,
  bottomPart,
  editBtn,
} from "./styles";

import SocialMedia from "./SocialMedia";
import DefaultImage from "./DefaultImage";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = ({ user }) => {
  const { authData, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const userInfo = authData && authData[0];

  const isOwnerOfProfile = user?.result?.username === username ? true : false;

  useEffect(() => {
    dispatch(visitProfile(username));
  }, [dispatch, username]);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (authData?.length === 0) {
    return <h1>User not found </h1>;
  }

  return (
    <Box sx={wrapper}>
      {isOwnerOfProfile && (
        <Button sx={editBtn} onClick={() => navigate(`/${username}/settings`)}>
          <SettingsIcon />
          settings
        </Button>
      )}
      <Box sx={topPart}>
        {userInfo?.profileImg ? (
          <Box
            component="img"
            alt="profileImg"
            src={userInfo?.profileImg}
            sx={profileImg}
          />
        ) : (
          <DefaultImage />
        )}
        <Box component="div" sx={infoDivWrapper}>
          <Typography sx={name} variant="h1">
            {userInfo?.name}
          </Typography>
          <SocialMedia userInfo={userInfo} />
          {userInfo?.bio && (
            <Typography variant="body2" sx={bio}>
              {userInfo?.bio}
            </Typography>
          )}
          {userInfo?.gender && (
            <Box sx={tableRowWrapper}>
              <Box sx={dialogue}>Gender:</Box>
              <Box sx={answerDialogue}>{userInfo.gender}</Box>
            </Box>
          )}
          {userInfo?.birthday && (
            <Box sx={tableRowWrapper}>
              <Box sx={dialogue}>Birthday:</Box>
              <Box sx={answerDialogue}>{userInfo.birthday}</Box>
            </Box>
          )}
          {userInfo?.country && (
            <Box sx={tableRowWrapper}>
              <Box sx={dialogue}>Country:</Box>
              <Box sx={answerDialogue}>{userInfo.country}</Box>
            </Box>
          )}
          {userInfo?.city && (
            <Box sx={tableRowWrapper}>
              <Box sx={dialogue}>City:</Box>
              <Box sx={answerDialogue}>{userInfo.city}</Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box sx={bottomPart}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontSize: "35px", fontWeight: "500", color: "#FFF" }}
          >
            15
          </Typography>
          <Typography
            sx={{
              color: "#323A55",
              marginTop: "-15px",
              fontWeight: "700",
              fontSize: "21px",
            }}
          >
            Posts
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{ fontSize: "35px", fontWeight: "500", color: "#FFF" }}
          >
            5
          </Typography>
          <Typography
            sx={{
              color: "#323A55",
              marginTop: "-15px",
              fontWeight: "700",
              fontSize: "21px",
            }}
          >
            Liked Posts
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
