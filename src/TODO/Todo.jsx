export default function Todo({text, isCompleted, isDeleted = false}) {
    
    return isDeleted ? null : <li>{text}{isCompleted && "67"}</li>
    
    
    
    // return isDeleted ? null : <li>{isCompleted ? <del>{text}</del> : text}</li>
    
    
    // return isDeleted ? null : isCompleted ? <li><del>{text}</del></li> : <li>{text}</li>
    
    
    
    
    
    // if(isDeleted) {
    //     return null
    // }
    // else {
    //     return (
    //         <li>
    //             {isCompleted ? <del>{text}</del> : text}
    //         </li>
    //     )
    // }




    // if(isDeleted) {
    //     return null
    // }
    // else if (isCompleted) {
    //     return (
    //         <li>
    //             <del>{text}</del>
    //         </li>
    //     )
    // }
    // else {
    //     return (
    //         <li>
    //             {text}
    //         </li>
    //     )
    // }
}