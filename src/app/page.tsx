"use server";

import Home from "./page.client";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const getAllUsers = async () => {
  try {
    const data = await fetch(`${API_URL}/users`);
    const testData = await data.json();
    console.log("Data fetched from API:", testData);
    return testData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// const createNewUser = async () => {
//   const user = {
//     uuid: "d3a3db5a-2e4e-4a5c-b9e9-8c7841c18c43",
//     name: "Asher",
//     email: "emailaddress",
//     password: "pwd",
//   };

//   try {
//     const data = await fetch(`${API_URL}/users`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });

//     return data;
//   } catch (error) {
//     console.error("Error creating user:", error);
//   }
// };

export default async function Index() {
  const getUsers = await getAllUsers();
  // const createUser = await createNewUser();

  return (
    <div>
      <Home fetchData={getUsers.message} />;
    </div>
  );
}
