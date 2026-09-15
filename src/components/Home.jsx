import { useState } from "react";
import Footer from "./UI/Footer";
import Navbar from "./UI/Navbar";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import CollectionForm from "./CollectionForm";

export default function Home(){
    const [content, setContent] = useState('main')

    function handleContent(newContentState){
        setContent(newContentState);
    }

    let pageContent;
    if(content == 'main') {
        pageContent = <>
            <TodoList contentChanger={handleContent} />
        </>
    }
    if(content == 'collectionForm'){
        pageContent = <>
            <CollectionForm contentChanger={handleContent} />
        </>
    }


    return(
        <>
            <Navbar  
                content={pageContent}
                contentChanger={handleContent}
            />

            <Footer />
        </>
    )
}