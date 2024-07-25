import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

function MyComponent() {
  const memoizedForgotPassword = createSelector(
    (state: any) => state.users,
    (data) => {
      return { data };
    }
  );

  const { data } = useSelector(memoizedForgotPassword);

  console.log(data, "hello");

  const renderUsers = () => {
    if (!data) return;

    return data.users.map((user: any, index: number) => {
      return (
        <div key={index}>
          <p>
            Company name: {user.name} {user.lastName}
          </p>
          <p>Company address: {user.address}</p>
          <a href={user.website} target="_blank" style={{color: "#fff"}}>
            Visit our website here!
          </a>
        </div>
      );
    });
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        alignContent: "center",
        fontSize: "30px",
        background: "#053161",
        color: "#FFF",
      }}
    >
      {renderUsers()}
    </div>
  );
}

export default MyComponent;
