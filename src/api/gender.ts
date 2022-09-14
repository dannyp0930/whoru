import createInstance from "./index";

export async function fetchGender(name: string) {
  try {
    const res = await createInstance().get(`https://api.genderize.io/?name=${name}`);
    return res.data.gender;
  } catch (error) {
    console.log(error);
  }
}