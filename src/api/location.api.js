import axios from "axios";

async function getLocation() {
  try {
    const locationData = await axios.get("http://localhost:4000/location");

    return locationData;
  } catch (err) {
    console.log(err);
  }
}

export default getLocation;
