
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import api from "../../../http/api";
import { selectAuth } from "../../../store/selector/auth";



const TapContentMonth = () => {
    const authState = useAppSelector(selectAuth);

    
    
    const [month, setMonth] = useState([])

    const MonthStatistic = month.filter(el => {
        return el.uniqueId === authState.profile.uniqueId
    })
    const monthTotal = MonthStatistic.map(el => {
        return el.total_count ? el.total_count : 0
    })


    useEffect(() => {
        api.get('users/save-contact/counts/?count_filter_period=month').then(({ data }) => {
            setMonth(data)
        })
    },[])
return (
    <>
    <div className="red" style={{
                    width: ' 350px',
                    height: '180px',
                    background: '#262E33',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '0 auto',
                    textAlign: 'center',
                    fontSize:'45px',
                    fontWeight:400,
                    color:'#fff',
                    fontFamily:'Montserrat',
                }}>{monthTotal}<h1 style={{
                    color:'#fff',
                    fontSize:'14px',
                    fontWeight:400,
                    paddingLeft:'15px'
                }}>people saved you</h1></div>
    </>
)
}
export default TapContentMonth;