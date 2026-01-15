import "./loader.css";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="cssload-box-loading"></div>
    </div>
  );
}
