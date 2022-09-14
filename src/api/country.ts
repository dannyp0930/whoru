import createInstance from "./index";

export async function fetchCountry(name: string) {
  try {
    const res = await createInstance().get(`https://api.nationalize.io/?name=${name}`);
    return res.data.country;
  } catch (error) {
    console.log(error);
  }
}