import { useGlobalProductDetail } from "./GlobalProductDetail"

export default function Ingredients() {
  const {refIngredient} = useGlobalProductDetail();
  return (
    <div className="ingredient" ref={refIngredient} >
        <span>Ingredients</span>
        <div className="content">
          <div className="content-item">
            <img src="/pratice-react/img/ingredient1.png" alt=""/>
            <h2>Hyaluronic acid</h2>
            <p>Elit do sit excepteur duis labore nisi sit anim adipisicing duis incididunt sit anim sint est exercitation aute consectetur irure</p>
          </div>

          <div className="content-item">
            <img src="/pratice-react/img/ingredient2.png" alt=""/>
            <h2>Green tea</h2>
            <p>Tempor adipisicing aute pariatur magna enim Lorem voluptate incididunt culpa ex veniam sunt occaecat tempor</p>
          </div>

          <div className="content-item">
            <img src="/pratice-react/img/ingredient3.jpg" alt=""/>
            <h2>Olive oil</h2>
            <p>Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis Lorem adipisicing et minim velit quis </p>
          </div>
        </div>

        <div className="ingredient-button">
            <button>See full list</button>
        </div>
    </div>
  )
}
