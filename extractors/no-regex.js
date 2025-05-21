// extractors/no-regex.js

function extractWithoutRegex(sentence) {
  const words = sentence.split(/\s+/);

  for (let word of words) {
    // Remove non-email characters from start and end
    let cleaned = word.trim();

    // Remove leading invalid characters
    while (cleaned && !/^[\w@]/.test(cleaned)) {
      cleaned = cleaned.substring(1);
    }

    // Remove trailing invalid characters
    while (cleaned && !/[\w]$/.test(cleaned)) {
      cleaned = cleaned.slice(0, -1);
    }

    // Must contain exactly one "@"
    if ((cleaned.match(/@/g) || []).length !== 1 || !cleaned.includes("@")) {
      continue;
    }

    const [localPart, domain] = cleaned.split("@");

    // Basic validation
    if (
      localPart &&
      localPart.length > 0 &&
      domain &&
      domain.length > 4 &&
      (domain.endsWith(".com") ||
        domain.endsWith(".org") ||
        domain.endsWith(".net") ||
        domain.endsWith(".edu"))
    ) {
      return cleaned;
    }
  }

  return null;
}

module.exports = { extractWithoutRegex };
