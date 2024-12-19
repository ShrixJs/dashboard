import axios from 'axios';

export const fetchUsers = async (amount) => {
  try {
    const response = await axios.get(`https://randomuser.me/api/?results=${amount}`);

    const filteredDetails =  response.data.results.map((result) => ({
      name: `${result.name.first} ${result.name.last}`,
      icon: result.picture.thumbnail,
      registered: result.registered.date,
     }));

    return filteredDetails;
  } catch (e) {
    console.log(e);
  }
};