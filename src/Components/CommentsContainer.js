import React from "react";
import { USER_ICON } from "../Utils/constants";
import { useSelector } from "react-redux";

const commentsData = [
  {
    name: "Abhi",
    text: "Hi I am Abhilash.",
    replies: [
      {
        name: "Abhi",
        text: "Hi ",
        replies: [
          { name: "Abhi", text: "Hi ", replies: [] },
          { name: "Abhi", text: "Hi ", replies: [] },
        ],
      },
    ],
  },
  { name: "Abhi", text: "Hi ", replies: [] },
  {
    name: "Abhi",
    text: "Hi ",
    replies: [{ name: "Abhi", text: "Hi ", replies: [] }],
  },
  {
    name: "Abhi",
    text: "Hi ",
    replies: [
      {
        name: "Abhi",
        text: "Hi ",
        replies: [
          {
            name: "Abhi",
            text: "Hi ",
            replies: [{ name: "Abhi", text: "Hi ", replies: [] }],
          },
        ],
      },
    ],
  },
  { name: "Abhi", text: "Hi ", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text} = data;
  const darkMode= useSelector(store=>store.app.darkMode)
  return (
    <div className={`${darkMode? "dark:bg-gray-700":" bg-gray-200 "} flex   w-full my-1 p-2 rounded-xl`}>
      <div>
        <img className="w-16 h-10" src={USER_ICON} alt="user" />
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold">{name} </h4>
        <h4>{text} </h4>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((com, index) => (
        <div key={index}>
          <Comment data={com} />
          <div className="ml-5 pl-5 border border-l-black border-r-transparent">
            <CommentsList comments={com.replies}/>
          </div>
        </div>
      ))}
    </div>
  );
};

const CommentsContainer = () => {

  
  return (
    <div>
      <h2 className="text-lg font-bold py-4">Comments:</h2>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
