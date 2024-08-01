const input=document.getElementById('searchinput')
const searchbtn=document.getElementById('searchbtn')
const textcontent=document.querySelector('.textcontent')

const searchword=async(word)=>{
 

    
    const data= await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+word)
   
    const result= await data.json()
    console.log(result);
    worddata=result[0]
    textcontent.innerHTML=`
    <h2>word:${worddata.word}</h2>
    <p>${worddata.meanings[0].partOfSpeech
}</p>
    <p>Meaning:${worddata.meanings[0].
        definitions[0].definition}</p>
    <p>synonyms:${worddata.meanings[0].
     synonyms}</p>
    <a href=${worddata.
        sourceUrls}>Read More</a>
    `

}
searchbtn.addEventListener('click',()=>{
    word=input.value.trim()
    if(word===''){
        alert('enter the word')
    }
    else{
        searchword(word)
    }
   

})

