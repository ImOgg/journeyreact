import React from "react";
import P4 from "../images/p10.jpg";
const Product = () => {


  return (
    <div>
      <div className="ProductContainer">
        <div className="product">
          <div className="topimg">
            <img src={P4} alt="" />
          </div>
          <div className="productname">
            <h3>南怡島＆小法國村＆晨靜樹木園＆鐵道自行車＆草泥馬樂園之旅</h3>
            <div className="hashtag">
              <span>南怡島</span>
              <span>熱賣中</span>
              <span>中文/英語</span>
              <span>湊團導覽</span>
              <span>自行與導遊會合</span>
            </div>
          </div>
          <div className="bottominfo">
            <div className="left info">
              <p>
                從首爾出發，輕鬆前往南怡島、小法國村、晨靜樹木園等景點，體驗江村鐵道自行車，漫步於景致迷人的南怡島，欣賞世界聞名的水杉大道樹林風光，走訪晨靜樹木園內20多個不同景點，花草樹木浪漫之美盡收眼底。
              </p>
              <div className="seemore">點我看更多</div>
            </div>
            <div className="right info">
              <div>
                <h3>TWD 1,406</h3>
                <button>選擇此行程</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
