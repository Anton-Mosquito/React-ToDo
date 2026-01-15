import "./loaderText.css";

const letters = [
  {
    letter: "L",
    idLetter: "inTurnFadingTextG_1",
  },
  {
    letter: "o",
    idLetter: "inTurnFadingTextG_2",
  },
  {
    letter: "a",
    idLetter: "inTurnFadingTextG_3",
  },
  {
    letter: "d",
    idLetter: "inTurnFadingTextG_4",
  },
  {
    letter: "i",
    idLetter: "inTurnFadingTextG_5",
  },
  {
    letter: "n",
    idLetter: "inTurnFadingTextG_6",
  },
  {
    letter: "g",
    idLetter: "inTurnFadingTextG_7",
  },
];

export default function TextLoader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: ".5rem",
      }}
    >
      <div id="inTurnFadingTextG">
        {letters.map((item, index) => (
          <div id={item.idLetter} className="inTurnFadingTextG" key={index}>
            {item.letter}
          </div>
        ))}
      </div>
    </div>
  );
}
