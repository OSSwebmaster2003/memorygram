import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { visitProfile } from "../../actions/auth";

import { CircularProgress } from "@mui/material";

import SocialMedia from "./SocialMedia";
import DefaultImage from "./DefaultImage";
import SettingsIcon from "@mui/icons-material/Settings";

const Profile = () => {
  const { authData, isLoading } = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("profile"));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const userInfo = authData && authData[0];

  const isOwnerOfProfile = user?.result?.username === username ? true : false;

  const tableRowWrapper =
    "flex items-center justify-start gap-[15px] mb-[10px]";
  const dialogue = "w-[100px] text-textColor text-lg font-semibold";
  const answerDialogue = "text-textYellow text-lg";

  useEffect(() => {
    dispatch(visitProfile(username));
    navigate(`/${username}`);
  }, [username, dispatch, navigate]);

  if (isLoading) {
    return <CircularProgress />;
  }
  if (authData?.length === 0) {
    return <h1>User not found </h1>;
  }

  return (
    <div className="relative flex flex-col items-start justify-start gap-10 p-8 rounded-lg bg-mainColor">
      {isOwnerOfProfile && (
        <button
          className="w-[150px] h-[42px] flex items-center justify-center gap-[2px] text-textColor text-xs font-medium bg-bgColor rounded-md absolute top-[10px] right-[10px]"
          onClick={() => navigate(`/${username}/settings`)}
        >
          <SettingsIcon />
          settings
        </button>
      )}
      <div className="grid grid-cols-12 grid-rows-4 gap-8">
        {userInfo?.profilePhoto ? (
          <img
            component="img"
            alt="profileImg"
            src={userInfo?.profilePhoto}
            className="w-full h-auto col-span-4 row-span-4 rounded-lg"
          />
        ) : (
          <DefaultImage />
        )}
        <div className="flex flex-col items-start justify-center w-full col-span-8 row-span-4 gap-4 col-start-500">
          <h1 className="text-textColor font-extrabold text-[50px]">
            {`${userInfo?.firstName} ${userInfo?.lastName}`}
          </h1>
          <SocialMedia userInfo={userInfo} />
          {userInfo?.bio && (
            <h5 className="mt-5 text-placeholderColor font-[17px] mb-5">
              {userInfo?.bio}
            </h5>
          )}
          {userInfo?.username && (
            <div className={tableRowWrapper}>
              <div className={dialogue}>Username:</div>
              <div className={answerDialogue}>{userInfo?.username}</div>
            </div>
          )}
          {userInfo?.birthday && (
            <div className={tableRowWrapper}>
              <div className={dialogue}>Birthday:</div>
              <div className={answerDialogue}>
                {userInfo?.birthday.substring(0, 10)}
              </div>
            </div>
          )}
          {userInfo?.country && (
            <div className={tableRowWrapper}>
              <div className={dialogue}>Country:</div>
              <div className={answerDialogue}>{userInfo.country}</div>
            </div>
          )}
          {userInfo?.city && (
            <div className={tableRowWrapper}>
              <div className={dialogue}>City:</div>
              <div className={answerDialogue}>{userInfo?.city}</div>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center w-full justify-between gap-[50px]">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="text-4xl font-medium text-textColor">15</h2>
          <h3 className="mt-[-10px] text-xl font-bold text-textGreen tracking-widest">
            Posts
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <h2 className="text-4xl font-medium text-textColor">3</h2>
          <h3 className="mt-[-10px] text-xl font-bold text-textGreen tracking-widest">
            Likes
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
