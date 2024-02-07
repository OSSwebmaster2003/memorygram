import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { saveProfileInfo } from "../../actions/auth";

import CheckIcon from "@mui/icons-material/Check";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import DefaultImage from "../Profile/DefaultImage";
import Input from "./Input";
import Calendar from "./Calendar";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("profile"));

  const nameArray = user?.result?.name.split(" ") ?? [];
  const initialState = {
    username: user?.result?.username,
    firstName: nameArray[0] || "",
    lastName: nameArray[1] || "",
    gender: user?.result?.gender || "",
    birthday: user?.result?.birthday || "",
    country: user?.result?.country || "",
    city: user?.result?.city || "",
    bio: user?.result?.bio || "",
    profilePhoto: user?.result?.profilePhoto || "",
    telegram: user?.result?.telegram || "",
    instagram: user?.result?.instagram || "",
    youtube: user?.result?.youtube || "",
    twitter: user?.result?.twitter || "",
  };

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username } = useParams();
  const isSameUser = user?.result?.username === username ? true : false;

  const buttonClassName =
    "flex items-center justify-center w-16 h-12 rounded-lg text-textColor";
  const inputWrapper =
    "flex items-center justify-start w-1/2 rounded-lg bg-bgColor";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSaveInfo = async (e) => {
    e.preventDefault();

    dispatch(saveProfileInfo(form, username, navigate));
  };

  if (!isSameUser) {
    return <Navigate to="/" />;
  }
  return (
    <form className="w-full px-10 py-8 bg-mainColor" onSubmit={handleSaveInfo}>
      <section className="flex items-center justify-between gap-10 mb-8">
        <h1 className="text-3xl font-bold text-white">Profile Settings</h1>
        <button
          className="flex items-center justify-center gap-2 px-10 py-3 font-bold text-white rounded-md bg-bgColor"
          type="submit"
        >
          <CheckIcon />
          Save
        </button>
      </section>
      <section className="grid grid-cols-8 grid-rows-6 gap-4">
        <div className="col-span-4 row-span-5">
          {!user?.result?.profilePhoto ? (
            <DefaultImage />
          ) : (
            <img
              component="img"
              alt="profileImg"
              src={user?.result?.profilePhoto}
              className="w-full max-h-[500px] rounded-xl"
            />
          )}
        </div>
        <div className="flex items-end w-full col-span-4 col-start-1 row-start-6">
          <label className="block w-full rounded-md bg-bgColor">
            <span className="sr-only">Choose profile photo</span>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setForm({ ...form, profilePhoto: base64 })
              }
              className="block w-full text-sm cursor-pointer text-slate-500 file:mr-4 file:py-3 file:px-10 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-buttonColor file:text-textColor file:cursor-pointer"
            />
          </label>
        </div>
        <div className="col-span-2 col-start-5 row-start-1">
          <Input
            handleChange={handleChange}
            type="text"
            name="firstName"
            label="First Name"
            placeholder="First Name"
            value={form.firstName}
          />
        </div>
        <div className="col-span-2 col-start-7 row-start-1">
          <Input
            handleChange={handleChange}
            type="text"
            name="lastName"
            label="Last Name"
            placeholder="Last Name"
            value={form.lastName}
          />
        </div>
        <div className="col-span-2 col-start-5 row-start-2">
          {/* <Dropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            value={form.gender}
          /> */}
          <Input
            handleChange={handleChange}
            type="text"
            name="username"
            label="Username"
            placeholder="Username"
            value={form.username}
          />
        </div>
        <div className="col-span-2 col-start-7 row-start-2">
          <Calendar form={form} setForm={setForm} value={form.birthday} />
        </div>
        <div className="col-span-2 col-start-5 row-start-3">
          <Input
            handleChange={handleChange}
            type="text"
            name="country"
            label="Country"
            placeholder="Country"
            value={form.country}
          />
        </div>
        <div className="col-span-2 col-start-7 row-start-3">
          <Input
            type="text"
            name="city"
            label="City"
            placeholder="City"
            handleChange={handleChange}
            value={form.city}
          />
        </div>
        <div className="col-span-4 col-start-5 row-span-3 row-start-4">
          <textarea
            className="w-full h-full py-3 border-none rounded-md outline-none px-7 bg-bgColor text-textColor placeholder:text-placeholderColor"
            name="bio"
            id="bio"
            rows="auto"
            label="Bio"
            placeholder="about yourself"
            onChange={handleChange}
            value={form.bio}
          />
        </div>
      </section>
      <section className="flex flex-col items-start justify-start gap-2 mt-8">
        <div className={inputWrapper}>
          <button className={twMerge(buttonClassName, "bg-blue-500")}>
            <TelegramIcon />
          </button>
          <Input
            handleChange={handleChange}
            type="text"
            name="telegram"
            label="Telegram Account"
            placeholder="Telegram Account"
            value={form.telegram}
          />
        </div>
        <div className={inputWrapper}>
          <button className={twMerge(buttonClassName, "bg-red-600")}>
            <YouTubeIcon />
          </button>
          <Input
            handleChange={handleChange}
            half
            type="text"
            name="youtube"
            label="Youtube Account"
            placeholder="Youtube Account"
            value={form.youtube}
          />
        </div>
        <div className={inputWrapper}>
          <button className={twMerge(buttonClassName, "bg-pink-600")}>
            <InstagramIcon />
          </button>
          <Input
            handleChange={handleChange}
            half
            type="text"
            name="instagram"
            label="Instagram Account"
            placeholder="Instagram Account"
            value={form.instagram}
          />
        </div>
        <div className={inputWrapper}>
          <button className={twMerge(buttonClassName, "bg-blue-400")}>
            <TwitterIcon />
          </button>
          <Input
            handleChange={handleChange}
            half
            type="text"
            name="twitter"
            label="Twitter Account"
            placeholder="Twitter Account"
            value={form.twitter}
          />
        </div>
      </section>
    </form>
  );
};

export default Settings;
