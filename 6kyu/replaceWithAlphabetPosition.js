function alphabetPosition(text) {
  return text.toLowerCase().replace(/[^a-z]/g, '').split('').map(e => e.charCodeAt(0) - 96).join(' ')
}
