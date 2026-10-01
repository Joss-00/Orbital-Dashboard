export const dateToString = (date:Date):string => {
    return date.toISOString().split("T")[0];
}

export const numberToDate = (number:number):string => {
    const today = new Date();
    if (number === 0){
        return dateToString(today)
    } else {
        return dateToString(new Date(today.setDate(today.getDate() - number)))
    }
}

export const numberToApodDate = (number: number): string => {
  const today = new Date();

  today.setDate(today.getDate() - number);

  const year = today.getFullYear().toString().slice(-2);
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
};

export const stripHtml = (html: string): string => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  return (doc.body.textContent || "")
    .replace(/^Explanation:\s*/i, "")
    .trim();
};