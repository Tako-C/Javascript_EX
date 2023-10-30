const names = ["John Do","Emily Wong","Xi Zhung"]
// expect JD EW XZ

const result = names.map((name)=>{
    const Crk = name.split(" ")
    return Crk.map((ch)=>ch.charAt(0)).join("")
})
console.log(result.join(" "))