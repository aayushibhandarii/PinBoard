import CreateTask from "./CreateTask"
import "./ToDoList.css"
import { useState } from "react"
import { nanoid } from 'nanoid'
export default function ToDoList(){
    const [notes,setNotes] = useState([{id:"1234",title:"CSE123",description:"HELLO HOW ARE YOU"},{id:"14",title:"CSE12",description:"HOW ARE YOU"}])
    const [activeButton,setActiveButton] = notes.length>0?useState(notes[0].id):useState(null); 
    function addTask(){
        const id = nanoid()
        setActiveButton(id)
        setNotes((prevNotes)=>{
            return (
                [
                    ...prevNotes,
                    {
                        id:id,
                        title:"",
                        description:"",
                        onChange : handleNoteChange
                    }
                ]
            )
        })
    }
    function changeActive(id){
        setActiveButton(id)
    }
    const buttonEle = notes.map((note)=>{
        return <>
            <button 
            key={note.id}
            className={activeButton == note.id?"active" : "closed"}
            onClick={()=>changeActive(note.id)}
            >
                {note.title}
            </button>
            <hr></hr>
        </>
    })
    
    const notesElement = notes.map((note)=>{
        if(note.id == activeButton){
            return <CreateTask key={note.id} id={note.id} title={note.title} description={note.description} onChange={handleNoteChange} />
        }
        
    })
    function handleNoteChange(id,newTitle,newDescription){
        setNotes((prevNotes)=>{
            const newNotes = prevNotes.map((note)=>{
                if(note.id == id){
                    return {
                        ...note,
                        title:newTitle,
                        description : newDescription
                    }
                }else{
                    return note
                }
            })
            return newNotes
        })
    }
    return(
        <>
            <h1>
                TO-LIST
            </h1>
            <main className="toDoList">
                <section className="list-side">
                    {/* <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked />
                        <label class="btn btn-outline-danger" for="vbtn-radio1">Radio 1</label>
                        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio2" autocomplete="off" />
                        <label class="btn btn-outline-danger" for="vbtn-radio2">Radio 2</label>
                        <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio3" autocomplete="off" />
                        <label class="btn btn-outline-danger" for="vbtn-radio3">Radio 3</label>
                    </div> */}
                    <div className="list-item">
                        {buttonEle}
                    </div>
                    <button style={{border:"none", backgroundColor:"white"}} onClick={()=>addTask()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
                        </svg>
                        Add a new note
                    </button>
                </section>
                <div className="border-start border-2 border-medium" style={{ height: "90vh" }}></div>
                {notesElement}
            </main>
            
        </>
    )
}