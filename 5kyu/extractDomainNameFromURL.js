function domainName(url){
  return url.match(/(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9-]+)(\.\w{2,3})(\.\w{2,3})?/m)[3]
}
