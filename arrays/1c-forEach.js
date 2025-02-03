const arr = [1, 2, 3]
arr.forEach(el => console.log(el))  //παντα η forEach με fat arrow action. υποκρυπτει μεσα της ενα iteration

arr.forEach(function(el){  //ειναι το ιδιο πραμακαι το αυτο με το απο πανω αλλα πιο verbose
  console.log(el)
})