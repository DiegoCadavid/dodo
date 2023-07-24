import axios from "axios";



const logout = async () => {
  if (window === undefined) {
    throw new Error("Only Client side function");
  }

  

  try {
    await axios("/api/auth/logout");

  } catch (error) {}
};

export default logout;
