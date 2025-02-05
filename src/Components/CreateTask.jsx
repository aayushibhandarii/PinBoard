import { useState } from "react"

export default function CreateTask(props){
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const styles = ["H1","H2","H3","H4","H5","H6","Blockquote","UL","OL"]
    function addItem(event){
        const formData = new FormData(event.currentTarget)
        const title = formData.get("item-heading")
        const desc = document.getElementById("Note").innerHTML
        props.onChange(props.id,title,desc)
        setTitle(title)
        setDesc(desc)
    }
  const [currentStyle, setCurrentStyle] = useState({});
  const [content, setContent] = useState(""); // Store editor content

  // Set formatting styles based on user selection
  const applyStyle = (styleType) => {
    if (styleType === "h1") {
      setCurrentStyle({ fontSize: "32px", fontWeight: "bold" });
    } else if (styleType === "bold") {
      setCurrentStyle({ fontWeight: "bold" });
    }
  };

  // Handle text input and apply style
  const handleInput = (e) => {
    const newSpan = document.createElement("span");
    newSpan.textContent = e.nativeEvent.data || "";
    Object.assign(newSpan.style, currentStyle);
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    range.deleteContents();
    range.insertNode(newSpan);
    selection.collapseToEnd();
  };
    return(
        <section>
                    <form onChange={addItem} className="item-add" style={{display:"flex",flexDirection:"column"}}>
                        <input type="text" name="item-heading" className="focus:border-none fw-bold display-6" placeholder="Note Title" defaultValue={props.title}/>
                        
                        <p className="text-style d-flex flex-wrap text-secondary text-black-100">
                            <span >H1</span>
                            <span>H2</span>
                            <span>H3</span>
                            <span>H4</span>
                            <span>H5</span>
                            <span>H6</span>
                            <span>Blockquote</span>
                            <span>UL</span>
                            <span>OL</span>
                            <span>Codeblock</span>
                            <span>Italic</span>
                            <span>Underline</span>
                            <span>Bold</span>
                        </p>
                        <hr></hr>
                        <div id="Note" contentEditable={true} defaultValue={props.description} placeholder="Note Description" onInput={handleInput}>n</div>
                    </form>
        </section>
    )
}