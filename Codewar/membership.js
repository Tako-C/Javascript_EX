class Membership{
    static autoId = 1
    constructor(membername){
        this.memberId = Membership.autoId++
        this.membername = membername
    }

}
function findMemberId(Id) {
    const member = MemberAll.find((member)=>member.memberId === Id)
   if (member) {
     return MemberAll.indexOf(member)
   }
   return -1
 }

 function findMemberName(Name) {
  const member = MemberAll.find((member)=> member.membername.toUpperCase() === Name.toUpperCase())
  if (member) {
    return MemberAll.indexOf(member)
    
  } else{
  const newMember = new Membership(Name)
  MemberAll.push(newMember)
  return MemberAll.indexOf(newMember)
  }
 }

let MemberAll = []
MemberAll.push(new Membership("tako"))
MemberAll.push(new Membership("yaki"))

// console.log((m1));
// console.log((m2));
console.log(MemberAll);
console.log(findMemberId(2));
console.log(findMemberName("tAko"));

