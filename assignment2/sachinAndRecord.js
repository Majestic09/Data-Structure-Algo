// Breaking a record
// Description
// You are provided the highest runs,N, ever scored in a cricket match till now, which is
// current highest record.
// You are also given current runs,M scored by Sachin (Tendulkar) in a today's match.
// If Sachin breaks current record in that match, print Broken.
// If Sachin could not break that record, print Not Yet.
// If Sachin score exactly as current highest record, print Wao.

let n = 264;
let m = 200;

function checkScore(m, n) {
    if (m > n) {
        console.log("Broken")
    } else if (m < n) {
        console.log("Not yet")
    } else {
        console.log("wao")
    }
}
checkScore(m,n)