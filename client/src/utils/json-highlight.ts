/**
 * Simple JSON syntax highlighter for code display
 */
const JSON_HIGHLIGHT_REGEX = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g;

export function highlightJSON(json: string): string {
  return json.replace(JSON_HIGHLIGHT_REGEX, (match) => {
    let cls = "text-gray-400";
    if (/^"/.test(match)) {
      cls = /:$/.test(match) ? "text-blue-400" : "text-green-400";
    } else if (/true|false/.test(match)) {
      cls = "text-yellow-400";
    } else if (/null/.test(match)) {
      cls = "text-red-400";
    } else {
      cls = "text-purple-400";
    }
    return `<span class="${cls}">${match}</span>`;
  });
}
