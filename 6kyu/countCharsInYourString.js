function count (string) {  
   return string.split('').reduce((acc, v) => acc[v] ? {...acc, [v]: acc[v] + 1} : {...acc, [v]: 1} , {});
}
