

export interface PieceContainerInterface {
  puzzlePieces: number;
}

const PieceContainer: React.FC<PieceContainerInterface> = ({ puzzlePieces }) => {
  function start(e:React.DragEvent) {
    console.log(e);
    const event: any = e;
    event.dataTransfer.effecAllowed = "move";
    event.dataTransfer.setData("Text", event.target);
    event.target.style.opacity = "0.4";
  }
  
  function end(e:React.DragEvent) {
    const event: any = e;
    event.target.style.opacity = "";
    event.dataTransfer.clearData("Data");
  }
  
  function enter() {
      return true;
  }
  
  function over(e:React.DragEvent) {
    const event:any = e;
      if ((event.target.className == "piece-box") || (event.target.id == "pieceContainer")) {
          return false;
      } else {
          return true;
      }
  }
  
  function drop(e:React.DragEvent) {
    console.log(e)
    const event: any = e;
    event.preventDefault();
    const draggedElement = event.dataTransfer.getData("text");
    // event.target.appendChild(draggedElement);
    // verifyPuzzle();
  }
  

  return (
    <>
    <section id="pieceContainer" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}>
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece2.jpg`} alt="piece2.jpg" id="piece2" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece7.jpg`} alt="piece7.jpg" id="piece7" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece23.jpg`} alt="piece23.jpg" id="piece23" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece14.jpg`} alt="piece14.jpg" id="piece14" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece22.jpg`} alt="piece22.jpg" id="piece22" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece5.jpg`} alt="piece5.jpg" id="piece5" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece3.jpg`} alt="piece3.jpg" id="piece3" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece17.jpg`} alt="piece17.jpg" id="piece17" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece9.jpg`} alt="piece9.jpg" id="piece9" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece24.jpg`} alt="piece24.jpg" id="piece24" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece11.jpg`} alt="piece11.jpg" id="piece11" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece8.jpg`} alt="piece8.jpg" id="piece8" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece12.jpg`} alt="piece12.jpg" id="piece12" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece21.jpg`} alt="piece21.jpg" id="piece21" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece10.jpg`} alt="piece10.jpg" id="piece10" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece18.jpg`} alt="piece18.jpg" id="piece18" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece13.jpg`} alt="piece13.jpg" id="piece13" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece20.jpg`} alt="piece20.jpg" id="piece20" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece15.jpg`} alt="piece15.jpg" id="piece15" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece6.jpg`} alt="piece6.jpg" id="piece6" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece16.jpg`} alt="piece16.jpg" id="piece16" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece19.jpg`} alt="piece19.jpg" id="piece19" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece1.jpg`} alt="piece1.jpg" id="piece1" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
        <img className="piece-img" src={`./src/assets/puzzle${puzzlePieces}/piece4.jpg`} alt="piece4.jpg" id="piece4" draggable="true" onDragStart={(e)=> start(e)} onDragEnd={(e)=> end(e)} />
    </section>
    <section id="puzzle">
      <div className="piece-box" id="one" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="two" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="three" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="four" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="five" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="six" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="seven" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="eight" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="nine" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="teen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="eleven" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twelve" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="thirteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="fourteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="fiveteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="sixteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="seventeen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="eightteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="nineteen" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twenty" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twenty-one" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twenty-two" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twenty-three" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
      <div className="piece-box" id="twenty-four" onDragEnter={()=> enter()} onDragOver={(e)=> over(e)} onDrop={(e)=> drop(e)}></div>
    </section>
    </>
  )
}

export default PieceContainer