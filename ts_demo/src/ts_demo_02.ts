export function tsdemo21() {
  interface address {
    city: string
  }
  interface user {
    name: string
    addr?: address
  }

  /* || => false, 0, "" (空字符串), null, undefined 和 NaN */
  /* ?? => null, undefined */

  const user1: user = {
    name: "Foo",
  }
  console.log("|| got:", user1.addr?.city || "unknown")
  console.log("?? got:", user1.addr?.city ?? "unknown")
  console.log()

  const user2: user = {
    name: "Bar",
    addr: {
      city: "",
    },
  }
  console.log("|| got:", user2.addr?.city || "unknown")
  console.log("?? got:", user2.addr?.city ?? "unknown")
}
