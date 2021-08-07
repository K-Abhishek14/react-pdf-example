import React from 'react'
const steps = [
    { label: "LEAD GENERATION", status: "LEAD_GENERATION", changeDate: "" },
    { label: "LEAD APPROVAL", status: "LEAD_APPROVAL", changeDate: "" },
    { label: "OPPORTUNITY CREATION", status: "OPPORTUNITY_CREATION", changeDate: "" },
    { label: "PRODUCT CONFIGURATION", status: "PRODUCT_CONFIGURATION", changeDate: "" },
    { label: "QUOTE GENERATE", status: "QUOTE_GENERATE", changeDate: "" },
    { label: "CREATE CONTRACT ", status: "CREATE_CONTRACT", changeDate: "" },
    { label: "APPROVAL", status: "APPROVAL", changeDate: "" },
    { label: "CONTRACT SIGN OFF", status: "CONTRACT_SIGN_OFF", changeDate: "" },
    { label: "CUSTOMER ACCEPTANCE", status: "CUSTOMER_ACCEPTANCE", changeDate: "" },
    { label: "ONBOARDING", status: "ONBOARDING", changeDate: "" },
  ]
  
  const dateArr1 = [
    { status: "LEAD_APPROVAL", changeDate: "2021-02-19T08:40:39.299Z" },
    { status: "OPPORTUNITY_CREATION", changeDate: "2021-02-19T08:47:20.950Z" },
  ]
  
  const dateArr2 = [
    { status: "QUOTE_GENERATE", changeDate: "2021-02-19T08:47:37.711Z" },
    { status: "CREATE_CONTRACT", changeDate: "2021-02-19T08:47:46.534Z" },
    { status: "APPROVAL", changeDate: "2021-02-19T08:48:16.568Z" },
    { status: "SHARE", changeDate: "2021-02-19T08:48:23.507Z" },
    { status: "CONTRACT_SIGN_OFF", changeDate: "2021-02-19T08:48:28.288Z" },
    { status: "CUSTOMER_ACCEPTANCE", changeDate: "2021-02-19T08:49:03.579Z" }
  ]
  
  const sla = [{ escalate: true, remainingTime: "03:07:23", status: "CUSTOMER_ACCEPTANCE" }]
const Sla = () => {

    React.useEffect(() => {
        console.log("toplevel Status", dateArr1);
        console.log("Opp level Status", dateArr2);
        var finalChangeDate = [...dateArr1, ...dateArr2];
        console.log("finalChangeDate", finalChangeDate);
        let d = [...steps]
        let newArr = []
        d.map((item, index) => {
          finalChangeDate.map((key, value) => {
            if (item.status === key.status) {
              let obj = Object.assign({}, item, { changeDate: key.changeDate })
              newArr.push(obj)
              return obj
            } else {
              return item
            }
          })
        })
        console.log("d", d);
        let mergedArr = [...d, ...newArr]
        console.log("mergedArr", mergedArr);
        let data = [
          ...new Map(mergedArr.map(item => [item.status, item])).values()
        ]
        console.log("data", data);
    
    
       let abc =  data.map((item, index) => {
          sla.map((key, value) => {
            if (item.status === key.status) {
              // let obj = Object.assign({}, item, { changeDate: key.remainingTime })
              // console.log("Sla TIME OBJ", obj)
              // data.push(obj);
              return{
                
                ...item,
                changeDate : key.remainingTime,
              }
            }
            else {
              return item
            }
          })
        })
        console.log("ABC",abc);
        console.log("data AA", data);
      }, [])
    
      React.useEffect(() => {
        let str = "01:20:23";
        var res = str.split(":");
        console.log("res", res);
        console.log("res[0]", res[0] + "days")
        console.log("res[1]", res[1] + "hours")
        console.log("res[2]", res[2])
    
      })
    return (
        <div>
            
        </div>
    )
}

export default Sla


 // for (var i = 0; i < steps.length; i++) {
      //   for (var j = 0; j < dateArr1.length; j++) {
      //     if (steps[i].status === finalChangeDate[j].status) {
      //       let obj = Object.assign({}, steps[i], { changeDate: finalChangeDate[j].changeDate })
      //       temp.push(obj)
      //     }
      //   }
      // }