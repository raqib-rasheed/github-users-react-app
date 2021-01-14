import axios from "axios"

export default async function sortedRepo(url) {
  let bytesofLanguages = {}
  let total = 0
  if (url) {
    const result =  await axios.get(url)
    const data = result.data && result.data
    data.reduce(async (acc, crr) => {
      const url = crr.languages_url
      const { data: langObj } = await axios.get(url)
      for (let el in langObj) {
          total+=langObj[el]
        bytesofLanguages[el] ? bytesofLanguages[el] += langObj[el] : bytesofLanguages[el] = langObj[el];
      }
      if (Object.keys(bytesofLanguages).length>0) {
        total/=100
        for (let el in bytesofLanguages) {
          bytesofLanguages[el] /= total;
        }
      }
    })
  }
  return bytesofLanguages;
}