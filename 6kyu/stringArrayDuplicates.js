function dup(s) {
return s.map(e => e.replace(/(.)\1{1,}/g, ''))
};
