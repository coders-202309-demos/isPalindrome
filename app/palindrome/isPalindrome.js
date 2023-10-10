const isPalindrome = (text) => {
  if (typeof text === "undefined" || text === "") {
    throw new Error("Text not provided");
  }

  const normalizedText = text
    .toLowerCase()
    .replace(/[.,:;()_?¿!¡-\s]/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const reversedNormalizedText = normalizedText.split("").reverse().join("");

  return reversedNormalizedText === normalizedText;
};

export default isPalindrome;
