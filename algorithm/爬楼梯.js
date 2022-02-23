var climbStairs = function(n) {
  let dp = [];
  dp[0] = 0,dp[1] = 1,dp[2] = 2;
  for(let i = 3;i <= n;i++){
      dp[i] = dp[i-2] + dp[i-1];
  }
  return dp[n];
};


// 递归超时 ，😄
// const climbStairs = function (n) {
//   if (n === 1 || n === 2) {
//     return n
//   }
//   return climbStairs(n - 2) + climbStairs(n - 1)
// }

const res = climbStairs(45)
console.log(res)
