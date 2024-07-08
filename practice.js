function solution(n) {
    let num = 0;
    let result=1;
    while(true){
        if(result>n){
            break;
        }
        result=1;
        num++;
        for(let i=1;i<=num;i++){
            result*=i;
        }
    }
    return num-1;

}


console.log(solution(3628800));
console.log(solution(7));

