import Divider from "../../component/divider";
import Pokemon from "../../component/pokemon";

const Grid = () => {
  return (
    <div className="container">
      <h1>Grid</h1>
      <p>
        This is a simple example of a responsive design using CSS Grid. Resize
        the browser window to see the effect. Flex and Grid are two popular CSS
        layout properties that can be used to create responsive designs
      </p>
      <div>
        <h2>Grid Container</h2>
        <p>
          To create a grid container, you need to set the display property to
          grid.
        </p>
        <pre>
          <code>{`<div style={{ display: 'grid' }}>...</div>`}</code>
        </pre>
      </div>
      <Divider />
      <div>
        <h2>Pokemon Grid</h2>
        <Pokemon displayType={"grid"} />
      </div>
    </div>
  );
};

export default Grid;
