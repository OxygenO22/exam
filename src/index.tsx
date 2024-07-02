import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
type StudentType = {
  id: number;
  name: string;
};
type FriendsType = {
  [key: string]: Array<string>;
};

export const students: Array<StudentType> = [
  { id: 1, name: "Bob" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ann" },
  { id: 4, name: "Charley" },
];
export const friends: FriendsType = {
  1: ["Oliver", "Jack", "Oscar"],
  2: ["Jack", "Lewis", "Thomas"],
  3: ["William", "Michael", "Lewis"],
  4: ["Oscar", "James", "William"],
};



const MIN_COMMENT_SIZE = 5;
function LongCommentChecker() {
  const [comment, setComment] = useState<string>("");
  const isCommentReady = comment.length > MIN_COMMENT_SIZE;
  const onClickSendComment = () => {
    if (isCommentReady) {
      setComment("");
    }
  };
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = e.currentTarget.value;
    setComment(newComment);
  };

  const userName = (user = "") => {
    let userName: any = "Margo";
    userName += user;
    return user;
  };
  const student = userName() || "Victor";

  console.log(student);


  const getMutualFriends = (st_1: StudentType, st_2: StudentType) => {
    const result: Array<string> = [];
    friends[st_1.id].forEach((f) =>
      friends[st_1.id].includes(f) ? result.push(f) : null
    );
    return result;
  };

  

  return (
    <main>
      <textarea
        placeholder={"Your comment must have more than 5 charters"}
        value={comment}
        onChange={onChangeHandler}
      />
      <div>
        <button disabled={!isCommentReady} onClick={onClickSendComment}>
          Send comment
        </button>
      </div>
    </main>
  );
}
ReactDOM.render(<LongCommentChecker />, document.getElementById("root"));
