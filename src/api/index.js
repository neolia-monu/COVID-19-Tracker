import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { res } = await axios.get(`${url}/daily`);
    const resA = await axios.get(`${url}/daily`);

    console.log("Res: ", resA);
    console.log("ResD: ", res);

    return res;
  } catch (error) {}
};
