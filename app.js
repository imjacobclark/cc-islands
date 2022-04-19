module.exports = d => {  
    g = []
    prev = null

    poa = (o, a) => a ? g[g.length - 1].push(o) : g.push([o])

    deduction = (i, j, a) => {    
        inr =  i < d.length - 1 && d[i+1][j] === 1
        ipr = i !== 0 && d[i-1][j] === 1

        if(ipr && inr){
            poa({v:1, a: 2}, a)
        }else if(inr || ipr){
            poa({v:1, a: 1}, a)
        }else{
            poa({v:1, a: 0}, a)
        }
    }

    for(i = 0; i < d.length; i++){
        for(j = 0; j < d[i].length; j++){
            if(d[i][j] === 1){
                deduction(i, j, prev === 1)
                prev = 1
                continue
            }else{
                prev = 0
            }
        }
        prev = 0
    }

    f = e => g.map(g => g.reduce((p, c) => p+c[e], 0))
    p = f('v').map(x => 4+(x-1)*2)
    console.log(p.map((t,i)=>t-f('a')[i]).reduce((p, n) => p+n, 0))
}

