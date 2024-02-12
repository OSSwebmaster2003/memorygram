import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";

const TagsInput = ({ tags, setTags }) => {
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  const addTag = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="w-full h-full px-4 py-2 rounded-md bg-bgColor">
      <div className="flex flex-wrap items-center justify-start gap-2 text-textColor">
        <ul className="flex items-center justify-start gap-[2px]">
          {tags.map((tag, index) => (
            <li key={index} className="px-2 rounded-sm bg-textColor">
              <div
                onClick={() => removeTag(index)}
                className="text-sm cursor-pointer  chip-input"
              >
                {tag} <CancelIcon fontSize="15px" />
              </div>
            </li>
          ))}
        </ul>
        <input
          className="h-full px-1 outline-none bg-inherit w-[120px]"
          type="text"
          placeholder="Press enter to add tags"
          onKeyUp={addTag}
        />
      </div>
    </div>
  );
};

export default TagsInput;
