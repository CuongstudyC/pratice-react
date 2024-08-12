import { useGlobalProductDetail } from "./GlobalProductDetail"

export default function Benefit() {
  const {refBenefit} = useGlobalProductDetail();
  return (
    <div className="benefit" ref={refBenefit}>
      <div className="benefit-content">
        <div  className="benefit-item">
          <h2>Benefits</h2>
          <div>Consectetur excepteur elit ullamco incididunt voluptate
            tempor exercitation. Lorem commodo
            ullamco quis velit officia aute laboris
            elit sit exercitation ut esse pariatur occaecat quis
          </div>
        </div>
        <div className="benefit-item">
          <span>
            Laboris consequat ad
          </span>
          <div>Consectetur excepteur
            elit ullamco incididunt voluptate
            tempor exercitation.
            Lorem commodo ullamco quis velit officia aute laboris elit sit exercitation ut esse pariatur
          </div>
        </div>

        <div className="benefit-item">
          <span>
            Duis duis do labore pariatur
          </span>

          <div>
            Ad qui aliqua nulla nostrud consectetur laboris nostrud commodo voluptate. Lorem id qui laborum aute voluptate
          </div>
        </div>


        <div className="benefit-item">
          <span>Deserunt ex </span>

          <div>
            Cupidatat culpa id do laboris nisi aliqua eu. Veniam aliqua duis Lorem adipisicing et minim velit quis
          </div>
        </div>

      </div>


      <div className="img-benefit">
        <img src="../../img/benefit.jpg" alt="" />
      </div>
    </div>
  )
}
