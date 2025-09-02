import api, { apiKey } from "./config";



const fetchNewestBooks=async(category, page = 1, pageSize = 10)=>{
    try{
       const startIndex = (page - 1) * pageSize;
        const res= await api.get(
      `?q=subject:${category}&maxResults=${pageSize}&startIndex=${startIndex}&orderBy=newest&key=${
        apiKey
      }`
    );
     return res.items || [];
    }
     catch (error) {
    console.error(`Error fetching books for category ${category}:`, error);
    return [];
  }
}
export default fetchNewestBooks

export const fetchBooks = async (query, type = "title",page, pageSize = 10) => {
  try {
     const startIndex = (page - 1) * pageSize;
    let q = "";
    if (type === "title") {
      q = `intitle:${query}`;
    } else if (type === "author") {
      q = `inauthor:${query}`;
    }

    const res = await api.get(
      `?q=${encodeURIComponent(q)}&maxResults=${pageSize}&startIndex=${startIndex}&key=${apiKey}`
    );
    return res.items || [];
  } catch (error) {
    console.error(`Error searching books:`, error);
    return [];
  }
};
