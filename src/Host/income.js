import React from 'react'


export default function Income(){
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return(
        <div className='income-ctn'>        
        <h1 style={{fontSize:'2rem'}}>Income</h1>
        <p style={{fontSize:'1.3rem'}}>Last <span style={{textDecoration:'underline',fontWeight:'800',color:'rgb(22, 22, 22,.8)'}}>30 days</span></p>
        <h1>$2,260</h1>
        <div className='img-income-ctn' >
            <img style={{width:'100%'}} src='../images/income.png'  alt='income'/>
        </div>
        <div className='transition-ctn'>
            <h1>Your transition (3)</h1>
            <p style={{fontSize:'1.3rem'}}>Last <span style={{textDecoration:'underline',fontWeight:'800',color:'rgb(22, 22, 22,.8)'}}>30 days</span></p>
            <div className='transition'>
                {transactionsData.map(income=>{
                    return (
                        <div className='transition-income-flex' key={income.id}>
                            <h1>${income.amount}</h1>
                            <h2>{income.date}</h2>
                        </div>
                    )
                })}

            </div>
        </div>
        </div>
    )
}