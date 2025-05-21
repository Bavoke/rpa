// extractors/regex.js
function extractWithEmailRegex(sentence) {
  const match = sentence.match(/\b[\w.-]+@[\w.-]+\.\w+\b/);
  return match ? match[0] : null;
}

module.exports = { extractWithEmailRegex };