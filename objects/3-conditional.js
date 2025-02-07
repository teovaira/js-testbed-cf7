const book = {author: {first: 'Th.', last: 'Andr.'}}

let lastname = book?.author?.last  //conditional operator το ?, ειναι συντακτικος τροπος να αναφερομαστε στα properties ενος obj για να ελεγξουμε null
//αντικαθιστα το if στην ουσια. ειναι πιο concise κωδικας. λιγοτερο φλυαρος
//μπορει το book  να ειναι null η ο author να ειναι null

console.log(lastname)

