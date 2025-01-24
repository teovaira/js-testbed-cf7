const user = {
  firstname: 'George',
  lastname: 'D.',
  getFirstname: function() {
    return this.firstname
  },
  getFullname() {                                                    //consice syntax
    return `${this.firstname} and ${this.lastname} as Fullname.`
  }
}

console.log(user.getFullname())
console.log(user.getFirstname)
console.log(user.getFirstname())