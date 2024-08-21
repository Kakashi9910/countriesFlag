import React, { useState } from "react"


const data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]


const ViewsTable = () => {

    const [state,setState] = useState(data)

    const sortByDate=()=>{
        // const dateSorted = data
        console.log(state)
        const dateSorted = [...data].sort((a,b)=>{
            const aDate = new Date(a.date)
             const bDate = new Date(b.date)
             if (aDate == bDate) {
                 return b.views - a.views
 
             }
             return bDate - aDate
         })

        // console.log(data)
        setState(dateSorted)
    }

    const sortByViews = () => {
        const sortedViews = [...data].sort((a,b)=>{
            if(a.views === b.views) {
                return new Date(b.date) - new Date(a.date)
            } 
            return b.views - a.views
        })
        setState(sortedViews)
    }

    return (
        <>
        <h1>Date and Views Tabl</h1>
        <div>
            <button onClick={sortByDate}>Sort by Date</button>
            <button onClick={sortByViews}>Sort by Views</button>
        </div>
        <div>
            <table>
               <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Articles</th>
               </tr>
                 {state.map((row,index)=>(
                    <tr key={index}>
                        <td>{row.date}</td>
                        <td>{row.views}</td>
                        <td>{row.article}</td>
                    </tr>   
                 ))}
            </table>
        </div>
        </>
    )
}

export default ViewsTable