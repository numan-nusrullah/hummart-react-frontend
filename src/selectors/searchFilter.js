


export default (data, { text }) => {
  if(text!==''){
  return data.filter((data) => {
    const textMatch = data.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  }).sort() }else{
    return [];
  }
};
