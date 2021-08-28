import React from "react";

import { ListView } from "./components/ListView.jsx";
import { GridView } from "./components/GridView.jsx";
import { usersList as users } from "../../data/usersList.js";

export const UsersDisplay = ({ isListView }) => {
  return (
    <div className="usersWrapper">
      {isListView ? <ListView users={users} /> : <GridView users={users} />}
    </div>
  );
};
