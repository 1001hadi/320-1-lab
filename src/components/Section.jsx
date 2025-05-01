import imageOne from "../assets/image-1.jpg";
import imageTwo from "../assets/image-2.jpg";

const Section = () => {
  return (
    <div className="section-container">
      <div className="section">
        <h2>11/12/20</h2>
        <h1>On the Street in Brooklyn</h1>
        <img src={imageOne} alt="street in brooklyn" />
        <p>
          <strong>L</strong>orem ipsum dolor sit amet consectetur, adipisicing
          elit. Molestiae ipsam fugit accusantium omnis, id doloremque at
          quibusdam impedit dicta iure, distinctio error aperiam labore ad nobis
          nesciunt. Placeat animi sapiente magnam, eum autem recusandae odit
          ducimus veniam porro optio alias molestias, cum quae modi ex quas
          adipisci quam est tempora beatae itaque corrupti eius sunt blanditiis.
          Eaque, facilis dignissimos? Quis cupiditate unde consequuntur fuga,
          est molestias eligendi ratione esse aspernatur doloribus vel sed,
          suscipit laudantium quae optio qui. Iusto animi esse, error explicabo
          eius suscipit accusantium excepturi tenetur velit dolor, quos iste.
          Tempore adipisci excepturi explicabo, id maiores minima voluptate?
        </p>
        <p className="continue">Continues...</p>
      </div>
      <div className="section">
        <h2>11/12/20</h2>
        <h1>On the Street in Brooklyn</h1>
        <img src={imageTwo} alt="street in brooklyn" />
        <p>
          <strong>L</strong>orem ipsum dolor sit amet consectetur, adipisicing
          elit. Molestiae ipsam fugit accusantium omnis, id doloremque at
          quibusdam impedit dicta iure, distinctio error aperiam labore ad nobis
          nesciunt. Placeat animi sapiente magnam, eum autem recusandae odit
          ducimus veniam porro optio alias molestias, cum quae modi ex quas
          adipisci quam est tempora beatae itaque corrupti eius sunt blanditiis.
          Eaque, facilis dignissimos? Quis cupiditate unde consequuntur fuga,
          est molestias eligendi ratione esse aspernatur doloribus vel sed,
          suscipit laudantium quae optio qui. Iusto animi esse, error explicabo
          eius suscipit accusantium excepturi tenetur velit dolor, quos iste.
          Tempore adipisci excepturi explicabo, id maiores minima voluptate?
        </p>
        <p className="continue">Continues...</p>
        <hr />
      </div>
    </div>
  );
};

export default Section;
