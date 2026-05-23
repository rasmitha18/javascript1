class Solution {
    gcd(a, b) {
        // code here
       while(b!==0) {
           let temp=b;
           b=a%b;
           a=temp;
       } 
       return a;
    }
    console.log(gcd(48,18));
}