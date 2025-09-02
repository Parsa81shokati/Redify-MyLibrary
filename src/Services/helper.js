function truncateText(text, maxWords = 10) {
  if (!text) return "";                // اگر null یا undefined بود، رشته خالی برگردان
  if (Array.isArray(text)) {           // اگر آرایه بود، به رشته تبدیل کن
    text = text.join(" ");
  }
  text = String(text);                 // اطمینان از اینکه text رشته است
  const words = text.split(" ").filter(Boolean);  // حذف کلمات خالی
  if (words.length <= maxWords) return text;      // اگر تعداد کلمات کمتر از max بود
  return words.slice(0, maxWords).join(" ") + "..."; // برش و اضافه کردن ...
}





export default truncateText;

export const categories = [
  { id: "1", category: "Fiction" },
  { id: "2", category: "History" },
  { id: "3", category: "Science" },
  { id: "4", category: "Programming" },
];


