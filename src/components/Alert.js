import React from 'react'

function Alert(props) {
  const capitalized = (word) =>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div style={{height: '50px'}}>
  
    {/* // if props.alert is not null use that div if its null then dont use this  --> remember this syntax or we  need to use if else to do this  */}
 { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
</div>}

</div>
  )
}

export default Alert

