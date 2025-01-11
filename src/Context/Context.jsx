import { createContext, useState } from "react";
import run from "../Comfi/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const[input,setInput] = useState("");
    const[recentpro,setRecentpro] = useState("");
    const[previous,setPrevious] = useState([]);
    const[showresult,setShowresult] =useState(false);
    const[loadinng,setLoading] =useState(false);
    const[resultdata,setResultdata]= useState(""); 

    const delaypara = (index,nextword)=>{
        setTimeout(function() {
            setResultdata(prev=>prev+nextword);
        }, 75*index);
    }
    const newChat=()=>{
        setLoading(false)
        setShowresult(false)
    }



    const onset = async (prompt) => {
        setResultdata("")
        setLoading(true)
        setShowresult(true)
        let response;
        if(prompt!==undefined){
            response=await run(prompt);
            setRecentpro(prompt);
        }
        else{
            setPrevious(prev=>[...prev,input])
            setRecentpro(input)
            response= await run(input)
        }
    
        let responseArray = response.split("**");
        let newArray = "";
        for(let i=0;i<responseArray.length;i++){
            if(i===0 || i%2 !==1){
                newArray+=responseArray[i];
            }
            else{
                newArray+="<b>"+responseArray[i]+"</b>";
            }
        }
        let newresponse=newArray.split("*").join("</b>")
        let newresponsearray=newresponse.split(" ");
        for(let i=0;i<newresponsearray.length;i++){
            const nextword= newresponsearray[i];
            delaypara(i,nextword+" ");
        }
        setLoading(false)
        setInput("")

        await run(input);
    };
    /*onset("what is recat js");*/

    const ContextValue = {
        previous,
        setPrevious,
        onset,
        setRecentpro,
        recentpro,
        showresult,
        loadinng,
        resultdata,
        input,
        setInput,
        newChat,
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
