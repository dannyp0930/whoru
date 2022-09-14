import createInstance from "./index";

export async function fetchAge(name: string) {
  try {
    const res = await createInstance().get(`https://api.agify.io/?name=${name}`);
    return res.data.age;
  } catch (error) {
    console.log(error);
  }
}