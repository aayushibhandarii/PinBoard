export default function StyleComponent(props){

    return(
        <span onClick={()=>props.applyStyle(props.name)}>
            {props.name}
        </span>
    )
}